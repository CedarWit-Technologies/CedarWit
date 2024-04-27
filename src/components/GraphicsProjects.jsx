import React from "react";
import ProjectCard from "./ProjectCard";
import useGraphicsProjects from "./hooks/useGraphicsProjects";

const GraphicsProjects = () => {
  const projects = useGraphicsProjects();
  return (
    <>
      <div className="flex flex-wrap gap-10 my-10 justify-center items-center">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            tags={project.tags}
            projectName={project.projectName}
            projectDetails={project.projectDetails}
            imgs={project.imgs}
          />
        ))}
      </div>
    </>
  );
};

export default GraphicsProjects;
