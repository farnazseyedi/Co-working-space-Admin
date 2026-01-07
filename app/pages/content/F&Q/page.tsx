import Sidebar from "@/app/components/Navigation/NavigationBar";
import Navbar from "@/app/components/Content-comps/Navbar";
import FAQAccordion from "@/app/components/F&Q/FAQAccordion";
import { FAQ_IMAGE_DATA } from "@/app/data/faqImageData";

export default function FAQPage() {
  const faqDataForAccordion = FAQ_IMAGE_DATA.map((item) => {
    return {
      ...item,
      active: item.active === true,
      editable: item.editable === true,
      publishMain: item.publishMain === true,
      publishPopular: item.publishPopular === true,
    };
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="mr-64 p-6">
        <Navbar />
        <div className="mt-4">
          <FAQAccordion data={faqDataForAccordion} />
        </div>
      </div>
    </div>
  );
}
