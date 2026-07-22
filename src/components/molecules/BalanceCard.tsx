import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

interface Props { balance: number; incomes: number; expenses: number }

export function BalanceCard({ balance, incomes, expenses }: Props){
  return (
    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="card-surface">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">Saldo Total</div>
          <div className="text-2xl font-semibold mt-1">
            R$ <CountUp end={balance} duration={1.5} separator="," decimals={2} decimal="."/>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-400">Receitas</div>
          <div className="text-green-400 font-medium">R$ {incomes.toFixed(2)}</div>
          <div className="text-sm text-slate-400 mt-2">Despesas</div>
          <div className="text-red-400 font-medium">R$ {expenses.toFixed(2)}</div>
        </div>
      </div>
    </motion.div>
  )
}
