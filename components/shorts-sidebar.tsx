"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PlaySquare, History, Clock, ThumbsUp, ListVideo } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ShortsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[72px] flex-col border-r border-gray-800 bg-black md:flex">
      <div className="flex h-14 items-center justify-center border-b border-gray-800">
        <Link href="/" className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-red-600">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </Link>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col items-center gap-6 py-6">
          <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-white">
            <Home className="h-5 w-5" />
            <span className="mt-1 text-[10px]">Home</span>
          </Link>

          <Link href="/shorts" className="flex flex-col items-center text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 14.65V9.35L15 12L10 14.65ZM17.77 10.32C17.92 10.94 18 11.56 18 12.18V13C18 13.85 17.85 14.69 17.56 15.5C17.27 16.31 16.83 17.03 16.24 17.66C15.65 18.29 14.95 18.79 14.12 19.17C13.29 19.55 12.39 19.75 11.41 19.75C10.72 19.75 10.04 19.64 9.39 19.42C8.74 19.2 8.15 18.89 7.62 18.49C7.09 18.09 6.63 17.61 6.24 17.06C5.85 16.5 5.54 15.88 5.32 15.19C5.11 14.5 5 13.78 5 13.03V12.21C5 11.59 5.08 10.97 5.23 10.35C5.38 9.73 5.61 9.15 5.91 8.61C6.21 8.07 6.58 7.59 7.02 7.16C7.46 6.73 7.97 6.37 8.55 6.08C9.13 5.79 9.75 5.59 10.41 5.47C11.07 5.35 11.76 5.35 12.48 5.46C13.2 5.57 13.88 5.78 14.52 6.09C15.16 6.4 15.71 6.79 16.17 7.26C16.63 7.73 17 8.25 17.29 8.82C17.58 9.39 17.72 9.96 17.77 10.32Z"
                fill="currentColor"
              />
            </svg>
            <span className="mt-1 text-[10px]">Shorts</span>
          </Link>

          <Link href="/subscriptions" className="flex flex-col items-center text-gray-400 hover:text-white">
            <PlaySquare className="h-5 w-5" />
            <span className="mt-1 text-[10px]">Subscriptions</span>
          </Link>

          <div className="h-[1px] w-10 bg-gray-800"></div>

          <Link href="/history" className="flex flex-col items-center text-gray-400 hover:text-white">
            <History className="h-5 w-5" />
            <span className="mt-1 text-[10px]">History</span>
          </Link>

          <Link href="/your-videos" className="flex flex-col items-center text-gray-400 hover:text-white">
            <PlaySquare className="h-5 w-5" />
            <span className="mt-1 text-[10px]">Your videos</span>
          </Link>

          <Link href="/watch-later" className="flex flex-col items-center text-gray-400 hover:text-white">
            <Clock className="h-5 w-5" />
            <span className="mt-1 text-[10px]">Watch later</span>
          </Link>

          <Link href="/liked-videos" className="flex flex-col items-center text-gray-400 hover:text-white">
            <ThumbsUp className="h-5 w-5" />
            <span className="mt-1 text-[10px]">Liked videos</span>
          </Link>

          <Link href="/playlists" className="flex flex-col items-center text-gray-400 hover:text-white">
            <ListVideo className="h-5 w-5" />
            <span className="mt-1 text-[10px]">Playlists</span>
          </Link>
        </div>
      </ScrollArea>
    </aside>
  )
}
