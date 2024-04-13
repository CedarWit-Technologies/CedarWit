import React, { useState } from "react";
import SoftwareProjects from "./SoftwareProjects";
import GraphicsProjects from "./GraphicsProjects";
import TogglePortfolio from "./TogglePortfolio";

const OurPortfolio = () => {
  const [page, setPage] = useState("software-dev");
  const makePageVisible = (page) => {
    setPage(page);
  };
  return (
    <div className="flex flex-col items-center justify-center ipad:px-24 pt-32 pb-10 font-semibold">
      <h1 className="text-3xl font-bold text-darkGreen w-full flex justify-center">
        Our Portfolio
      </h1>
      <TogglePortfolio makeVisible={makePageVisible} />
      {page == "software-dev" ? <SoftwareProjects /> : <GraphicsProjects />}
    </div>
  );
};

export default OurPortfolio;
