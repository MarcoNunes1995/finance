import React from 'react';

export function BudgetBars({ data }:{ data: { name: string; used: number; limit: number }[] }){
  return (
    <div className="card-surface">
      <h3 className="font-semibold mb-3">Orçamento Rápido</h3>
      <div className="space-y-3">
        {data.map(d=>{
          const pct = Math.min(100, Math.round((d.used / d.limit) * 100));
          return (
            <div key={d.name}>
              <div className="flex justify-between text-sm mb-1"><span>{d.name}</span><span>{pct}%</span></div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div style={{ width: `${pct}%`}} className="h-3 bg-gradient-to-r from-[#00F5FF] to-[#7B2FBE]" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
