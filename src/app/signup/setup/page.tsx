'use client';
import { useState } from "react";
import Image from "next/image"
import img1 from "@/../public/images/folder-dynamic-color.svg"
import img2 from "@/../public/images/!.svg"
import img3 from "@/../public/images/Subtract.svg"
import img4 from "@/../public/images/Component Placeholder Image.svg"
import img5 from "@/../public/images/x.svg"
import { useUserStore , User } from '../../../../utils/authStore';
import ConditionalRedirect from "@/component/verify"
import { useCompleteProfileMutation } from "../../../../api/auth";
const Setup = () => {
  const [email,setEmail] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });
  const [errors, setErrors] = useState({ username: '', about: '', year: '' });
  const {user,updateMultipleFields } = useUserStore();
  const verifyKeys: Array<keyof User> = ['email', 'password','full_name','role'];
  const [showModel , setShowModel]  = useState<boolean>(false)
  const [profile, setProfile] = useState({
    username: "",
    about: "",
    birthday: null as Date | null,
    work: "",
    image: ""
  });
  console.log(user)
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
  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (value === '') {
      setBirthday(prev => ({ ...prev, [name]: '' }));
      setErrors(prev => ({ ...prev, year: '' }));
      return;
    }

    const numValue = parseInt(value);
    
    if (name === 'day' && (numValue < 1 || numValue > 31)) return;
    if (name === 'month' && (numValue < 1 || numValue > 12)) return;
    if (name === 'year') {
    if (numValue > 2006) return;
    }

    if (name === 'day' && birthday.month && birthday.year) {
      const maxDays = new Date(parseInt(birthday.year), parseInt(birthday.month), 0).getDate();
      if (numValue > maxDays) return;
    }

    setBirthday(prev => {
      const newBirthday = { ...prev, [name]: value };
      
      if (newBirthday.day && newBirthday.month && newBirthday.year) {
        const date = new Date(
          parseInt(newBirthday.year),
          parseInt(newBirthday.month) - 1,
          parseInt(newBirthday.day)
        );
        setProfile(prev => ({ ...prev, birthday: date }));
      }
      
      return newBirthday;
    });
    setErrors(prev => ({ ...prev, year: '' }));
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024) {
        alert("File size must be less than 100KB");
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setProfile(prev => ({ ...prev, image: url }));
    }
  };

  const handleProfile = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'username') {
      const usernameRegex = /^[a-zA-Z0-9_]{0,30}$/;
      if (!usernameRegex.test(value)) {
        setErrors(prev => ({ ...prev, username: 'Username can only contain letters, numbers, and underscores' }));
        return;
      }
      if (value.length < 6) {
        setErrors(prev => ({ ...prev, username: 'Username must be at least 6 characters' }));
      } else {
        setErrors(prev => ({ ...prev, username: '' }));
      }
    }

    if (name === 'about' && value.length > 200) {
      setErrors(prev => ({ ...prev, about: 'About section cannot exceed 200 characters' }));
      return;
    } else {
      setErrors(prev => ({ ...prev, about: '' }));
    }

    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const { mutate: completeProfile, isLoading } = useCompleteProfileMutation(user);
  const handleSubmit = () => {
    if (isValidForm()) {
      const formData = new FormData();
      formData.append('username', profile.username);
      formData.append('bio', profile.about);
      formData.append('birthday', profile.birthday?.toISOString() || '');
      formData.append('employment_status', profile.work);
      
      if (selectedFile) {
        formData.append('profile_picture', selectedFile);
      }
  
      const newUser = {
        username: profile.username,
        bio: profile.about,
        birthday: profile.birthday,
        employment_status: profile.work,
        profile_picture: profile.image,
      };
  
      updateMultipleFields(newUser);  
      completeProfile(formData);
    }
  };

 

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
            Your Personal Information <Image alt="" src={img1} />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[43%] flex justify-end items-center">
            <div className="w-11/12 justify-center flex flex-col">
              <div className="text-[rgba(114,114,114,1)] mb-2">Enter Your Birthday Date</div>
              <div className="flex gap-x-4 mb-6">
                <input
                  className="bg-[rgba(246,246,246,1)] text-[#989898] w-[75px] h-12 p-2 rounded-xl text-center no-spinner outline-none"
                  type="number"
                  placeholder="DD"
                  name="day"
                  value={birthday.day}
                  onChange={handleBirthdayChange}
                  min="1"
                  max="31"
                />
                <input
                  className="bg-[rgba(246,246,246,1)] text-[#989898] w-[75px] h-12 p-2 rounded-xl text-center no-spinner outline-none"
                  type="number"
                  placeholder="MM"
                  name="month"
                  value={birthday.month}
                  onChange={handleBirthdayChange}
                  min="1"
                  max="12"
                />
                <input
                  className="bg-[rgba(246,246,246,1)] text-[#989898] w-[75px] h-12 p-2 rounded-xl text-center no-spinner outline-none"
                  type="number"
                  placeholder="YYYY"
                  name="year"
                  value={birthday.year}
                  onChange={handleBirthdayChange}
                  min="1900"
                  max="2006"
                />
              </div>
              {errors.year && <div className="text-red-500 text-sm">{errors.year}</div>}
              <div className="text-[rgba(114,114,114,1)] mb-2">Are you</div>
              <div className="gap-x-6 flex items-center mb-6">
                <div className="flex items-center gap-x-2">
                  <span 
                    onClick={() => setProfile(prev => ({ ...prev, work: "student" }))} 
                    className={`w-2 h-2 rounded-full outline-offset-2 outline-double outline-1 outline-[rgba(81,93,239,1)] ${profile.work === "student" ? "bg-[rgba(81,93,239,1)]" : ""}`}
                  />
                  <div className="text-[rgba(114,114,114,0.8)] text-sm font-thin">Student</div>
                </div>
                <div className="flex items-center gap-x-2">
                  <span 
                    onClick={() => setProfile(prev => ({ ...prev, work: "employed" }))} 
                    className={`w-2 h-2 rounded-full outline-offset-2 outline-double outline-1 outline-[rgba(81,93,239,1)] ${profile.work === "employed" ? "bg-[rgba(81,93,239,1)]" : ""}`}
                  />
                  <div className="text-[rgba(114,114,114,0.8)] text-sm font-thin">Employed</div>
                </div>
                <div className="flex items-center gap-x-2">
                  <span 
                    onClick={() => setProfile(prev => ({ ...prev, work: "freelancer" }))} 
                    className={`w-2 h-2 rounded-full outline-offset-2 outline-double outline-1 outline-[rgba(81,93,239,1)] ${profile.work === "freelancer" ? "bg-[rgba(81,93,239,1)]" : ""}`}
                  />
                  <div className="text-[rgba(114,114,114,0.8)] text-sm font-thin">Freelancer</div>
                </div>
              </div>
              <div className="text-2xl font-semibold text-[rgba(65,65,65,1)] relative mb-4">Add your Picture</div>
              <div className="w-full flex flex-col">
                <div className="flex h-28 w-full">
                  <div>
                    {previewUrl ? (
                      <Image src={previewUrl} alt="Preview" width={112} height={112} className="h-full w-auto object-cover" />
                    ) : (
                      <Image alt="" src={img4} className="h-full w-auto" />
                    )}
                  </div>
                  <div className="py-6 px-3 flex justify-center flex-col w-full gap-y-2">
                    <div className="font-thin text-sm italic flex items-center ml-5 text-[rgba(65,65,65,0.8)]">
                      Please upload image, size less than 100KB
                    </div>
                    <div className="w-4/5 p-2 flex justify-center gap-x-8 bg-[rgba(248,252,255,1)] items-center rounded-xl">
                      <label className="text-[rgba(0,167,157,1)] rounded-md border-[rgba(0,167,157,1)] border py-2 px-3 cursor-pointer">
                        Choose File
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileSelect}/>
                      </label>
                      <span className="text-[rgba(60,60,60,1)]">
                        {selectedFile ? selectedFile.name : "No File Chosen"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[80%] justify-end items-center">
                <button onClick={handleSubmit}
        className={`bg-[rgba(0,167,157,1)] rounded-lg p-3 text-white ${!isValidForm() ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={!isValidForm()}>
            <div onClick={()=>setShowModel(true)}>save </div> </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end w-[57%]">
        <div className="flex w-11/12 flex-col mb-6 gap-y-2">
          <label className="text-[rgba(114,114,114,1)]">Choose a username</label>
          <input 
            value={profile.username} 
            onChange={handleProfile} 
            type="text" 
            name="username" 
            className="bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-12 rounded-lg w-11/12" />
          {errors.username && <div className="text-red-500 text-sm">{errors.username}</div>}
        </div>
        <div className="w-11/12 flex justify-center gap-y-3 flex-col">
          <label className="text-[rgba(114,114,114,1)]">Tell us about you</label>
          <textarea 
            
            value={profile.about} 
            onChange={handleProfile} 
            name="about" 
            className="bg-[rgba(217,217,217,0.23)] py-3 border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-36 rounded-xl w-11/12" />{errors.about && <div className="text-red-500 text-sm">{errors.about}</div>}</div>
      </div>
    </div>
        </div>

      </div>)}
export default Setup