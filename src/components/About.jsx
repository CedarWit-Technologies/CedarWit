import React from "react";
import Transition from "./Transition";
import aboutImg from "../assets/aboutImage.jpeg";
import useAbout from "./hooks/useAbout";
import { useState } from "react";
import bg from "../assets/AboutBackgroundImage.svg";

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
        className="relative lg:px-32 lg:py-24 lg:my-4 tab:my-4 px-8 sm:mt-20 py-16 ipad:px-12 sm:px-4 md:px-12"
      >
        <img
          src={bg}
          alt=""
          className="-z-10 left-0 absolute scale-[1.5] top-[14rem] ipad:-top-[20rem] tab:-top-[30rem] lg:-top-[38rem] opacity-40"
        />
        <h2 className=" desktop:text-5xl lg:text-4xl tab:text-4xl font-semibold text-center lg:mb-16 mb-12 text-3xl font-heading tracking-wider">
          About CedarWit
        </h2>
        <div className="lg:grid lg:grid-cols-2 ipad:grid ipad:grid-cols-2 md:grid md:grid-cols-2 md:gap-6 tab:gap-0 ">
          <div>
            <img
              className="lg:w-4/5 sm:m-auto lg:rounded-xl sm:mb-8 sm:w-[24rem] rounded tab:w-4/5 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01]"
              src={aboutImg}
            />
          </div>
          <div className="sm:px-4">
            <div className="flex justify-start gap-10 sm:text-left ">
              <div>
                <h5
                  className={`text-darkGreen transition-none duration-300 ease-in-out font-bold hover:cursor-pointer mb-4 desktop:text-xl tracking-wider font-heading ${
                    inView ? "border-b-2 border-darkGreen" : "border-none "
                  }`}
                  onClick={prev}
                >
                  Mission and Vision
                </h5>
              </div>
              <div>
                <h5
                  className={`text-darkGreen transition-none duration-300 ease-in-out font-bold hover:cursor-pointer mb-4 desktop:text-xl tracking-wider font-heading ${
                    !inView ? "border-b-2 border-darkGreen" : "border-none "
                  }`}
                  onClick={next}
                >
                  Core Values
                </h5>
              </div>
            </div>
            <div className="text-sm desktop:text-lg">
              {content[inView ? 0 : 1].description.map((el, id) => (
                <p key={id} className="pb-3 text-black">
                  {el}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default About;
