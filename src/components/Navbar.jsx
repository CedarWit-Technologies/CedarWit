import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-32 py-8">
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
