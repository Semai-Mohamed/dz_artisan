"use client";
import { Sidebar } from "@/component/sidebar/Sidebar";
import { NavigationItemProps } from "@/component/sidebar/types";
import * as React from "react";
import { SearchBar } from "./SearchBar";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9dfae6b3f6ba14c2b0114bbebf6bb07a8ca3483ed04f149ef6db8d91ab769d1?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    deadline: "23/01/2025",
    price: "20000",
    title: "I can draw the table you want",
    description: "Une font avec empattement est une font dont les traits les plus longs sont terminés par de petits traits ou des extensions. Les empattements trouvent leur origine dans les anciennes capitales romaines carrées et leur usage s'est répandu avec l'avènement de l'imprimerie. Elles sont souvent utilisées dans les livres, les magazines et les journaux, car les fonts à empattement sont considérées comme plus faciles à lire dans les cas d'utilisation de longue durée. Parmi",
    clientName: "Prashant Kumar singh",
    clientId: "Client id",
    showProjectButton: true
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9dfae6b3f6ba14c2b0114bbebf6bb07a8ca3483ed04f149ef6db8d91ab769d1?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    deadline: "23/01/2025",
    price: "20000",
    title: "I can draw the table you want",
    description: "Une font avec empattement est une font dont les traits les plus longs sont terminés par de petits traits ou des extensions. Les empattements trouvent leur origine dans les anciennes capitales romaines carrées et leur usage s'est répandu avec l'avènement de l'imprimerie. Elles sont souvent utilisées dans les livres, les magazines et les journaux, car les fonts à empattement sont considérées comme plus faciles à lire dans les cas d'utilisation de longue durée. Parmi"
  }
];

export default function ProjectsPage() {
  const navigationItems: NavigationItemProps[] = [
    { label: "Dashboard", icon: "dashboard" },
    { label: "Projects", icon: "projects", isActive: true },
    { label: "Inbox", icon: "inbox" },
    { label: "Settings", icon: "settings" },
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <main>
      <div className="flex justify-between relative">
        <Sidebar className="w-[180px] mr-8" navigationItems={navigationItems} />
        
        <div className="flex-1 max-w-[950px] mt-9">
          <SearchBar onSearch={handleSearch} />
          <div className="flex flex-col mt-14 w-full max-md:mt-10">
            <div className="flex flex-wrap justify-between w-full">
              <div className="flex-1 text-base font-medium text-neutral-800">
                You are working on
              </div>
              <div className="text-xs text-right text-blue-600">
                See All
              </div>
            </div>
            <div className="mt-5">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}