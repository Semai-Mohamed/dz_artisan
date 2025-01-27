"use client";
import { ProjectCard } from "@/component/dashboard/ProjectCard";
import { StatCard } from "@/component/dashboard/StatCard";
import { WorkingProject } from "@/component/dashboard/WorkingProject";
import { Profile } from "@/component/profile/Profile";
import { NavigationItemProps } from "@/component/sidebar/types";
import { Sidebar } from "@/component/sidebar/Sidebar";
import React from "react";
import { Dashboard } from "@/component/dashboard/Dashboard";

export default function Home() {
  const navigationItems: NavigationItemProps[] = [
    { label: "Dashboard", icon: "dashboard", href: "/artist" },
    { label: "Projects", icon: "projects", href: "/artist/projects" },
    { label: "inbox", icon: "inbox", href: "/artist/inbox" },
    { label: "Settings", icon: "settings", href: "/artist/settings" },
  ];

  return (
    <main>
      <div className="flex justify-between relative">
        <Sidebar className="w-[180px] mr-8" navigationItems={navigationItems} />
        <Dashboard className="flex-1 max-w-[820px]">
          <StatCard 
            icon="/icons/stats.svg" 
            count="25" 
            label="Total Projects" 
            bgColor="bg-blue-100" 
          />
          <ProjectCard 
            image="/images/project-placeholder.jpg"
            category="Development"
            title="Project Title"
            authorImage="/images/avatars/default.jpg"
            authorName="John Doe"
            authorRole="Developer"
          />
          <WorkingProject 
            authorImage="/images/avatars/default.jpg"
            authorName="John Doe"
            date="2024-01-16"
            jobType="Full-time"
            jobTitle="Software Engineer"
          />
        </Dashboard>
        <Profile className="w-[250px] ml-8" />
      </div>
    </main>
  );
}
