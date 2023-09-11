"use client"

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface SliderProps {
  children: ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 550) setSlidesToShow(1);
      else if (width <= 764) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();  // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = children.length - slidesToShow;
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [slidesToShow, currentIndex, children.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(timer);
  }, [currentIndex, slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % (children.length - slidesToShow + 1));
  };

  return (
    <div className="flex flex-col items-center overflow-hidden relative" ref={containerRef}>
      <div className="flex transition-transform duration-500 ease-in-out space-x-2" style={{ transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)` }}>
        {React.Children.map(children, (child, index) => (
          <div 
            className={`flex-none w-full sm:w-1/2 md:w-1/3`}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 flex space-x-1">
        {Array.from({ length: children.length - slidesToShow + 1 }).map((_, index) => (
          <div 
            className={`h-2 w-2 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
  
}

export default Slider;
