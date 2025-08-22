'use client';

import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { name: '매장A', score: 0.82 },
  { name: '매장B', score: 0.76 },
  { name: '매장C', score: 0.74 },
];

export default function OverviewPage() {
  const kpis = [
    { label: '매출', value: 12000000, diff: 0.04 },
    { label: 'EBIT', value: 1800000, diff: -0.02 },
    { label: '인건비비율', value: 0.23, diff: 0.01 },
    { label: '임대료비율', value: 0.11, diff: 0 },
    { label: '원가율', value: 0.36, diff: -0.005 },
  ];

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {kpis.map((k) => (
          <Card key={k.label} title={k.label}>
            <div className="text-xl font-semibold">
              {k.label.includes('비율') ? (k.value * 100).toFixed(1) + '%' : k.value.toLocaleString()}
            </div>
            <div className={k.diff >= 0 ? 'text-green-600' : 'text-red-600'}>
              {(k.diff * 100).toFixed(1)}%
            </div>
          </Card>
        ))}
      </div>
      <section>
        <h2 className="mb-2 text-xl font-semibold">전환권고 Top 10</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 1]} />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
