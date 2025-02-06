import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface User {
  id: string
  username: string
  full_name: string
  profile_picture?: string
  role: string
}

export function UserResults({ users }: { users: User[] }) {
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

