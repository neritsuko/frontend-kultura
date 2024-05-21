// Slider.tsx
import React, { useState, useEffect } from 'react';
import './slider.css';

interface SliderProps {
  banners: string[];
}

const Slider: React.FC<SliderProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Меняйте баннер каждые 3 секунды

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="slider">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt={`Banner ${index + 1}`}
          className={`slider-img ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slider;
