import { useState } from "react";
import { Link } from "react-router-dom";

export default function Social({ vertical, size }) {

    const [showMail, setShowMail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    const handleMail = _ => {
        if(showMail === true) {
            setShowMail(false);
        } else {
            setShowMail(true);
            setShowPhone(false);
        }
    }

    const handlePhone = _ => {
        if(showPhone === true) {
            setShowPhone(false);
        } else {
            setShowPhone(true);
            setShowMail(false);
        }
    }

    return (
        <>
            <div className={`flex gap-2 lg:flex-row shrink-0 grow-0 flex-wrap ${vertical ? "flex-col items-start" : "items-center"}`}>
                <div className="flex gap-2">
                    <Link to="https://facebook.com/GediminoJasenophotography">
                        <img src="./images/fb.svg" alt="facebook" className={`hover:opacity-85`} style={{ width: size, filter: "invert(23%) sepia(78%) saturate(2124%) hue-rotate(358deg) brightness(83%) contrast(94%)" }} />
                    </Link>
                    <Link to="https://m.me/GediminoJasenophotography">
                        <img src="./images/msg.svg" alt="messenger" className={`hover:opacity-85`} style={{ width: size, filter: "invert(23%) sepia(78%) saturate(2124%) hue-rotate(358deg) brightness(83%) contrast(94%)" }} />
                    </Link>
                    <Link to="https://www.instagram.com/gedimino_jaseno_fotografija/">
                        <img src="./images/ig.svg" alt="instagram" className={`hover:opacity-85`} style={{ width: size, filter: "invert(23%) sepia(78%) saturate(2124%) hue-rotate(358deg) brightness(83%) contrast(94%)" }} />
                    </Link>
                </div>
                <div className="flex gap-2">
                    <div className="transition-all flex">
                        <div style={{height: size}} className={`bg-custom-red rounded-l-full flex justify-center items-center text-black font-bold ${showMail ? " w-48 px-2" : "w-0 px-0 scale-x-0"} origin-left transition-all duration-700`}>
                            <a href="mailto: g.jasenas@gmail.com" className={`transition-transform duration-300 ${showMail ? "scale-x-100 origin-left delay-300" : "scale-x-0 origin-right"}`}>g.jasenas@gmail.com</a>
                        </div>
                        <button onClick={handleMail}>
                            <img src="./images/mail.png" alt="email" style={{width: size}} className={`hover:opacity-85 bg-custom-red transition-all duration-300 ${showMail ? "rounded-r-full" : "rounded-full delay-200"}`} />
                        </button>
                    </div>
                    <div className="transition-all flex">
                        <div style={{height: size}} className={`bg-custom-red rounded-l-full flex justify-center items-center text-black font-bold ${showPhone ? "w-32 px-2" : "w-0 px-0 scale-x-0"} origin-left transition-all duration-700`}>
                            <a href="tel:+37063493278" className={`transition-transform duration-300 ${showPhone ? "scale-x-100 origin-left delay-300" : "scale-x-0 origin-right"}`}>+37063493278</a>
                        </div>
                        <button onClick={handlePhone}>
                            <img src="./images/phone.png" alt="email" style={{width: size}} className={`hover:opacity-85 bg-custom-red transition-all duration-300 ${showPhone ? "rounded-r-full" : "rounded-full delay-200"}`} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}