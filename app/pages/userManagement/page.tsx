import NavigatinBar from "@/app/components/Navigation/NavigationBar";
import { HomeIcon } from "@/app/assets/icons";
import { VectorIcon } from "@/app/assets/icons";
import SearchPage from "@/app/components/User-comps/filter-page";
export default function userManagement() {
  return (
    <div className="min-h-screen bg-neutral-100" dir="rtl">
      <NavigatinBar />
      <div className="mr-64 p-6">
        <div className="bg-white flex justify-between items-center px-7 h-16 shadow-sm rounded-lg border-b border-neutral-200 mb-6">
          <div className="font-bold text-neutral-800">مدیریت کاربران</div>
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
        <div className="space-y-6">
          <SearchPage />
        </div>
      </div>
    </div>
  );
}
