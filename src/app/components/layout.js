import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout({children}){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
                <main className="flex-grow bg-gray-100">
                    {children}
                </main>
            <Footer/>
        </div>
    )

}