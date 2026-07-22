"use client";

import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Category } from "../../lib/types";

interface Props {
  categories: Category[];
  onAdd: () => void;
  onEdit: (category: Category) => void;
  onDelete: (id: number) => void;
}

export function CategoryList({ categories, onAdd, onEdit, onDelete }: Props) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Categorias Personalizadas</h3>
        <Button onClick={onAdd}>
          <Plus className="w-4 h-4 mr-1" />
          Nova Categoria
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="font-semibold text-sm">{cat.name}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => onEdit(cat)}>
                  <Edit2 className="w-4 h-4 text-blue-600" />
                </button>
                <button onClick={() => onDelete(cat.id)}>
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}