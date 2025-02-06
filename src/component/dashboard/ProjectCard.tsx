import * as React from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";
import { useUserStore } from "../../../utils/authStore";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  status,
  minimum_price,
  localtion,
  attachments = [],
  tags = [],
}) => {
  const {jobs} = useUserStore()
  
  
  
  return (
    <div className="flex flex-col justify-center p-3 mx-auto w-full bg-white rounded-3xl shadow-2xl text-neutral-800">
     <div className="w-full flex justify-center items-center bg-[rgba(246,246,246,1)] h-[110px] rounded-2xl">
     <div className="overflow-hidden rounded-2xl justify-center items-center h-[110px] w-[160px]">
      <Image
      width={320}
      height={150}
        loading="lazy"
        src={attachments[0] || "/placeholder.svg?height=180&width=180"}
        alt={title}
        className="object-contain  aspect-[1.59] w-[180px] rounded-2xl"
      />
      </div>
     </div>
      <div className="gap-2.5 self-start px-3 py-1 mt-2.5 text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20 min-h-[15px]">
        {status}
      </div>
      <div className="mt-2.5 text-sm font-medium">{title}</div>
      <div className="flex flex-col gap-2  mt-2.5 w-full rounded-none">
       <div className="flex gap-1.5 ">
      
        <div key={"1"} className="text-xs font-medium text-violet-600 bg-violet-100 rounded-lg px-2 py-1">
          {tags[0]}
          </div>
           <div key={"2"} className="text-xs font-medium text-violet-600 bg-violet-100 rounded-lg  py-1">
           {tags[1]}
           </div>
      
       </div>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto bg-white basis-0">
          <div className="text-xs font-medium">{minimum_price}</div>
         
        </div>
      </div>
    </div>
  );
};
