import React from "react";
import ProjectCard from "./ProjectCard";
import useProjects from "./hooks/useProjects";

const SoftwareProjects = () => {
  const projects = useProjects();
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 my-10 ">
        {projects[0].setOne.map((project, id) => (
          <ProjectCard
            tags={project.tags}
            projectName={project.projectName}
            projectDetails={project.projectDetails}
            id={id}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {projects[1].setTwo.map((project, id) => (
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

export default SoftwareProjects;
