"use client";

import { Button } from "../../components/ui/button";
import { Plus, TrendingUp, Wallet } from "lucide-react";

interface Props {
  onNewExpense: () => void;
  onNewIncome?: () => void;
  onTransfer?: () => void;
}

export function ActionButtons({ onNewExpense }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Button size="lg" className="h-auto py-6" onClick={onNewExpense}>
        <Plus className="w-5 h-5 mr-2" />
        Nova saída
      </Button>
      <Button size="lg" variant="outline" className="h-auto py-6">
        <TrendingUp className="w-5 h-5 mr-2" />
        Nova entrada
      </Button>
      <Button size="lg" variant="outline" className="h-auto py-6">
        <Wallet className="w-5 h-5 mr-2" />
        Transferência
      </Button>
    </div>
  );
}