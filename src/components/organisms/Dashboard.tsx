import React, { Suspense, useMemo } from 'react';
import type { Transaction } from '../../types';
import { useDashboardData } from '../../hooks/useDashboardData';
import { Header } from '../molecules/Header';
import { BalanceCard } from '../molecules/BalanceCard';
import { TransactionsList } from '../molecules/TransactionsList';
import { BudgetBars } from '../molecules/BudgetBars';
import { InsightCard } from '../molecules/InsightCard';
import { FAB } from '../molecules/FAB';

const DonutChart = React.lazy(()=>import('../molecules/DonutChart').then(m=>({ default: m.DonutChart })));

export function Dashboard(){
  const { data, isLoading, error } = useDashboardData();

  if(isLoading) return <div className="space-y-4">{Array.from({length:4}).map((_,i)=>(<div key={i} className="h-20 card-surface animate-pulse" />))}</div>
  if(error || !data) return <div>Erro ao carregar dados.</div>

  const donutData = useMemo(()=>{
    const groups = ['Alimentação','Transporte','Lazer','Contas','Investimentos'] as const;
    return groups.map((g) => ({
      name: g,
      value: data.transactions
        .filter((t: Transaction) => t.category === g)
        .reduce((s: number, n: Transaction) => s + n.amount, 0),
    }));
  },[data]);

  const budgets = [
    { name: 'Alimentação', used: 375, limit: 500 },
    { name: 'Lazer', used: 120, limit: 200 },
    { name: 'Transporte', used: 165, limit: 220 },
  ];

  const insight = 'Você gastou 15% a mais com lazer este mês. Que tal ajustar?';

  return (
    <div className="container-main py-6">
      <Header name={data.name} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <BalanceCard balance={data.balance} incomes={data.incomes} expenses={data.expenses} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Suspense fallback={<div className="card-surface h-52"/>}>
              <DonutChart data={donutData} />
            </Suspense>
            <BudgetBars data={budgets} />
          </div>
        </div>

        <div className="space-y-4">
          <InsightCard text={insight} />
          <TransactionsList transactions={data.transactions} />
        </div>
      </div>
      <FAB />
    </div>
  )
}
