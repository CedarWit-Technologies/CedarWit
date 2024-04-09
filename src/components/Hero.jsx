import React from "react";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <section className=" text-center">
      <h1 className="lg:text-5xl text-2xl text-darkGreen mt-20 mb-8 font-semibold">
        Let’s Build Digital Products People Will Love!
      </h1>
      <p className="w-3/5 m-auto text-xl pb-8 font-medium text-black">
        We at Cedar wit strive to briing your ideas and market models with aid
        of software development, marketing and other means necesary to create a
        successful outcome with the aid of a dedicated team with different
        skillsets..
      </p>
      <div className="mb-8">
        <button className="bg-darkGreen px-8 py-3 mr-4 rounded-2xl text-white font-medium text-lg">
          Contact Us
        </button>
        <button className="bg-lightGreen px-8 py-3 mr-4 rounded-2xl text-white font-medium text-lg">
          View Portfolio
        </button>
      </div>
      <ImageSlider />
    </section>
  );
};
export default Hero;
