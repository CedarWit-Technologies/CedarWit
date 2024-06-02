import React, { useState, useEffect } from "react";
import SoftwareProjects from "./SoftwareProjects";
import GraphicsProjects from "./GraphicsProjects";
import TogglePortfolio from "./TogglePortfolio";
import Transition from "./Transition";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const OurPortfolio = () => {
  const [page, setPage] = useState("software-dev");
  const makePageVisible = (page) => {
    setPage(page);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/portfolio", { state: { to: "portfolio" } });
  };

  return (
    <Transition>
      <div
        id="portfolio"
        className="flex flex-col items-center justify-center ipad:px-16 pt-32 pb-10 font-semibold"
      >
        <h1 className="text-4xl font-bold text-darkGreen w-full flex justify-center font-heading tracking-wider">
          Our Portfolio
        </h1>
        <TogglePortfolio makeVisible={makePageVisible} />
        {page == "software-dev" ? <SoftwareProjects /> : <GraphicsProjects />}
        <Button
          onClick={handleClick}
          noHover={true}
          customClasses={`text-white px-8 bg-darkGreen py-2 rounded-lg my-5 ${
            page !== "software-dev" && "lg:-translate-y-28"
          }`}
        >
          View all
        </Button>
      </div>
    </Transition>
  );
};

export default OurPortfolio;
