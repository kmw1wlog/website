import { randomNormal } from './utils';

export interface ScoringInputs {
  footfallHourly: number;
  captureRate: number;
  conversion: number;
  aov: number;
  competitorDensity: number;
  visibility: number;
  frontage: number;
  cornerFlag: boolean;
  rentPsm: number;
  floorArea: number;
  laborRate: number;
  cogsRate: number;
}

export interface ScoreWeights {
  demand: number;
  competition: number;
  site: number;
  cost: number;
  risk: number;
  finance: number;
}

export const defaultWeights: ScoreWeights = {
  demand: 0.28,
  competition: 0.16,
  site: 0.18,
  cost: 0.14,
  risk: 0.10,
  finance: 0.14
};

export function computeComponents(i: ScoringInputs) {
  const demand = i.footfallHourly * i.captureRate * i.conversion * i.aov;
  const competition = i.competitorDensity;
  const site = i.visibility + i.frontage + (i.cornerFlag ? 10 : 0);
  const cost = i.rentPsm * i.floorArea;
  const risk = 0.05 * cost; // placeholder
  const revenue = demand * 30; // monthly revenue assumption
  const cogs = revenue * i.cogsRate;
  const labor = revenue * i.laborRate;
  const finance = revenue - cogs - labor - cost;
  return { demand, competition, site, cost, risk, finance };
}

export function overallScore(c: ReturnType<typeof computeComponents>, w: ScoreWeights = defaultWeights) {
  const score =
    w.demand * c.demand -
    w.competition * c.competition +
    w.site * c.site -
    w.cost * c.cost -
    w.risk * c.risk +
    w.finance * c.finance;
  return score;
}

export function monteCarloRevenue(
  base: ScoringInputs,
  n = 1000,
  std = { conversion: 0.02, aov: 1000, rent: 1000 }
) {
  const samples: number[] = [];
  for (let k = 0; k < n; k++) {
    const conv = randomNormal(base.conversion, std.conversion);
    const aov = randomNormal(base.aov, std.aov);
    const rent = randomNormal(base.rentPsm, std.rent);
    const c = computeComponents({ ...base, conversion: conv, aov, rentPsm: rent });
    samples.push(c.finance);
  }
  samples.sort((a, b) => a - b);
  const p50 = samples[Math.floor(n * 0.5)];
  const p75 = samples[Math.floor(n * 0.75)];
  const p10 = samples[Math.floor(n * 0.1)];
  return { p50, p75, p10 };
}
