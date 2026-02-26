import NavigatinBar from "@/app/components/Navigation/NavigationBar";
import { HomeIcon } from "@/app/assets/icons";
import { VectorIcon } from "@/app/assets/icons";
import DiscountSteps from "@/app/components/Redeem-comps/discount-steps";
import OtherDiscounts from "@/app/components/Redeem-comps/other-discounts";
import RedeemTable from "@/app/components/Redeem-comps/other-discounts";
import { MOCK_DATA } from "@/app/services/mock/discount-service";

export default function redeem() {
   
  // const data = await fetchDiscounts();
  return (
    <div className="min-h-screen bg-neutral-100">
      <NavigatinBar />
      <div className="mr-64 p-6">
        <div className="bg-white flex justify-between items-center px-7 h-16 shadow-sm rounded-lg border-b border-neutral-200 mb-6">
          <div className="font-bold text-neutral-800">تخفیف ها </div>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer">
              <HomeIcon />
            </div>
            <span className="bg-neutral-200 w-px h-6"></span>
            <div className="cursor-pointer">
              <VectorIcon />
            </div>
          </div>
        </div>
        <div>
            <DiscountSteps/>
            <RedeemTable data={MOCK_DATA}/>
            
        </div>
      </div>
    </div>
  );
}
