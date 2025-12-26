import HeroBannerForm from "../components/Content-comps/HeroSection";
import Navbar from "../components/Content-comps/Navbar";
import NavigatinBar from "../components/Navigation/NavigationBar";
export default function ContentManageMent (){
    return(
        <div className="min-h-screen bg-gray-100 ">
            <NavigatinBar/>
            <div className="mr-64 p-6">
                <Navbar/>
                <HeroBannerForm/>
            </div>
        </div>
    )
}