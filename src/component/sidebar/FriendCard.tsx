import * as React from "react";
import { FriendType } from "./types";

export const FriendCard: React.FC<FriendType> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 justify-center items-center w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Profile picture of ${name}`}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="text-sm font-poppins font-bold">{name}</div>
          <div className="mt-1 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
};
