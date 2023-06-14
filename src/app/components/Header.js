import Link from "next/link";
import Logo from "./Logo";
import {ShoppingCartIcon} from "@heroicons/react/24/outline"

export default function Header(){
    return(
        <header className=" sticky top-0 bg-white z-10 shadow"> 
            <div className="container  mx-auto px-8 p-3 flex justify-between">
                <Logo/>
                    <Link href={"/"} className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                        <div className="relative">
                            <ShoppingCartIcon className="w-5 h-5 flex-shrink-0"/>
                        </div>
                        <p>text</p>
                    </Link>
            </div>
        </header>
    )
}