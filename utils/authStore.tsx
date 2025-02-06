import { User } from 'lucide-react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the Job type
 export interface Job {
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

// Define the User type
interface User {
  lastname?: string;
  email?: string;
  password?: string;
  full_name?: string;
  phone_number?: string;
  address?: string;
  wilaya?: string;
  birthday?: Date | null;
  bio?: string;
  profile_picture?: string;
  employment_status?: string;
  role?: string;
  email_verified?: boolean;
}

export { User };

// Define the Zustand store
interface UserState {
  user: User | null;
  jobs: Job[]; // Add jobs array
  setUser: (user: User) => void;
  setJobs: (jobs: Job[]) => void; // Method to update jobs
  addJob: (job: Job) => void; // Method to add a single job
  updateUserField: (field: keyof User, value: any) => void;
  updateMultipleFields: (fields: Partial<User>) => void;
  clearUser: () => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      jobs: [], // Initialize jobs as an empty array
      setUser: (user) => set({ user }),
      setJobs: (jobs) => set({ jobs }), // Set the entire jobs array
      addJob: (job) =>
        set((state) => ({
          jobs: [...state.jobs, job], // Add a new job to the array
        })),
      updateUserField: (field, value) =>
        set((state) => ({
          user: state.user ? { ...state.user, [field]: value } : null,
        })),
      updateMultipleFields: (fields) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...fields } : null,
        })),
      clearUser: () => set({ user: null, jobs: [] }), // Clear jobs on logout
    }),
    { name: 'user-store' }
  )
);
