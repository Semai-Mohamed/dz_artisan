"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EditProfileDialog } from "./edit-profile-dialog"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface User {
  username : string |undefined
  email: string | undefined
  password: string | undefined
  full_name: string  | undefined
  phone_number?: string | undefined
  address?: string | null
  wilaya?: string | undefined
  birthday?: Date | null
  bio?: string | undefined
  profile_picture?: string | undefined
  employment_status?: string | undefined
  role: string | undefined
  email_verified: boolean | undefined
}

interface ProfileViewProps {
  user: User
}

export function ProfileView({ user }: ProfileViewProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <Image
            width={200}
            height={200}
            src={user.profile_picture || "/placeholder.svg?height=128&width=128"}
            alt={""}
            className=" rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-semibold">{user.full_name}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span>{user.email}</span>
              {user.email_verified && <CheckCircle2 className="h-4 w-4 text-green-500" />}
            </div>
          </div>
        </div>
        <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">Full Name</label>
                <p className="mt-1">{user.full_name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">UserName</label>
                <p className="mt-1">{user.username}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Birthday</label>
                <p className="mt-1">{user.birthday ? format(user.birthday, "PP") : "Not set"}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone Number</label>
                <p className="mt-1">{user.phone_number || "Not set"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">Address</label>
                <p className="mt-1">{user.address || "Not set"}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Wilaya</label>
                <p className="mt-1">{user.wilaya || "Not set"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Professional Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">Employment Status</label>
                <div className="mt-1">
                  <Badge variant="secondary">{user.employment_status || "Not set"}</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Role</label>
                <div className="mt-1">
                  <Badge variant="secondary">{user.role}</Badge>
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-500">Bio</label>
                <p className="mt-1">{user.bio || "No bio provided"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <EditProfileDialog user={user} open={isEditing} onOpenChange={setIsEditing} />
    </div>
  )
}

