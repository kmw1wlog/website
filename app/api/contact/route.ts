import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  await resend.emails.send({
    from: 'noreply@yourdomain.kr',
    to: process.env.NEXT_PUBLIC_EMAIL!,
    subject: '새 상담 문의',
    text: JSON.stringify(body, null, 2)
  })
  return NextResponse.json({ ok: true })
}
