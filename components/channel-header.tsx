import Image from "next/image"
import Link from "next/link"
import { Bell, Search, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import MobileSidebar from "@/components/mobile-sidebar"

export default function ChannelHeader() {
  return (
    <>
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
        <div className="flex w-full max-w-xl items-center gap-2">
          <div className="relative flex flex-1">
            <Input type="search" placeholder="Search" className="rounded-r-none border-r-0 pl-4 pr-10" />
            <Button type="submit" variant="outline" size="icon" className="rounded-l-none border-l-0">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </header>
      <div className="relative">
        <div className="h-32 w-full bg-gradient-to-r from-red-500 to-red-700 sm:h-48"></div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Channel avatar"
              width={80}
              height={80}
              className="rounded-full border-4 border-background"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Vercel</h1>
              <div className="text-sm text-muted-foreground">@vercel • 1.2M subscribers • 250 videos</div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" className="gap-2">
                <Bell className="h-4 w-4" />
                <span>Subscribed</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
