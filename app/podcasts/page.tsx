import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PodcastsPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Podcasts</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tech">Technology</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="comedy">Comedy</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Popular Podcasts</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Tech Talk - Latest in Technology"
                  channel="Tech Podcast"
                  views="1.5M views"
                  timestamp="1 week ago"
                  duration="1:15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Business Insights - Entrepreneurship Stories"
                  channel="Business Podcast"
                  views="876K views"
                  timestamp="2 weeks ago"
                  duration="1:22:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Comedy Hour - Stand-up Special"
                  channel="Comedy Podcast"
                  views="2.1M views"
                  timestamp="3 days ago"
                  duration="58:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Educational Discussions - Learning Together"
                  channel="Education Podcast"
                  views="765K views"
                  timestamp="1 month ago"
                  duration="1:32:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast4"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Top Podcast Hosts</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Podcast Host"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Host Name</h3>
                  <p className="text-xs text-muted-foreground">Technology</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Podcast Host"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Host Name</h3>
                  <p className="text-xs text-muted-foreground">Business</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Podcast Host"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Host Name</h3>
                  <p className="text-xs text-muted-foreground">Comedy</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Podcast Host"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Host Name</h3>
                  <p className="text-xs text-muted-foreground">Education</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Podcast Host"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Host Name</h3>
                  <p className="text-xs text-muted-foreground">News</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Podcast Host"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Host Name</h3>
                  <p className="text-xs text-muted-foreground">Health</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Latest Podcast Episodes</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Interview with Industry Leader - Tech Insights"
                  channel="Tech Talks"
                  views="543K views"
                  timestamp="2 days ago"
                  duration="1:05:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast5"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Financial Freedom - Investment Strategies"
                  channel="Money Matters"
                  views="432K views"
                  timestamp="5 days ago"
                  duration="1:12:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast6"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Comedy Special - Live Recording"
                  channel="Laugh Hour"
                  views="987K views"
                  timestamp="1 week ago"
                  duration="1:28:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast7"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Science Explained - Latest Discoveries"
                  channel="Science Podcast"
                  views="654K views"
                  timestamp="3 days ago"
                  duration="1:15:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/podcast8"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="tech" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Tech Talk - Latest in Technology"
                channel="Tech Podcast"
                views="1.5M views"
                timestamp="1 week ago"
                duration="1:15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-podcast1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="AI Revolution - Future of Technology"
                channel="Future Tech"
                views="2.1M views"
                timestamp="2 weeks ago"
                duration="1:28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-podcast2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Startup Stories - Tech Entrepreneurs"
                channel="Startup Podcast"
                views="876K views"
                timestamp="3 days ago"
                duration="1:12:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-podcast3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Coding Journey - Developer Stories"
                channel="Code Podcast"
                views="765K views"
                timestamp="1 month ago"
                duration="1:05:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-podcast4"
              />
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Business Insights - Entrepreneurship Stories"
                channel="Business Podcast"
                views="876K views"
                timestamp="2 weeks ago"
                duration="1:22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business-podcast1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Market Analysis - Investment Strategies"
                channel="Finance Podcast"
                views="654K views"
                timestamp="1 week ago"
                duration="1:15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business-podcast2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Leadership Lessons - CEO Interviews"
                channel="Leadership Podcast"
                views="543K views"
                timestamp="3 days ago"
                duration="1:28:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business-podcast3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Startup Success Stories - From Idea to IPO"
                channel="Startup Podcast"
                views="987K views"
                timestamp="1 month ago"
                duration="1:42:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business-podcast4"
              />
            </div>
          </TabsContent>

          <TabsContent value="comedy" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Comedy Hour - Stand-up Special"
                channel="Comedy Podcast"
                views="2.1M views"
                timestamp="3 days ago"
                duration="58:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/comedy-podcast1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Funny Stories - Comedians Share"
                channel="Laugh Podcast"
                views="1.8M views"
                timestamp="1 week ago"
                duration="1:12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/comedy-podcast2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Comedy Panel - Hilarious Discussions"
                channel="Panel Podcast"
                views="1.5M views"
                timestamp="2 weeks ago"
                duration="1:25:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/comedy-podcast3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Improv Comedy - Live Recording"
                channel="Improv Podcast"
                views="1.2M views"
                timestamp="5 days ago"
                duration="1:05:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/comedy-podcast4"
              />
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Educational Discussions - Learning Together"
                channel="Education Podcast"
                views="765K views"
                timestamp="1 month ago"
                duration="1:32:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/education-podcast1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Science Explained - Latest Discoveries"
                channel="Science Podcast"
                views="654K views"
                timestamp="3 days ago"
                duration="1:15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/education-podcast2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="History Uncovered - Fascinating Stories"
                channel="History Podcast"
                views="543K views"
                timestamp="2 weeks ago"
                duration="1:28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/education-podcast3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Language Learning - Practical Tips"
                channel="Language Podcast"
                views="432K views"
                timestamp="1 week ago"
                duration="1:12:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/education-podcast4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
