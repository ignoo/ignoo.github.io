import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Gallery() {

    return (
        <div className="min-h-screen flex flex-col justify-between overflow-y-hidden bg-black text-white">
            <NavBar />
            <section className="w-full flex flex-wrap justify-center gap-3 mt-8 lg:mt-28">
                <div className="w-11/12 h-[30vh] lg:w-[30%] overflow-hidden">
                    <Link to="#" className=""><div className="bg-[url('../images/carousel/lg1.jpg')] bg-cover saturate-0 bg-no-repeat h-full bg-center flex justify-center items-center hover:saturate-100 hover:scale-150 transition-all duration-700"><p className="text-4xl font-extrabold opacity-80">Vestuvės</p></div></Link>
                </div>
                <div className="w-11/12 h-[30vh] lg:w-[60%] overflow-hidden">
                    <Link to="#" className=""><div className="bg-[url('../images/carousel/lg2.jpg')] bg-cover saturate-0 bg-no-repeat h-full bg-center flex justify-center items-center hover:saturate-100 hover:scale-150 transition-all duration-700"><p className="text-4xl font-extrabold opacity-80">Krikštynos</p></div></Link>
                </div>
                <div className="w-11/12 h-[30vh] lg:w-[60%] overflow-hidden">
                    <Link to="#" className=""><div className="bg-[url('../images/carousel/lg3.jpg')] bg-cover saturate-0 bg-no-repeat h-full bg-center flex justify-center items-center hover:saturate-100 hover:scale-150 transition-all duration-700"><p className="text-4xl font-extrabold opacity-80">Portretai</p></div></Link>
                </div>
                <div className="w-11/12 h-[30vh] lg:w-[30%] overflow-hidden">
                    <Link to="#" className=""><div className="bg-[url('../images/carousel/lg4.jpg')] bg-cover saturate-0 bg-no-repeat h-full bg-center flex justify-center items-center hover:saturate-100 hover:scale-150 transition-all duration-700"><p className="text-4xl font-extrabold opacity-80">Porų fotosesijos</p></div></Link>
                </div>
                <div className="w-11/12 h-[30vh] lg:w-[30%] overflow-hidden">
                    <Link to="#" className=""><div className="bg-[url('../images/carousel/lg5.jpg')] bg-cover saturate-0 bg-no-repeat h-full bg-center flex justify-center items-center hover:saturate-100 hover:scale-150 transition-all duration-700"><p className="text-4xl font-extrabold opacity-80">Šeimos</p></div></Link>
                </div>
                <div className="w-11/12 h-[30vh] lg:w-[60%] overflow-hidden">
                    <Link to="#" className=""><div className="bg-[url('../images/carousel/lg6.jpg')] bg-cover saturate-0 bg-no-repeat h-full bg-center flex justify-center items-center hover:saturate-100 hover:scale-150 transition-all duration-700"><p className="text-4xl font-extrabold opacity-80">Renginiai</p></div></Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}