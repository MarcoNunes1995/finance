"use client";

import { Profile } from "../lib/types";

interface Props {
  active: Profile;
  onChange: (profile: Profile) => void;
}

export function ProfileSelector({ active, onChange }: Props) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => onChange("pessoal")}
        className={`px-4 py-2 rounded-lg font-semibold ${
          active === "pessoal" ? "bg-primary text-primary-foreground" : "bg-secondary"
        }`}
      >
        👤 Pessoal
      </button>
      <button
        onClick={() => onChange("familia")}
        className={`px-4 py-2 rounded-lg font-semibold ${
          active === "familia" ? "bg-primary text-primary-foreground" : "bg-secondary"
        }`}
      >
        👨‍👩‍👧‍👦 Família
      </button>
    </div>
  );
}