import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectsListProps } from "./types";

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-center px-3 py-4 mt-9 w-full bg-white rounded-3xl max-w-[248px]">
      {projects.map((project, index) => (
        <div key={index} className={index > 0 ? "mt-4" : ""}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};
