import React from "react";

const Button = ({
  children,
  light,
  onClick,
  customClasses,
  noHover = false,
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${customClasses} w-fit hover:shadow-md  transition-all duration-300 ease-in-out text-white ${
        light ? "bg-lightGreen" : "bg-darkGreen"
      } ${!noHover && "hover:-translate-y-[1px]"}`}
    >
      {children}
    </button>
  );
};

export default Button;
