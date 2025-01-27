import * as React from 'react';
import { ProjectCardProps } from './types';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  deadline,
  price,
  title,
  description,
  clientName,
  clientId,
  showProjectButton
}) => {
  return (
    <div className="flex flex-col px-3 py-6 mt-6 w-full bg-white rounded-3xl shadow-2xl max-md:max-w-full">
      <img
        loading="lazy"
        src={imageUrl}
        alt="Project preview"
        className="object-contain w-full rounded-xl aspect-[5.59] max-md:max-w-full"
      />
      <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-3 self-start text-xs uppercase whitespace-nowrap">
          <div className="gap-2.5 self-stretch px-3 py-1 text-violet-600 rounded-lg bg-violet-600 bg-opacity-20 min-h-[15px]">
            Drawing
          </div>
          <div className="gap-2.5 self-stretch px-3 py-1 text-red-500 rounded-lg bg-red-500 bg-opacity-10 min-h-[15px]">
            Unpaid
          </div>
        </div>
        <div className="flex gap-5">
          <div className="my-auto text-xs text-red-500">
            Deadline : {deadline}
          </div>
          <div className="text-sm font-medium text-neutral-800">{price} dZ</div>
        </div>
      </div>
      <div className="self-start mt-3.5 text-sm font-medium text-neutral-800">
        {title}
      </div>
      <div className="mt-3.5 text-xs font-extralight text-neutral-800 max-md:mr-2.5 max-md:max-w-full">
        {description}
      </div>
      {clientName && clientId && (
        <div className="flex flex-wrap gap-7 mt-6 w-full max-md:mr-2.5 max-md:max-w-full">
          <div className="flex flex-auto gap-2 self-start text-neutral-800 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff1ad69d2d9d47edec3ef896dbccfc6282ea970d183f2fec7c78a2b54b05addb?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa"
              alt={`${clientName}'s avatar`}
              className="object-contain shrink-0 self-start w-6 aspect-square"
            />
            <div className="flex flex-col grow shrink-0 items-start pr-20 bg-white basis-0 w-fit max-md:max-w-full">
              <div className="text-xs font-medium">{clientName}</div>
              <div className="mt-1 text-xs">{clientId}</div>
            </div>
          </div>
          {showProjectButton && (
            <button className="px-8 py-2.5 text-xs text-white rounded-lg bg-neutral-800 max-md:px-5">
              Show project
            </button>
          )}
        </div>
      )}
    </div>
  );
};
