'use client'; 

import { useEffect, useRef, useState } from 'react';
import Slider from './Slider';
import Sliders from '@/db/sliders.json'

export default function Swiper_Container() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Sliders?.sliders?.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current!);
  }, [currentIndex]);

  return (
    <div className="relative  w-full bg-[var(--accent)]/40   mx-auto overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="flex  w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {Sliders?.sliders?.map((slider, i) => (
        <div key={i} className="w-full flex-shrink-0">
            <Slider img1={slider?.img1} text={slider?.text} textColor={slider?.textColor} paragraph={slider?.paragraph} paragraphColor={slider?.paragraphColor} paragraph2={slider?.paragraph2} paragraph2Color={slider?.paragraph2Color} bgcolor={slider?.bgColor}/>
        </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-[12%] -translate-x-1/2 flex gap-2">
        {Sliders?.sliders?.map((_, i) => (
            <>
            <p className={`w-3 h-3 rounded-full cursor-pointer ${i === currentIndex ? 'bg-black' : 'bg-gray-400'}`}>
             <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-black animate-ping' : 'bg-gray-400'}`}
            />
            </p>
          
            </>
        ))}
      </div>
    </div>
  )
}
