export interface ProjectCardProps {
  avatarSrc: string;
  name: string;
  description: string;
  imageSrc: string;
}

export interface ProjectsListProps {
  projects: ProjectCardProps[];
}
