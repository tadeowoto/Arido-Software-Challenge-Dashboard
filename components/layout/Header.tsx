"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import UserFormModal from "../UserFormModal";

interface HeaderProps {
  where: string;
}

export default function Header({ where }: HeaderProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-surface-light border-b border-border-light flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 rounded-full bg-highlight-orange" />
        <h1 className="text-lg font-semibold text-text-primary">{where}</h1>
      </div>

      <button
        onClick={() => setIsFormOpen(true)}
        className="flex items-center gap-2 bg-highlight-orange hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm active:scale-95"
      >
        <Plus className="w-4 h-4" />
        Create User
      </button>

      {isFormOpen && (
        <UserFormModal open={isFormOpen} onclose={() => setIsFormOpen(false)} />
      )}
    </header>
  );
}
