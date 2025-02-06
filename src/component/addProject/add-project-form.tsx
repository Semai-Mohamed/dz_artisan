"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Badge,
  } from "@mui/material" // Import MUI componentsimport { Badge } from "@/components/ui/badge"
import { X, Upload } from "lucide-react"
import Image from "next/image"
import { useCreateJobMutation } from "../../../api/artisanApi"

interface option {
  clickHandler: () => void
  open: boolean
}

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  jobType: z.enum(["one_time", "", "temporary", "volunteer"]),
  minimumPrice: z.number().min(0.01, "Minimum price must be greater than 0"),
  estimatedDuration: z.string().min(1, "Estimated duration is required"),
  tags: z.array(z.string()).optional(),
  attachments: z.array(z.instanceof(File)).optional(),
  projectImage: z.instanceof(File).optional(),
})

type FormData = z.infer<typeof schema>

export function AddProjectForm({ clickHandler, open }: option) {
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [previewImage, setPreviewImage] = useState<string>("")

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      jobType: "one_time",
      minimumPrice: 10000,
      tags: [],
    },
  })

  const createJobMutation = useCreateJobMutation()

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
  
    // Append fields with correct names
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("job_type", data.jobType);
    formData.append("minimum_price", data.minimumPrice.toString());
    formData.append("estimated_duration", data.estimatedDuration);
  
    // Append tags as a JSON array
    if (data.tags && data.tags.length > 0) {
      formData.append("tags", JSON.stringify(data.tags));
    }
  
    // Append attachments (files)
    if (data.attachments) {
      data.attachments.forEach((file) => {
        formData.append("attachments", file); // Use the same field name for all files
      });
    }
  
    // Append the project image (if it exists)
    if (data.projectImage) {
      formData.append("attachments", data.projectImage); // Append as part of attachments
    }
  
    // Trigger the mutation
    createJobMutation.mutate(formData, {
      onSuccess: () => {
        setTags([]);
        setCurrentTag("");
        setPreviewImage("");
        setValue("title", "");
        setValue("description", "");
        setValue("location", "");
        setValue("jobType", "one_time");
        setValue("minimumPrice", 10000);
        setValue("estimatedDuration", "");
        setValue("tags", []);
        setValue("attachments", []);
        setValue("projectImage", undefined);
      },
    });
  };
  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag])
      setValue("tags", [...tags, currentTag])
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
    setValue("tags", tags.filter((tag) => tag !== tagToRemove))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB")
        return
      }
      if (!file.type.startsWith("image/")) {
        alert("File must be an image")
        return
      }
      setValue("projectImage", file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full flex justify-center items-center top-0 bg-[rgba(0,0,0,0.2)] absolute z-50 h-[1120px]" style={{ display: open ? "block" : "none" }}>
      <div className="w-[50%] px-8 py-6 ml-[10%] bg-white shadow-lg rounded-lg relative ">
       <X size={24} className="absolute top-2 right-2 cursor-pointer" onClick={clickHandler} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">

  {/* Grid Layout for Compact Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Title */}
    <div>
      <Label htmlFor="title" className="block text-sm font-medium text-gray-700">
        Title
      </Label>
      <Input
        id="title"
        {...register("title")}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
    </div>

    {/* Location */}
    <div>
      <Label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Location
      </Label>
      <Input
        id="location"
        {...register("location")}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>}
    </div>

    {/* Job Type */}
    <div>
            <Label htmlFor="jobType" className="block text-sm font-medium text-gray-700 h-5">
            
            </Label>
            <Controller
              name="jobType"
              control={control}
              render={({ field }) => (
                <FormControl className="border-none" fullWidth>
                  <InputLabel id="job-type-label">Job Type</InputLabel>
                  <Select
                    labelId="job-type-label"
                    id="job-type"
                    sx={{
                      backgroundColor: "rgba(246,246,246,1)",
                      color: "#989898",
                      height: "48px",
                      outline: "none",
                      borderRadius: "12px",
                      border: "none",
                    }}
                    label="Job Type"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <MenuItem value="one_time">One Time</MenuItem>
                    <MenuItem value="contract">contract</MenuItem>
                    <MenuItem value="temporary">temporary</MenuItem>
                    <MenuItem value="volunteer">volunteer</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            {errors.jobType && <p className="mt-1 text-sm text-red-500">{errors.jobType.message}</p>}
          </div>

    {/* Minimum Price */}
    <div>
      <Label htmlFor="minimumPrice" className="block text-sm font-medium text-gray-700">
        Minimum Price ($)
      </Label>
      <Input
        id="minimumPrice"
        type="number"
        step="0.01"
        {...register("minimumPrice", { valueAsNumber: true })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors.minimumPrice && <p className="mt-1 text-sm text-red-500">{errors.minimumPrice.message}</p>}
    </div>

    {/* Estimated Duration */}
    <div>
      <Label htmlFor="estimatedDuration" className="block text-sm font-medium text-gray-700">
        Estimated Duration
      </Label>
      <Input
        id="estimatedDuration"
        {...register("estimatedDuration")}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors.estimatedDuration && (
        <p className="mt-1 text-sm text-red-500">{errors.estimatedDuration.message}</p>
      )}
    </div>
  </div>

  {/* Description */}
  <div>
    <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
      Description
    </Label>
    <Textarea
      id="description"
      {...register("description")}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      rows={4}
    />
    {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>}
  </div>

  {/* Tags */}
  <div>
    <Label className="block text-sm font-medium text-gray-700">Tags</Label>
    <div className="flex gap-2 mt-1">
      <Input
        value={currentTag}
        onChange={(e) => setCurrentTag(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            addTag()
          }
        }}
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Add a tag"
      />
      <Button
        type="button"
        onClick={addTag}
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Tag
      </Button>
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <Badge key={index} className="flex items-center gap-2 bg-gray-100 text-gray-800">
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="hover:text-red-500"
          >
            <X size={14} />
          </button>
        </Badge>
      ))}
    </div>
    {errors.tags && <p className="mt-1 text-sm text-red-500">{errors.tags.message}</p>}
  </div>

  {/* Attachments */}
  <div>
    <Label className="block text-sm font-medium text-gray-700">Attachments</Label>
    <Input
      type="file"
      onChange={(e) => {
        const files = e.target.files
        if (files) {
          setValue("attachments", Array.from(files))
        }
      }}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      multiple
    />
    {errors.attachments && (
      <p className="mt-1 text-sm text-red-500">{errors.attachments.message}</p>
    )}
  </div>

  {/* Project Image */}
  <div>
    <Label className="block text-sm font-medium text-gray-700">Project Image</Label>
    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      {previewImage ? (
        <div className="relative aspect-video">
          <Image
            src={previewImage}
            alt="Project preview"
            fill
            className="object-cover rounded-lg"
          />
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="absolute top-2 right-2"
            onClick={() => {
              setPreviewImage("")
              setValue("projectImage", undefined)
            }}
          >
            Remove
          </Button>
        </div>
      ) : (
        <>
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="project-image"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="project-image"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </>
      )}
    </div>
    {errors.projectImage && (
      <p className="mt-1 text-sm text-red-500">{errors.projectImage.message}</p>
    )}
  </div>

  {/* Submit Button */}
  <div>
    <Button
      type="submit"
      className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      disabled={createJobMutation.isLoading}
    >
      {createJobMutation.isLoading ? "Creating..." : "Create Job"}
    </Button>
  </div>
</form>
      </div>
    </div>
  )
}