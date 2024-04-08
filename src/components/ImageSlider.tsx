import React, { FC, useEffect, useState } from "react";
import useHeroImages from "./hooks/useHeroImages";

const ImageSlider: FC = () => {
  const [inView, setInView] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView !== 3) {
        setInView(inView + 1);
      } else {
        setInView(0);
      }
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [inView]);

  const images = useHeroImages();
  return (
    <div className="overflow-hidden px-32 py-2 h-[25.5rem]">
      <div className="relative flex flex-col items-center">
        <img
          src={images[inView]}
          alt=""
          className={`animateSlide absolute -translate-y-1 rounded-2xl`}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
