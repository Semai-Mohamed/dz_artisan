'use client'
import { useState, useEffect } from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image"
import img1 from "../../../../public/images/folder-dynamic-color.svg"
import img2 from "../../../../public/images/!.svg"
import img3 from "../../../../public/images/Subtract.svg"
import img5 from "../../../../public/images/x.svg"
import img6 from "../../../../public/images/Upload icon.svg"
import img7 from "../../../../public/images/Group 2393.svg"
import Link from "next/link";
import {User, useUserStore } from "../../../../utils/authStore";
import ConditionalRedirect from "@/component/verify";
const Setup = () => {
  const [email,setEmail] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });
  const [errors, setErrors] = useState({ username: '', about: '', year: '' });
  const verifyKeys: Array<keyof User> = ['username', 'bio','birthday','profile_picture',"employment_status"];
  const { user } = useUserStore();
  console.log(user)
  const [profile, setProfile] = useState({
    username: "",
    about: "",
    birthday: null as Date | null,
    work: "",
    image: ""
  });
  const isValidForm = () => {
    const usernameRegex = /^[a-zA-Z0-9_]{6,30}$/;
    return (
      usernameRegex.test(profile.username) &&
      profile.about.length <= 200 &&
      profile.work !== "" &&
      birthday.day !== "" &&
      birthday.month !== "" &&
      birthday.year !== "" &&
      parseInt(birthday.year) >= 1900
    );
  };
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024) {
        alert("File size must be less than 100KB");
        return;}
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setProfile(prev => ({ ...prev, image: url }));
    }};
  return (
    <div className="w-full flex justify-center items-center h-[700px] font-Poppins">
      <ConditionalRedirect user={user} url="/signUp" verify={verifyKeys}></ConditionalRedirect>
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
                <input className="bg-[rgba(246,246,246,1)] text-[#989898] w-full h-12 pl-6 rounded-xl outline-none border border-[#bcbcbc] hover:border-[#3e3e3e]" type="text" placeholder="job" name="job"/>
               </div>
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
        borderRadius: "12px", // rounded-xl in Tailwind
        border: "none", // border-none in Tailwind
      }}
    label="exp">
    <MenuItem value={10}>1-2</MenuItem>
    <MenuItem value={20}>3-5</MenuItem>
    <MenuItem value={30}>More than 5</MenuItem>
  </Select>
</FormControl>
                </div>
              </div>
             
              <div className="text-2xl font-semibold text-[rgba(65,65,65,1)] relative mb-4">upload your resum</div>
              <div className="w-full flex flex-col border border-dashed border-[rgba(0,167,157,1)] rounded-md bg-[rgba(0,167,157,0.03)] h-[220px]  justify-center items-center ">
                 <div className="mb-4"><Image alt="" src={img6} ></Image></div>
                 <div className="text-[rgba(65,65,65,1)] mb-1">Drag & drop files or <Link href={"/"} className="ml-1 text-[rgba(0,167,157,1)]">Browse</Link></div>
                 <div className="text-[rgba(103,103,103,0.8)]] font-thin text-xs">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</div>
              </div>
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
           <button className="flex w-full justify-center items-center gap-y-3 flex-col z-10 mt-8 ">
            <div className="h-20 w-20 flex justify-center items-center rounded-full bg-[rgba(62,189,182,1)] text-white font-bold text-3xl">+</div>
            <div className="py-3 bg-white rounded-lg flex justify-center items-center font-thin text-sm text-[rgba(32,32,32,1)] w-[60%] shadow-custom-shadow">you need at least upload 2 projects</div>
           </button>
          </div>
          <div className=" justify-end items-center flex mt-8">
            <button className="bg-[rgba(32,32,32,1)] py-3 px-16 font-thin text-xs text-white rounded-lg">
                Finish
            </button>
          </div>
          </div>
      </div>     
    </div>
        </div>
      </div>
  )
}
export default Setup