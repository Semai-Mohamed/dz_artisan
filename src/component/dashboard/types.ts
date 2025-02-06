export interface StatCardProps {
  icon: string;
  count: string;
  label: string;
  bgColor: string;
}

export interface ProjectCardProps {
  job_id?: string;
  attachments?: string[];
  title: string;
  description: string;
  minimum_price?: number;
  location?: string;
  createdAt: string;
  status: string;
  tags : string[];
  job_type: string;
  estimated_duration : string;
  localtion : string;
  created_at:Date
}

export interface WorkingProjectProps {
  authorImage: string;
  authorName: string;
  date: string;
  jobType: string;
  jobTitle: string;
}
