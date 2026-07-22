import { render, screen } from '@testing-library/react';
import { TransactionsList } from '../components/molecules/TransactionsList';

const txs = [
  { id:'a', description: 'Test', amount: 10, date: new Date().toISOString(), category: 'Alimentação', type: 'expense' },
];

describe('TransactionsList', ()=>{
  it('shows transaction items', ()=>{
    render(<TransactionsList transactions={txs as any} />);
    expect(screen.getByText(/Test/)).toBeInTheDocument();
  })
})
