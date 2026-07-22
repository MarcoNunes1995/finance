import React from 'react';

export function InsightCard({ text }:{ text: string }){
  return (
    <div className="card-surface p-3">
      <div className="text-sm text-slate-300">Insight</div>
      <div className="mt-2 font-medium">{text}</div>
    </div>
  )
}
