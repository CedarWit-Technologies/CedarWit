import React, { FC, useEffect, useState } from "react";
import useHeroImages from "./hooks/useHeroImages";
import useMobileHeroImages from "./hooks/useMobileHeroImages";

const ImageSlider: FC = () => {
  const [inView, setInView] = useState(0);
  const images = useHeroImages();
  const mobileImages = useMobileHeroImages();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

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
      className="overflow-hidden lg:py-2 desktop:h-[36rem] lg:h-[32.5rem] ipad:py-2 h-[25.5rem] ipad:h-[17.5rem] tab:h-[22.5rem] md:h-[20.5rem] relative flex justify-center"
    >
      {isLoading && (
        <>
          <div className="ipad:block sm:hidden absolute lg:rounded-2xl sm:h-full lg:h-[100%] tab:h-full sm:w-full w-11/12 bg-gray-200 animate-pulse-quick" />
          <div className="h-full w-full animateSlide absolute sm:flex ipad:hidden bg-gray-200 animate-pulse-quick" />
        </>
      )}

      <div
        className={`${
          isLoading ? "hidden" : "ipad:block sm:hidden"
        } animateSlide absolute lg:rounded-2xl sm:h-full lg:h-[100%] tab:h-full sm:w-full w-11/12 lg:px-8 sm:px-0`}
        style={{
          top: `-${inView * 100}%`,
          transition: "top 0.5s",
          // display: isLoading ? "none" : "ipad:block sm:hidden",
          // Added to ensure proper rendering
        }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            onLoad={handleLoad}
            alt=""
            className={`sm:h-full w-full lg:rounded-2xl object-cover  ${
              index === inView ? "block" : "hidden"
            }`}
          />
        ))}
      </div>

      <div
        className={`${
          isLoading ? "hidden" : "sm:flex ipad:hidden"
        } h-full w-full animateSlide absolute`}
        style={{
          top: `-${inView * 100}%`,
          transition: "top 0.5s",
          // display: isLoading ? "none" : "sm:flex ipad:hidden",
        }}
      >
        {mobileImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            onLoad={handleLoad}
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
