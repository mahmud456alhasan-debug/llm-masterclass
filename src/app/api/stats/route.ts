import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    stats: [
      { value: "175B+", label: "Parameters in GPT-4" },
      { value: "100T+", label: "Training tokens processed" },
      { value: "50+", label: "Major LLMs 2020–2025" },
      { value: "95%", label: "Human-level benchmark accuracy" },
    ]
  });
}
