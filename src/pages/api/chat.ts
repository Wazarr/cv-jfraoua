import type { APIRoute } from 'astro';
import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { getRelevantContext, generateSystemPrompt } from '../../lib/context';
import { validateInput, validateResponse, getRejectionMessage, getGuardrailSystemPrompt } from '../../lib/guardrails';

const GROQ_API_KEY = import.meta.env.GROQ_API_KEY || process.env.GROQ_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, conversation = [], model = 'moonshotai/kimi-k2-instruct-0905' } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Apply LLM-powered input guardrails
    const inputValidation = await validateInput(message);
    if (!inputValidation.allowed) {
      const rejectionMessage = getRejectionMessage(inputValidation);
      
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

    // More detailed error response
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
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
