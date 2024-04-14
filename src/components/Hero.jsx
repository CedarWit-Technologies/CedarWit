import React from "react";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <section className=" text-center sm:pt-16 pt-24">
      <div className=" sm:p-8 ipad:px-16">
        <h1 className="lg:text-5xl text-3xl text-darkGreen mt-20 sm:mt-16 mb-8 font-semibold ipad:text-4xl">
          Let’s Build Digital Products People Will Love!
        </h1>
        <p className="lg:w-3/5 m-auto lg:text-xl text-lg pb-8 lg:font-medium text-black w-full font-normal ipad:text-xl">
          We at Cedar wit strive to briing your ideas and market models with aid
          of software development, marketing and other means necesary to create
          a successful outcome with the aid of a dedicated team with different
          skillsets..
        </p>
        <div className="lg:mb-8 sm:mb-4 ipad:mb-6 md:mb-8">
          <button className="bg-darkGreen lg:px-8 lg:py-3 mr-4 rounded-2xl text-white font-medium lg:text-lg text-md  px-4 py-3 ipad:text-lg">
            Contact Us
          </button>
          <button className="bg-lightGreen lg:px-8 lg:py-3  rounded-2xl text-white font-medium lg:text-lg text-md  px-4 py-3 ipad:text-lg">
            View Portfolio
          </button>
        </div>
      </div>
      <ImageSlider />
    </section>
  );
};
export default Hero;
