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
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-3xl h-full overflow-hidden shadow-black shadow-2xl">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-opacity ease-in-out duration-500 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <div className="w-full h-full flex-none shadow-lg">
          <img
            src={c1img}
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
        </div>
        <div className="w-full h-full flex-none">
          <img
            src={c2img}
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>
        <div className="w-full h-full flex-none">
          <img
            src={c3img}
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>
        <div className="w-full h-full flex-none">
          <img
            src={c4img}
            className="w-full h-full object-cover"
            alt="Slide 4"
          />
        </div>
        <div className="w-full h-full flex-none">
          <img
            src={c5img}
            className="w-full h-full object-cover"
            alt="Slide 5"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;