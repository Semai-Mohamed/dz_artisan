"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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

interface SearchResultsProps {
  searchQuery: string
  users?: User[]
  projects?: Project[]
}

export function SearchResults({ searchQuery, users = [], projects = [] }: SearchResultsProps) {
  const [activeTab, setActiveTab] = useState("all")

  // Filter users and projects based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.full_name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-4 pt-4">
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
            {filteredUsers.length === 0 && filteredProjects.length === 0 && (
              <div className="text-center text-gray-500 py-8">No results found for "{searchQuery}"</div>
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

function UserResults({ users }: { users: User[] }) {
  if (users.length === 0) {
    return <div className="text-center text-gray-500 py-8">No users found</div>
  }

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <Card key={user.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={user.profile_picture || "/placeholder.svg?height=40&width=40"}
                alt={user.full_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{user.full_name}</h4>
                <p className="text-sm text-gray-500">@{user.username}</p>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Profile
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

function ProjectResults({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <div className="text-center text-gray-500 py-8">No projects found</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <img
            src={project.thumbnail || "/placeholder.svg?height=150&width=250"}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium truncate">{project.title}</h4>
              <Badge variant="secondary">{project.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={project.author.avatar || "/placeholder.svg?height=24&width=24"}
                alt={project.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-gray-500">{project.author.name}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

