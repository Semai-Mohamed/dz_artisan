'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../../utils/authStore';
interface ChildComponentProps {
  user: User | null; 
  verify: Array<keyof User>
  url: string; 
}
const ConditionalRedirect: React.FC<ChildComponentProps> = ({ user, verify, url }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
        router.push(url); 
        return;
      }
    for (const key of verify) {
      if (!user[key]) {
        router.push(url); 
        break;
      }
    }
  }, [user, verify, url, router]);

  return null; 
};

export default ConditionalRedirect;
