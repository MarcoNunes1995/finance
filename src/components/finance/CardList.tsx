"use client";

import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Plus, Trash2, CreditCard } from "lucide-react";
import { FinanceCard } from "../../lib/types";

interface Props {
  cards: FinanceCard[];
  onAdd: () => void;
  onDelete: (id: number) => void;
}

export function CardList({ cards, onAdd, onDelete }: Props) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Meus Cartões
        </h3>
        <Button onClick={onAdd}>
          <Plus className="w-4 h-4 mr-1" />
          Adicionar Cartão
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-4 rounded-lg border flex justify-between items-start"
          >
            <div>
              <p className="font-semibold">{card.name}</p>
              <p className="text-sm text-muted-foreground">
                {card.type === "credit" ? "Crédito" : "Débito"} • ****
                {card.lastDigits}
              </p>
              <p className="text-sm mt-2">Saldo: R$ {card.balance.toFixed(2)}</p>
            </div>
            <button onClick={() => onDelete(card.id)}>
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}