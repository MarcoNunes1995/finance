import React from 'react';
import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';

export function Header({ name = 'Usuário' }: { name?: string }){
  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#0ff] to-[#7b2fbe] flex items-center justify-center text-black font-bold">NW</div>
        <div>
          <div className="text-sm text-slate-300">Bom dia,</div>
          <div className="text-lg font-semibold">{name}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Notificações" className="relative p-2 rounded-md bg-white/5">
          <span className="w-2 h-2 bg-emerald-400 rounded-full absolute -top-0.5 -right-0.5" />
          <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <Avatar name={name} />
      </div>
    </header>
  )
}
