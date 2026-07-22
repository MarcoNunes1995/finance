import { useState, useEffect } from "react";
import { FinanceCard, Category, Expense } from "../lib/types";

const STORAGE_KEYS = {
  cards: "saldo-paralelo-cards",
  categories: "saldo-paralelo-categories",
  expenses: "saldo-paralelo-expenses",
};

export function useFinanceData() {
  const [cards, setCards] = useState<FinanceCard[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Carregar dados do localStorage
  useEffect(() => {
    const savedCards = localStorage.getItem(STORAGE_KEYS.cards);
    const savedCategories = localStorage.getItem(STORAGE_KEYS.categories);
    const savedExpenses = localStorage.getItem(STORAGE_KEYS.expenses);

    if (savedCards) setCards(JSON.parse(savedCards));
    if (savedCategories) setCategories(JSON.parse(savedCategories));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  // Persistir sempre que houver mudança
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cards, JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.expenses, JSON.stringify(expenses));
  }, [expenses]);

  // --- Operações com cartões ---
  const addCard = (card: Omit<FinanceCard, "id">) => {
    const newCard = { ...card, id: Date.now() };
    setCards((prev) => [...prev, newCard]);
  };

  const deleteCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
    setExpenses((prev) => prev.filter((e) => e.cardId !== id));
  };

  // --- Operações com categorias ---
  const addCategory = (category: Omit<Category, "id">) => {
    const newCat = { ...category, id: Date.now() };
    setCategories((prev) => [...prev, newCat]);
  };

  const updateCategory = (id: number, updated: Partial<Category>) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, ...updated } : cat))
    );
  };

  const deleteCategory = (id: number) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    setExpenses((prev) => prev.filter((e) => e.categoryId !== id));
  };

  // --- Operações com despesas ---
  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExp = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExp]);
  };

  const updateExpense = (id: number, updated: Partial<Expense>) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, ...updated } : exp))
    );
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return {
    cards,
    categories,
    expenses,
    addCard,
    deleteCard,
    addCategory,
    updateCategory,
    deleteCategory,
    addExpense,
    updateExpense,
    deleteExpense,
  };
}