import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { FriendCard } from "./FriendCard";
import { FriendType, NavigationItemProps } from "./types";
import { useRouter } from "next/navigation";

interface SidebarProps {
  className?: string;
  navigationItems: NavigationItemProps[];
}

export const Sidebar: React.FC<SidebarProps> = ({ className, navigationItems: navItems }) => {
  const router = useRouter();
  
  const handleNavigation = (label: string) => {
    if (label.toLowerCase() === 'inbox') {
      router.push('artist/inbox');
    } else if (label.toLowerCase() === 'dashboard') {
      router.push('/artist');
    } else if (label.toLowerCase() === 'projects') {
      router.push('artist/projects');
    }
  };

  const friends: FriendType[] = [
    {
      name: "Prashant",
      role: "software Developer",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5799866e41e7931f25fe0302f7c23056d9d626630aab4c4561b520b2e8f16fb2?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
    {
      name: "Prashant",
      role: "software Developer",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5799866e41e7931f25fe0302f7c23056d9d626630aab4c4561b520b2e8f16fb2?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
    {
      name: "Prashant",
      role: "software Developer",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5799866e41e7931f25fe0302f7c23056d9d626630aab4c4561b520b2e8f16fb2?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa",
    },
  ];

  return (
    <div className={`flex flex-col grow px-8 pt-8 pb-16 w-full max-w-[300px] bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10 ${className || ''}`}>
      <div className="flex flex-col w-full">
        <div className="flex gap-2.5 self-start text-base font-extrabold text-teal-500 uppercase">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ccd23a3892f2e216d5147fedaa711d699a2a072d5c65508ed8c61ab5d23ded8?placeholderIfAbsent=true&apiKey=c6cfe9ae438049c2b334108edb3082aa"
            alt="DZ ARTIZAN logo"
            className="object-contain shrink-0 my-auto w-11 aspect-square"
          />
          <div className="flex-1 shrink basis-0">DZ ARTIZAN</div>
        </div>

        <div className="flex flex-col mt-12 w-full text-base whitespace-nowrap max-md:mt-10">
          <div className="flex-1 shrink gap-2.5 self-stretch py-2 font-semibold uppercase text-neutral-700">
            OVERVIEW
          </div>
          <div className="flex flex-col justify-center mt-2.5 font-medium text-neutral-800">
            {navItems.map((item, index) => (
              <NavigationItem
                key={index}
                icon={<div />}
                label={item.label}
                isActive={item.isActive}
                onClick={() => handleNavigation(item.label)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-12 w-full max-md:mt-10">
          <div className="flex-1 shrink gap-2.5 self-stretch py-2 text-base font-semibold uppercase whitespace-nowrap text-neutral-700">
            FRIENDS
          </div>
          <div className="flex flex-col justify-center mt-2.5 text-neutral-800">
            {friends.map((friend, index) => (
              <div key={index} className={index > 0 ? "mt-5" : ""}>
                <FriendCard {...friend} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20 w-full text-base font-medium whitespace-nowrap max-md:mt-10">
        <div className="flex-1 shrink gap-2.5 self-stretch py-2 font-semibold uppercase text-neutral-700">
          SETTINGS
        </div>
        <NavigationItem icon={<div />} label="Settings" />
        <NavigationItem icon={<div />} label="Logout" onClick={() => {}} />
      </div>
    </div>
  );
};
