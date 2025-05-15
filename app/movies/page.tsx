import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MoviesPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Movies & TV</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="tv">TV Shows</TabsTrigger>
            <TabsTrigger value="trailers">Trailers</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Popular Movies</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Movie Review - Latest Blockbuster"
                  channel="Film Critic"
                  views="1.5M views"
                  timestamp="1 week ago"
                  duration="18:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/movie1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Top 10 Movies of 2023 - So Far"
                  channel="Movie Rankings"
                  views="2.1M views"
                  timestamp="2 weeks ago"
                  duration="24:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/movie2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Behind the Scenes - Blockbuster Movie"
                  channel="Movie Insider"
                  views="876K views"
                  timestamp="3 days ago"
                  duration="32:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/movie3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Director's Commentary - Award Winning Film"
                  channel="Filmmaker's Channel"
                  views="654K views"
                  timestamp="5 days ago"
                  duration="45:22"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/movie4"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">TV Show Highlights</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="TV Show Recap - Season Finale"
                  channel="TV Recaps"
                  views="1.2M views"
                  timestamp="3 days ago"
                  duration="22:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/tv1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Top 5 TV Shows You Need to Watch"
                  channel="TV Guide"
                  views="876K views"
                  timestamp="1 week ago"
                  duration="15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/tv2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Actor Interview - Behind the Character"
                  channel="TV Insider"
                  views="543K views"
                  timestamp="2 weeks ago"
                  duration="28:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/tv3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="TV Show Analysis - Plot and Characters"
                  channel="Show Analysis"
                  views="765K views"
                  timestamp="4 days ago"
                  duration="35:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/tv4"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Latest Trailers</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Official Trailer - Upcoming Blockbuster"
                  channel="Movie Studio"
                  views="5.7M views"
                  timestamp="2 days ago"
                  duration="2:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/trailer1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="TV Show Teaser - New Season"
                  channel="TV Network"
                  views="3.2M views"
                  timestamp="1 week ago"
                  duration="1:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/trailer2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Extended Trailer - Director's Cut"
                  channel="Film Studio"
                  views="2.1M views"
                  timestamp="3 days ago"
                  duration="4:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/trailer3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Trailer Breakdown - Easter Eggs & Details"
                  channel="Trailer Analysis"
                  views="1.5M views"
                  timestamp="5 days ago"
                  duration="15:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/trailer4"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="movies" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Movie Review - Latest Blockbuster"
                channel="Film Critic"
                views="1.5M views"
                timestamp="1 week ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movie1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Movies of 2023 - So Far"
                channel="Movie Rankings"
                views="2.1M views"
                timestamp="2 weeks ago"
                duration="24:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movie2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Behind the Scenes - Blockbuster Movie"
                channel="Movie Insider"
                views="876K views"
                timestamp="3 days ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movie3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Director's Commentary - Award Winning Film"
                channel="Filmmaker's Channel"
                views="654K views"
                timestamp="5 days ago"
                duration="45:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/movie4"
              />
            </div>
          </TabsContent>

          <TabsContent value="tv" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="TV Show Recap - Season Finale"
                channel="TV Recaps"
                views="1.2M views"
                timestamp="3 days ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tv1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 5 TV Shows You Need to Watch"
                channel="TV Guide"
                views="876K views"
                timestamp="1 week ago"
                duration="15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tv2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Actor Interview - Behind the Character"
                channel="TV Insider"
                views="543K views"
                timestamp="2 weeks ago"
                duration="28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tv3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="TV Show Analysis - Plot and Characters"
                channel="Show Analysis"
                views="765K views"
                timestamp="4 days ago"
                duration="35:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tv4"
              />
            </div>
          </TabsContent>

          <TabsContent value="trailers" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Official Trailer - Upcoming Blockbuster"
                channel="Movie Studio"
                views="5.7M views"
                timestamp="2 days ago"
                duration="2:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/trailer1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="TV Show Teaser - New Season"
                channel="TV Network"
                views="3.2M views"
                timestamp="1 week ago"
                duration="1:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/trailer2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Extended Trailer - Director's Cut"
                channel="Film Studio"
                views="2.1M views"
                timestamp="3 days ago"
                duration="4:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/trailer3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Trailer Breakdown - Easter Eggs & Details"
                channel="Trailer Analysis"
                views="1.5M views"
                timestamp="5 days ago"
                duration="15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/trailer4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
