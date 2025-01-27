'use client';

import { usePathname } from 'next/navigation';
import { NavigationItem } from "./NavigationItem";
import { NavigationItemProps } from "./types";
import { useCallback } from 'react';

interface ClientSideNavigationProps {
  items: NavigationItemProps[];
}

export const ClientSideNavigation: React.FC<ClientSideNavigationProps> = ({ items }) => {
  const pathname = usePathname();

  const handleNavigation = useCallback((href: string | undefined) => {
    if (href) {
      window.location.href = href;
    }
  }, []);

  return (
    <div className="flex flex-col justify-center mt-2.5 font-medium text-neutral-800">
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.icon}
          label={item.label}
          isActive={item.href ? pathname === item.href : item.isActive}
          onClick={() => handleNavigation(item.href)}
        />
      ))}
    </div>
  );
};
