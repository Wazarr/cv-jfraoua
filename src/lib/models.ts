// Single source of truth for the chat models exposed on the site.
// All models run on Groq's free tier. Kimi K2 was deprecated by Groq in
// March 2026 in favor of GPT-OSS 120B, which is now the default.

export interface ChatModel {
  id: string;
  label: string;
  // Hybrid-reasoning models emit <think> blocks in the text stream,
  // which the chat UI filters into a collapsible panel.
  isThinking: boolean;
}

export const CHAT_MODELS: ChatModel[] = [
  {
    id: "openai/gpt-oss-120b",
    label: "GPT-OSS 120B",
    isThinking: false,
  },
  {
    id: "qwen/qwen3-32b",
    label: "Qwen3 32B",
    isThinking: true,
  },
  {
    id: "llama-3.3-70b-versatile",
    label: "Llama 3.3 70B",
    isThinking: false,
  },
];

export const DEFAULT_MODEL_ID = CHAT_MODELS[0].id;

export function getChatModel(id: string): ChatModel | undefined {
  return CHAT_MODELS.find((m) => m.id === id);
}
