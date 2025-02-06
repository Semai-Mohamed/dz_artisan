import ProfileForm from "@/components/ProfileForm"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">User Profile</h1>
      <ProfileForm />
    </div>
  )
}