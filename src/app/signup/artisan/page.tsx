'use client'
import { useState, useEffect } from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image"
import img1 from "../../../../public/images/folder-dynamic-color.svg"
import img2 from "../../../../public/images/!.svg"
import img3 from "../../../../public/images/Subtract.svg"
import img5 from "../../../../public/images/x.svg"
import img7 from "../../../../public/images/Group 2393.svg"
import Link from "next/link";
import {User, useUserStore } from "../../../../utils/authStore";
import ConditionalRedirect from "@/component/verify";
import { useRouter } from "next/navigation";
import { set } from "zod";
import ProjectForm from "@/component/ui/projectform";
import FileUpload from "@/component/ui/fileUpload";
import { JobDetailsDto, ProjectDto, useJobDetailsMutation, useProjectsMutation } from "../../../../api/auth";
import toast from "react-hot-toast";

const Setup = () => {
  const [open, setOpen] = useState(false);  
  const clickhandler = () => {  
       setOpen(true);
  }
  const [jobDetails, setJobDetails] = useState({
    job_title: '',
    years_experience: 0,
    cv_document: null as File | null
  });
  type Project = {
    title: string;
    description: string;
    completion_date: string;
  }
  const [projects, setProjects] = useState<Project[]>([]);
  const handleProjectsUpdate = (newProjects: Project[]) => {
    setProjects(newProjects);
  };
  const router = useRouter()
  const [email,setEmail] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });
  const [errors, setErrors] = useState({ username: '', about: '', year: '' });
  const verifyKeys: Array<keyof User> = [ 'birthday',"employment_status","email","full_name","role"];
  const { user } = useUserStore();
  const [profile, setProfile] = useState({
    username: "",
    about: "",
    birthday: null as Date | null,
    work: "",
    image: ""
  });
  const projectsMutation = useProjectsMutation();
  const jobDetailsMutation = useJobDetailsMutation();

  const handleFinish = () => {
    // Validate input
    if (projects.length < 2) {
      toast.error("You need to add at least 2 projects");
      return;
    }

    if (!jobDetails.job_title || jobDetails.years_experience === 0 || !jobDetails.cv_document) {
      toast.error("Please complete all job details");
      return;
    }

    // Prepare data for submission
    const projectsToSubmit: ProjectDto[] = projects.map(project => ({
      title: project.title,
      description: project.description,
      completion_date: project.completion_date
    }));

    const jobDetailsToSubmit: JobDetailsDto = {
      job_title: jobDetails.job_title,
      years_experience: jobDetails.years_experience,
      cv_document: jobDetails.cv_document
    };

    // Submit projects first
    jobDetailsMutation.mutate(jobDetailsToSubmit, {
      onSuccess: () => {
      
        projectsMutation.mutate(projectsToSubmit);
      }
    });
  };
  
  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobDetails(prev => ({
      ...prev,
      job_title: e.target.value
    }));
  };

  const handleExperienceChange = (value: number) => {
    setJobDetails(prev => ({
      ...prev,
      years_experience: value
    }));
  };

  // Handle CV document upload
  const handleCVUpload = (file: File | null) => {
    setJobDetails(prev => ({
      ...prev,
      cv_document: file
    }));
  };
  
  console.log(projects, jobDetails);
  return (
    <div className="w-full flex justify-center items-center h-[700px] font-Poppins">
      <ConditionalRedirect  url="/signUp" verify={verifyKeys}></ConditionalRedirect>
      <div className="w-[88%] h-[650px]">
        <div className="flex w-full items-center justify-end">
          <Image alt="" src={img3} />
        </div>
        <div className="text-[rgba(65,65,65,1)] text-3xl mb-4 font-semibold">Setup Your Profile</div>
        <div className="text-[rgba(189,189,189,1)] font-thin text-sm mb-4">Let's get you all st up so you can access your personal account.</div>
        <div className={`p-3  gap-x-2 items-center bg-[rgba(255,216,216,0.6)] border-[rgba(255,216,216,1)] border-[1px] mb-5 rounded-md w-full text-sm font-thin text-[rgba(33,33,33,0.8)] ${email ? "hidden" : "flex"}`}>
          <Image alt="" src={img2} />
          You need to verify your email
          <div className="flex flex-1 justify-end items-center cursor-pointer" onClick={()=>setEmail(true)}>
            <Image alt="" src={img5} />
          </div>
        </div>
        <div className="flex gap-x-4 relative items-center mb-3">
          <div className="absolute text-white bg-[rgba(0,167,157,1)] font-bold py-2 w-28 pr-4 text-xl -left-24 flex justify-end items-end">1</div>
          <div className="text-[rgba(65,65,65,1)] ml-6 p-2 flex justify-center items-center text-2xl font-semibold gap-x-2">
            Your job <Image alt="" src={img1} />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[47%] flex justify-end items-center ">
            <div className="w-11/12 justify-center flex flex-col">
              <div className="flex gap-x-8 mb-6 items-center w-full ">
               <div className="flex flex-1 flex-col  justify-center gap-y-3">
                <label htmlFor="" className="text-[rgba(114,114,114,1)]">What ur job</label>
                <input 
                  className="bg-[rgba(246,246,246,1)] text-[#989898] w-full h-12 pl-6 rounded-xl outline-none border border-[#bcbcbc] hover:border-[#3e3e3e]" 
                  type="text" 
                  placeholder="job" 
                  name="job"
                  value={jobDetails.job_title}
                  onChange={handleJobTitleChange}
                />               </div>
               <div className="flex flex-1 flex-col  justify-center gap-y-3">
                    <label className="text-[rgba(114,114,114,1)]" htmlFor="">year of exp</label>
                    <FormControl className="border-none" fullWidth>
                      <InputLabel id="demo-simple-select-label">exp</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{
                          backgroundColor: "rgba(246,246,246,1)",
                          color: "#989898",
                          height: "48px", 
                          outline:"none",
                          borderRadius: "12px",
                          border: "none",
                        }}
                        label="exp"
                        value={jobDetails.years_experience}
                        onChange={(e) => handleExperienceChange(Number(e.target.value))}
                      >
                        <MenuItem value={1}>1-2</MenuItem>
                        <MenuItem value={3}>3-5</MenuItem>
                        <MenuItem value={5}>More than 5</MenuItem>
                      </Select>
                    </FormControl>
                </div>
              </div>
             
              <div className="text-2xl font-semibold text-[rgba(65,65,65,1)] relative mb-4">upload your resum</div>
              <FileUpload onFileUpload={handleCVUpload}></FileUpload>
            </div>
          </div>
          <div className="flex flex-col  w-[53%] items-end  h-[350px]">
          <div className="w-10/12 flex flex-col">
          <div className="text-[rgba(114,114,114,1)] mb-8">Your portfolio</div>
          <div className="relative w-full flex justify-center  items-center h-[250px]">
           <div className="  justify-center items-center absolute flex flex-col gap-y-3">
            <div className="flex w-full gap-x-4 ">
                <Image className="flex flex-1" alt="" src={img7}></Image>
                <Image alt="" className="flex flex-1" src={img7}></Image>
                <Image alt="" className="flex flex-1" src={img7}></Image>
            </div>
            <div className="flex w-full gap-x-4 ">
                <Image className="flex flex-1" alt="" src={img7}></Image>
                <Image alt="" className="flex flex-1" src={img7}></Image>
                <Image alt="" className="flex flex-1" src={img7}></Image>
            </div>
           </div>
           <button onClick={clickhandler} className="flex w-full justify-center items-center gap-y-3 flex-col z-10 mt-8 ">
            <div className="h-20 w-20 flex justify-center items-center rounded-full bg-[rgba(62,189,182,1)] text-white font-bold text-3xl">+</div>
            <div className="py-3 bg-white rounded-lg flex justify-center items-center font-thin text-sm text-[rgba(32,32,32,1)] w-[60%] shadow-custom-shadow">you need at least upload 2 projects</div>
           </button>
          </div>
          <div className=" justify-end items-center flex mt-8">
        <button 
          onClick={handleFinish}
          disabled={projectsMutation.isLoading || jobDetailsMutation.isLoading}
          className="bg-[rgba(32,32,32,1)] py-3 px-16 font-thin text-xs text-white rounded-lg"
        >
          {(projectsMutation.isLoading || jobDetailsMutation.isLoading) 
            ? "Submitting..." 
            : "Finish"}
        </button>
      </div>
          </div>
      </div>     
    </div>
        </div>
        <ProjectForm onProjectsUpdate={handleProjectsUpdate} setOpen={setOpen} open={open}></ProjectForm> 
      </div>)}
export default Setup