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
    }, 3900);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [inView]);

  const images = useHeroImages();
  return (
    <div className="overflow-hidden lg:px-32 lg:py-2 ipad:px-16 ipad:py-2 h-[25.5rem] ipad:h-[17.5rem] ">
      <div className="relative flex flex-col items-center">
        <img
          src={images[inView]}
          alt=""
          className={`animateSlide absolute -translate-y-1 lg:rounded-2xl  `}
          style={{ height: "25.5rem" }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
