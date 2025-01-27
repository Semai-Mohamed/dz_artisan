"use client";

import * as React from "react";
import { ProjectsList } from "./ProjectsList";
import { ProjectCardProps } from "./types";

interface ProfileProps {
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ className }) => {
  const projects: ProjectCardProps[] = [
    {
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      name: "Ahmed iyad hamoudi",
      description: "Drawing a monaliza",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
    {
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      name: "Ahmed iyad hamoudi",
      description: "Drawing a monaliza",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
    {
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      name: "Ahmed iyad hamoudi",
      description: "Drawing a monaliza",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
    {
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      name: "Ahmed iyad hamoudi",
      description: "Drawing a monaliza",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
    {
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      name: "Ahmed iyad hamoudi",
      description: "Drawing a monaliza",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
  ];

  return (
    <div className={`flex flex-col items-center px-2 pt-7 pb-14 mx-auto w-220 bg-white rounded-none shadow-2xl min-h-[834px] max-md:mt-10 max-w-md ${className || ''}`}>
      <div className="flex gap-10 justify-between self-stretch w-full text-base font-medium text-neutral-800">
        <div className="w-[94px]">Your Profile</div>
        <div className="flex shrink-0 my-auto w-5 h-5 rotate-[1.570796314870016rad]" />
      </div>
      <div className="flex flex-col justify-center items-center self-stretch px-5 mt-9 w-full">
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b26634b672fa7cc5d540c077330226de4ac585c62f4a782491108133f423f7?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa"
            alt="Profile picture"
            className="object-contain self-stretch my-auto aspect-square w-[72px]"
          />
        </div>
        <div className="flex flex-col self-stretch mt-4 w-full font-medium text-center">
          <div className="text-base text-neutral-800">
            Good Morning Prashant
          </div>
          <div className="mt-1.5 text-xs text-zinc-500">
            Continue your journey and achieve your target
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 max-w-full w-[104px]">
          <div className="flex gap-10 items-center w-full">
            <div className="flex gap-6 items-center self-stretch my-auto">
              <button className="flex gap-2.5 justify-center items-center self-stretch p-3 my-auto w-10 border border-solid border-neutral-400 rounded-[50px]">
                <div className="flex self-stretch my-auto w-4 min-h-[16px]" />
              </button>
              <button className="flex gap-2.5 justify-center items-center self-stretch p-3 my-auto w-10 border border-solid border-neutral-400 rounded-[50px]">
                <div className="flex self-stretch my-auto w-4 min-h-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 text-base font-medium text-neutral-800">
        Your Last Projects
      </div>
      <ProjectsList projects={projects} />
      <button className="gap-3 self-stretch px-3 py-2 mt-9 max-w-full text-xs font-medium text-right text-teal-500 bg-teal-500 bg-opacity-30 rounded-[40px] w-[226px]">
        See All
      </button>
    </div>
  );
};
