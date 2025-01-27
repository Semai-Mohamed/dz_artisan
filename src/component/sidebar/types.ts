export interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export interface FriendType {
  // Add other friend properties as needed
  name: string;
  avatar: string;
  status?: string;
}
