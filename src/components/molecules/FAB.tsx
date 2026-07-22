import React, { useState } from 'react';

export function FAB(){
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-6 bottom-6">
      <button aria-label="Ações rápidas" onClick={()=>setOpen(s=>!s)} className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="mt-3 flex flex-col items-end gap-3">
          <button className="w-44 py-2 rounded-md bg-white/6 text-white text-sm">Adicionar Despesa</button>
          <button className="w-44 py-2 rounded-md bg-white/6 text-white text-sm">Adicionar Receita</button>
          <button className="w-44 py-2 rounded-md bg-white/6 text-white text-sm">Escanear Comprovante</button>
        </div>
      )}
    </div>
  )
}
