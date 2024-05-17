import React, { useEffect } from "react";
import gp1 from "../assets/graphics-projects/gp1.png";
import gp2 from "../assets/graphics-projects/gp2.png";
import gp3 from "../assets/graphics-projects/gp3.png";
import gp4 from "../assets/graphics-projects/gp4.png";
import gp5 from "../assets/graphics-projects/gp5.png";
import gp6 from "../assets/graphics-projects/gp6.png";
import gp7 from "../assets/graphics-projects/gp7.png";
import gp8 from "../assets/graphics-projects/gp8.png";
import gp9 from "../assets/graphics-projects/gp9.png";
import { PageContext } from "./PageContext";
import { useContext, useState } from "react";

const GraphicsProjects = () => {
  const [isLoading, setIsLoading] = useState(true);

  const projects = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9];
  const col1 = projects.slice(0, 3);
  const col2 = projects.slice(3, 6);
  const col3 = projects.slice(6, 9);
  const columns = [col1, col2, col3];

  const { page, setOnPage } = useContext(PageContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="w-[30rem] place-content-center h-[20rem] bg-gray-300 animate-pulse rounded-lg"></div>
      )}
      {!isLoading && (
        <>
          <div className="hidden lg:flex gap-6 mt-10">
            {columns.map((col, id) => (
              <div key={id} className="flex flex-col gap-6">
                {col.map((col, index) => (
                  <>
                    <div
                      key={index}
                      className={`${
                        isLoading ? "hidden" : "block"
                      } hover:shadow-custom3 hover:-translate-y-[3px] transition-all duration-300 ease-in-out ${
                        index == 2 && "lg:hidden"
                      } ${id == 1 && index == 1 && "lg:hidden"}`}
                    >
                      {page}
                      <img onLoad={handleLoad} src={col} />
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>

          <div className="flex lg:hidden flex-col gap-6">
            {col1.map((col, id) => (
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

export default GraphicsProjects;
