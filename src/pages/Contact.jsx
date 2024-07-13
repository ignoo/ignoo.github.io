import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Social from "../components/Social";

export default function Contact() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full h-min bg-black relative overflow-y-hidden">
            <NavBar />
            <main className="overflow-x-hidden min-h-screen flex flex-col items-end">
                <div className="text-white font-mono absolute ml-6 left-0 top-20 z-10 lg:top-44">
                    <h1 className="text-3xl sm:text-4xl my-10">Gediminas Jasėnas</h1>
                    <p className="sm:text-lg md:text-xl mb-10 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla ut rerum, debitis nesciunt, ad dolorum beatae explicabo in praesentium, aperiam dolor delectus nisi sunt veritatis quidem! Neque, eum laborum!</p>
                    <Social vertical={true} size={50} />
                </div>
                <img src="./images/portrait.jpg" alt="portrait" className=" w-2/3 lg:w-1/2 mt-40 sm:mt-20 object-contain" />
            </main>
            <footer className="w-full flex items-center p-2 bg-black border-t border-stone-900">
                <p className="text-white text-xs">&copy; {currentYear} GJphotography. All rights reserved</p>
            </footer>
        </div>
    )
}
