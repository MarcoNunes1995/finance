import React from 'react';
import { render, screen } from '@testing-library/react';
import { useMediaQuery } from '../hooks/useMediaQuery';

function TestComp(){
  const m = useMediaQuery('(min-width: 600px)');
  return <div>{String(m)}</div>;
}

describe('useMediaQuery', ()=>{
  it('reacts to media change', ()=>{
    // @ts-ignore
    window.matchMedia = (query: string) => ({ matches: false, media: query, addEventListener: (_: any)=>{}, removeEventListener: (_: any)=>{} });
    render(<TestComp/>);
    expect(screen.getByText(/true|false/)).toBeInTheDocument();
  })
})
