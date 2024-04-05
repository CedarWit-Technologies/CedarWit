import React from "react";
import ProjectCard from "./ProjectCard";
import useProjects from "./hooks/useProjects";

const SoftwareProjects = () => {
  const projects = useProjects();
  return (
    <div className="flex flex-wrap gap-10">
      {projects.map((project, id) => (
        <ProjectCard
          tags={project.tags}
          projectName={project.projectName}
          projectDetails={project.projectDetails}
          id={id}
        />
      ))}
    </div>
  );
};

export default SoftwareProjects;
