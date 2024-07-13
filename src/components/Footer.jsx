import Social from "./Social";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="w-full flex flex-col-reverse gap-2 justify-center items-center p-2 bg-black border-t border-stone-900 lg:flex-row lg:justify-between">
                <p className="text-white text-xs">&copy; {currentYear} GJphotography. All rights reserved</p>
                <Social vertical={false} size={24}/>
            </footer>
        </>
    )
}