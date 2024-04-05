import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" text-center">
      <h1 className="text-5xl text-darkGreen mt-20 mb-8 ">
        Let’s Build digital products people will love!
      </h1>
      <p className="w-3/5 m-auto text-xl mb-8 font-medium">
        We at Cedar wit strive to briing your ideas and market models with aid
        of software development, marketing and other means necesary to create a
        successful outcime with the aid of a dedicated team with different
        skillsets..
      </p>
      <div className="mb-8">
        <Button> Contact Us</Button>
        <button className="bg-lightGreen rounded-xl py-3 px-6 font-semibold text-white">
          View Portfolio
        </button>
      </div>
      <div className="px-32 py-2">
        <img className="w-full " src="\images\Hero SEC Image.svg" />
      </div>
    </section>
  );
};
export default Hero;
