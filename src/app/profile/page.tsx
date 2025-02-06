'use client'
import Header from "@/component/header"
import Layout from "@/component/layout"
import { ProfileView } from "@/components/profile-view"
import { useEffect, useState } from "react";
import { useProfileMutation } from "../../../api/artisanApi";
import { useUserStore } from "../../../utils/authStore";

export default function ProfilePage() {
   const { user, setUser } = useUserStore();
  const [showProfileData, setShowProfileData] = useState<{
      adress ?: string | null;
      email ?: string;
      employmentStatus ?: string;
      wilaya?: string;
      bio?: string;
      birthday?: Date | null;
      imgProfile?: string;
      username?: string;
      profession?: string;
      fullName?: string;
      role?:string
      phone_number?: string;
      email_verified?: boolean;
    } | null>(null);
    useEffect(() => {
      if (user) {
        setShowProfileData({
          adress: user.address,
          email: user.email,
          employmentStatus: user.employment_status,
          wilaya: user.wilaya,
          bio: user.bio,
          birthday: user.birthday,
          role: user.role,
          imgProfile: user.profile_picture,
          username: user.lastname,
          fullName: user.full_name,
          phone_number: user.phone_number,
          email_verified: user.email_verified,
        });
      }
    }, [user]);
    
    
    
  return (
    <div className="min-h-screen bg-gray-50 flex flex-row">
     <Layout height={1000} />
      <div className="flex flex-col w-full">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <ProfileView
          user={{
            username : showProfileData?.username,
            full_name: showProfileData?.fullName,
            email: showProfileData?.email,
            password: "********",
            phone_number: showProfileData?.phone_number,
            address: showProfileData?.adress,
            wilaya: "Algiers",
            birthday: showProfileData?.birthday,
            bio: showProfileData?.bio,
            profile_picture: showProfileData?.imgProfile,
            employment_status: showProfileData?.employmentStatus,
            role: showProfileData?.role,
            email_verified: showProfileData?.email_verified ,
          }}
        />
      </main>
      </div>
      
    </div>
  )
}

