import Layout from "@/components/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoCard from "@/components/video-card"

export default function ExplorePage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Explore</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Trending Videos</h2>
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
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Music</h2>
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
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Gaming</h2>
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
            </section>
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

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Breaking News: Technology Breakthrough"
                channel="Tech News"
                views="1.5M views"
                timestamp="2 days ago"
                duration="12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/news1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Global Economic Update - Weekly Report"
                channel="Finance News"
                views="876K views"
                timestamp="1 week ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/news2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Science News Roundup - Latest Discoveries"
                channel="Science Today"
                views="654K views"
                timestamp="3 days ago"
                duration="22:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/news3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Political Analysis - Current Events"
                channel="Politics Daily"
                views="1.2M views"
                timestamp="5 days ago"
                duration="28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/news4"
              />
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Learn Python Programming - Complete Course"
                channel="Coding Academy"
                views="2.1M views"
                timestamp="3 months ago"
                duration="4:32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/learning1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Mathematics Made Easy - Calculus Basics"
                channel="Math Simplified"
                views="1.3M views"
                timestamp="2 months ago"
                duration="45:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/learning2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="History of Ancient Civilizations - Documentary"
                channel="History Channel"
                views="876K views"
                timestamp="1 month ago"
                duration="1:28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/learning3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Physics Explained - Quantum Mechanics"
                channel="Science Simplified"
                views="654K views"
                timestamp="3 weeks ago"
                duration="52:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/learning4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
