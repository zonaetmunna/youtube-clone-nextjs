import Layout from "@/components/layout"
import SearchResultCard from "@/components/search-result-card"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchPage() {
  return (
    <Layout>
      <main className="p-4 md:p-6">
        <div className="mb-4 flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>
        <div className="space-y-4">
          <SearchResultCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Next.js 14 - The Basics of App Router"
            channel="Vercel"
            views="1.2M views"
            timestamp="3 weeks ago"
            duration="14:23"
            avatar="/placeholder.svg?height=40&width=40"
            description="In this video, we explore the basics of the App Router in Next.js 14. Learn how to create routes, handle dynamic segments, and leverage server components for better performance."
            href="/watch/1"
          />
          <SearchResultCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Next.js 13 vs Next.js 14 - What's New and Improved"
            channel="Web Dev Simplified"
            views="876K views"
            timestamp="2 weeks ago"
            duration="18:45"
            avatar="/placeholder.svg?height=40&width=40"
            description="A comprehensive comparison between Next.js 13 and Next.js 14, highlighting all the new features and improvements in the latest version."
            href="/watch/9"
          />
          <SearchResultCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Building a Full-Stack App with Next.js 14"
            channel="Code With Antonio"
            views="432K views"
            timestamp="1 week ago"
            duration="42:11"
            avatar="/placeholder.svg?height=40&width=40"
            description="Learn how to build a complete full-stack application using Next.js 14, Prisma, and PostgreSQL. This tutorial covers everything from setup to deployment."
            href="/watch/5"
          />
          <SearchResultCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Next.js 14 Server Components Deep Dive"
            channel="React Conf"
            views="654K views"
            timestamp="3 weeks ago"
            duration="32:18"
            avatar="/placeholder.svg?height=40&width=40"
            description="An in-depth look at Server Components in Next.js 14. Learn how they work under the hood and how to leverage them for optimal performance."
            href="/watch/10"
          />
          <SearchResultCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Next.js 14 and Tailwind CSS - The Perfect Combo"
            channel="Frontend Masters"
            views="543K views"
            timestamp="1 month ago"
            duration="28:56"
            avatar="/placeholder.svg?height=40&width=40"
            description="Discover how to combine Next.js 14 with Tailwind CSS to create beautiful, responsive, and performant web applications."
            href="/watch/11"
          />
        </div>
      </main>
    </Layout>
  )
}
