import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const pdfContent = Buffer.from('PDF placeholder');
  return new NextResponse(pdfContent, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="report.pdf"'
    }
  });
}
