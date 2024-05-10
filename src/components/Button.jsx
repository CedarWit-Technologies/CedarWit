import React from "react";

const Button = ({ children, light, onClick, customClasses }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${customClasses} w-fit hover:shadow-md hover:-translate-y-[1px] transition-all duration-300 ease-in-out text-white ${
        light ? "bg-lightGreen" : "bg-darkGreen"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
