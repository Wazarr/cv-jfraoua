import type { APIRoute } from 'astro';
import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { getRelevantContext, generateSystemPrompt } from '../../lib/context';

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

    // Get relevant context based on the user's message
    const relevantContext = getRelevantContext(message);

    // Generate system prompt with full context
    const systemPrompt = generateSystemPrompt();

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

    // Create streaming response
    const result = streamText(modelOptions);

    // Return streaming response
    return result.toTextStreamResponse({
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
