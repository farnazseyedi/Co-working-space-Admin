import SendMessageForm from "../../components/notification/SendMessageForm";
import Sidebar from "@/app/components/Navigation/NavigationBar";
import { HomeIcon } from "@/app/assets/icons";
import { VectorIcon } from "@/app/assets/icons";
import { MessageButtons } from "@/app/components/Button/MessageButtons";

export default function SendMessagePage() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Sidebar />
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
        <SendMessageForm />
      </div>
    </div>
  );
}
