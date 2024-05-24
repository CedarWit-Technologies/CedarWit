import React, { useState, useEffect, useContext } from "react";
import SoftwareProjects from "../components/SoftwareProjects";
import PortfolioGraphicsProjects from "../components/PortfolioGraphicsProjects";
import TogglePortfolio from "../components/TogglePortfolio";
import Transition from "../components/Transition";
import PortfolioNavbar from "../components/PortfolioNavbar";
import { PageContext } from "../components/PageContext";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { ServiceContext } from "../components/ServiceContext";
import portfolioPageImg from "../assets/portfolioPageImg.webp";

const Portfolio = () => {
  const [onPage, setOnPage] = useState(0);
  const [page, setPage] = useState("software-dev");
  const makePageVisible = (page) => {
    setPage(page);
  };
  const [opened, setOpened] = useState(0);
  const handleClick = (index) => {
    setOpened(index);
  };
  const location = useLocation();
  const to = location.state ? location.state.to : null;

  useEffect(() => {
    if (to !== null) {
      const el = document.getElementById(to);
      el ? el.scrollIntoView({ behavior: "smooth" }) : null;
    } else {
      return;
    }
  }, [location.state]);

  return (
    <Transition>
      <PageContext.Provider value={[onPage, setOnPage]}>
        <div className="absolute top-0 w-full">
          <PortfolioNavbar />
        </div>

        <div
          id="portfolio"
          className="mt-24 flex flex-col items-center justify-center font-semibold"
        >
          <img src={portfolioPageImg} alt="img" className="lg:pt-4" />
          <TogglePortfolio makeVisible={makePageVisible} />
          {page == "software-dev" ? (
            <SoftwareProjects />
          ) : (
            <PortfolioGraphicsProjects />
          )}
          <div className="my-20 ipad:px-16">
            <GetStarted />
          </div>
          <ServiceContext.Provider value={{ opened, handleClick }}>
            <div className="w-full">
              <Footer />
            </div>
          </ServiceContext.Provider>
        </div>
      </PageContext.Provider>
    </Transition>
  );
};

export default Portfolio;
