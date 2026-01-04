
import { 
  ChartDataPoint, 
  DashboardStat, 
  PaginatedResponse, 
  TimeRange, 
  Transaction, 
  TransactionFilterParams 
} from "@/app/lib/types/payment";
import { MOCK_CHART_DATA, MOCK_STATS, MOCK_TRANSACTIONS } from "@/app/services/mock/payment";

const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DashboardService = {
  
getStats: async (range: string = 'daily'): Promise<DashboardStat[]> => {
  await simulateDelay(500);
  return MOCK_STATS; 
},


  getChartData: async (range: TimeRange): Promise<ChartDataPoint[]> => {
    await simulateDelay(800);
    return MOCK_CHART_DATA[range] || MOCK_CHART_DATA['monthly'];
  },

  getTransactions: async (
    params: TransactionFilterParams
  ): Promise<PaginatedResponse<Transaction>> => {
    await simulateDelay(1500);

    let data = [...MOCK_TRANSACTIONS];

    if (params.search) {
      data = data.filter(t => t.fullName.includes(params.search!));
    }

    const page = params.page || 1;
    const limit = params.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
      data: data.slice(startIndex, endIndex),
      meta: {
        total: data.length,
        page,
        limit,
        totalPages: Math.ceil(data.length / limit),
      },
    };
  },
};