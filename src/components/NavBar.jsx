import { Link, useLocation } from "react-router-dom";
import logo from "../pics/GJphotography.jpg";
import Burger from "@heroicons/react/24/outline/Bars3Icon";
import { useState } from "react";


export default function NavBar() {

    const [menuPop, setMenuPop] = useState(false);
    const location = useLocation().pathname;

    return (
        <header>
            <div className="max-w-full bg-black flex justify-between items-center py-1">
                <Link to="/"><img src={logo} alt="logo" className="block w-60 ml-6 lg:hidden" /></Link>
                <Burger className="h-10 w-10 text-white  mr-6 hover:cursor-pointer lg:hidden" onClick={_=> menuPop ? setMenuPop(false) : setMenuPop(true)} />
                <ul className={`w-full h-60 lg:h-auto left-0 -top-1 py-4 lg:transform-none bg-custom-brown lg:bg-black text-black lg:text-white flex justify-around flex-col lg:flex-row fixed items-center font-anton text-center ${menuPop ? 'translate-y-1/2' : '-translate-y-full'} transition-transform custom-transition duration-500 z-50`}>
                    <li className={`relative mt-2 lg:text-lg text-4xl after:absolute lg:after:h-px after:w-full after:top-7 after:left-0 after:bg-white after:transition-transform after:origin-left after:duration-700 hover:after:scale-100 before:absolute lg:before:h-px before:w-full before:-top-px before:left-0 before:bg-white before:transition-transform before:origin-right before:duration-700 hover:before:scale-100 ${location === "/galerija" ? "after:scale-100 before:scale-100" : "after:scale-x-0 before:scale-x-0"}`}><Link to="/galerija">Galerija</Link></li>
                    <li className={`relative mt-2 lg:text-lg text-4xl after:absolute lg:after:h-px after:w-full after:top-7 after:left-0 after:bg-white after:transition-transform after:origin-left after:duration-700 hover:after:scale-100 before:absolute lg:before:h-px before:w-full before:-top-px before:left-0 before:bg-white before:transition-transform before:origin-right before:duration-700 hover:before:scale-100 ${location === "/iranga" ? "after:scale-100 before:scale-100" : "after:scale-x-0 before:scale-x-0"}`}><Link to="/iranga">Įranga</Link></li>
                    <li className="hidden lg:block"><Link to="/"><img src={logo} alt="logo" className="w-60" /></Link></li>
                    <li className={`relative mt-2 lg:text-lg text-4xl after:absolute lg:after:h-px after:w-full after:top-7 after:left-0 after:bg-white after:transition-transform after:origin-left after:duration-700 hover:after:scale-100 before:absolute lg:before:h-px before:w-full before:-top-px before:left-0 before:bg-white before:transition-transform before:origin-right before:duration-700 hover:before:scale-100 ${location === "/paslaugos" ? "after:scale-100 before:scale-100" : "after:scale-x-0 before:scale-x-0"}`}><Link to="/paslaugos">Paslaugos</Link></li>
                    <li className={`relative mt-2 lg:text-lg text-4xl after:absolute lg:after:h-px after:w-full after:top-7 after:left-0 after:bg-white after:transition-transform after:origin-left after:duration-700 hover:after:scale-100 before:absolute lg:before:h-px before:w-full before:-top-px before:left-0 before:bg-white before:transition-transform before:origin-right before:duration-700 hover:before:scale-100 ${location === "/kontaktai" ? "after:scale-100 before:scale-100" : "after:scale-x-0 before:scale-x-0"}`}><Link to="/kontaktai">Kontaktai</Link></li>
                </ul>
                

            </div>
            <div onClick={ _ => setMenuPop(false) } className={`absolute left-0 top-0 w-full h-full bg-black opacity-80 lg:hidden z-40 ${menuPop ? 'block' : 'hidden'}`} ></div>
        </header>
    )
}