import NavigatinBar from "../components/Navigation/NavigationBar";
import PersianCalendar from "../components/pishTable/PersianCalendar";
export default function dashboard() {
  return (
    <div className="flex">
      <NavigatinBar />
      <PersianCalendar />
    </div>
  );
}
