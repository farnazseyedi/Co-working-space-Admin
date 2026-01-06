import Sidebar from "@/app/components/Navigation/NavigationBar";
import Navbar from "@/app/components/Content-comps/Navbar";
import FAQAccordion from "../../components/F&Q/FAQAccordion";
import { FAQ_IMAGE_DATA } from "@/app/data/faqImageData";

export default function FAQPage() {
  // اینجا نسخه موقتی با default می‌سازیم
  const faqDataForAccordion = FAQ_IMAGE_DATA.map((item) => {
    return {
      ...item, // بقیه فیلدها دست نخورده بمونن
      active: item.active === true ? true : false,
      editable: item.editable === true ? true : false,
      publishMain: item.publishMain === true ? true : false,
      publishPopular: item.publishPopular === true ? true : false,
    };
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="mr-64 p-6">
        <Navbar />
        <div className="mt-4">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}
