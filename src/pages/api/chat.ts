import type { APIRoute } from 'astro';
import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { getRelevantContext, generateSystemPrompt } from '../../lib/context';
import { validateInput, validateResponse, getRejectionMessage, getGuardrailSystemPrompt } from '../../lib/guardrails';

const GROQ_API_KEY = import.meta.env.GROQ_API_KEY || process.env.GROQ_API_KEY;
const POSTHOG_API_KEY = import.meta.env.POSTHOG_API_KEY || process.env.POSTHOG_API_KEY;

// PostHog logging function
async function logToPostHog(event: string, properties: any) {
  if (!POSTHOG_API_KEY) {
    return;
  }

  const payload = {
    api_key: POSTHOG_API_KEY,
    event,
    properties: {
      ...properties,
      timestamp: new Date().toISOString(),
    },
    distinct_id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // Generate unique user ID
  };

  try {
    await fetch('https://eu.i.posthog.com/capture/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Failed to log to PostHog:', error);
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, conversation = [], model = 'moonshotai/kimi-k2-instruct-0905' } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Log user message to PostHog
    await logToPostHog('chat_message_sent', {
      message: message,
      message_length: message.length,
      conversation_length: conversation.length,
      model: model,
      user_agent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    // Apply LLM-powered input guardrails
    const inputValidation = await validateInput(message);
    if (!inputValidation.allowed) {
      const rejectionMessage = getRejectionMessage(inputValidation);
      
      // Log guardrail trigger to PostHog
      await logToPostHog('chat_guardrail_triggered', {
        message: message,
        rejection_reason: inputValidation.reason || 'unknown',
        rejection_message: rejectionMessage,
        model: model,
      });
      
      // Return a streaming response with the rejection message
      const rejectionStream = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(rejectionMessage));
          controller.close();
        }
      });

      return new Response(rejectionStream, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // Get relevant context based on the user's message
    const relevantContext = getRelevantContext(message);

    // Generate system prompt with full context and guardrails
    const baseSystemPrompt = generateSystemPrompt();
    const guardrailPrompt = getGuardrailSystemPrompt();
    const systemPrompt = `${guardrailPrompt}\n\n${baseSystemPrompt}`;

    // Create conversation context
    const conversationContext = conversation.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    // Prepare messages for the AI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationContext,
      { role: 'user', content: `Context: ${relevantContext}\n\nUser Question: ${message}` }
    ];

    // Create Groq provider with API key
    const groq = createGroq({
      apiKey: GROQ_API_KEY,
    });

    // Prepare model options with reasoning effort for OSS models
    const modelOptions: any = {
      model: groq(model),
      messages,
      temperature: 0.7, // Balanced creativity and accuracy
    };

    // Add reasoning effort for thinking models
    if (model.includes('gpt-oss') || model.includes('qwen3-32b')) {
      modelOptions.reasoning_effort = 'medium';
    }

    // Create streaming response with response validation
    const result = streamText(modelOptions);

    // Create a custom stream that validates the response
    const validatedStream = new ReadableStream({
      async start(controller) {
        let fullResponse = '';
        
        try {
          for await (const chunk of result.textStream) {
            fullResponse += chunk;
            
            // For now, stream the chunk (we'll validate the full response at the end)
            controller.enqueue(new TextEncoder().encode(chunk));
          }
          
          // Validate the complete response
          const responseValidation = validateResponse(fullResponse);
          // Response validation is mainly for monitoring - don't interrupt user experience
          
          // Log successful AI response to PostHog
          await logToPostHog('chat_response_generated', {
            original_message: message,
            response_length: fullResponse.length,
            model: model,
            conversation_length: conversation.length,
            response_valid: responseValidation.allowed,
          });
          
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      }
    });

    // Return the validated streaming response
    return new Response(validatedStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');

    // Log error to PostHog
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    await logToPostHog('chat_api_error', {
      error_message: errorMessage,
      error_stack: error instanceof Error ? error.stack : 'No stack trace',
      has_groq_key: !!GROQ_API_KEY,
      has_posthog_key: !!POSTHOG_API_KEY,
    });

    // More detailed error response
    const errorDetails = {
      error: 'Internal server error',
      details: errorMessage,
      timestamp: new Date().toISOString(),
      hasApiKey: !!GROQ_API_KEY
    };

    return new Response(JSON.stringify(errorDetails), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Health check endpoint
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    status: 'ok',
    message: 'Chat API is running',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

// CORS preflight support
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
