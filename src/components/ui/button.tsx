"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "icon" | "sm" | "md" | "lg";
}

const variantClasses = {
  default: "btn-fancy btn-gradient",
  outline: "border border-border bg-white/60 text-slate-800 hover:bg-white",
  ghost: "bg-transparent text-slate-700 hover:bg-white/10",
};

const sizeClasses = {
  icon: "p-2",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button({ variant = "default", size = "md", className = "", ...props }: Props) {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
