import React, { useMemo } from 'react';
import { Transaction } from '../../types';
import { formatDistanceToNow } from 'date-fns';

const Item: React.FC<{t: Transaction}> = React.memo(({t})=>{
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">{t.category[0]}</div>
        <div>
          <div className="font-medium">{t.description}</div>
          <div className="text-xs text-slate-400">{formatDistanceToNow(new Date(t.date), { addSuffix: true })}</div>
        </div>
      </div>
      <div className={t.type==='income' ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>
        {t.type==='income' ? '+' : '-'}R$ {t.amount.toFixed(2)}
      </div>
    </div>
  )
})

export function TransactionsList({ transactions }:{ transactions: Transaction[] }){
  const list = useMemo(()=>transactions.slice().sort((a,b)=> +new Date(b.date) - +new Date(a.date)),[transactions]);
  const first5 = list.slice(0,5);
  return (
    <div className="card-surface">
      <div className="flex items-center justify-between mb-2"><h3 className="font-semibold">Últimas Transações</h3></div>
      <div>
        {first5.map(t=> <Item key={t.id} t={t} />)}
      </div>
    </div>
  )
}
