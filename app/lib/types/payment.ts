
export type TimeRange = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type TransactionStatus = 'success' | 'pending' | 'failed';
export interface DashboardStat {
  id: string;
  title: string; 
  value: number;
  formattedValue: string; 
  trend: number;
  isIncrease: boolean; 
  icon: 'wallet' | 'new' | 'cancell' ; 
}
export interface ChartDataPoint {
  name: string;
  value: number; 
}
export interface Transaction {
  id: string;
  userId: string;
  fullName: string; 
  amount: number;
  date: string; 
  status: TransactionStatus;
}
export interface TransactionFilterParams {
  page?: number;
  limit?: number;
  search?: string; 
  startDate?: string;
  endDate?: string;
  userId?: string;
}
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}