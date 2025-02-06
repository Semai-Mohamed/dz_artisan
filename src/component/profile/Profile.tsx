"use client";

import * as React from "react";
import { ProjectsList } from "./ProjectsList";
import { ProjectCardProps } from "./types";
import { Job, useUserStore } from "../../../utils/authStore";
import Image from "next/image";

interface ProfileProps {
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ className }) => {
  const { user, jobs } = useUserStore();

  // Function to format the date
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Convert jobs to ProjectCardProps format with more job details
  const jobProjects = jobs?.map((job: Job) => ({
    avatarSrc: user?.profile_picture || "/default-avatar.png",
    name: user?.full_name || "Anonymous",
    description: `${job.title} - ${job.job_type}`,
    imageSrc: job.attachments?.[0] || "/default-job-image.png",
    jobDetails: {
      status: job.status,
      price: job.minimum_price,
      duration: job.estimated_duration,
      location: job.location,
      createdAt: formatDate(job.created_at),
      tags: job.tags
    }
  })) || [];

  return (
    <div className={`flex flex-col items-center px-2 pt-7 pb-14 mx-auto w-220 bg-white rounded-none shadow-2xl min-h-[834px] max-md:mt-10 max-w-md ${className || ''}`}>
      {/* Profile Header */}
      <div className="flex gap-10 justify-between self-stretch w-full text-base font-medium text-neutral-800">
        <div className="w-[94px]">Your Profile</div>
        <div className="flex shrink-0 my-auto w-5 h-5 rotate-[1.570796314870016rad]" />
      </div>

      {/* User Profile Section */}
      <div className="flex flex-col justify-center items-center self-stretch px-5 mt-9 w-full">
        <div className="flex justify-center items-center">
          <Image
          width={50}
          height={50}
            loading="lazy"
            src={user?.profile_picture || "/default-avatar.png"}
            alt={`${user?.full_name}'s profile picture`}
            className="object-contain self-stretch my-auto aspect-square w-[72px] rounded-full"
          />
        </div>
          <div className="flex flex-col self-stretch mt-4 w-full font-medium text-center">
          <div className="text-base text-neutral-800">
            {user?.full_name || "Welcome"}
          </div>
          <div className="mt-1.5 text-xs text-zinc-500">
            {user?.bio || "No bio available"}
          </div>
          <div className="mt-1 text-xs text-zinc-400">
            {user?.email} • {user?.employment_status}
          </div>
          {user?.wilaya && (
            <div className="mt-1 text-xs text-zinc-400">
              📍 {user.wilaya}, {user?.address}
            </div>
          )}
        </div>

        
      </div>

      {/* Jobs Section */}
      <div className="mt-9 text-base font-medium text-neutral-800">
        Your Jobs ({jobProjects.length})
      </div>
      
      {jobProjects.length > 0 ? (
        <>
          <ProjectsList projects={jobProjects} />
          {jobProjects.length > 5 && (
            <button className="gap-3 self-stretch px-3 py-2 mt-9 max-w-full text-xs font-medium text-right text-teal-500 bg-teal-500 bg-opacity-30 rounded-[40px] w-[226px]">
              See All
            </button>
          )}
        </>
      ) : (
        <div className="mt-4 text-sm text-zinc-500">
          No jobs available yet
        </div>
      )}
    </div>
  );
};