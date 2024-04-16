import React from "react";
import ProjectCard from "./ProjectCard";
import useGraphicsProjects from "./hooks/useGraphicsProjects";

const GraphicsProjects = () => {
  const projects = useGraphicsProjects();
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col gap-10 my-10 justify-center items-center">
        {projects.map((project, id) => (
          <ProjectCard
            tags={project.tags}
            projectName={project.projectName}
            projectDetails={project.projectDetails}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default GraphicsProjects;
