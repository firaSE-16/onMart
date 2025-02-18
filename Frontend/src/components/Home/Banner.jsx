import React, { useEffect, useState, useRef } from 'react';
import data from '../../data/banner.json';

const Banner = () => {
    const [banner, setBanner] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const touchThreshold = 50;
    const bannerRef = useRef(null);

    useEffect(() => {
        setBanner(data);
    }, []);

    useEffect(() => {
        if (banner.length === 0 || isHovered) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [banner.length, isHovered, currentIndex]);

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % banner.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + banner.length) % banner.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > touchThreshold) {
            handleNext();
        } else if (touchEnd - touchStart > touchThreshold) {
            handlePrev();
        }
    };

    return (
        <div 
            className="relative h-[600px] w-full overflow-hidden group"
            ref={bannerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {banner.length > 0 ? (
                <div className="relative h-full w-full">
                    {/* Click/Touch Zones */}
                    <div 
                        className="absolute left-0 top-0 w-1/3 h-full z-20 cursor-pointer" 
                        onClick={handlePrev}
                        onTouchEnd={handlePrev}
                    />
                    <div 
                        className="absolute right-0 top-0 w-1/3 h-full z-20 cursor-pointer" 
                        onClick={handleNext}
                        onTouchEnd={handleNext}
                    />

                    {/* Image Slides */}
                    <div className="relative h-full w-full">
                        {banner.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 h-full w-full transition-transform duration-500 ease-in-out ${
                                    index === currentIndex 
                                        ? 'translate-x-0' 
                                        : index < currentIndex 
                                            ? '-translate-x-full'
                                            : 'translate-x-full'
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-20 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40">
                        <div className={`max-w-2xl space-y-4 transition-all duration-500 ${
                            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
                        }`}>
                            <h1 className="text-white font-extrabold text-4xl md:text-6xl drop-shadow-xl">
                                {banner[currentIndex].title}
                            </h1>
                            <p className="text-white/90 text-lg md:text-2xl font-medium drop-shadow-md mt-4">
                                {banner[currentIndex].description}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {banner.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-amber-400 scale-125' 
                                        : 'bg-white/50 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex h-full items-center justify-center">
                    <p className="text-white text-xl animate-pulse">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default Banner;