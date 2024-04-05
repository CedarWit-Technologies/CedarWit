import React from "react";

const About = () => {
  return (
    <section className="px-32 py-24 my-4 aboutBackground-image">
      <h2 className="text-4xl font-semibold text-center mb-16">
        About Cedar Wit
      </h2>
      <div className="grid grid-cols-2  items-center">
        <div>
          <img className="w-4/5 rounded-xl" src="src\assets\aboutImage.jpeg" />
        </div>
        <div>
          <p className="text-black font-normal">
            Cedar wit technologies is company that aims to bring forth the ideas
            of clients into reality whether in software development, product and
            graphic design, branding and printing services, following the right
            principles and attaining an exemplary finished product.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
