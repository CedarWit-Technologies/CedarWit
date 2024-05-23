import React, { useState, useEffect } from "react";
import gp1 from "../assets/graphics-projects/gp1.webp";
import gp2 from "../assets/graphics-projects/gp2.webp";
import gp3 from "../assets/graphics-projects/gp3.webp";
import gp4 from "../assets/graphics-projects/gp4.webp";
import gp5 from "../assets/graphics-projects/gp5.webp";
import gp6 from "../assets/graphics-projects/gp6.webp";
import gp7 from "../assets/graphics-projects/gp7.webp";
import gp8 from "../assets/graphics-projects/gp8.webp";
import gp9 from "../assets/graphics-projects/gp9.webp";
import loader from "../assets/loader-cedarwit.svg";
import Footer from "./Footer";

const PortfolioGraphicsProjects = () => {
  const [isLoading, setIsLoading] = useState(true);

  const projects = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9];
  const col1 = projects.slice(0, 3);
  const col2 = projects.slice(3, 6);
  const col3 = projects.slice(6, 9);
  const columns = [col1, col2, col3];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {isLoading && (
        <div className="place-content-center h-[20rem]">
          <img src={loader} />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="hidden lg:flex gap-6 mt-10">
            {columns.map((col, id) => (
              <div key={id} className="flex flex-col gap-6">
                {col.map((col, index) => (
                  <div
                    key={index}
                    className={`hover:shadow-custom3 hover:-translate-y-[3px] transition-all duration-300 ease-in-out`}
                  >
                    <img src={col} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex lg:hidden flex-col gap-6">
            {projects.map((col, id) => (
              <div
                key={id}
                className="hover:shadow-custom3 hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
              >
                <img className="max-w-[500px]" src={col} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioGraphicsProjects;
