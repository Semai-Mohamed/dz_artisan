"use client";
import { Sidebar } from "@/component/sidebar/Sidebar";
import { NavigationItemProps } from "@/component/sidebar/types";
import { Profile } from "@/component/profile/Profile";
import * as React from "react";
import MessageCard from "./components/MessageCard";
import ChatMessage from "./components/ChatMessage";
import { inboxMessages, chatMessages } from "./data";
import { ChatHeader } from "./components/ChatHeader";

export default function InboxPage() {
  const navigationItems: NavigationItemProps[] = [
    { label: "Dashboard", icon: "dashboard" },
    { label: "Projects", icon: "projects" },
    { label: "Inbox", icon: "inbox", isActive: true },
    { label: "Settings", icon: "settings" },
  ];

  return (
    <main>
      <div className="flex justify-between relative">
        <Sidebar className="w-[180px] mr-8" navigationItems={navigationItems} />
        
        <div className="flex-1 max-w-[950px] mt-9">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[380px] max-md:w-full">
              <div className="flex flex-col mt-1.5">
                <div className="flex gap-10 justify-between items-center px-4 py-2 w-full border-b border-zinc-200 max-md:max-w-full">
                  <div className="self-stretch my-auto text-2xl font-bold leading-none text-neutral-900">
                    Inbox
                  </div>
                  <div className="flex gap-1 items-center self-stretch p-1 my-auto text-sm rounded-lg bg-zinc-100">
                    <div className="gap-2.5 self-stretch px-4 py-2 my-auto font-medium bg-white rounded-lg min-h-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.06)] text-neutral-900">
                      All mail
                    </div>
                    <div className="gap-2.5 self-stretch px-4 py-2 my-auto whitespace-nowrap rounded-lg bg-zinc-100 min-h-[30px] text-zinc-600">
                      Unread
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-4 mt-5">
                  <div className="flex flex-col items-start mt-4 min-h-[734px]">
                    {inboxMessages.map((message, index) => (
                      <div key={index} className={index > 0 ? "mt-2" : ""}>
                        <MessageCard {...message} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full border-l border-zinc-400 min-h-[864px]">
                <ChatHeader 
                  name="Alice Smith"
                  status="online"
                  avatar="/avatars/alice.jpg"
                />
                <div className="flex flex-col flex-1 pt-4 pb-8 overflow-y-auto">
                  {chatMessages.map((message, index) => (
                    <ChatMessage key={index} {...message} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}