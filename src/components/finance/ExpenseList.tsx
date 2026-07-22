"use client";

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Expense, FinanceCard } from "../../lib/types";

interface Props {
  expenses: Expense[];
  cards: FinanceCard[];
  onExport: () => void;
}

export function ExpenseList({ expenses, cards, onExport }: Props) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Despesas recentes</h3>
        <Button variant="outline" onClick={onExport}>
          Exportar CSV
        </Button>
      </div>

      <div className="space-y-3">
        {expenses.map((exp) => {
          const card = cards.find((c) => c.id === exp.cardId);
          return (
            <div
              key={exp.id}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div>
                <p className="font-medium">{exp.description}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.category} • {card?.name || "N/A"} • {exp.date}
                </p>
              </div>
              <p className="font-semibold text-red-600">
                -R$ {exp.amount.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}  