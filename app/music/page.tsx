import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MusicPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Music</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="remixes">Remixes</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Top Music Videos</h2>
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
              <h2 className="mb-4 text-xl font-semibold">Popular Artists</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Artist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Artist Name</h3>
                  <p className="text-xs text-muted-foreground">12.5M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Artist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Artist Name</h3>
                  <p className="text-xs text-muted-foreground">8.7M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Artist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Artist Name</h3>
                  <p className="text-xs text-muted-foreground">15.2M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Artist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Artist Name</h3>
                  <p className="text-xs text-muted-foreground">6.8M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Artist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Artist Name</h3>
                  <p className="text-xs text-muted-foreground">9.3M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Artist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Artist Name</h3>
                  <p className="text-xs text-muted-foreground">11.1M subscribers</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Trending Music</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Official Music Video - New Release"
                  channel="Popular Artist"
                  views="5.7M views"
                  timestamp="1 week ago"
                  duration="4:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/music5"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Behind the Scenes - Music Video Shoot"
                  channel="Artist Vlogs"
                  views="1.2M views"
                  timestamp="2 weeks ago"
                  duration="12:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/music6"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Acoustic Cover - Popular Song"
                  channel="Cover Artist"
                  views="3.4M views"
                  timestamp="3 weeks ago"
                  duration="5:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/music7"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Music Theory Explained - Beginner's Guide"
                  channel="Music Education"
                  views="876K views"
                  timestamp="1 month ago"
                  duration="28:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/music8"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Music Festival - Day 1"
                channel="Festival Channel"
                views="125K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/live1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Artist Name - Virtual Concert"
                channel="Artist Official"
                views="78K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/live2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Music Awards 2023"
                channel="Awards Show"
                views="250K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/live3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="LIVE: Radio Station - Top Hits"
                channel="Radio Official"
                views="45K watching"
                timestamp="Streaming now"
                duration="LIVE"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/live4"
              />
            </div>
          </TabsContent>

          <TabsContent value="remixes" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Popular Song (DJ Remix) - Extended Version"
                channel="DJ Channel"
                views="2.1M views"
                timestamp="2 weeks ago"
                duration="8:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/remix1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Classic Hit (Modern Remix) - 2023 Edition"
                channel="Remix Studio"
                views="1.8M views"
                timestamp="1 month ago"
                duration="6:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/remix2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="EDM Remix - Top Chart Song"
                channel="EDM Producer"
                views="3.4M views"
                timestamp="3 weeks ago"
                duration="5:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/remix3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Lo-Fi Remix Collection - Chill Beats"
                channel="Lo-Fi Music"
                views="1.2M views"
                timestamp="1 month ago"
                duration="1:12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/remix4"
              />
            </div>
          </TabsContent>

          <TabsContent value="playlists" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-semibold">Top Hits 2023</h3>
                  <p className="text-xs text-muted-foreground">50 videos • Updated weekly</p>
                </div>
                <a href="#" className="absolute inset-0">
                  <span className="sr-only">View playlist</span>
                </a>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-semibold">Workout Motivation</h3>
                  <p className="text-xs text-muted-foreground">32 videos • Updated monthly</p>
                </div>
                <a href="#" className="absolute inset-0">
                  <span className="sr-only">View playlist</span>
                </a>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-semibold">Relaxing Piano Music</h3>
                  <p className="text-xs text-muted-foreground">45 videos • Updated monthly</p>
                </div>
                <a href="#" className="absolute inset-0">
                  <span className="sr-only">View playlist</span>
                </a>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/placeholder.svg?height=90&width=160"
                    alt="Playlist thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-semibold">Classic Rock Hits</h3>
                  <p className="text-xs text-muted-foreground">78 videos • Updated yearly</p>
                </div>
                <a href="#" className="absolute inset-0">
                  <span className="sr-only">View playlist</span>
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
