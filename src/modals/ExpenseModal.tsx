"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Modal } from "../components/finance/modals/Modal";
import { FinanceCard, Category } from "../lib/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (expense: {
    cardId: number;
    categoryId: number;
    amount: number;
    date: string;
    description: string;
  }) => void;
  cards: FinanceCard[];
  categories: Category[];
}

export function ExpenseModal({ isOpen, onClose, onSave, cards, categories }: Props) {
  const [cardId, setCardId] = useState(cards[0]?.id || 0);
  const [categoryId, setCategoryId] = useState(categories[0]?.id || 0);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || !description.trim()) return;
    onSave({
      cardId,
      categoryId,
      amount: parsedAmount,
      date,
      description: description.trim(),
    });
    setAmount("");
    setDescription("");
    setDate(new Date().toISOString().slice(0, 10));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal title="Nova Saída" onClose={onClose}>
      <div className="grid gap-3">
        <select
          className="border rounded p-2 bg-background"
          value={cardId}
          onChange={(e) => setCardId(Number(e.target.value))}
        >
          {cards.map((card) => (
            <option key={card.id} value={card.id}>
              {card.name}
            </option>
          ))}
        </select>

        <select
          className="border rounded p-2 bg-background"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          className="border rounded p-2 bg-background"
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          className="border rounded p-2 bg-background"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="border rounded p-2 bg-background"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button onClick={handleSave}>Salvar despesa</Button>
      </div>
    </Modal>
  );
}