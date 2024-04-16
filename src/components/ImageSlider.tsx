import React, { FC, useEffect, useState } from "react";
import useHeroImages from "./hooks/useHeroImages";

const ImageSlider: FC = () => {
  const [inView, setInView] = useState(0);
  const images = useHeroImages();

  useEffect(() => {
    const interval = setInterval(() => {
      setInView((prevIndex) => (prevIndex + 1) % images.length);
    }, 3900);

    // Clearing the interval
    return () => clearInterval(interval);
  }, [inView, images.length]);

  return (
    <div
      key={inView}
      className="overflow-hidden lg:px-32 lg:py-2 lg:h-[32.5rem] ipad:px-16 ipad:py-2 h-[25.5rem] ipad:h-[17.5rem] tab:h-[22.5rem] relative"
    >
      <div
        className={`animateSlide absolute lg:rounded-2xl sm:h-full lg:h-[100%] tab:h-full`}
        style={{
          top: `-${inView * 100}%`,
          transition: "top 0.5s",
          // Added to ensure proper rendering
        }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt=""
            className={`lg:w-[90%] ipad:w-[90%] tab:w-[93.5%] md:w-[90%] sm:h-full lg:rounded-2xl  ${
              index === inView ? "block" : "hidden"
            }`}
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
