import React from "react";

const About = () => {
  return (
    <section className="lg:px-32 lg:py-24 lg:my-4 aboutBackground-image px-8 py-20">
      <h2 className="lg:text-4xl font-semibold text-center lg:mb-16 mb-12 text-3xl">
        About Cedar Wit
      </h2>
      <div className="lg:grid lg:grid-cols-2  lg:items-center">
        <div>
          <img
            className="lg:w-4/5 sm:m-auto lg:rounded-xl sm:mb-8 sm:w-[25rem] rounded"
            src="src\assets\aboutImage.jpeg"
          />
        </div>
        <div>
          <p className="text-black font-normal lg:text-2xl text-lg sm:text-center">
            Cedar wit technologies is company that aims to bring forth the ideas
            of clients into reality whether in software development, product and
            graphic design, branding and printing services, following the right
            principles and attaining an exemplary finished product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
