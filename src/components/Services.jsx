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
    <div className="bg-lightGreen lg:px-32 ipad:px-10 sm:px-10 py-20 flex flex-col gap-12 justify-center items-center text-3xl font-semibold text-white">
      Services We Provide
      <section className="flex lg:flex-row flex-col justify-center items-center w-full gap-10 ipad:gap-10 lg:gap-16">
        <span className="bg-darkGreen rounded-xl aspect-square place-content-center overflow-hidden w-1/2 sm:w-3/4">
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
