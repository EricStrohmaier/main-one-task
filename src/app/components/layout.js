import Footer from "./Footer";
import HeaderSidebar from "./HeaderSidebar";

export default function AppLayout({children}){
    return(
        <div className="min-h-screen flex ">
            <HeaderSidebar/>
                <main className="w-full  bg-gray-200">
             
                    {children}
                </main>
     
            {/* <Footer/> */}
        </div>
    )

}