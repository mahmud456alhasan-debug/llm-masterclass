import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    models: [
      { name: "GPT-4o", creator: "OpenAI", params: "~1.8T", type: "Proprietary", notable: "Multimodal, fast reasoning" },
      { name: "Claude 3.5 Sonnet", creator: "Anthropic", params: "~70B", type: "Proprietary", notable: "Safety, coding, long context" },
      { name: "Gemini 1.5 Pro", creator: "Google", params: "Unknown", type: "Proprietary", notable: "1M token context window" },
      { name: "Llama 3.1 405B", creator: "Meta", params: "405B", type: "Open Source", notable: "Largest open weights model" },
      { name: "Mistral Large", creator: "Mistral AI", params: "123B", type: "Open Source", notable: "Efficient, European" },
      { name: "DeepSeek R1", creator: "DeepSeek", params: "671B", type: "Open Source", notable: "Chain-of-thought reasoning" },
      { name: "Qwen 2.5", creator: "Alibaba", params: "72B", type: "Open Source", notable: "Strong multilingual" },
    ]
  });
}
