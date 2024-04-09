import React from "react";

const About = () => {
  return (
    <section className="lg:px-32 lg:py-24 lg:my-4 aboutBackground-image sm:px-16 py-8">
      <h2 className="text-4xl font-semibold text-center mb-16">
        About Cedar Wit
      </h2>
      <div className="lg:grid lg:grid-cols-2  lg:items-center">
        <div>
          <img className="w-4/5 rounded-xl" src="src\assets\aboutImage.jpeg" />
        </div>
        <div>
          <p className="text-black font-normal text-2xl">
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
