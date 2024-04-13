import React, { useState } from "react";
import useServices from "./hooks/useServices";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ServicesAccordion = ({ onClick }) => {
  const services = useServices();
  const [opened, setOpened] = useState(0);
  const handleClick = (index) => {
    setOpened(index);
    onClick(index);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-3 lg:w-1/2 w-full ipad:w-3/4 cursor-pointer">
      {services.map((object, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`border-white border-t border-b text-2xl w-full flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out relative ipad:text-2xl ${
            opened == index
              ? "h-44 justify-start border-l-4 sm:h-48 lg:h-44 ipad:h-72"
              : "h-20 border-l-0"
          }`}
        >
          <span className="relative flex justify-between items-center px-3 overflow-hidden transition-all duration-300 ease-in-out z-10 ipad:ml-3">
            <h1>{object.service}</h1>
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
            className={`text-sm sm:text-xs font-normal px-3 transition-all duration-300 ease-in-out ${
              opened == index
                ? "mt-2 sm:h-24 lg:h-20 ipad:h-40 ipad:text-base opacity-100 ipad:ml-3"
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
