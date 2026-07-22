"use client";

import { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import { Modal } from "./Modal";
import { Category } from "../../../lib/types";

interface Props {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
  onSave: (id: number, data: Partial<Category>) => void;
}

export function EditCategoryModal({ isOpen, category, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#0D9488");

  useEffect(() => {
    if (category) {
      setName(category.name);
      setColor(category.color);
    }
  }, [category]);

  const handleSave = () => {
    if (!category || !name.trim()) return;
    onSave(category.id, { name: name.trim(), color });
    onClose();
  };

  if (!isOpen || !category) return null;

  return (
    <Modal title="Editar Categoria" onClose={onClose}>
      <div className="grid gap-3">
        <input
          className="border rounded p-2 bg-background"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded p-2 bg-background"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button onClick={handleSave}>Atualizar</Button>
      </div>
    </Modal>
  );
}   