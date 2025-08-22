export interface ConversionScoreParams {
  cfA: number[]; // cash flows option A
  cfB: number[]; // cash flows option B
  marketGrowth: number; // -1..1
  brandControl: number; // -1..1
  laborRisk: number; // 0..1
  leasePenalty: number; // 0..1
  weights?: Partial<Weights>;
}

export interface Weights {
  w1: number;
  w2: number;
  w3: number;
  w4: number;
  w5: number;
}

const defaultWeights: Weights = {
  w1: 0.45,
  w2: 0.15,
  w3: 0.15,
  w4: 0.15,
  w5: 0.10,
};

export function computeConversionScore(params: ConversionScoreParams): number {
  const { cfA, cfB, marketGrowth, brandControl, laborRisk, leasePenalty, weights } = params;
  const w = { ...defaultWeights, ...weights };
  const avgSales = Math.max(cfB.length ? cfB.reduce((a, b) => a + b, 0) / cfB.length : 1, 1);
  const cfDiff = cfB.reduce((sum, b, i) => sum + (b - (cfA[i] ?? 0)), 0) / avgSales;
  const score =
    w.w1 * cfDiff +
    w.w2 * marketGrowth +
    w.w3 * brandControl -
    w.w4 * laborRisk -
    w.w5 * leasePenalty;
  return Number(score.toFixed(2));
}

export function shouldRecommend(score: number, cfA: number[], cfB: number[]): boolean {
  const positiveMonths = cfB.filter((b, i) => b - (cfA[i] ?? 0) > 0).length;
  const sixMonthStreak = positiveMonths >= 6;
  return score >= 0.6 && sixMonthStreak;
}
