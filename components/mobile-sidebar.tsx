"use client"

import Link from "next/link"
import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  History,
  Flame,
  ShoppingBag,
  Music,
  Film,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Radio,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

export default function MobileSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-red-600">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <span className="font-semibold">YouTube</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          <Button variant={pathname === "/" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
            <Link href="/">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </Button>
          <Button variant={pathname === "/shorts" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
            <Link href="/shorts">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 14.65V9.35L15 12L10 14.65ZM17.77 10.32C17.92 10.94 18 11.56 18 12.18V13C18 13.85 17.85 14.69 17.56 15.5C17.27 16.31 16.83 17.03 16.24 17.66C15.65 18.29 14.95 18.79 14.12 19.17C13.29 19.55 12.39 19.75 11.41 19.75C10.72 19.75 10.04 19.64 9.39 19.42C8.74 19.2 8.15 18.89 7.62 18.49C7.09 18.09 6.63 17.61 6.24 17.06C5.85 16.5 5.54 15.88 5.32 15.19C5.11 14.5 5 13.78 5 13.03V12.21C5 11.59 5.08 10.97 5.23 10.35C5.38 9.73 5.61 9.15 5.91 8.61C6.21 8.07 6.58 7.59 7.02 7.16C7.46 6.73 7.97 6.37 8.55 6.08C9.13 5.79 9.75 5.59 10.41 5.47C11.07 5.35 11.76 5.35 12.48 5.46C13.2 5.57 13.88 5.78 14.52 6.09C15.16 6.4 15.71 6.79 16.17 7.26C16.63 7.73 17 8.25 17.29 8.82C17.58 9.39 17.72 9.96 17.77 10.32Z"
                  fill="currentColor"
                />
              </svg>
              <span>Shorts</span>
            </Link>
          </Button>
          <Button variant={pathname === "/explore" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
            <Link href="/explore">
              <Compass className="h-5 w-5" />
              <span>Explore</span>
            </Link>
          </Button>
          <Button
            variant={pathname === "/subscriptions" ? "secondary" : "ghost"}
            asChild
            className="justify-start gap-3"
          >
            <Link href="/subscriptions">
              <PlaySquare className="h-5 w-5" />
              <span>Subscriptions</span>
            </Link>
          </Button>
          <div className="my-2 border-t">
            <h3 className="mt-2 px-4 text-sm font-semibold">You</h3>
            <div className="grid gap-1 pt-1">
              <Button
                variant={pathname === "/channel/you" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/channel/you">
                  <PlaySquare className="h-5 w-5" />
                  <span>Your channel</span>
                </Link>
              </Button>
              <Button variant={pathname === "/history" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/history">
                  <History className="h-5 w-5" />
                  <span>History</span>
                </Link>
              </Button>
              <Button
                variant={pathname === "/your-videos" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/your-videos">
                  <PlaySquare className="h-5 w-5" />
                  <span>Your videos</span>
                </Link>
              </Button>
              <Button
                variant={pathname === "/watch-later" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/watch-later">
                  <Clock className="h-5 w-5" />
                  <span>Watch later</span>
                </Link>
              </Button>
              <Button
                variant={pathname === "/liked-videos" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/liked-videos">
                  <ThumbsUp className="h-5 w-5" />
                  <span>Liked videos</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="my-2 border-t">
            <h3 className="mt-2 px-4 text-sm font-semibold">Explore</h3>
            <div className="grid gap-1 pt-1">
              <Button
                variant={pathname === "/trending" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/trending">
                  <Flame className="h-5 w-5" />
                  <span>Trending</span>
                </Link>
              </Button>
              <Button
                variant={pathname === "/shopping" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/shopping">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shopping</span>
                </Link>
              </Button>
              <Button variant={pathname === "/music" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/music">
                  <Music className="h-5 w-5" />
                  <span>Music</span>
                </Link>
              </Button>
              <Button variant={pathname === "/movies" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/movies">
                  <Film className="h-5 w-5" />
                  <span>Movies & TV</span>
                </Link>
              </Button>
              <Button variant={pathname === "/gaming" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/gaming">
                  <Gamepad2 className="h-5 w-5" />
                  <span>Gaming</span>
                </Link>
              </Button>
              <Button variant={pathname === "/news" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/news">
                  <Newspaper className="h-5 w-5" />
                  <span>News</span>
                </Link>
              </Button>
              <Button variant={pathname === "/sports" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/sports">
                  <Trophy className="h-5 w-5" />
                  <span>Sports</span>
                </Link>
              </Button>
              <Button
                variant={pathname === "/learning" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/learning">
                  <Lightbulb className="h-5 w-5" />
                  <span>Learning</span>
                </Link>
              </Button>
              <Button variant={pathname === "/fashion" ? "secondary" : "ghost"} asChild className="justify-start gap-3">
                <Link href="/fashion">
                  <Shirt className="h-5 w-5" />
                  <span>Fashion & Beauty</span>
                </Link>
              </Button>
              <Button
                variant={pathname === "/podcasts" ? "secondary" : "ghost"}
                asChild
                className="justify-start gap-3"
              >
                <Link href="/podcasts">
                  <Radio className="h-5 w-5" />
                  <span>Podcasts</span>
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </ScrollArea>
    </div>
  )
}
