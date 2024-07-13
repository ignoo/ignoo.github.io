import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function Carousel({ children: slides }) {

    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const previous = _ => {
        setCurrent(curr => curr === 0 ? slides.length - 1 : curr - 1);
    };
    const next = _ => {
        setCurrent(curr => curr === slides.length - 1 ? 0 : curr + 1);
    };

    let intervalID;
    useEffect(() => {
        if(autoPlay) {
            intervalID = setInterval(_ => {
                next()
            }, 4000);
        }
        return () => clearInterval(intervalID);
    }, [autoPlay]);

    return (
        <div className="overflow-hidden">
            <div className="flex h-full transition-transform ease-out duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>{slides}</div>
            <div className='absolute left-0 top-1/2 w-full'>
                <div className=' flex justify-between'>
                    <button onClick={_ => { setAutoPlay(false); previous() }} className='m-4 p-1 bg-white bg-opacity-15 rounded-full backdrop-blur-sm hover:scale-125 transition-all'>
                        <ChevronLeftIcon className='h-8 w-8 text-white' />
                    </button>
                    <button onClick={_ => { setAutoPlay(false); next() }} className='m-4 p-1 bg-white bg-opacity-15 rounded-full backdrop-blur-sm hover:scale-125 transition-all'>
                        <ChevronRightIcon className='h-8 w-8 text-white' />
                    </button>
                </div>
            </div>

        </div>
    )
}