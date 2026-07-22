"use client";

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", ...props }: Props) {
  return (
    <div
      className={`${className} card-surface p-4`}
      {...props}
    />
  );
}
