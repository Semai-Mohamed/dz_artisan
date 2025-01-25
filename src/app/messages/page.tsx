import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Search, Upload } from "lucide-react"
import Image from "next/image"

export default function InboxDashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 border-r p-6 flex flex-col">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src='../../../public/images/Icon Strategy.svg'
            alt="DZ Artizan Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-500 mb-3">OVERVIEW</h2>
            <div className="space-y-1">
              <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">
                Dashboard
              </a>
              <a href="#" className="flex items-center text-teal-600 bg-teal-50 px-3 py-2 rounded-lg">
                Inbox
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">
                Projects
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">
                Group
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500 mb-3">FRIENDS</h2>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3 px-3 py-2">
                  <Avatar>
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Prashant</p>
                    <p className="text-xs text-gray-500">Software Developer</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500 mb-3">SETTINGS</h2>
            <div className="space-y-1">
              <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">
                Settings
              </a>
              <a href="#" className="flex items-center text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg">
                Logout
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Search Bar */}
        <div className="p-4 border-b">
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search your bid here..." className="pl-10 w-full" />
            </div>
            <Button variant="default" className="bg-gray-900 hover:bg-gray-800">
              Search
            </Button>
          </div>
        </div>

        {/* Inbox Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-2xl mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">Inbox</h1>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-gray-600">
                  All mail
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  Unread
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {messages.map((message, i) => (
                <div key={i} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{message.sender}</h3>
                        <p className="text-sm text-gray-600">{message.subject}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">{message.preview}</p>
                  <div className="mt-2 ml-11">
                    <Badge variant="outline" className="bg-teal-50 text-teal-600 hover:bg-teal-100">
                      {message.tag}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-96 border-l">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <div className="w-10 h-10 rounded-full bg-gray-200" />
              </Avatar>
              <div>
                <h3 className="font-medium">Alice Smith</h3>
                <p className="text-sm text-gray-500">alicesmith@example.com</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">1:15:00 PM</span>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-auto">
          <div className="space-y-4">
            <div className="flex gap-3">
              <Avatar>
                <div className="w-8 h-8 rounded-full bg-teal-500" />
              </Avatar>
              <div className="bg-teal-500 text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-sm">hjdk khkkjd kefjq kqfjql kqhhqkj qlmjf</p>
                <span className="text-xs text-teal-100 block mt-1">12:23</span>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                <p className="text-sm">hjdk khkkjd kefjq kqfjql kqhhqkj qlmjf</p>
                <span className="text-xs text-gray-500 block mt-1">12:23</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input type="text" placeholder="write a msg" className="flex-1" />
            <Button size="icon" className="bg-teal-500 hover:bg-teal-600">
              <Upload className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const messages = [
  {
    sender: "Alice Smith",
    subject: "Re: Project Update",
    time: "1 min ago",
    preview:
      "A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet...",
    tag: "Project",
  },
  {
    sender: "William Smith",
    subject: "Meeting Tomorrow",
    time: "2 days ago",
    preview:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and ha...",
    tag: "Meeting",
  },
  {
    sender: "Bob Johnson",
    subject: "Weekend Plans",
    time: "2 days ago",
    preview:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since...",
    tag: "Weekend",
  },
  {
    sender: "Emily Davis",
    subject: "Re: Question about Budget",
    time: "3 days ago",
    preview:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the alloc...",
    tag: "Work",
  },
]

