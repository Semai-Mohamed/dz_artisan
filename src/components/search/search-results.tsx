"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { ProjectResults } from "./project-results"
import { UserResults } from "./user-results"

interface User {
  id: string
  username: string
  full_name: string
  profile_picture?: string
  role: string
}

interface Project {
  id: string
  title: string
  thumbnail: string
  category: string
  author: {
    name: string
    avatar: string
  }
}

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    username: "sarah.designer",
    full_name: "Sarah Miller",
    profile_picture: "/placeholder.svg?height=40&width=40",
    role: "UI Designer",
  },
  {
    id: "2",
    username: "alex.dev",
    full_name: "Alex Johnson",
    profile_picture: "/placeholder.svg?height=40&width=40",
    role: "Frontend Developer",
  },
  // Add more mock users as needed
]

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Modern Dashboard Design",
    thumbnail: "/placeholder.svg?height=150&width=250",
    category: "UI Design",
    author: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    title: "E-commerce App",
    thumbnail: "/placeholder.svg?height=150&width=250",
    category: "Web Development",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  // Add more mock projects as needed
]

export function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter users and projects based on search query
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.full_name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredProjects = mockProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search users or projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-4 pt-2">
          <TabsList className="w-full">
            <TabsTrigger value="all" className="flex-1">
              All Results ({filteredUsers.length + filteredProjects.length})
            </TabsTrigger>
            <TabsTrigger value="users" className="flex-1">
              Users ({filteredUsers.length})
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex-1">
              Projects ({filteredProjects.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="h-[500px] p-4">
          <TabsContent value="all" className="space-y-6 mt-0">
            {filteredUsers.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Users</h3>
                <UserResults users={filteredUsers} />
              </div>
            )}
            {filteredProjects.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Projects</h3>
                <ProjectResults projects={filteredProjects} />
              </div>
            )}
          </TabsContent>

          <TabsContent value="users" className="mt-0">
            <UserResults users={filteredUsers} />
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            <ProjectResults projects={filteredProjects} />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}

