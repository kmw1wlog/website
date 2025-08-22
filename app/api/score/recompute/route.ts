import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { computeComponents, overallScore, defaultWeights } from '@/src/lib/scoring';

const schema = z.object({
  inputs: z.array(
    z.object({
      id: z.number(),
      footfallHourly: z.number(),
      captureRate: z.number(),
      conversion: z.number(),
      aov: z.number(),
      competitorDensity: z.number(),
      visibility: z.number(),
      frontage: z.number(),
      cornerFlag: z.boolean(),
      rentPsm: z.number(),
      floorArea: z.number(),
      laborRate: z.number(),
      cogsRate: z.number()
    })
  ),
  weights: z.optional(
    z.object({
      demand: z.number(),
      competition: z.number(),
      site: z.number(),
      cost: z.number(),
      risk: z.number(),
      finance: z.number()
    })
  )
});

export async function POST(req: NextRequest) {
  const json = await req.json();
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.message }, { status: 400 });
  }
  const { inputs, weights } = parsed.data;
  const results = inputs.map((i) => {
    const c = computeComponents(i);
    const score = overallScore(c, weights ?? defaultWeights);
    return { id: i.id, score, ...c };
  });
  return NextResponse.json({ results });
}
