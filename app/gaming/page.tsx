import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GamingPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Gaming</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="esports">Esports</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Gaming</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Trending in Gaming</h2>
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

            <section>
              <h2 className="mb-4 text-xl font-semibold">Popular Games</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto aspect-square h-24 w-24 overflow-hidden rounded-lg">
                    <img src="/placeholder.svg?height=96&width=96" alt="Game" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-2 font-medium">Game Title</h3>
                  <p className="text-xs text-muted-foreground">Action RPG</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto aspect-square h-24 w-24 overflow-hidden rounded-lg">
                    <img src="/placeholder.svg?height=96&width=96" alt="Game" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-2 font-medium">Game Title</h3>
                  <p className="text-xs text-muted-foreground">FPS</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto aspect-square h-24 w-24 overflow-hidden rounded-lg">
                    <img src="/placeholder.svg?height=96&width=96" alt="Game" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-2 font-medium">Game Title</h3>
                  <p className="text-xs text-muted-foreground">MMORPG</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto aspect-square h-24 w-24 overflow-hidden rounded-lg">
                    <img src="/placeholder.svg?height=96&width=96" alt="Game" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-2 font-medium">Game Title</h3>
                  <p className="text-xs text-muted-foreground">Strategy</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto aspect-square h-24 w-24 overflow-hidden rounded-lg">
                    <img src="/placeholder.svg?height=96&width=96" alt="Game" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-2 font-medium">Game Title</h3>
                  <p className="text-xs text-muted-foreground">Simulation</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto aspect-square h-24 w-24 overflow-hidden rounded-lg">
                    <img src="/placeholder.svg?height=96&width=96" alt="Game" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-2 font-medium">Game Title</h3>
                  <p className="text-xs text-muted-foreground">Adventure</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Game Reviews</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Game Review - Is It Worth Playing?"
                  channel="Game Reviewer"
                  views="1.5M views"
                  timestamp="1 week ago"
                  duration="24:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/gaming5"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Top 10 Games of 2023 - So Far"
                  channel="Game Rankings"
                  views="2.1M views"
                  timestamp="2 weeks ago"
                  duration="18:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/gaming6"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Game Analysis - Story and Gameplay"
                  channel="Game Analysis"
                  views="876K views"
                  timestamp="3 weeks ago"
                  duration="32:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/gaming7"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Indie Game Spotlight - Hidden Gems"
                  channel="Indie Gamer"
                  views="543K views"
                  timestamp="1 month ago"
                  duration="22:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/gaming8"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Pro Tournament - Finals"
                channel="Esports Channel"
                views="325K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming-live1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Game Launch Event"
                channel="Game Publisher"
                views="178K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming-live2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Speedrun Challenge"
                channel="Speedrunner Pro"
                views="85K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming-live3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Casual Gameplay with Fans"
                channel="Gaming Streamer"
                views="42K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/gaming-live4"
              />
            </div>
          </TabsContent>

          <TabsContent value="esports" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Championship Finals - Full Match"
                channel="Esports League"
                views="3.2M views"
                timestamp="2 days ago"
                duration="2:45:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Pro Player Analysis - Tactics Breakdown"
                channel="Esports Analyst"
                views="1.5M views"
                timestamp="1 week ago"
                duration="32:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Team Profile - Road to Championship"
                channel="Esports Stories"
                views="876K views"
                timestamp="2 weeks ago"
                duration="45:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Tournament Highlights - Best Moments"
                channel="Esports Highlights"
                views="2.1M views"
                timestamp="3 days ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports4"
              />
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Mobile Game Review - New Release"
                channel="Mobile Gamer"
                views="1.2M views"
                timestamp="1 week ago"
                duration="15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/mobile1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 5 Mobile Games of the Month"
                channel="Mobile Gaming"
                views="876K views"
                timestamp="2 weeks ago"
                duration="12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/mobile2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Mobile Gaming Tips and Tricks"
                channel="Gaming Tips"
                views="543K views"
                timestamp="3 weeks ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/mobile3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Mobile Esports Tournament Highlights"
                channel="Mobile Esports"
                views="1.5M views"
                timestamp="5 days ago"
                duration="28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/mobile4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
