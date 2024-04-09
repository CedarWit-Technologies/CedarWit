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
      className={`flex items-center justify-between px-32 py-8  w-full ${
        isScrolled ? "scrolled" : ""
      } fixed top-0 z-30 transition ease-in-out `}
    >
      <div>
        <img src="\images\Logo.svg" />
      </div>
      <ul className="flex gap-8 border-black border-2 px-8 py-2 rounded-2xl">
        <li className="text-darkGreen font-semibold cursor-pointer hover:opacity-75">
          About us
        </li>
        <li className="text-darkGreen font-semibold cursor-pointer hover:opacity-75">
          Our Services
        </li>
        <li className="text-darkGreen font-semibold cursor-pointer hover:opacity-75">
          {" "}
          Portfolio
        </li>
        <li className="text-darkGreen font-semibold cursor-pointer hover:opacity-75">
          Contact us
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
