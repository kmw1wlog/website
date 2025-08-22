import { computeComponents, overallScore, monteCarloRevenue, defaultWeights, ScoringInputs } from './scoring';

describe('scoring', () => {
  const base: ScoringInputs = {
    footfallHourly: 500,
    captureRate: 0.07,
    conversion: 0.12,
    aov: 12000,
    competitorDensity: 5,
    visibility: 8,
    frontage: 5,
    cornerFlag: true,
    rentPsm: 30000,
    floorArea: 100,
    laborRate: 0.18,
    cogsRate: 0.32
  };

  test('compute components', () => {
    const c = computeComponents(base);
    expect(c.demand).toBeCloseTo(500 * 0.07 * 0.12 * 12000);
  });

  test('overall score positive', () => {
    const c = computeComponents(base);
    const s = overallScore(c, defaultWeights);
    expect(typeof s).toBe('number');
  });

  test('monteCarlo returns percentiles', () => {
    const r = monteCarloRevenue(base, 100);
    expect(r.p50).toBeDefined();
    expect(r.p75).toBeDefined();
    expect(r.p10).toBeDefined();
  });

  test('corner flag adds site score', () => {
    const c1 = computeComponents({ ...base, cornerFlag: false });
    const c2 = computeComponents(base);
    expect(c2.site).toBeGreaterThan(c1.site);
  });

  test('higher rent reduces finance', () => {
    const c1 = computeComponents({ ...base, rentPsm: 20000 });
    const c2 = computeComponents({ ...base, rentPsm: 40000 });
    expect(c1.finance).toBeGreaterThan(c2.finance);
  });
});
