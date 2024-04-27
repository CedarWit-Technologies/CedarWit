import React from "react";
import ProjectCard from "./ProjectCard";
import useProjects from "./hooks/useProjects";

const SoftwareProjects = () => {
  const projects = useProjects();
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-10 my-10">
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

export default SoftwareProjects;
