import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const schema = z.object({
    locationId: z.string().transform(Number),
    k: z.string().optional().transform((v) => (v ? Number(v) : 5))
  });
  const parsed = schema.safeParse({
    locationId: searchParams.get('locationId'),
    k: searchParams.get('k') ?? undefined
  });
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.message }, { status: 400 });
  }
  const { locationId, k } = parsed.data;
  const sims = Array.from({ length: k }).map((_, idx) => ({
    neighborId: idx + 1,
    sim_cosine: Math.random()
  }));
  return NextResponse.json({ locationId, similarities: sims });
}
