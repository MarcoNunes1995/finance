import { DashboardData } from './types';

const delay = (ms = 800) => new Promise((res) => setTimeout(res, ms));

export const mockDashboard: DashboardData = {
  name: 'Carlos Silva',
  balance: 12450.75,
  incomes: 8200.0,
  expenses: 5749.25,
  transactions: [
    { id: 't10', description: 'Salário', amount: 5200.0, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), category: 'Investimentos', type: 'income' },
    { id: 't9', description: 'Supermercado', amount: 250.75, date: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(), category: 'Alimentação', type: 'expense' },
    { id: 't8', description: 'Netflix', amount: 39.9, date: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(), category: 'Lazer', type: 'expense' },
    { id: 't7', description: 'Uber', amount: 18.5, date: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), category: 'Transporte', type: 'expense' },
    { id: 't6', description: 'Conta Luz', amount: 120.0, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), category: 'Contas', type: 'expense' },
    { id: 't5', description: 'Freelance', amount: 1500.0, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), category: 'Investimentos', type: 'income' },
    { id: 't4', description: 'Almoço', amount: 45.0, date: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), category: 'Alimentação', type: 'expense' },
    { id: 't3', description: 'Cinema', amount: 60.0, date: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), category: 'Lazer', type: 'expense' },
    { id: 't2', description: 'Transporte mês', amount: 220.0, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(), category: 'Transporte', type: 'expense' },
    { id: 't1', description: 'Investimento mensal', amount: 500.0, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(), category: 'Investimentos', type: 'income' },
  ],
};

export async function fetchMockDashboard() {
  await delay(800);
  return JSON.parse(JSON.stringify(mockDashboard)) as DashboardData;
}
