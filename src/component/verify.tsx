'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User,useUserStore } from '../../utils/authStore';
interface ChildComponentProps {
  verify: Array<keyof User>
  url: string; }
const ConditionalRedirect: React.FC<ChildComponentProps> = ({  verify, url }) => {
  const router = useRouter();
  const {user} = useUserStore()
  useEffect(() => {
    if (!user) {
        console.log("Waiting for user data...");
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
