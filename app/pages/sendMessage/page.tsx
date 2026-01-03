import SendMessageForm from "../../components/notification/SendMessageForm";
import Sidebar from "@/app/components/Navigation/NavigationBar";

export default function SendMessagePage() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Sidebar />
      <div className="mr-64 p-6">
        <SendMessageForm />
      </div>
    </div>
  );
}
