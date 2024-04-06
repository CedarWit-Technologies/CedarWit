import React from "react";

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
        <button className="bg-darkGreen px-8 py-2 mr-4 rounded-xl text-white hover:bg-opacity-85">
          Contact Us
        </button>
        <button className="bg-lightGreen px-8 py-2 rounded-xl text-white hover:bg-[#8a8e7b]">
          View Portfolio
        </button>
      </div>
      <div className="px-32 py-2">
        <img className="w-full" src="images\Hero SEC Image.svg" />
      </div>
    </section>
  );
};
export default Hero;
