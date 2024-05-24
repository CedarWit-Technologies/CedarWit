import React, { useContext } from "react";
import ImageSlider from "./ImageSlider";
import Transition from "./Transition";
import bg from "../assets/BackgroundImg.svg";
import { useNavigate } from "react-router-dom";
import { PageContext } from "./PageContext";

const Hero = () => {
  const navigate = useNavigate();
  const { page, setPage } = useContext(PageContext);

  const goToContact = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "contact" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("contact");
      el.scrollIntoView();
    }
  };
  const goToPortfolio = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "portfolio" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("portfolio");
      el.scrollIntoView();
    }
  };
  return (
    <Transition>
      <section className="text-center sm:pt-16 pt-24 tab:pb-8">
        <img
          src={bg}
          alt=""
          className="-z-10 absolute sm:scale-[2] lg:top-[4rem] ipad:top-[8rem] sm:top-[26rem] opacity-60"
        />
        <div className="sm:p-8 ipad:px-16">
          <h1 className="lg:text-5xl text-3xl text-darkGreen mt-20 sm:mt-16 mb-8 font-semibold ipad:text-4xl sm:text-pretty">
            Let’s Build Digital Products People Will Love!
          </h1>
          <p className="lg:w-3/5 m-auto lg:text-xl text-lg pb-8 lg:font-medium text-black w-full font-normal ipad:text-xl">
            At Cedarwit Technologies, we specialize in turning your creative
            concepts into reality through our exceptional services. We're
            dedicated to providing everything your brand needs to thrive and
            grow.
          </p>
          <div className="lg:mb-8 sm:mb-4 ipad:mb-6 md:mb-8">
            <button
              onClick={goToContact}
              className="bg-darkGreen lg:px-8 lg:py-3 mr-4 rounded-2xl text-white font-medium lg:text-lg text-md  mb-5 px-4 py-3 ipad:text-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              Contact Us
            </button>
            <button
              onClick={goToPortfolio}
              className="bg-lightGreen lg:px-8   rounded-2xl text-white font-medium lg:text-lg text-md  px-4 py-3 mb-5 ipad:text-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              View Portfolio
            </button>
          </div>
        </div>
        <ImageSlider />
      </section>
    </Transition>
  );
};
export default Hero;
