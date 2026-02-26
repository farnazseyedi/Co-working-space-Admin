import {
  ChartDataPoint,
  DashboardStat,
  PaginatedResponse,
  TimeRange,
  Transaction,
  TransactionFilterParams,
} from "@/app/lib/types/payment";
import {
  MOCK_CHART_DATA,
  MOCK_STATS,
  MOCK_TRANSACTIONS,
} from "@/app/services/mock/payment";

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const DashboardService = {
  getStats: async (range: string = "daily"): Promise<DashboardStat[]> => {
    await simulateDelay(500);
    return MOCK_STATS;
  },

  getChartData: async (range: TimeRange): Promise<ChartDataPoint[]> => {
    await simulateDelay(800);
    return MOCK_CHART_DATA[range] || MOCK_CHART_DATA["monthly"];
  },

  getTransactions: async (
    params: TransactionFilterParams,
  ): Promise<PaginatedResponse<Transaction>> => {
    await simulateDelay(1500);

    let data = [...MOCK_TRANSACTIONS];

    if (params.search) {
      data = data.filter((t) => t.fullName.includes(params.search!));
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

export interface UserData {
  id: string;
  userName: string;
  fullName: string;
  price: string;
  date: string;
  phone: string;
  status: string;
}

export const MOCK_DATA: UserData[] = [
  {
    id: "1",
    userName: "5262754971",
    fullName: "Ali Rezaei",
    price: "350/000",
    date: "20/06/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "2",
    userName: "5262333971",
    fullName: "Sara Mohammadi",
    price: "300/000",
    date: "31/06/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "3",
    userName: "1262754971",
    fullName: "Mohammad Ahmadi",
    price: "550/000",
    date: "31/04/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "4",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "10/01/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "5",
    userName: "4322754971",
    fullName: "ستایش کفیلی ",
    price: "250/000",
    date: "31/04/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "6",
    userName: "4322754971",
    fullName: "امیر خرم دل اول ",
    price: "100/000",
    date: "22/09/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "7",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "22/23/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "8",
    userName: "4322754971",
    fullName: "حلما حاجی",
    price: "850/000",
    date: "12/08/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "9",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "10/07/1404",
    phone: "09125663562",
    status: "موفق",
  },

  {
    id: "10",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "10/07/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "11",
    userName: "5262754971",
    fullName: "Ali Rezaei",
    price: "350/000",
    date: "20/06/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "12",
    userName: "5262333971",
    fullName: "Sara Mohammadi",
    price: "300/000",
    date: "31/06/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "13",
    userName: "1262754971",
    fullName: "Mohammad Ahmadi",
    price: "550/000",
    date: "31/04/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "14",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "10/01/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "15",
    userName: "4322754971",
    fullName: "ستایش کفیلی ",
    price: "250/000",
    date: "31/04/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "16",
    userName: "4322754971",
    fullName: "امیر خرم دل اول ",
    price: "100/000",
    date: "22/09/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "17",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "22/23/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "18",
    userName: "4322754971",
    fullName: "حلما حاجی",
    price: "850/000",
    date: "12/08/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "19",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "10/07/1404",
    phone: "09125663562",
    status: "موفق",
  },
  {
    id: "20",
    userName: "4322754971",
    fullName: "Ali Karimi",
    price: "450/000",
    date: "10/07/1404",
    phone: "09125663562",
    status: "موفق",
  },
];
