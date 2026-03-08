import { NextResponse } from 'next/server';

// Import the grade log from the grade route (in a real app, this would be a database)
let gradeLog: any[] = [];

export async function GET() {
  // In a real application, this would require authentication for professor access
  // For now, return the grade log
  return NextResponse.json({
    grades: gradeLog,
    count: gradeLog.length,
    timestamp: new Date().toISOString()
  });
}
