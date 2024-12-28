import { User } from 'lucide-react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface User {
  username: string;
  email: string;
  password: string;
  full_name: string;
  phone_number?: string;
  address?: string;
  wilaya?: string;
  birthday?: Date | null;
  bio?: string;
  profile_picture?: string;
  employment_status?: string; 
  role: string; 
  email_verified: boolean;
}
export {User}
interface UserState {
    user: User | null
    setUser: (user: User) => void
    updateUserField: (field: keyof User, value: any) => void
    updateMultipleFields: (fields: Partial<User>) => void
    clearUser: () => void; // Clear the user (e.g., on logout) ta3 chatgpt
  }
  
  export const useUserStore = create(
    persist<UserState>(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        updateUserField: (field, value) =>
          set((state) => ({
            user: state.user ? { ...state.user, [field]: value } : null,
          })),
        updateMultipleFields: (fields) =>
          set((state) => ({
            user: state.user ? { ...state.user, ...fields } : null,
          })),
        clearUser: () => set({ user: null }),
      }),
      { name: 'user-store' }
    )
  );