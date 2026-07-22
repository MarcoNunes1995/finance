"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import { Modal } from "./Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (category: { name: string; color: string }) => void;
}

export function CategoryModal({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#0D9488");

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({ name: name.trim(), color });
    setName("");
    setColor("#0D9488");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal title="Nova Categoria" onClose={onClose}>
      <div className="grid gap-3">
        <input
          className="border rounded p-2 bg-background"
          placeholder="Nome da categoria"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded p-2 bg-background"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button onClick={handleSave}>Salvar categoria</Button>
      </div>
    </Modal>
  );
}   