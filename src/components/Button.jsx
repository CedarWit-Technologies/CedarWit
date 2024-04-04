import React from "react";

const Button = ({ children, light, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-fit shadow-md hover:opacity-85 text-white py-3 px-6 rounded-xl font-semibold m-2 ${
        light ? "bg-lightGreen" : "bg-darkGreen"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
