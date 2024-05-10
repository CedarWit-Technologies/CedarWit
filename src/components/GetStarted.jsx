import React from "react";
import Transition from "./Transition";

const GetStarted = () => {
  return (
    <Transition>
      <div className="bg-darkGreen text-white text-center lg:px-32 lg:py-8 mt-8 p-8 rounded-2xl">
        <h1 className="lg:text-4xl text-3xl font-semibold mb-4">Get Started</h1>
        <p className="mb-4 lg:text-xl tab:text-xl">
          At Cedarwit, we're committed to transforming your ideas and market
          concepts into successful outcomes through software development,
          marketing strategies, and other essential services. Our dedicated
          team, equipped with diverse skill sets ensures that your vision is
          realized effectively.
        </p>
        <button className="bg-lightGreen px-8 py-2 rounded-xl text-white text-md lg:text-lg tab:text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-custom3">
          <a href="#contact"> Contact Us</a>
        </button>
      </div>
    </Transition>
  );
};
export default GetStarted;
