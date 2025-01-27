import React, { ReactNode } from "react";
import { StatCard } from "./StatCard";
import { ProjectCard } from "./ProjectCard";
import { WorkingProject } from "./WorkingProject";

interface DashboardProps {
  children?: ReactNode;
  className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ children, className }) => {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ed01579701b128cb886f6693a6b968b64e1c377d511593a9a65cbedea7ddef?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      count: "700",
      label: "Product Seen",
      bgColor: "bg-red-500 bg-opacity-30",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ed01579701b128cb886f6693a6b968b64e1c377d511593a9a65cbedea7ddef?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      count: "30",
      label: "Job submit",
      bgColor: "bg-indigo-500 bg-opacity-20",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ed01579701b128cb886f6693a6b968b64e1c377d511593a9a65cbedea7ddef?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      count: "3",
      label: "working projects",
      bgColor: "bg-red-500 bg-opacity-30",
    },
  ];

  const projects = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/34465b15fad08b7bb9c7a2dfc5d5d61ca72d32d05a2cad67a3e92793c290c817?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      category: "Drawing",
      title: "I can draw the table you want",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      authorName: "Prashant Kumar singh",
      authorRole: "software Developer",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/34465b15fad08b7bb9c7a2dfc5d5d61ca72d32d05a2cad67a3e92793c290c817?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      category: "Drawing",
      title: "I can draw the table you want",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      authorName: "Prashant Kumar singh",
      authorRole: "software Developer",
    },
  ];

  const workingProjects = [
    {
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/36948c38dce95657f4e9147f48c52721fdee52eab1c811a30ef43d0f139045e1?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      authorName: "Prashant Kumar Singh",
      date: "25/2/2023",
      jobType: "Drawing",
      jobTitle: "Understanding Concept of React",
    },
    {
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a577addaf716828ac5ccdea2026ef01505c9fa2e9f0d754f3203299389bdb85c?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      authorName: "ravi Kumar",
      date: "25/2/2023",
      jobType: "Writing",
      jobTitle: "Understanding Concept of React",
    },
  ];

  return (
    <div className={`flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full ${className}`}>
      <div className="flex flex-col px-1.5 w-full max-md:max-w-full">
        <form className="flex flex-wrap gap-4 w-full text-xs font-medium max-md:max-w-full">
          <div className="flex flex-auto gap-3 justify-center items-start min-h-[49px] text-neutral-400">
            <div className="flex flex-wrap flex-1 shrink gap-2.5 justify-center px-4 py-4 w-full bg-white rounded-xl border border-solid basis-0 border-stone-300 border-opacity-80 min-h-[49px] min-w-[240px] max-md:max-w-full">
              <label htmlFor="searchInput" className="sr-only">
                Search your bid
              </label>
              <input
                id="searchInput"
                type="search"
                placeholder="Search your bid here...."
                className="flex-1 shrink basis-0 max-md:max-w-full bg-transparent border-none outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="self-start py-4 px-6 text-right text-white whitespace-nowrap rounded-lg bg-neutral-800 min-h-[48px]"
          >
            Search
          </button>
        </form>

        <div className="self-start mt-8 text-base font-medium text-neutral-700">
          Last mounth
        </div>
        <div className="flex flex-wrap gap-3.5 justify-center items-center mt-3.5 w-full min-h-[64px] max-md:max-w-full">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        <div className="self-start mt-9 text-base font-medium text-neutral-700">
          Your Project adds
        </div>
      </div>
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <ProjectCard {...project} />
            </div>
          ))}
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1eb0dfb36005292ab5f498df73cb249be4cae00b3535d7121c12cd1671a8883?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa"
              alt=""
              className="object-contain shrink-0 mt-3 max-w-full rounded-3xl aspect-[0.86] w-[193px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
          <div className="flex-1 shrink text-base font-medium basis-0 text-neutral-800 max-md:max-w-full">
            You are working on
          </div>
          <button className="gap-3 self-stretch my-auto text-xs text-right text-blue-600">
            See All
          </button>
        </div>
        <div className="flex flex-col px-6 pt-5 pb-3 mt-5 w-full bg-white rounded-xl shadow-2xl min-h-[175px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-center items-center w-full text-xs font-semibold uppercase text-neutral-700 max-md:max-w-full">
            <div className="flex-1 shrink self-stretch my-auto basis-0">
              instructor name & date
            </div>
            <div className="self-stretch my-auto text-center">job TYPE</div>
            <div className="flex-1 shrink self-stretch my-auto text-center basis-0">
              job TITLE
            </div>
            <div className="self-stretch my-auto w-20 text-center">ACTIONS</div>
          </div>
          {workingProjects.map((project, index) => (
            <WorkingProject key={index} {...project} />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};