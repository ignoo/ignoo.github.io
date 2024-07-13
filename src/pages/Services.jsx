import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Services() {

    return (
        <div className="min-h-screen flex flex-col justify-between overflow-y-hidden bg-black text-white">
            <NavBar />
            <h1 className="text-3xl font-extrabold flex justify-center">Paslaugų dar neteikiu.</h1>
            <Footer />
        </div>
    )
}