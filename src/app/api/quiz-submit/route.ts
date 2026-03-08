import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const score = data.score || 0;
    const total = data.total || 15;

    const percent = total > 0 ? Math.round((score / total) * 100) : 0;

    const grade = score >= 13 ? "Outstanding"
      : score >= 10 ? "Great"
      : score >= 7 ? "Good"
      : score >= 5 ? "Satisfactory"
      : "Needs Review";

    console.log(`[QUIZ] Score: ${score}/${total} (${percent}%) — ${grade}`);

    return NextResponse.json({
      score,
      total,
      percent,
      grade,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Quiz submission error:', error);
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }
}
