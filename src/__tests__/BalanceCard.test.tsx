import { render, screen } from '@testing-library/react';
import { BalanceCard } from '../components/molecules/BalanceCard';

describe('BalanceCard', ()=>{
  it('renders amounts and animates count', ()=>{
    render(<BalanceCard balance={12450.75} incomes={8200} expenses={5749.25} />);
    expect(screen.getByText(/Saldo Total/i)).toBeInTheDocument();
    expect(screen.getByText(/Receitas/i)).toBeInTheDocument();
  })
})
