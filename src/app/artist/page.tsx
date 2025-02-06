"use client";
import { Dashboard } from "@/component/dashboard/Dashboard";
import Layout from "@/component/layout";
import { Profile } from "@/component/profile/Profile";
import { useGetArtisanJobsMutation } from "../../../api/artisanApi";
import { useUserStore } from "../../../utils/authStore";
import { useEffect } from "react";

export default function Home() {
  // ✅ Use Mutation Instead of Query
  const { mutate: fetchJobs, data: Jobs, isLoading, error } = useGetArtisanJobsMutation();
  const { setJobs } = useUserStore();

  useEffect(() => {
    fetchJobs(); // ✅ Manually trigger the mutation
  }, [fetchJobs]);

  useEffect(() => {
    console.log(Jobs,"in home page");
    if (Jobs?.data) {
      setJobs(
        Jobs.data.map((job: any) => ({
          job_id: job.job_id,
          job_type: job.job_type,
          attachments: job.attachments,
          estimated_duration: job.estimated_duration,
          location: job.location,
          minimum_price: job.minimum_price,
          tags: job.tags,
          title: job.title,
          description: job.description,
          created_at: job.created_at,
          updated_at: job.updated_at,
          status: job.status,
        }))
      );
    }
  }, [Jobs, setJobs]); // ✅ Runs only when `Jobs` changes
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading jobs: {error.message}</p>;

  return (
    <main>
      <div className="flex justify-between relative">
        <Layout height={900} />
        <div className="w-full flex justify-between">
          <Dashboard className="flex-1 max-w-[820px]" />
          <div>
            <Profile className="w-[250px] ml-8" />
          </div>
        </div>
      </div>
    </main>
  );
}
