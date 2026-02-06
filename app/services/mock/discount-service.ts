
export interface Discounts {
  id: string;
  status: string;
  discountCode: string;
  fromDate: string;
  toDate: string;
}

export const MOCK_DATA: Discounts[] = [
  {
    id: "1",
    status: "فعال",
    discountCode: "UXI20",
    fromDate: "12/2/1404",
    toDate: "04/5/1404",
  },
  {
    id: "2",
    status: "غیر فعال",
    discountCode: "UXI20",
    fromDate: "21/2/1404",
    toDate: "04/5/1404",
  },
  {
    id: "3",
    status: "منقضی شده",
    discountCode: "UXI20",
    fromDate: "3/9/1404",
    toDate: "04/5/1404",
  },
  {
    id: "4",
    status: "فعال",
    discountCode: "UXI20",
    fromDate: "19/2/1404",
    toDate: "04/4/1404",
  },
  {
    id: "5",
    status: "منقضی شده",
    discountCode: "UXI20",
    fromDate: "11/8/1404",
    toDate: "04/5/1404",
  },
];
