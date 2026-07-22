import { useQuery } from '@tanstack/react-query';
import { getDashboard } from '../services/api';
import type { DashboardData } from '../types';

export function useDashboardData() {
  return useQuery<DashboardData, Error>({
    queryKey: ['dashboard'],
    queryFn: () => getDashboard(),
    staleTime: 1000 * 60 * 2,
    retry: 1,
  });
}
