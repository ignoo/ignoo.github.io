import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Gear() {

    return (
        <div className="min-h-screen w-full flex flex-col justify-between overflow-y-hidden bg-black">
            <NavBar />
            <main className="lg:mt-44 mt-20 flex flex-col items-center">
                <section className="flex flex-col-reverse w-4/5 lg:w-auto lg:flex-row justify-center gap-4">
                    <img src="./images/fotikas.jpg" alt="camera" className="lg:w-2/5 rounded-2xl object-cover" />
                    <div className="text-white lg:w-2/5 text-right font-mono">
                        <h2 className="text-4xl mb-4 mt-10">FOTIKAS</h2>
                        <p>Loremm ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus dicta tempore provident quaerat veritatis, porro magnam labore nam culpa? Eum odio aperiam repudiandae delectus similique architecto pariatur suscipit et.</p>
                    </div>
                </section>
                <section className="flex flex-col w-4/5 lg:w-auto lg:flex-row justify-center gap-4">
                    <div className="text-white lg:w-2/5 text-left font-mono">
                        <h2 className="text-4xl mb-4 mt-20">STOVAI ŠVIESOS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus dicta tempore provident quaerat veritatis, porro magnam labore nam culpa? Eum odio aperiam repudiandae delectus similique architecto pariatur suscipit et.</p>
                    </div>
                    <img src="./images/stovaisviesa.jpg" alt="lights" className="lg:w-2/5 rounded-2xl object-cover" />
                </section>
                <section className="flex flex-col-reverse w-4/5 lg:w-auto lg:flex-row justify-center gap-4">
                    <img src="./images/laptopas.jpg" alt="laptop" className="lg:w-2/5 rounded-2xl object-cover mb-10" />
                    <div className="text-white lg:w-2/5 text-right font-mono">
                        <h2 className="text-4xl mb-4 mt-10">FOTOŠOPAS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus dicta tempore provident quaerat veritatis, porro magnam labore nam culpa? Eum odio aperiam repudiandae delectus similique architecto pariatur suscipit et.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}