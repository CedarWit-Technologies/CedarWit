import React from "react";
import { useState, useEffect } from "react";
import hamburgerMenu from "../assets/svgs/hamburgerMenu.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "./PageContext";

const PortfolioNavbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const navigate = useNavigate();
  const { page, setOnPage } = useContext(PageContext);

  const goToHome = () => {
    navigate("/", { state: { to: "about" } });
  };
  const handleScroll = () => {
    setisScrolled(window.scrollY > 0 ? true : false);
  };
  window.addEventListener("scroll", handleScroll);

  const [isToggled, setisToggled] = useState(false);
  const handleToggle = () => {
    setisToggled(!isToggled);
  };

  const handleClick = () => {
    setisToggled(false);
  };

  const goToAbout = () => {
    handleClick();
    navigate("/", { state: { to: "about" } });
  };
  const goToServices = () => {
    handleClick();
    navigate("/", { state: { to: "services" } });
  };
  const goToContact = () => {
    handleClick();
    navigate("/", { state: { to: "contact" } });
   };

  useEffect(() => {
    var scrollY = window.scrollY;
    var newScroll;

    window.addEventListener("scroll", function () {
      newScroll = window.scrollY;
      if (newScroll < 100) {
        document.querySelector("nav")?.classList.add("opacity-0");
      } else {
        if (scrollY > newScroll) {
          document
            .querySelector("nav")
            ?.classList.remove("-translate-y-[300px]");
          document.querySelector("nav")?.classList.remove("opacity-0");
        } else {
          document.querySelector("nav")?.classList.add("-translate-y-[300px]");
        }
      }
      scrollY = newScroll;
    });
  }, []);

  return (
    <nav
      className={`z-[999] lg:flex items-center justify-between lg:px-32 lg:py-4 lg:border-0 w-full md:px-12 transition-all duration-300 ease-in-out ${
        isScrolled ? "scrolled" : ""
      } ${isToggled ? "open shadow-md" : "closed"} 
      fixed top-0 z-30  px-6 py-3 border-lightGreen sm:bg-white md:bg-white ipad:flex  tab:px-16 tab:border-0`}
    >
      <div className="sm:flex sm:items-center sm:justify-between ">
        <a href="/" className="lg:w-48 w-36 md:w-40">
          <img src="\images\Logo.svg" />
        </a>

        <div className="lg:hidden ipad:hidden">
          <img
            className="cursor-pointer"
            src={hamburgerMenu}
            onClick={handleToggle}
          />
        </div>
      </div>
      <ul
        className={` lg:flex lg:border-darkGreen lg:border-2 lg:px-12 lg:py-4 lg:rounded-3xl font-bold lg:text-lg sm:bg-lightGreen sm:text-center sm:w-full  sm:z-0 sm:mt-10 sm:font-normal ipad:flex ipad:bg-white ipad:mt-0 ipad:text-md ipad:font-semibold ipad:justify-around ipad:w-2/3 tab:border-darkGreen tab:border-2 tab:rounded-3xl tab:w-3/5 tab:gap-8 tab:p-2
        lg:w-3/5 lg:gap-10`}
      >
        <li
          onClick={goToAbout}
          className="text-darkGreen cursor-pointer ipad:hover:border-b-2 ipad:hover:border-lime-500  
        lg:hover:border-none lg:hover:opacity-75
        border-b-2 md:hover:border-lime-500 
        tab:hover:border-none tab:hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen"
        >
          About us
        </li>

        <li
          onClick={goToServices}
          className="text-darkGreen cursor-pointer ipad:hover:border-b-2 ipad:hover:border-lime-500
         lg:hover:border-none lg:hover:opacity-75  md:hover:border-b-2 md:hover:border-lime-500 
         tab:hover:border-none tab:hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen"
        >
          Our Services
        </li>

        <li
          className="text-darkGreen cursor-pointer  ipad:hover:border-b-2 ipad:hover:border-lime-500
         lg:hover:border-none lg:hover:opacity-75  md:hover:border-b-2 md:hover:border-lime-500  
         tab:hover:border-none tab:hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen"
        >
          Portfolio
        </li>

        <li
          onClick={goToContact}
          className="text-darkGreen cursor-pointer ipad:hover:border-b-2 ipad:hover:border-lime-500
         lg:hover:border-none lg:hover:opacity-75  
         tab:hover:border-none tab:hover:opacity-75 md:hover:border-b-2 md:hover:border-lime-500 py-2 sm:text-white ipad:text-darkGreen"
        >
          Contact us
        </li>
      </ul>
    </nav>
  );
};
export default PortfolioNavbar;
