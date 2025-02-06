"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { ProjectFormData } from "../multi-step-form"

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
})

type Step1Props = {
  formData: ProjectFormData
  updateFormData: (data: Partial<ProjectFormData>) => void
  onNext: () => void
}

export function Step1BasicInfo({ formData, updateFormData, onNext }: Step1Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: formData.title,
      description: formData.description,
    },
  })

  const onSubmit = (data: Partial<ProjectFormData>) => {
    updateFormData(data)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>
        <p className="text-gray-500">Let's start with the basic information about your project.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="title" className="text-base">
            Title of the Job
          </Label>
          <Input
            id="title"
            {...register("title")}
            className="border-gray-200 focus:border-indigo-500"
            placeholder="e.g., I can make your website"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message as string}</p>}
        </div>

        <div className="space-y-4">
          <Label htmlFor="description" className="text-base">
            Description of the Job
          </Label>
          <Textarea
            id="description"
            {...register("description")}
            className="border-gray-200 focus:border-indigo-500 min-h-[120px]"
            placeholder="e.g., I can turn your Figma UI into a website"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message as string}</p>}
        </div>
      </div>

      <div className="pt-6">
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Continue
        </Button>
      </div>
    </form>
  )
}

