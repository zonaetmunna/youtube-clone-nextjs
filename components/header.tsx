"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Menu, Mic, Upload, Bell, Moon, Sun, LogOut, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import MobileSidebar from "@/components/mobile-sidebar"
import { useTheme } from "next-themes"
import { toast } from "@/components/ui/use-toast"

type UserType = {
  name: string
  email: string
  avatar: string
} | null

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  const [voiceSearchOpen, setVoiceSearchOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [user, setUser] = useState<UserType>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Get user from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse user from localStorage")
      }
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const startVoiceSearch = () => {
    setIsRecording(true)
    // Simulate voice recognition after 2 seconds
    setTimeout(() => {
      setIsRecording(false)
      setSearchQuery("next.js tutorial")
      setVoiceSearchOpen(false)
      toast({
        title: "Voice search completed",
        description: "Searching for 'next.js tutorial'",
      })
    }, 2000)
  }

  const handleLogout = () => {
    // Clear auth cookie
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    // Clear user from localStorage
    localStorage.removeItem("user")
    // Update state
    setUser(null)
    // Show toast
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    })
    // Redirect to login
    router.push("/login")
    router.refresh()
  }

  const notifications = [
    {
      id: 1,
      channel: "Vercel",
      title: "New video: Next.js 14 Features",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
      read: false,
    },
    {
      id: 2,
      channel: "React Team",
      title: "React 19 is now available",
      time: "1 day ago",
      avatar: "/placeholder.svg?height=32&width=32",
      read: true,
    },
    {
      id: 3,
      channel: "TypeScript",
      title: "TypeScript 5.3 release notes",
      time: "3 days ago",
      avatar: "/placeholder.svg?height=32&width=32",
      read: true,
    },
  ]

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4 md:gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <MobileSidebar />
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-red-600">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <span className="hidden font-semibold md:inline-block">YouTube</span>
        </Link>
      </div>
      <form onSubmit={handleSearch} className="flex w-full max-w-xl items-center gap-2">
        <div className="relative flex flex-1">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-r-none border-r-0 pl-4 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="outline" size="icon" className="rounded-l-none border-l-0">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          type="button"
          onClick={() => setVoiceSearchOpen(true)}
        >
          <Mic className="h-4 w-4" />
          <span className="sr-only">Search with voice</span>
        </Button>
      </form>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {isClient && user ? (
          <>
            <Button variant="ghost" size="icon">
              <Upload className="h-5 w-5" />
              <span className="sr-only">Create</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    3
                  </Badge>
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  Notifications
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Mark all as read
                  </Button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3">
                    <div className="flex w-full gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={notification.avatar || "/placeholder.svg"} alt={notification.channel} />
                        <AvatarFallback>{notification.channel[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{notification.channel}</span>
                          {!notification.read && <span className="h-2 w-2 rounded-full bg-blue-500"></span>}
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Profile</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Your channel</DropdownMenuItem>
                <DropdownMenuItem>YouTube Studio</DropdownMenuItem>
                <DropdownMenuItem>Switch account</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuItem>Send feedback</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">
                <User className="mr-2 h-4 w-4" />
                Sign in
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        )}
      </div>

      <Dialog open={voiceSearchOpen} onOpenChange={setVoiceSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Voice Search</DialogTitle>
          <DialogDescription>
            {isRecording ? "Listening..." : "Tap the microphone to search by voice"}
          </DialogDescription>
          <div className="flex flex-col items-center justify-center py-6">
            <Button
              variant={isRecording ? "default" : "outline"}
              size="icon"
              className={cn(
                "h-16 w-16 rounded-full transition-all",
                isRecording && "animate-pulse bg-red-500 hover:bg-red-600",
              )}
              onClick={startVoiceSearch}
            >
              <Mic className="h-8 w-8" />
              <span className="sr-only">Start voice search</span>
            </Button>
            {isRecording && <p className="mt-4 text-sm text-muted-foreground">Speak now...</p>}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
