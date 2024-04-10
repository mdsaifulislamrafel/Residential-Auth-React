
import { useEffect } from 'react';
import { useState } from 'react';

const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = ['https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);
    return (
        <div className="w-full justify-center mx-auto h-[240px] md:h-[540px] overflow-hidden ">
            <div className="relative overflow-hidden">
                {/* dots */}
                <div className="flex w-full h-fit rounded-full z-50 absolute right-0 bottom-1/2 gap-1 rotate-90">
                    {sliders.map((_, inx) => (
                        <button key={inx} onClick={() => setCurrentSlider(inx)}
                            className={`rounded-full duration-300 bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}>
                        </button>
                    ))}
                </div>
                {/* slider container */}
                <div className="ease-linear duration-300 flex flex-col h-60 sm:h-96 md:h-[540px] transform-gpu relative" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
                    {/* sliders */}
                    {sliders.map((_, inx) => (
                        <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
                            <img src={_} className="w-full h-60 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;