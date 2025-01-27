import * as React from "react";
import { ProjectCardProps } from "./types";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  authorImage,
  authorName,
  authorRole,
}) => {
  return (
    <div className="flex flex-col justify-center p-3 mx-auto w-full bg-white rounded-3xl shadow-2xl text-neutral-800">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain rounded-xl aspect-[1.59] w-[180px]"
      />
      <div className="gap-2.5 self-start px-3 py-1 mt-2.5 text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20 min-h-[15px]">
        {category}
      </div>
      <div className="mt-2.5 text-sm font-medium">{title}</div>
      <div className="flex gap-2 items-center mt-2.5 w-full rounded-none">
        <img
          loading="lazy"
          src={authorImage}
          alt={authorName}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto bg-white basis-0">
          <div className="text-xs font-medium">{authorName}</div>
          <div className="mt-1 text-xs">{authorRole}</div>
        </div>
      </div>
    </div>
  );
};
