import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SportsPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Sports</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="football">Football</TabsTrigger>
            <TabsTrigger value="basketball">Basketball</TabsTrigger>
            <TabsTrigger value="tennis">Tennis</TabsTrigger>
            <TabsTrigger value="esports">Esports</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Trending in Sports</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Game Highlights - Championship Final"
                  channel="Sports Network"
                  views="3.2M views"
                  timestamp="2 days ago"
                  duration="12:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Player Interview - Post-Match Reactions"
                  channel="Sports Interviews"
                  views="1.8M views"
                  timestamp="1 day ago"
                  duration="18:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Top 10 Plays of the Week - Amazing Moments"
                  channel="Sports Highlights"
                  views="2.5M views"
                  timestamp="3 days ago"
                  duration="8:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Sports Analysis - Tactical Breakdown"
                  channel="Sports Analysis"
                  views="1.2M views"
                  timestamp="5 days ago"
                  duration="28:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports4"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Popular Sports Channels</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sports Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Sports Channel</h3>
                  <p className="text-xs text-muted-foreground">12.5M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sports Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Sports Channel</h3>
                  <p className="text-xs text-muted-foreground">8.7M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sports Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Sports Channel</h3>
                  <p className="text-xs text-muted-foreground">10.2M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sports Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Sports Channel</h3>
                  <p className="text-xs text-muted-foreground">6.8M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sports Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Sports Channel</h3>
                  <p className="text-xs text-muted-foreground">9.3M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sports Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Sports Channel</h3>
                  <p className="text-xs text-muted-foreground">7.5M subscribers</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Live Sports</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="LIVE: Championship Match - Final Quarter"
                  channel="Sports Live"
                  views="425K watching"
                  timestamp="Streaming now"
                  duration="LIVE"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports-live1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="LIVE: Tournament Coverage - Day 3"
                  channel="Tournament TV"
                  views="312K watching"
                  timestamp="Streaming now"
                  duration="LIVE"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports-live2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="LIVE: Pre-Game Analysis - Expert Panel"
                  channel="Sports Analysis"
                  views="178K watching"
                  timestamp="Streaming now"
                  duration="LIVE"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports-live3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="LIVE: Sports News - Breaking Updates"
                  channel="Sports News"
                  views="95K watching"
                  timestamp="Streaming now"
                  duration="LIVE"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/sports-live4"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="football" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Match Highlights - Championship Game"
                channel="Football TV"
                views="3.5M views"
                timestamp="2 days ago"
                duration="15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/football1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Player Profile - Rising Star"
                channel="Football Profiles"
                views="1.8M views"
                timestamp="1 week ago"
                duration="22:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/football2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Tactical Analysis - Formation Breakdown"
                channel="Football Analysis"
                views="2.1M views"
                timestamp="3 days ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/football3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Goals of the Season"
                channel="Football Highlights"
                views="4.2M views"
                timestamp="5 days ago"
                duration="12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/football4"
              />
            </div>
          </TabsContent>

          <TabsContent value="basketball" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Game Highlights - Playoff Finals"
                channel="Basketball TV"
                views="2.8M views"
                timestamp="1 day ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/basketball1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Player Interview - MVP Discussion"
                channel="Basketball Talks"
                views="1.5M views"
                timestamp="3 days ago"
                duration="24:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/basketball2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Dunks of the Week"
                channel="Basketball Highlights"
                views="3.2M views"
                timestamp="2 days ago"
                duration="8:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/basketball3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Team Analysis - Championship Contenders"
                channel="Basketball Analysis"
                views="1.2M views"
                timestamp="1 week ago"
                duration="35:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/basketball4"
              />
            </div>
          </TabsContent>

          <TabsContent value="tennis" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Match Highlights - Grand Slam Final"
                channel="Tennis TV"
                views="1.8M views"
                timestamp="2 days ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tennis1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Player Profile - Tennis Legend"
                channel="Tennis Profiles"
                views="1.2M views"
                timestamp="1 week ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tennis2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Shots of the Tournament"
                channel="Tennis Highlights"
                views="2.5M views"
                timestamp="3 days ago"
                duration="12:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tennis3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Tournament Preview - Expert Analysis"
                channel="Tennis Analysis"
                views="876K views"
                timestamp="5 days ago"
                duration="35:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tennis4"
              />
            </div>
          </TabsContent>

          <TabsContent value="esports" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Tournament Finals - Championship Match"
                channel="Esports TV"
                views="3.2M views"
                timestamp="1 day ago"
                duration="1:45:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Pro Player Analysis - Gameplay Breakdown"
                channel="Esports Analysis"
                views="1.5M views"
                timestamp="3 days ago"
                duration="32:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Team Profile - Road to Championship"
                channel="Esports Profiles"
                views="987K views"
                timestamp="1 week ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top Plays of the Tournament"
                channel="Esports Highlights"
                views="2.1M views"
                timestamp="2 days ago"
                duration="15:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/esports4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
