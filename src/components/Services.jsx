import React, { useState, useContext } from "react";
import ServicesAccordion from "./ServicesAccordion";
import useServiceImages from "./hooks/useServiceImages";
import Transition from "./Transition";
import { ServiceContext } from "./ServiceContext";

const Services = () => {
  const images = useServiceImages();
  const { opened, handleClick } = useContext(ServiceContext);

  return (
    <Transition>
      <div className="bg-lightGreen lg:px-32 py-20 flex flex-col gap-12 lg:justify-between items-center text-4xl font-semibold text-white tab:px-16 sm:px-6 md:px-12 ipad:px-12 font-heading tracking-wider">
        Services We Provide
        <section className="flex lg:flex-row flex-col justify-center desktop:justify-around items-center w-full gap-16 ipad:gap-10 lg:gap-16 tab:flex-row ">
          <span className="bg-darkGreen rounded-xl lg:w-[450px] sm:w-[300px] md:w-[380px] ipad:w-[370px] aspect-square place-content-center overflow-hidden tab:w-[450px]">
            <img
              id="services"
              src={images[opened]}
              alt="img"
              className="object-cover scale-150 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.75] "
            />
          </span>
          <ServicesAccordion />
        </section>
      </div>
    </Transition>
  );
};

export default Services;
