"use client";

import { Card } from "../../components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Category, Expense } from "../../lib/types";

interface Props {
  categories: Category[];
  expenses: Expense[];
  period: "mes" | "ano";
  onPeriodChange: (period: "mes" | "ano") => void;
}

export function ExpenseChart({
  categories,
  expenses,
  period,
  onPeriodChange,
}: Props) {
  const data = categories
    .map((cat) => ({
      name: cat.name,
      value: expenses
        .filter((exp) => exp.categoryId === cat.id)
        .reduce((sum, exp) => sum + exp.amount, 0),
      color: cat.color,
    }))
    .filter((item) => item.value > 0);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Gastos por categoria</h3>
        <select
          value={period}
          onChange={(e) => onPeriodChange(e.target.value as "mes" | "ano")}
          className="border rounded px-3 py-2 bg-background"
        >
          <option value="mes">Mês</option>
          <option value="ano">Ano</option>
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={120}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`R$ ${value.toFixed(2)}`, "Valor"]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}   