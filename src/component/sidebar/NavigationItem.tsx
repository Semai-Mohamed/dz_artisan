import * as React from "react";
import { NavigationItemProps } from "./types";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`flex gap-3 items-center py-2 w-full rounded-[40px] cursor-pointer ${
        isActive ? "text-teal-500" : ""
      } ${className}`}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <div className="flex shrink-0 self-stretch my-auto w-4 h-4">{icon}</div>
      <div className="flex-1 shrink self-stretch my-auto basis-0 font-poppins font-bold">
        {label}
      </div>
    </div>
  );
};
