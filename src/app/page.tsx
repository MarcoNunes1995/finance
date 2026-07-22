"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Dashboard } from '../components/organisms/Dashboard';

const queryClient = new QueryClient();

export default function AppPage(){
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <main className="min-h-screen">
          <Dashboard />
        </main>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}