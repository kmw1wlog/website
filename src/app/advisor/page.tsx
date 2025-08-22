'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

const cashflowData = [
  { month: '0', A: -100000, B: -200000, C: -300000, D: 0 },
  { month: '6', A: 50000, B: 80000, C: 90000, D: 20000 },
  { month: '12', A: 60000, B: 100000, C: 110000, D: 30000 },
  { month: '24', A: 70000, B: 120000, C: 140000, D: 40000 },
  { month: '36', A: 80000, B: 150000, C: 170000, D: 50000 }
];

export default function AdvisorPage() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Conversion Advisor</h1>
      <Card title="NPV / Payback">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cashflowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" label={{ value: '개월', position: 'insideBottomRight', offset: 0 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="A" stroke="#0ea5e9" />
              <Line type="monotone" dataKey="B" stroke="#10b981" />
              <Line type="monotone" dataKey="C" stroke="#f97316" />
              <Line type="monotone" dataKey="D" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
