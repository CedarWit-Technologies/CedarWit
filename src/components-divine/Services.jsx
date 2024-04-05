import React from "react";
import ServicesAccordion from "./ServicesAccordion";

const Services = () => {
  return (
    <div className="bg-lightGreen px-32 py-20 flex flex-col gap-12 justify-center items-center text-3xl font-semibold text-white">
      Services We Provide
      <section className="flex justify-center items-center w-full gap-16">
        <span className="bg-darkGreen rounded-xl w-[450px] aspect-square flex justify-center items-center">
          img <img src="" alt="" />
        </span>
        <ServicesAccordion />
      </section>
    </div>
  );
};

export default Services;
