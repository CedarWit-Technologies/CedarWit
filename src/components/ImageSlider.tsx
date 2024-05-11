import React, { FC, useEffect, useState } from "react";
import useHeroImages from "./hooks/useHeroImages";
import useMobileHeroImages from "./hooks/useMobileHeroImages";

const ImageSlider: FC = () => {
  const [inView, setInView] = useState(0);
  const images = useHeroImages();
  const mobileImages = useMobileHeroImages();

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
      className="overflow-hidden lg:py-2 lg:h-[32.5rem] ipad:py-2 h-[25.5rem] ipad:h-[17.5rem] tab:h-[22.5rem] md:h-[20.5rem] relative flex justify-center"
    >
      <div
        className={`ipad:block sm:hidden animateSlide absolute lg:rounded-2xl sm:h-full lg:h-[100%] tab:h-full sm:w-full w-11/12`}
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
            className={`sm:h-full lg:rounded-2xl object-cover  ${
              index === inView ? "block" : "hidden"
            }`}
          />
        ))}
      </div>

      <div
        className={`sm:flex h-full w-full ipad:hidden animateSlide absolute`}
        style={{
          top: `-${inView * 100}%`,
          transition: "top 0.5s",
        }}
      >
        {mobileImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt=""
            className={`h-full w-full object-cover ${
              index === inView ? "flex" : "hidden"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
