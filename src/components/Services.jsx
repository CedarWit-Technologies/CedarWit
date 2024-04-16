import React, { useState } from "react";
import ServicesAccordion from "./ServicesAccordion";
import useServiceImages from "./hooks/useServiceImages";

const Services = () => {
  const images = useServiceImages();
  const [inView, setInView] = useState(0);
  const putInView = (n) => {
    setInView(n);
  };

  return (
    <div className="bg-lightGreen lg:px-32 ipad:px-10 sm:px-6 py-20 flex flex-col gap-12 justify-center items-center text-3xl font-semibold text-white tab:px-16">
      Services We Provide
<<<<<<< HEAD
      <section className="flex lg:flex-row flex-col justify-center items-center w-full gap-16 ipad:gap-10 lg:gap-16 tab:flex-row">
        <span className="bg-darkGreen rounded-xl lg:w-[450px] sm:w-[300px] ipad:w-[370px] aspect-square place-content-center overflow-hidden tab:w-[450px]">
=======
      <section className="flex lg:flex-row flex-col justify-center items-center w-full gap-10 ipad:gap-10 lg:gap-16">
        <span className="bg-darkGreen rounded-xl aspect-square place-content-center overflow-hidden w-1/2 sm:w-3/4">
>>>>>>> 03e721285a5d9cc683350a40a7e62a04d94491d4
          <img
            src={images[inView]}
            alt="img"
            className="object-cover scale-150"
          />
        </span>
        <ServicesAccordion onClick={putInView} />
      </section>
    </div>
  );
};

export default Services;
