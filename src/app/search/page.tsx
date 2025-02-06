"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { SearchResults } from "@/components/search-results"
import Layout from "@/component/layout"

const mockUsers = [
  {
    id: "1",
    username: "jane_doe",
    full_name: "Jane Doe",
    profile_picture: "/placeholder.svg?height=80&width=80&text=JD",
    role: "UI/UX Designer",
  },
  {
    id: "2",
    username: "john_smith",
    full_name: "John Smith",
    profile_picture: "/placeholder.svg?height=80&width=80&text=JS",
    role: "Frontend Developer",
  },
  {
    id: "3",
    username: "alice_wonder",
    full_name: "Alice Wonder",
    profile_picture: "/placeholder.svg?height=80&width=80&text=AW",
    role: "Project Manager",
  },
]

const mockProjects = [
  {
    id: "1",
    title: "E-commerce Redesign",
    thumbnail: "/placeholder.svg?height=150&width=250&text=E-commerce",
    category: "Web Design",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40&text=JD",
    },
  },
  {
    id: "2",
    title: "Task Management App",
    thumbnail: "/placeholder.svg?height=150&width=250&text=Task+App",
    category: "Mobile App",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40&text=JS",
    },
  },
  {
    id: "3",
    title: "Company Dashboard",
    thumbnail: "/placeholder.svg?height=150&width=250&text=Dashboard",
    category: "Web Development",
    author: {
      name: "Alice Wonder",
      avatar: "/placeholder.svg?height=40&width=40&text=AW",
    },
  },
]

export default function SearchExamplePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="   flex flex-row w-full">
        <Layout height={900}></Layout>
      <div className="w-full mt-6"><h1 className="text-2xl font-bold mb-4">Search Example</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search users or projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>
      <SearchResults searchQuery={searchQuery} users={mockUsers} projects={mockProjects} /></div>
    </div>
  )
}