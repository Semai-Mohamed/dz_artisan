"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import type { ProjectFormData } from "../multi-step-form"

const schema = z.object({
  location: z.string().min(1, "Location is required"),
  jobType: z.enum(["one_time", "ongoing"]),
  minPrice: z.number().min(1, "Minimum price is required"),
  estimatedDuration: z.string().min(1, "Estimated duration is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
})

type Step2Props = {
  formData: ProjectFormData
  updateFormData: (data: Partial<ProjectFormData>) => void
  onNext: () => void
  onBack: () => void
}

export function Step2ProjectDetails({ formData, updateFormData, onNext, onBack }: Step2Props) {
  const [currentTag, setCurrentTag] = useState("")
  const [tags, setTags] = useState<string[]>(formData.tags)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      location: formData.location,
      jobType: formData.jobType,
      minPrice: formData.minPrice,
      estimatedDuration: formData.estimatedDuration,
      tags: formData.tags,
    },
  })

  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      const newTags = [...tags, currentTag]
      setTags(newTags)
      setValue("tags", newTags)
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
    setValue("tags", newTags)
  }

  const onSubmit = (data: Partial<ProjectFormData>) => {
    updateFormData(data)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
        <p className="text-gray-500">Tell us more about your project requirements.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <Label htmlFor="location" className="text-base">
              Location
            </Label>
            <Input
              id="location"
              {...register("location")}
              className="border-gray-200 focus:border-indigo-500"
              placeholder="e.g., Lagos, Nigeria"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message as string}</p>}
          </div>

          <div className="space-y-4">
            <Label htmlFor="jobType" className="text-base">
              Job Type
            </Label>
            <Controller
              name="jobType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="border-gray-200 focus:border-indigo-500">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one_time">One Time</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType.message as string}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <Label htmlFor="minPrice" className="text-base">
              Minimum Price ($)
            </Label>
            <Input
              id="minPrice"
              type="number"
              {...register("minPrice", { valueAsNumber: true })}
              className="border-gray-200 focus:border-indigo-500"
              placeholder="e.g., 10000"
            />
            {errors.minPrice && <p className="text-red-500 text-sm">{errors.minPrice.message as string}</p>}
          </div>

          <div className="space-y-4">
            <Label htmlFor="estimatedDuration" className="text-base">
              Estimated Duration
            </Label>
            <Input
              id="estimatedDuration"
              {...register("estimatedDuration")}
              className="border-gray-200 focus:border-indigo-500"
              placeholder="e.g., 2 weeks"
            />
            {errors.estimatedDuration && (
              <p className="text-red-500 text-sm">{errors.estimatedDuration.message as string}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-base">Tags</Label>
          <div className="flex gap-2">
            <Input
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              className="border-gray-200 focus:border-indigo-500"
              placeholder="Add relevant tags"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  addTag()
                }
              }}
            />
            <Button type="button" variant="outline" onClick={addTag}>
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="ml-2 hover:text-red-500">
                  <X size={14} />
                </button>
              </Badge>
            ))}
          </div>
          {errors.tags && <p className="text-red-500 text-sm">{errors.tags.message as string}</p>}
        </div>
      </div>

      <div className="pt-6 flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-full">
          Back
        </Button>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Continue
        </Button>
      </div>
    </form>
  )
}

