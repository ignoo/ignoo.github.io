import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {

    const slides = [
        "./images/carousel/lg1.jpg",
        "./images/carousel/lg2.jpg",
        "./images/carousel/lg3.jpg",
        "./images/carousel/lg4.jpg",
        "./images/carousel/lg5.jpg",
        "./images/carousel/lg6.jpg",
        "./images/carousel/lg7.jpg",
    ]

    return (
        <div className="w-full min-h-screen flex flex-col justify-between bg-blue-300">
            <NavBar />
            <div className="h-full">
                <Carousel>
                    {slides.map(slide => <img src={slide} className="object-cover min-h-[95vh]" />)}
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}