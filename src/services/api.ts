import { fetchMockDashboard } from '../mockData';
import { DashboardData } from '../types';

export async function getDashboard(): Promise<DashboardData> {
  // Here you could call a real API, fallback to mock
  return fetchMockDashboard();
}
