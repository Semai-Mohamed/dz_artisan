"use client"

import { useState } from "react"
import { Step1BasicInfo } from "./steps/step1-basic-info"
import { Step2ProjectDetails } from "./steps/step2-project-details"
import { Step3ImageUpload } from "./steps/step3-image-upload"

export type ProjectFormData = {
  title: string
  description: string
  location: string
  jobType: "one_time" | "ongoing"
  minPrice: number
  estimatedDuration: string
  tags: string[]
  projectImage?: File
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    location: "",
    jobType: "one_time",
    minPrice: 10000,
    estimatedDuration: "",
    tags: [],
  })

  const updateFormData = (data: Partial<ProjectFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm
              ${
                currentStep === step
                  ? "bg-indigo-600 text-white"
                  : currentStep > step
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-400"
              }
            `}
            >
              {step}
            </div>
            {step < 3 && (
              <div className="w-24 h-1 mx-2 bg-gray-100">
                <div className={`h-full transition-all duration-300 ${currentStep > step ? "bg-indigo-600" : ""}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {currentStep === 1 && <Step1BasicInfo formData={formData} updateFormData={updateFormData} onNext={nextStep} />}

      {currentStep === 2 && (
        <Step2ProjectDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
      )}

      {currentStep === 3 && (
        <Step3ImageUpload
          formData={formData}
          updateFormData={updateFormData}
          onBack={prevStep}
          onSubmit={() => console.log("Final form data:", formData)}
        />
      )}
    </div>
  )
}

