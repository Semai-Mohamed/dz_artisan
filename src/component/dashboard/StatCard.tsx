import * as React from "react";
import { StatCardProps } from "./types";

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  count,
  label,
  bgColor,
}) => {
  return (
    <div className="flex flex-1 shrink gap-4 justify-center items-center self-stretch p-3 my-auto bg-white rounded-xl shadow-2xl basis-0">
      <div
        className={`flex gap-2.5 justify-center items-center self-stretch px-3 my-auto w-10 h-10 ${bgColor} rounded-[50px]`}
      >
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto text-xs">
        <div className="text-zinc-600">{count}</div>
        <div className="mt-2 font-semibold text-neutral-800">{label}</div>
      </div>
    </div>
  );
};
