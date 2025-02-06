import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export function ProjectResults({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <div className="text-center text-gray-500 py-8">No projects found</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <img src={project.thumbnail || "/placeholder.svg"} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium truncate">{project.title}</h4>
              <Badge variant="secondary">{project.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={project.author.avatar || "/placeholder.svg"}
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

