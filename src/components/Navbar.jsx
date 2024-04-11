import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const handleScroll = () => {
    setisScrolled(window.scrollY > 0 ? true : false);
  };
  window.addEventListener("scroll", handleScroll);

  const [isToggled, setisToggled] = useState(false);
  const handleToggle = () => {
    setisToggled(!isToggled);
  };

  return (
    <nav
      className={`lg:flex items-center justify-between lg:px-32 lg:py-4 lg:border-0 w-full lg:${
        isScrolled ? "scrolled" : ""
      } ${isToggled ? "open" : "closed"} 
      fixed top-0 z-30 transition ease-in-out  px-6 py-6 border-b border-lightGreen bg-white `}
    >
      <div className="sm:flex sm:items-center sm:justify-between ">
        <div className="lg:w-48 w-36 ">
          <img src="\images\Logo.svg" />
        </div>

        <div className="lg:hidden ">
          <img
            className="cursor-pointer"
            src="src\assets\svgs\hamburgerMenu.svg"
            onClick={handleToggle}
          />
        </div>
      </div>
      <ul
        className={` lg:flex lg:gap-10 lg:border-darkGreen lg:border-2 lg:px-12 lg:py-4 lg:rounded-3xl font-bold text-lg sm:bg-lightGreen sm:text-center sm:w-full  sm:z-0 sm:mt-10 sm:font-normal`}
      >
        <li className="text-darkGreen cursor-pointer hover:opacity-75 border-b-2 border-white py-2 sm:text-white ">
          About us
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 border-b-2 border-white py-2 sm:text-white ">
          Our Services
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 border-b-2 border-white py-2 sm:text-white ">
          {" "}
          Portfolio
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 py-2 sm:text-white ">
          Contact us
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
