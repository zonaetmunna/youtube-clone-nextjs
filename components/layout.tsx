import type { ReactNode } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: ReactNode
  minimal?: boolean
  className?: string
  hideHeader?: boolean
}

export default function Layout({ children, minimal = false, className, hideHeader = false }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar minimal={minimal} />
      <div
        className={cn("flex w-full flex-col transition-all duration-300", minimal ? "md:ml-[70px]" : "md:ml-[240px]")}
      >
        {!hideHeader && <Header />}
        <main className={cn("w-full", className)}>{children}</main>
      </div>
    </div>
  )
}
