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
    <section className="flex flex-col justify-center items-center gap-3 w-1/2 cursor-pointer">
      {services.map((object, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`border-white border-t border-b p-2 text-2xl w-full flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out relative ${
            opened == index ? "h-44 border-l-4" : "h-20 border-l-0"
          }`}
        >
          <span className="relative flex justify-between items-center px-3 overflow-hidden transition-all duration-300 ease-in-out z-10">
            <h1>{object.service}</h1>{" "}
            <button
              className={` ${opened == index && "hidden"} rounded-full p-2`}
            >
              <IoIosArrowDown />
            </button>
            <button
              className={` ${opened !== index && "hidden"} rounded-full p-2`}
            >
              <IoIosArrowUp />
            </button>
          </span>
          <p
            className={`text-sm font-normal px-3 transition-all duration-300 ease-in-out  ${
              opened == index ? "mt-2 h-24 opacity-100" : "h-0 opacity-0"
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
