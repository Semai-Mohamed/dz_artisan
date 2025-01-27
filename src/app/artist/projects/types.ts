export interface ProjectCardProps {
    imageUrl: string;
    deadline: string;
    price: string;
    title: string;
    description: string;
    clientName?: string;
    clientId?: string;
    showProjectButton?: boolean;
  }
  
  export interface SearchBarProps {
    onSearch: (query: string) => void;
  }