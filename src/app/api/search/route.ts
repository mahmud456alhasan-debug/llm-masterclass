import { NextRequest, NextResponse } from 'next/server';

// LLM Content Database (from reference implementation)
const CONTENT = [
  {"id":"what","title":"What is a Large Language Model?","body":"A Large Language Model (LLM) is artificial intelligence trained on massive text data. It learns by predicting the next token in a sequence. LLMs use the Transformer architecture and self-attention mechanisms."},
  {"id":"how","title":"How Transformers Work","body":"The Transformer architecture uses self-attention to relate every token to every other token. Multi-head attention, positional encoding, layer stacking, temperature sampling, and RLHF fine-tuning are key concepts."},
  {"id":"explainer","title":"What is an LLM? For Everyone","body":"An LLM is like a super-reader. It reads billions of pages. Text becomes tokens which become numbers. The model predicts the next word using attention. Token by token it generates language."},
  {"id":"history","title":"History of LLMs","body":"From n-gram models (1990s) to Word2Vec (2013), Transformer paper (2017), BERT and GPT-1 (2018), GPT-3 with 175 billion parameters (2020), ChatGPT (2022), and multimodal models (2023-2025)."},
  {"id":"models","title":"Major LLMs Compared","body":"GPT-4o by OpenAI, Claude 3.5 Sonnet by Anthropic, Gemini 1.5 Pro by Google, Llama 3.1 405B by Meta, Mistral Large, DeepSeek R1, Qwen 2.5 by Alibaba."},
  {"id":"applications","title":"Real-World Applications","body":"Code generation with GitHub Copilot. Healthcare clinical notes and drug discovery. Education personalized tutoring. Legal contract analysis. Creative brainstorming. Translation and localization."},
  {"id":"quiz","title":"LLM Quiz","body":"15 multiple choice questions about LLMs covering architecture, tokenization, attention mechanism, pre-training, fine-tuning, embeddings, temperature, GPT history, and applications."},
  {"id":"ethics","title":"Ethics and Challenges","body":"Hallucinations generate false information. Bias and fairness from training data. Privacy memorization concerns. Environmental cost of training. AI alignment and safety. Misinformation at scale."},
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim() || '';
  const lang = searchParams.get('lang') || 'en';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [], count: 0 });
  }

  const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const results: any[] = [];

  for (const item of CONTENT) {
    const title = item.title;
    const body = item.body;

    if (pattern.test(title) || pattern.test(body)) {
      let snippet = '';
      const match = pattern.exec(body);
      if (match) {
        const start = Math.max(0, match.index - 60);
        const end = Math.min(body.length, match.index + 100);
        snippet = (start > 0 ? '...' : '') + body.slice(start, end) + (end < body.length ? '...' : '');
        snippet = snippet.replace(pattern, (match) => `<mark>${match}</mark>`);
      } else {
        snippet = body.slice(0, 160) + '...';
      }

      results.push({
        id: item.id,
        title,
        snippet
      });
    }
  }

  return NextResponse.json({
    results,
    count: results.length,
    query
  });
}
