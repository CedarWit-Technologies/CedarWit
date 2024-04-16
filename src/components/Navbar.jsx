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
      className={`lg:flex items-center justify-between lg:px-32 lg:py-4 lg:border-0 w-full md:px-12 ${
        isScrolled ? "scrolled" : ""
      } ${isToggled ? "open" : "closed"} 
      fixed top-0 z-30  px-6 py-3 border-b border-lightGreen sm:bg-white md:bg-white ipad:flex  tab:px-16 tab:border-0 `}
    >
      <div className="sm:flex sm:items-center sm:justify-between ">
        <div className="lg:w-48 w-36 md:w-40">
          <img src="\images\Logo.svg" />
        </div>

        <div className="lg:hidden ipad:hidden">
          <img
            className="cursor-pointer"
            src="src\assets\svgs\hamburgerMenu.svg"
            onClick={handleToggle}
          />
        </div>
      </div>
      <ul
        className={` lg:flex lg:border-darkGreen lg:border-2 lg:px-12 lg:py-4 lg:rounded-3xl font-bold lg:text-lg sm:bg-lightGreen sm:text-center sm:w-full  sm:z-0 sm:mt-10 sm:font-normal ipad:flex ipad:bg-white ipad:mt-0 ipad:text-md ipad:font-semibold ipad:justify-around ipad:w-2/3 tab:border-darkGreen tab:border-2 tab:rounded-3xl tab:w-3/5 tab:gap-8 tab:p-2
      
        lg:w-3/5 lg:gap-10`}
      >
        <li className="text-darkGreen cursor-pointer hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen">
          About us
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen">
          Our Services
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen">
          {" "}
          Portfolio
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 py-2 sm:text-white ipad:text-darkGreen">
          Contact us
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
