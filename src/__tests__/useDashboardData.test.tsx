import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDashboardData } from '../hooks/useDashboardData';
import * as api from '../services/api';

function TestComponent(){
  const { data, isSuccess } = useDashboardData();
  return <div>{isSuccess ? data?.name : 'loading'}</div>;
}

describe('useDashboardData', ()=>{
  it('fetches data from api', async ()=>{
    const spy = jest.spyOn(api, 'getDashboard');
    const qc = new QueryClient();
    render(<QueryClientProvider client={qc}><TestComponent/></QueryClientProvider>);
    await waitFor(()=> expect(screen.getByText(/Carlos Silva|loading/)).toBeInTheDocument());
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })
})
