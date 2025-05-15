import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubscriptionsPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Subscriptions</h1>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="continue">Continue watching</TabsTrigger>
            <TabsTrigger value="unwatched">Unwatched</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Next.js 14 - The Basics of App Router"
                channel="Vercel"
                views="1.2M views"
                timestamp="3 weeks ago"
                duration="14:23"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Building a Modern UI with Tailwind CSS"
                channel="Frontend Masters"
                views="856K views"
                timestamp="2 months ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="React Server Components Explained"
                channel="React Conf"
                views="1.5M views"
                timestamp="1 month ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="TypeScript Tips and Tricks for 2023"
                channel="TypeScript Community"
                views="723K views"
                timestamp="3 months ago"
                duration="26:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/4"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Building a Full-Stack App with Next.js and Prisma"
                channel="Code With Antonio"
                views="432K views"
                timestamp="2 weeks ago"
                duration="42:11"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/5"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="CSS Grid Layout Masterclass"
                channel="CSS Tricks"
                views="987K views"
                timestamp="5 months ago"
                duration="31:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/6"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="JavaScript Performance Optimization"
                channel="JS Conf"
                views="1.1M views"
                timestamp="4 months ago"
                duration="28:56"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/7"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Building Accessible Web Applications"
                channel="A11y Advocate"
                views="543K views"
                timestamp="1 month ago"
                duration="35:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/8"
              />
            </div>
          </TabsContent>

          <TabsContent value="today" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Next.js 14 - The Basics of App Router"
                channel="Vercel"
                views="1.2M views"
                timestamp="3 weeks ago"
                duration="14:23"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Building a Full-Stack App with Next.js and Prisma"
                channel="Code With Antonio"
                views="432K views"
                timestamp="2 weeks ago"
                duration="42:11"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/5"
              />
            </div>
          </TabsContent>

          <TabsContent value="continue" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="React Server Components Explained"
                channel="React Conf"
                views="1.5M views"
                timestamp="1 month ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="CSS Grid Layout Masterclass"
                channel="CSS Tricks"
                views="987K views"
                timestamp="5 months ago"
                duration="31:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/6"
              />
            </div>
          </TabsContent>

          <TabsContent value="unwatched" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="TypeScript Tips and Tricks for 2023"
                channel="TypeScript Community"
                views="723K views"
                timestamp="3 months ago"
                duration="26:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/4"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="JavaScript Performance Optimization"
                channel="JS Conf"
                views="1.1M views"
                timestamp="4 months ago"
                duration="28:56"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/7"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Building Accessible Web Applications"
                channel="A11y Advocate"
                views="543K views"
                timestamp="1 month ago"
                duration="35:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/8"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
