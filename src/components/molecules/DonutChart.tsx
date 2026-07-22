import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#00F5FF', '#7B2FBE', '#F472B6', '#06B6D4', '#F59E0B'];

export function DonutChart({ data }:{ data: { name: string; value: number }[] }){
  return (
    <div style={{ width: '100%', height: 200 }} className="card-surface">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={2}>
            {data.map((entry, idx)=>(<Cell key={`c-${idx}`} fill={COLORS[idx % COLORS.length]} />))}
          </Pie>
          <Tooltip formatter={(value:number)=>`R$ ${value.toFixed(2)}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
