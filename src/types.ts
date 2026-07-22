export type TransactionType = 'income' | 'expense';

export type Category = 'Alimentação' | 'Transporte' | 'Lazer' | 'Contas' | 'Investimentos';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string; // ISO
  category: Category;
  type: TransactionType;
}

export interface DashboardData {
  name: string;
  balance: number;
  incomes: number;
  expenses: number;
  transactions: Transaction[];
}
