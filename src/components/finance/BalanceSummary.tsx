"use client";

import { FinanceCard, Expense } from "../../lib/types";

interface Props {
  cards: FinanceCard[];
  expenses: Expense[];
  period: "mes" | "ano";
}

export function BalanceSummary({ cards, expenses, period }: Props) {
  const totalBalance = cards.reduce((sum, c) => sum + c.balance, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border">
      <p className="text-sm text-muted-foreground mb-2">Saldo disponível</p>
      <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
        R$ {totalBalance.toFixed(2)}
      </h2>
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">Entradas</p>
          <p className="text-lg font-semibold text-green-600">+R$ 5.200,00</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Saídas</p>
          <p className="text-lg font-semibold text-red-600">
            -R$ {totalExpenses.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Período</p>
          <p className="text-lg font-semibold">
            {period === "mes" ? "Mês atual" : "Ano atual"}
          </p>
        </div>
      </div>
    </div>
  );
}