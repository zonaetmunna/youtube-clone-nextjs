import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendingPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Trending</h1>

        <Tabs defaultValue="now">
          <TabsList className="mb-6">
            <TabsTrigger value="now">Now</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
          </TabsList>

          <TabsContent value="now" className="space-y-6">
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
            </div>
          </TabsContent>

          <TabsContent value="music" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Music Hits - Summer 2023"
                channel="Music Charts"
                views="3.2M views"
                timestamp="2 weeks ago"
                duration="15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/music1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Live Concert Highlights - World Tour"
                channel="Music Live"
                views="1.8M views"
                timestamp="1 month ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/music2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Music Production Masterclass"
                channel="Producer Academy"
                views="945K views"
                timestamp="3 weeks ago"
                duration="42:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/music3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="New Album Review - Critical Analysis"
                channel="Music Critics"
                views="723K views"
                timestamp="5 days ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/music4"
              />
            </div>
          </TabsContent>

          <TabsContent value="gaming" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="New Game Release Gameplay - First Look"
                channel="Gaming Central"
                views="2.4M views"
                timestamp="3 days ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Pro Gaming Tournament Finals"
                channel="Esports Live"
                views="1.7M views"
                timestamp="1 week ago"
                duration="1:45:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Game Development Tutorial - Unity Engine"
                channel="Dev Masters"
                views="876K views"
                timestamp="2 weeks ago"
                duration="48:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Gaming Setup Tour 2023 - Ultimate Edition"
                channel="Tech Gamers"
                views="1.2M views"
                timestamp="4 days ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming4"
              />
            </div>
          </TabsContent>

          <TabsContent value="movies" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Movie Trailer Breakdown - Hidden Details"
                channel="Film Analysis"
                views="1.5M views"
                timestamp="1 week ago"
                duration="24:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movies1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Movies of 2023 - So Far"
                channel="Cinema Critics"
                views="2.1M views"
                timestamp="2 weeks ago"
                duration="32:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movies2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Behind the Scenes - Blockbuster Movie"
                channel="Movie Insider"
                views="987K views"
                timestamp="3 days ago"
                duration="42:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movies3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Director's Commentary - Award Winning Film"
                channel="Filmmaker's Channel"
                views="654K views"
                timestamp="5 days ago"
                duration="1:12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movies4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
