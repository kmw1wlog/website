import { readFileSync } from 'fs';
import path from 'path';

function loadCsv(file: string) {
  const text = readFileSync(file, 'utf-8').trim();
  const [header, ...rows] = text.split('\n');
  const cols = header.split(',');
  return rows.map((r) => {
    const vals = r.split(',');
    return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
  });
}

function seed() {
  const base = path.join(process.cwd(), 'data/csv');
  const files = ['sales.csv', 'cogs.csv', 'labor.csv', 'rent.csv', 'opex.csv', 'capex.csv'];
  for (const f of files) {
    const data = loadCsv(path.join(base, f));
    console.log(`Loaded ${data.length} rows from ${f}`);
  }
  console.log('Seed complete (mock).');
}

seed();
