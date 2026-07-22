export type Profile = "pessoal" | "familia";
export type CardType = "debit" | "credit";

export interface FinanceCard {
  id: number;
  name: string;
  type: CardType;
  lastDigits: string;
  balance: number;
}

export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface Expense {
  id: number;
  cardId: number;
  categoryId: number;
  category: string;
  amount: number;
  date: string;
  description: string;
}