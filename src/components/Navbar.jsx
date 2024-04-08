import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-32 py-4">
      <div>
        <img src="\images\Logo.svg" />
      </div>
      <ul className="flex gap-10 border-darkGreen border-2 px-12 py-4 rounded-3xl font-bold text-lg">
        <li className="text-darkGreen cursor-pointer hover:opacity-75">
          About us
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75">
          Our Services
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75">
          {" "}
          Portfolio
        </li>
        <li className="text-darkGreen cursor-pointer hover:opacity-75">
          Contact us
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
