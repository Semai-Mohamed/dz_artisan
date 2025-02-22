'use client';

import React, { useEffect, useState } from 'react';
import Card from '../../component/card';
import Layout from '../../component/layout';
import Header from '../../component/header';
import img from '../../../public/images/Icon Strategy.svg';
import Chose from '../../component/Basic';
import BasicForm from '@/component/BasicForm';
import { useProfileMutation } from '../../../api/artisanApi';
import { useUserStore } from '../../../utils/authStore';

const ParentComponent: React.FC = () => {
  const { user, setUser } = useUserStore();
  const { mutate: fetchProfile, data: profileData, isSuccess, isLoading, error } = useProfileMutation();

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (isSuccess && profileData) {
      console.log("Profile data in component:", profileData);
      setUser({
        lastname: profileData.data.username,
        email: profileData.data.email,
        full_name: profileData.data.full_name,
        phone_number: profileData.data.phone_number,
        address: profileData.data.address,
        wilaya: profileData.data.wilaya,
        birthday: profileData.data.birthday,
        bio: profileData.data.bio,
        profile_picture: profileData.data.profile_picture || "/default-avatar.png",
        employment_status: profileData.data.employment_status,
        role: profileData.data.role,
        email_verified: profileData.data.email_verified,
      });
    }
  }, [isSuccess, profileData]);

  useEffect(() => {
    if (isLoading) {
      console.log("Loading profile...");
    }
    if (error) {
      console.log("Error loading profile:", error);
    }
  }, [isLoading, error]);

console.log(profileData)

  const [showProfile, setShowProfile] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<{
    whatHeWillDo: string;
    imgProfile: string;
    username: string;
    profession: string;
  } | null>(null);

  const data = [
    { id: 1, name: 'Alice', work: 'Software Engineer', defaultValue: 4.5, precision: 0.5, readOnly: true, img: img, text: 'I ve been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended' },
    { id: 2, name: 'Bob', work: 'Designer', defaultValue: 3.5, precision: 0.5, readOnly: false, img: img, text: 'I ve been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended' },
    { id: 3, name: 'Charlie', work: 'Product Manager', defaultValue: 5, precision: 1, readOnly: true, img: img, text: 'I ve been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended' },
  ];

  const handleContinueClick = (data: {
    whatHeWillDo: string;
    imgProfile: string;
    username: string;
    profession: string;
  }) => {
    setFormData(data);
    setShowForm(true); 
  };

  return (
    <div className='flex flex-row'>
      <Layout height={900}></Layout>
      <div className='w-full'>
      <Header/><div className='flex flex-col'>
         <div className='flex flex-row gap-x-5'>
         <Chose showForm={showForm} onContinueClick={handleContinueClick}></Chose>
         
         </div>
          <div className='text-[rgba(32,32,32,1)] font-semibold m-3 text-xl'>Reviews</div>
          <div className="w-full h-[270px] flex gap-x-5"> 
            {data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                work={item.work}
                defaultValue={item.defaultValue}
                precision={item.precision}
                readOnly={item.readOnly}
                img={item.img}
                text={item.text}
              />
            ))}
          </div>
        </div>

      </div>
      {showForm && formData && (
        <div className='fixed inset-0 w-full  bg-black bg-opacity-50 backdrop-blur-sm z-10'>
          <div className='fixed inset-0 w-full flex items-center justify-center z-20'>
          
            <BasicForm
              whatHeWillDo={formData.whatHeWillDo}
              imgProfile={formData.imgProfile}
              username={formData.username}
              profession={formData.profession}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;