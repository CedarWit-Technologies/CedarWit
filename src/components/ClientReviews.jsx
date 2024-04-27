import React, { useState } from "react";
import ClientReviewsCarousel from "./ClientReviewsCarousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Transition from "./Transition";

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
    <Transition>
      <section className="w-full flex justify-center items-center">
        {/* carousel container */}
        <div className="flex justify-center items-center overflow-hidden rounded-3xl relative bg-blue-100 mx-2">
          {/* three dots indicator */}
          <div className="absolute z-20 flex gap-1 bottom-[4.65rem] lg:bottom-6">
            {array.map((_, index) => (
              <span
                key={index}
                className={`transiton duration-500 ease-in-out rounded-full h-[0.6rem] flex ${
                  index == inView ? "w-4 bg-darkGreen" : "w-[0.6rem] bg-white"
                }`}
              ></span>
            ))}
          </div>

          {/* carousel cards */}
          <div
            className={`rounded-3xl flex transition-all duration-300 ease-in-out`}
          >
            <ClientReviewsCarousel id={inView} />
          </div>

          {/* prev and next buttons */}
          <div className="bg-white absolute bottom-0 right-0 z-10 flex justify-center items-center text-black rounded-tl-3xl rounded-br-3xl border">
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
        </div>
      </section>
    </Transition>
  );
};

export default ClientReviews;
