import fs from 'fs';
import path from 'path';

// Load sample data
const dataDir = path.join(process.cwd(), 'data');
const reviews = JSON.parse(fs.readFileSync(path.join(dataDir, 'reviews.json')));
const sales = JSON.parse(fs.readFileSync(path.join(dataDir, 'sales.json')));

// Simple risk computation: negative sentiment + sales drop
function computeRisk(storeId) {
  const storeReviews = reviews.filter(r => r.store_id === storeId);
  const storeSales = sales.filter(s => s.store_id === storeId);

  // Sentiment: proportion of ratings <=2
  const negCount = storeReviews.filter(r => r.rating <= 2).length;
  const sentiment = storeReviews.length ? negCount / storeReviews.length : 0;

  // Sales anomaly: compare last day vs avg of previous days
  let salesScore = 0;
  if (storeSales.length > 1) {
    const last = storeSales[storeSales.length - 1].sales_net;
    const prevAvg = storeSales.slice(0, -1).reduce((acc, s) => acc + s.sales_net, 0) / (storeSales.length - 1);
    salesScore = prevAvg ? Math.max(0, (prevAvg - last) / prevAvg) : 0;
  }

  // Combine and scale 0-100
  const risk = (0.5 * sentiment + 0.5 * salesScore) * 100;
  return Math.round(risk);
}

// Compute risk per store
const storeIds = [...new Set(reviews.map(r => r.store_id))];
for (const id of storeIds) {
  console.log(`Store ${id} risk: ${computeRisk(id)}`);
}
