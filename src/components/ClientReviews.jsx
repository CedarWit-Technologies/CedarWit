import React, { useState } from "react";
import ClientReviewsCarousel from "./ClientReviewsCarousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ClientReviews = () => {
  const array = [...Array(3).keys()];
  const [inView, setInview] = useState(0);
  const previous = () => {
    inView !== 0 && setInview((prev) => prev - 1);
  };
  const next = () => {
    inView !== 2 ? setInview((prev) => prev + 1) : setInview(0);
  };
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center overflow-hidden w-[1100px] rounded-3xl">
        <div className="bg-white absolute translate-y-[170px] translate-x-[405px] z-10 flex justify-center items-center text-black rounded-tl-3xl rounded-br-3xl border">
          <button
            onClick={() => previous()}
            className="flex flex-col justify-center items-center py-2 px-10 border-r"
          >
            <GoArrowLeft /> Prev
          </button>
          <button
            onClick={() => next()}
            className="flex flex-col justify-center items-center py-2 px-10 border-black"
          >
            <GoArrowRight />
            Next
          </button>
        </div>
        <div className="absolute z-10 flex gap-1">
          {array.map((_, index) => (
            <span
              key={index}
              className={`transiton duration-500 ease-in-out rounded-full h-[0.6rem] flex translate-y-[220px] ${
                index == inView ? "w-4 bg-darkGreen" : "w-[0.6rem] bg-white"
              }`}
            ></span>
          ))}
        </div>
        <div
          className={`rounded-3xl flex transition-all duration-300 ease-in-out`}
        >
          <ClientReviewsCarousel id={inView} />
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
