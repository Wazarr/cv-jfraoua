// LLM-based Guardrails for Jeremy's chat assistant
// Uses AI to intelligently determine if conversations stay focused on Jeremy-related topics

import { generateText } from 'ai';
import { createGroq } from '@ai-sdk/groq';

export interface GuardrailResult {
  allowed: boolean;
  reason?: string;
  suggestion?: string;
  confidence?: number; // 0-1 confidence score
}

export interface GuardrailConfig {
  strictMode: boolean; // If true, be more restrictive
  allowTechnicalQuestions: boolean; // Allow technical questions about Jeremy's work
  useCache: boolean; // Cache results for similar queries
}

const DEFAULT_CONFIG: GuardrailConfig = {
  strictMode: false,
  allowTechnicalQuestions: true,
  useCache: true
};

// Simple cache for guardrail results
const guardrailCache = new Map<string, GuardrailResult>();

const GROQ_API_KEY = import.meta.env.GROQ_API_KEY || process.env.GROQ_API_KEY || '';

/**
 * LLM-powered guardrail validation
 */
async function validateWithLLM(message: string): Promise<GuardrailResult> {
  // Check cache first
  const cacheKey = message.toLowerCase().trim();
  if (guardrailCache.has(cacheKey)) {
    return guardrailCache.get(cacheKey)!;
  }

  try {
    const groq = createGroq({ apiKey: GROQ_API_KEY });

    const prompt = `You are a content moderator for Jérémy Fraoua's professional chat assistant. 

CONTEXT: Jérémy is a Machine Learning Engineer at Qonto specializing in fraud detection. The chat should focus on him personally and his work, but can go sideways as long as it's not being abused.

ALLOWED TOPICS (be permissive):
- Questions about Jérémy personally, his work, experience, and career
- His technical skills, projects, and expertise
- Work-related technical discussions (ML, fraud detection, programming, etc.)
- Industry topics related to his field (fintech, AI, startups, etc.)
- Career advice or insights from his perspective
- Conversational messages and follow-up questions
- Technical questions that relate to his domain of expertise

BLOCKED TOPICS (only block clear abuse):
- Obvious homework/assignment help requests
- "Write code for me" or "debug my code" requests
- Completely unrelated topics (weather, sports, politics, etc.)
- Personal assistance unrelated to work/career (planning trips, etc.)
- Requests that clearly abuse the system for personal gain

GUIDELINES:
- Be PERMISSIVE - allow discussions that relate to work, career, or Jérémy
- Only block obvious abuse or completely off-topic requests
- Allow technical discussions if they could relate to his expertise
- Allow career/industry conversations even if not directly about him

ANALYZE THIS MESSAGE: "${message}"

Respond with ONLY a JSON object in this exact format:
{
  "allowed": true/false,
  "reason": "brief explanation",
  "suggestion": "helpful redirect if blocked",
  "confidence": 0.95
}

Default to ALLOWING unless it's clearly abusive or completely off-topic.`;

    const result = await generateText({
      model: groq('llama-3.1-8b-instant'), // Fast model for guardrails
      prompt,
      temperature: 0.1, // Low temperature for consistent decisions
    });

    // Parse the JSON response
    const jsonMatch = result.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid JSON response from LLM');
    }

    const parsed = JSON.parse(jsonMatch[0]) as GuardrailResult;
    
    // Cache the result
    guardrailCache.set(cacheKey, parsed);
    
    return parsed;

  } catch (error) {
    // Fallback to simple heuristics if LLM fails
    return fallbackValidation(message);
  }
}

/**
 * Fallback validation using simple heuristics if LLM is unavailable
 */
function fallbackValidation(message: string): GuardrailResult {
  const lowerMessage = message.toLowerCase().trim();
  
  // Allow conversational messages
  const conversational = ['hi', 'hello', 'hey', 'thanks', 'thank you', 'bye', 'goodbye'];
  if (conversational.some(word => lowerMessage.startsWith(word))) {
    return { allowed: true, confidence: 0.9 };
  }
  
  // Block only obvious abuse requests
  const clearAbuse = [
    'write my homework', 'do my assignment', 'solve this for me', 
    'debug my entire project', 'write my code for me'
  ];
  if (clearAbuse.some(phrase => lowerMessage.includes(phrase))) {
    return {
      allowed: false,
      reason: 'Clear abuse request detected',
      suggestion: "I'm here to discuss Jérémy and his work. Ask about his experience or get career insights!",
      confidence: 0.9
    };
  }
  
  // Allow if mentions Jeremy explicitly
  if (lowerMessage.includes('jeremy') || lowerMessage.includes('jérémy')) {
    return { allowed: true, confidence: 0.9 };
  }
  
  // Allow if mentions his specific projects/companies
  const jeremySpecific = ['qonto', 'haxball', 'vibetrip', 'ens', 'fraoua'];
  if (jeremySpecific.some(term => lowerMessage.includes(term))) {
    return { allowed: true, confidence: 0.8 };
  }
  
  // Default: allow most things (be permissive in fallback mode)
  return { 
    allowed: true, 
    confidence: 0.7,
    reason: 'Fallback validation - permissive mode'
  };
}

/**
 * Check if a message is appropriate for Jeremy's chat using LLM-powered validation
 */
export async function validateInput(
  message: string, 
  config: GuardrailConfig = DEFAULT_CONFIG
): Promise<GuardrailResult> {
  if (!message || message.trim().length === 0) {
    return {
      allowed: false,
      reason: "Empty message",
      suggestion: "Please ask a question about Jérémy's experience, projects, or background.",
      confidence: 1.0
    };
  }

  const trimmedMessage = message.trim();
  
  // Use LLM for intelligent validation
  return await validateWithLLM(trimmedMessage);
}

/**
 * Synchronous version for backwards compatibility (uses fallback only)
 */
export function validateInputSync(
  message: string, 
  config: GuardrailConfig = DEFAULT_CONFIG
): GuardrailResult {
  if (!message || message.trim().length === 0) {
    return {
      allowed: false,
      reason: "Empty message",
      suggestion: "Please ask a question about Jérémy's experience, projects, or background.",
      confidence: 1.0
    };
  }

  return fallbackValidation(message.trim());
}

/**
 * Validate AI response to ensure it stays on topic (simplified for now)
 */
export function validateResponse(response: string): GuardrailResult {
  if (!response || response.trim().length === 0) {
    return {
      allowed: false,
      reason: "Empty response",
      confidence: 1.0
    };
  }
  
  // For now, allow all responses since the main guardrail is at input level
  // Could be enhanced with LLM validation if needed
  return { 
    allowed: true, 
    confidence: 0.9,
    reason: "Response validation passed"
  };
}

/**
 * Get a friendly rejection message for users
 */
export function getRejectionMessage(result: GuardrailResult): string {
  if (result.suggestion) {
    return `${result.suggestion}`;
  }
  
  return "I'm here to help you learn about Jérémy Fraoua's professional background and projects. Feel free to ask about his experience, skills, or any of his work!";
}

/**
 * Enhanced system prompt that reinforces guardrails
 */
export function getGuardrailSystemPrompt(): string {
  return `
RELAXED GUARDRAILS - BE HELPFUL BUT FOCUSED:

You are Jérémy Fraoua's AI assistant. Focus on him and his work, but you can be flexible with related topics.

**PRIMARY FOCUS:**
- Jérémy's work, experience, and projects
- His technical expertise and career insights
- Work-related discussions (ML, fraud detection, fintech, etc.)
- Industry topics and career advice from his perspective

**BE FLEXIBLE WITH:**
- Technical discussions related to his field
- Career and industry conversations
- Follow-up questions and natural conversation flow
- Topics that connect to his expertise or experience

**ONLY AVOID:**
- Clear abuse (homework help, "write my code")
- Completely unrelated topics (weather, sports, etc.)
- Personal assistance unrelated to work/career

**RESPONSE STYLE:**
- Be helpful and conversational
- If something is borderline, engage with it if you can tie it to Jérémy's experience
- Only redirect if it's clearly off-topic or abusive

Remember: You're Jérémy's professional assistant, but you can be flexible and helpful within reason.
`;
}

/**
 * Clear the guardrail cache (useful for testing)
 */
export function clearGuardrailCache(): void {
  guardrailCache.clear();
}
