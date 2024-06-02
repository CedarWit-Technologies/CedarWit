import React, { useState } from "react";
import Button from "./Button";

const TogglePortfolio = ({ makeVisible }) => {
  const [isActive, setIsActive] = useState("software-dev");
  const makeActive = (page) => {
    setIsActive(page);
    makeVisible(page);
  };
  return (
    <div className="py-8 w-full flex flex-col gap-5 justify-center items-center">
      <div className="flex ipad:hidden justify-center items-center gap-5 text-sm sm:px-10">
        <Button
          onClick={() => makeActive("software-dev")}
          customClasses={`text-white px-7 py-2 rounded-lg ${
            isActive === "software-dev" ? "bg-darkGreen" : "bg-lightGreen"
          }`}
        >
          Software <br /> development
        </Button>
        <Button
          onClick={() => makeActive("graphic-design")}
          customClasses={`text-white px-7 py-2 rounded-lg ${
            isActive === "graphic-design" ? "bg-darkGreen" : "bg-lightGreen"
          }`}
        >
          Designs & <br /> Production
        </Button>
      </div>

      {/* for larger screens */}
      <span className="hidden ipad:flex cursor-pointer rounded-full justify-center items-center h-14 w-[34rem] relative text-lg box-border bg-lightGreen text-white">
        <div
          onClick={() => makeActive("software-dev")}
          className={`transition-all duration-300 ease-in-out z-20 h-12 w-1/2 flex justify-start pl-9 items-center font-medium`}
        >
          Software development
        </div>
        <div
          onClick={() => makeActive("graphic-design")}
          className={`transition-all duration-300 ease-in-out z-20 h-12 w-1/2 flex justify-end pr-8 items-center font-medium -translate-x-2 $
          `}
        >
          Designs & Production
        </div>
        <span
          className={`shadow-customClose transition-all duration-300 ease-in-out absolute z-10 h-10 w-[16rem] rounded-full left-[0.625rem] bg-darkGreen ${
            isActive == "graphic-design" && "translate-x-[16.8rem]"
          }`}
        ></span>
      </span>
    </div>
  );
};

export default TogglePortfolio;
