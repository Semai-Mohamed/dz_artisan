"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"
import Image from "next/image"
import type { ProjectFormData } from "../multi-step-form"

const schema = z.object({
  projectImage: z.instanceof(File).optional(),
})

type Step3Props = {
  formData: ProjectFormData
  updateFormData: (data: Partial<ProjectFormData>) => void
  onBack: () => void
  onSubmit: () => void
}

export function Step3ImageUpload({ formData, updateFormData, onBack, onSubmit }: Step3Props) {
  const [previewImage, setPreviewImage] = useState<string>("")

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      updateFormData({ projectImage: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFormSubmit = () => {
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Upload Project Image</h2>
        <p className="text-gray-500">Add a visual representation of your project.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label className="text-base">Project Image</Label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
            {previewImage ? (
              <div className="relative aspect-video">
                <Image
                  src={previewImage || "/placeholder.svg"}
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
                    updateFormData({ projectImage: undefined })
                  }}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div className="text-center">
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
              </div>
            )}
          </div>
          {errors.projectImage && <p className="text-red-500 text-sm">{errors.projectImage.message as string}</p>}
        </div>
      </div>

      <div className="pt-6 flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-full">
          Back
        </Button>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Submit Project
        </Button>
      </div>
    </form>
  )
}

