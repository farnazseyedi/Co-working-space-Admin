import NavigatinBar from "../../components/Navigation/NavigationBar";
import { MessageButtons } from "../../components/Button/MessageButtons";
import FAQAccordion from "../../components/F&Q/F&Q";
import { FAQ_DATA } from "@/app/data/faqData";
import { HomeIcon } from "@/app/assets/icons";
import { VectorIcon } from "@/app/assets/icons";

export default function NotificationsListPage() {
  const faqDataWithDefaults = FAQ_DATA.map((item) => ({
    active: false,
    editable: false,
    publishMain: false,
    publishPopular: false,
    ...item,
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigatinBar />

      <div className="mr-64 p-6">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">پیام ها</h1>
          </div>
          <div className="flex gap-8">
            <div>
              <HomeIcon />
            </div>
            <div>
              <VectorIcon />
            </div>
          </div>
        </header>

        <div className="flex justify-end mt-4">
          <MessageButtons />
        </div>

        <div className="flex items-center mt-7 gap-4">
          <div className="text-neutral-900 text-xl font-bold">
            صندوق پیام‌ها
          </div>
          <div className="h-px bg-neutral-400 flex-1"></div>
        </div>

        <FAQAccordion data={faqDataWithDefaults} withButtons={true} />
      </div>
    </div>
  );
}
