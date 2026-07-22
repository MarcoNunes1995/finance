import { Expense, FinanceCard } from "../lib/types";

export function exportExpensesToCSV(expenses: Expense[], cards: FinanceCard[]) {
  const headers = ["Cartão", "Categoria", "Valor", "Data", "Descrição"];
  const rows = expenses.map((exp) => {
    const card = cards.find((c) => c.id === exp.cardId);
    return [
      card?.name || "N/A",
      exp.category,
      `R$ ${exp.amount.toFixed(2)}`,
      exp.date,
      exp.description,
    ];
  });

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `despesas_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
}   