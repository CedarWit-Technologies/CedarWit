import React, { useContext, useState } from "react";
import useServices from "./hooks/useServices";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ServiceContext } from "./ServiceContext.jsx";

const ServicesAccordion = () => {
  const services = useServices();

  const { opened, handleClick } = useContext(ServiceContext);

  return (
    <section className="flex flex-col justify-center items-center gap-3 lg:w-1/2 w-full ipad:w-full cursor-pointer tab:w-1/2 md:w-full">
      {services.map((object, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`border-white border-t border-b text-2xl w-full flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out relative ipad:text-2xl ${
            opened == index
              ? "h-auto justify-start border-l-4 sm:py-6 ipad:py-10"
              : "h-16 border-l-0"
          }`}
        >
          <span
            className={`relative flex justify-between items-center px-3 overflow-hidden transition-all duration-300 ease-in-out z-10 ipad:ml-3 ${
              opened == index && "md:-translate-y-4"
            }`}
          >
            <h1
              id={`${object.anchor}`}
              className="text-lg lg:text-2xl tracking-wider font-heading"
            >
              {object.service}
            </h1>
            <button
              className={` ${opened == index && "hidden"} rounded-full px-2`}
            >
              <IoIosArrowDown />
            </button>
            <button
              className={` ${opened !== index && "hidden"} rounded-full px-2`}
            >
              <IoIosArrowUp />
            </button>
          </span>

          <p
            className={`text-xs sm:text-[14px] ipad:text-sm md:text-base tab:text-sm font-normal lg:text-base px-3 transition-all duration-400 ease-in-out sm:leading-5 tracking-normal  ${
              opened == index
                ? "mt-2 h-auto opacity-100 ipad:ml-3 md:-translate-y-4"
                : "h-0 opacity-0"
            }`}
          >
            {object.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ServicesAccordion;
