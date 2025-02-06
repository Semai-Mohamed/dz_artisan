'use client'
import React, { ReactNode, use, useEffect, useState } from "react";
import { StatCard } from "./StatCard";
import { ProjectCard } from "./ProjectCard";
import { WorkingProject } from "./WorkingProject";
import { AddProjectForm } from "../addProject/add-project-form";
import { Job, User, useUserStore } from "../../../utils/authStore";
import Header from '../../component/header';

interface DashboardProps {
  children?: ReactNode;
  className?: string;
}
 
export const Dashboard: React.FC<DashboardProps> = ({ children, className }) => {
  const {jobs} = useUserStore()
  const [open , setOpen ] =useState(false);
  const clickHandler = () => {
    setOpen(!open);
  }
  console.log("iam mohamed semai",jobs)
    const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ed01579701b128cb886f6693a6b968b64e1c377d511593a9a65cbedea7ddef?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      count: "0",
      label: "Product Seen",
      bgColor: "bg-red-500 bg-opacity-30",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ed01579701b128cb886f6693a6b968b64e1c377d511593a9a65cbedea7ddef?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      count: "0",
      label: "Job submit",
      bgColor: "bg-indigo-500 bg-opacity-20",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ed01579701b128cb886f6693a6b968b64e1c377d511593a9a65cbedea7ddef?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
      count: `${jobs.length}`,
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
  const { user } = useUserStore();

  const workingProjects = () => 
    Array.isArray(jobs)
      ? jobs.map((job) => ({
          authorImage: user?.profile_picture || "", // Default to empty string if no image
          authorName: user?.full_name || "Unknown",
          date: new Date(job.created_at).toLocaleDateString("en-GB"), // Format date properly
          jobType: job.job_type,
          jobTitle: job.title,
        }))
      : []; // Return empty array if jobs is undefined
  
  
  return (
    <div className={`flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full ${className}`}>
      <div className="flex flex-col px-1.5 w-full max-md:max-w-full">
        <Header></Header>         
         

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
          {jobs.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <ProjectCard {...project} />
            </div>
          ))}
          <button className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full cursor-pointer" onClick={clickHandler}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1eb0dfb36005292ab5f498df73cb249be4cae00b3535d7121c12cd1671a8883?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa"
              alt=""
              className="object-contain shrink-0 mt-3 max-w-full rounded-3xl aspect-[0.86] w-[193px] max-md:mt-10"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
          <div className="flex-1 shrink text-base font-medium basis-0 text-neutral-800 max-md:max-w-full">
            You are working on
          </div>
         
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
          {workingProjects().map((project, index) => (
  <WorkingProject key={index} {...project} />
           ))}
        </div>
      </div>
      {children}
      {open && <AddProjectForm clickHandler={clickHandler} open={open} />}
    </div>
  );
};