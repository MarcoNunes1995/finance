"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import { Modal } from "./Modal";
import { CardType } from "../../../lib/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (card: { name: string; type: CardType; lastDigits: string; balance: number }) => void;
}

export function CardModal({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [type, setType] = useState<CardType>("debit");
  const [lastDigits, setLastDigits] = useState("");
  const [limit, setLimit] = useState("");

  const handleSave = () => {
    if (!name.trim() || !lastDigits.trim()) return;
    onSave({
      name: name.trim(),
      type,
      lastDigits: lastDigits.trim(),
      balance: type === "credit" ? parseFloat(limit) || 0 : 0,
    });
    setName("");
    setType("debit");
    setLastDigits("");
    setLimit("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal title="Novo Cartão" onClose={onClose}>
      <div className="grid gap-3">
        <input
          className="border rounded p-2 bg-background"
          placeholder="Nome do cartão"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="border rounded p-2 bg-background"
          value={type}
          onChange={(e) => setType(e.target.value as CardType)}
        >
          <option value="debit">Débito</option>
          <option value="credit">Crédito</option>
        </select>
        <input
          className="border rounded p-2 bg-background"
          placeholder="Últimos 4 dígitos"
          value={lastDigits}
          onChange={(e) => setLastDigits(e.target.value)}
        />
        {type === "credit" && (
          <input
            className="border rounded p-2 bg-background"
            placeholder="Limite"
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        )}
        <Button onClick={handleSave}>Salvar cartão</Button>
      </div>
    </Modal>
  );
}