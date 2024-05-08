import React from "react";
import Transition from "./Transition";
import aboutImg from "../assets/aboutImage.jpeg";
import useAbout from "./hooks/useAbout";
import { useState } from "react";

const About = () => {
  const content = useAbout();
  const [inView, setInView] = useState(true);
  const next = () => {
    setInView(false);
  };
  const prev = () => {
    setInView(true);
  };

  return (
    <Transition>
      <section
        id="about"
        className="lg:px-32 lg:py-24 lg:my-4 tab:my-4 aboutBackground-image px-8 sm:mt-20 py-16 ipad:px-16"
      >
        <h2 className="lg:text-4xl tab:text-4xl font-semibold text-center lg:mb-16 mb-12 text-3xl">
          About Cedar Wit
        </h2>
        <div className="lg:grid lg:grid-cols-2 ipad:grid ipad:grid-cols-2  ipad:gap-6 tab:gap-0">
          <div>
            <img
              className="lg:w-4/5 sm:m-auto lg:rounded-xl sm:mb-8 sm:w-[24rem] rounded tab:w-4/5"
              src={aboutImg}
            />
          </div>
          <div className="sm:px-4">
            <div className="flex justify-between sm:text-left ">
              <div>
                <h5
                  className={`text-darkGreen   font-bold hover:cursor-pointer mb-4 ${
                    inView ? "border-b-2 border-darkGreen" : "border-none"
                  }`}
                  onClick={prev}
                >
                  Mission and Vison
                </h5>
              </div>
              <div>
                <h5
                  className={`text-darkGreen   font-bold hover:cursor-pointer mb-4 ${
                    !inView ? "border-b-2 border-darkGreen" : "border-none"
                  }`}
                  onClick={next}
                >
                  Core Values
                </h5>
              </div>
            </div>
            <p className="text-sm">{content[inView ? 0 : 1].description}</p>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default About;
