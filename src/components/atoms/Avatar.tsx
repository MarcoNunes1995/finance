import React from 'react';

export function Avatar({ name, size = 40 }: { name: string; size?: number }){
  const initials = name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-semibold" style={{ width: size, height: size }} aria-hidden>
      {initials}
    </div>
  )
}
