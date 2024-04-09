import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const handleScroll = () => {
    setisScrolled(window.scrollY > 0 ? true : false);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <nav
      className={`flex items-center justify-between lg:px-32 lg:py-4 lg:border-0 w-full ${
        isScrolled ? "scrolled" : ""
      } fixed top-0 z-30 transition ease-in-out  px-12 py-8 border-b`}
    >
      <div className="lg:w-48 w-36">
        <img src="\images\Logo.svg" />
      </div>

      <div className="lg:hidden">
        <img src="src\assets\svgs\hamburgerMenu.svg" />
      </div>
      <ul className="sm:hidden lg:flex lg:gap-10 lg:border-darkGreen lg:border-2 lg:px-12 lg:py-4 lg:rounded-3xl font-bold text-lg sm:bg-lightGreen sm:text-center sm:w-full">
        <li className="text-darkGreen cursor-pointer hover:opacity-75 border-b-2 border-white py-1">
          About us
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 border-b-2 border-white py-1">
          Our Services
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 border-b-2 border-white py-1">
          {" "}
          Portfolio
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75 py-1">
          Contact us
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
