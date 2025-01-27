import * as React from "react";
import { WorkingProjectProps } from "./types";

export const WorkingProject: React.FC<WorkingProjectProps> = ({
  authorImage,
  authorName,
  date,
  jobType,
  jobTitle,
}) => {
  return (
    <div className="flex flex-wrap gap-10 items-center mt-6 w-full max-md:max-w-full">
      <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch my-auto basis-6">
        <img
          loading="lazy"
          src={authorImage}
          alt={authorName}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="text-sm font-medium text-neutral-800">
            {authorName}
          </div>
          <div className="mt-1 text-xs text-zinc-600">{date}</div>
        </div>
      </div>
      <div className="gap-2.5 self-stretch px-3 py-0.5 my-auto text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20 min-h-[15px]">
        {jobType}
      </div>
      <div className="flex-1 shrink my-auto text-xs text-center basis-6 text-neutral-800">
        {jobTitle}
      </div>
      <button className="gap-2.5 self-stretch px-3 py-0.5 my-auto text-xs text-blue-600 uppercase rounded-lg bg-blue-600 bg-opacity-20 min-h-[15px]">
        SHOW DETAILS
      </button>
    </div>
  );
};
