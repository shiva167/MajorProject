import React, { useState, useEffect } from "react";
import c1img from "../assets/1.png";
import c2img from "../assets/2.png";
import c3img from "../assets/3.png";
import c4img from "../assets/4.png";
import c5img from "../assets/5.png";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-2 w-full rounded-3xl h-44 sm:h-60 md:h-96 lg:h-[25rem] overflow-hidden shadow-black shadow-2xl">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {[c1img, c2img, c3img, c4img, c5img].map((img, index) => (
          <div key={index} className="w-full h-full flex-none">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
