import React from "react";
import Transition from "./Transition";
import aboutImg from "../assets/aboutImage.jpeg";

const About = () => {
  return (
    <Transition>
      <section
        id="about"
        className="lg:px-32 lg:py-24 lg:my-4 tab:my-4 aboutBackground-image px-8 sm:mt-20 py-16 ipad:px-16"
      >
        <h2 className="lg:text-4xl tab:text-4xl font-semibold text-center lg:mb-16 mb-12 text-3xl">
          About Cedar Wit
        </h2>
        <div className="lg:grid lg:grid-cols-2 ipad:grid ipad:grid-cols-2 items-center ipad:gap-6 tab:gap-0">
          <div>
            <img
              className="lg:w-4/5 sm:m-auto lg:rounded-xl sm:mb-8 sm:w-[24rem] rounded tab:w-4/5"
              src={aboutImg}
            />
          </div>
          <div>
            <p className="text-black font-normal lg:text-xl text-md sm:text-center  ipad:text-left ipad:text-sm md:text-lg">
              CedarWit Technologies is a company that aims to bring forth the
              ideas of clients to reality whether in software development,
              product and graphic design, branding and printing services through
              the aid of our dedicated team with professional skills. We also
              strive to create an online presence for our clients through our
              digital marketing services. We simply empower various businesses
              and organizations with smart and innovative solutions that foster
              growth, stability and outstanding success in an ever evolving
              digital landscape.
            </p>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default About;
