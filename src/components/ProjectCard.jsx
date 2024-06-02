import React from "react";
import Button from "./Button";
import ProjectImagePreview from "./ProjectImagePreview";
const ProjectCard = ({ tags, projectName, projectDetails, imgs }) => {
  return (
    <div
      className={`border-2 border-darkGreen rounded-2xl p-6 w-[22rem] flex flex-col items-center gap-3 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out`}
    >
      <header className="w-full flex gap-4 font-medium">
        {tags.map((tag, index) => (
          <Button
            key={index}
            light={true}
            customClasses={`rounded-lg px-3 py-1 text-xs`}
          >
            {tag}
          </Button>
        ))}
      </header>

      <h1 className="w-full text-darkGreen text-xl font-bold font-heading tracking-wider">
        {projectName}
      </h1>
      <p className="text-xs text-black font-medium">{projectDetails}</p>

      <ProjectImagePreview imgs={imgs} />
    </div>
  );
};

export default ProjectCard;
