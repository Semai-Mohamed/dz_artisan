"use client"

import { useState } from "react"
import { X, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  completion_date: z.string().min(1, "Completion date is required"),
})

type Project = z.infer<typeof projectSchema>
interface ProjectFormProps {
  onProjectsUpdate?: (projects: Project[]) => void; // New prop to pass projects to parent
  open: boolean;
  setOpen: (value: boolean) => void; 
}

export default function ProjectForm({ setOpen ,open, onProjectsUpdate}: ProjectFormProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [isOpen, setIsOpen] = useState(true)

  const form = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      completion_date: "",
    },
  })

  function onSubmit(data: Project) {
    if (projects.length >= 5) {
      return
    }
    
    // Create new projects array
    const updatedProjects = [...projects, data]
    
    // Update local state
    setProjects(updatedProjects)
    
    // Call onProjectsUpdate if provided
    onProjectsUpdate?.(updatedProjects)
    
    // Reset form
    form.reset()
  }


  function closeForm() {
    setOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={` z-30 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${open ? "flex" : "hidden"} justify-center items-center`}>
    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative flex">
      <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={closeForm}>
        <X className="h-4 w-4" />
      </Button>

      <div className="w-1/2 pr-4 border-r">
        <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Software Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Developed software for Google company" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="completion_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Completion Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Add Project
            </Button>
          </form>
        </Form>
      </div>

      <div className="w-1/2 pl-4">
        <h2 className="text-2xl font-semibold mb-6">Your Projects ({projects.length}/5)</h2>
        {projects.length === 0 ? (
          <div className="text-center p-8 border-2 border-dashed rounded-lg">
            <PlusCircle className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-sm text-gray-500">No projects added yet. Start by adding a project.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                <p className="text-sm text-gray-500 mt-2">Completed: {project.completion_date}</p>
              </div>
            ))}
          </div>
        )}
        {projects.length < 2 && (
          <p className="text-sm text-red-500 mt-4">
            Please add at least {2 - projects.length} more project(s) to continue
          </p>
        )}
      </div>
    </div>
    </div>
  )
}
