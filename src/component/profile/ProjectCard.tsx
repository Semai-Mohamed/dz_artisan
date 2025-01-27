import * as React from "react";
import { ProjectCardProps } from "./types";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  avatarSrc,
  name,
  description,
  imageSrc,
}) => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center w-full max-w-[224px]">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-4">
          <div className="text-xs font-medium text-neutral-800">{name}</div>
          <div className="mt-1 text-xs text-zinc-600">{description}</div>
        </div>
        <button
          className="gap-2.5 self-stretch px-2 py-1 my-auto text-xs font-medium text-center text-white whitespace-nowrap bg-teal-500 rounded-lg"
          aria-label={`See ${name}'s project`}
        >
          see
        </button>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Project by ${name}`}
        className="object-contain self-stretch mt-4 w-full"
      />
    </>
  );
};
