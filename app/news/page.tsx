import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">News</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="politics">Politics</TabsTrigger>
            <TabsTrigger value="science">Science</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Breaking News</h2>
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
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Top News Channels</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="News Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">News Channel</h3>
                  <p className="text-xs text-muted-foreground">8.5M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="News Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">News Channel</h3>
                  <p className="text-xs text-muted-foreground">6.2M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="News Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">News Channel</h3>
                  <p className="text-xs text-muted-foreground">4.8M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="News Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">News Channel</h3>
                  <p className="text-xs text-muted-foreground">3.9M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="News Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">News Channel</h3>
                  <p className="text-xs text-muted-foreground">5.1M subscribers</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="News Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">News Channel</h3>
                  <p className="text-xs text-muted-foreground">7.3M subscribers</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Latest News Updates</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Morning News Briefing - Today's Headlines"
                  channel="Daily News"
                  views="425K views"
                  timestamp="12 hours ago"
                  duration="15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/news5"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Evening News Roundup - Complete Coverage"
                  channel="Evening News"
                  views="312K views"
                  timestamp="6 hours ago"
                  duration="28:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/news6"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Weekly News Analysis - Expert Commentary"
                  channel="News Analysis"
                  views="876K views"
                  timestamp="3 days ago"
                  duration="42:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/news7"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Breaking News Special Report"
                  channel="Special Reports"
                  views="1.1M views"
                  timestamp="1 day ago"
                  duration="35:22"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/news8"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="technology" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Latest Tech Innovations - Industry Report"
                channel="Tech Insider"
                views="1.5M views"
                timestamp="2 days ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="AI Breakthrough - What It Means For The Future"
                channel="Future Tech"
                views="2.3M views"
                timestamp="1 week ago"
                duration="24:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Tech Company Quarterly Results Analysis"
                channel="Tech Finance"
                views="876K views"
                timestamp="3 days ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="New Smartphone Release - Hands-On Review"
                channel="Tech Reviews"
                views="1.2M views"
                timestamp="5 days ago"
                duration="15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech4"
              />
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Market Update - Stock Analysis"
                channel="Business News"
                views="765K views"
                timestamp="1 day ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Economic Forecast - Expert Predictions"
                channel="Economy Today"
                views="543K views"
                timestamp="3 days ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Startup Success Story - From Idea to IPO"
                channel="Startup Stories"
                views="987K views"
                timestamp="1 week ago"
                duration="35:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Corporate Earnings Report - Q3 Results"
                channel="Financial News"
                views="432K views"
                timestamp="4 days ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/business4"
              />
            </div>
          </TabsContent>

          <TabsContent value="politics" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Political Debate Analysis - Key Takeaways"
                channel="Political Analysis"
                views="1.8M views"
                timestamp="2 days ago"
                duration="42:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/politics1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Election Coverage - Live Results"
                channel="Election News"
                views="3.2M views"
                timestamp="1 day ago"
                duration="1:15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/politics2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Policy Breakdown - What You Need to Know"
                channel="Policy Explained"
                views="765K views"
                timestamp="5 days ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/politics3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="International Relations Update - Global Politics"
                channel="Global Affairs"
                views="543K views"
                timestamp="1 week ago"
                duration="35:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/politics4"
              />
            </div>
          </TabsContent>

          <TabsContent value="science" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Scientific Discovery - Breakthrough Research"
                channel="Science Today"
                views="1.2M views"
                timestamp="3 days ago"
                duration="24:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Space Exploration Update - Mission Results"
                channel="Space News"
                views="2.1M views"
                timestamp="1 week ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Medical Research Findings - Health Implications"
                channel="Medical Science"
                views="876K views"
                timestamp="5 days ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Environmental Science Report - Climate Data"
                channel="Environmental News"
                views="765K views"
                timestamp="2 days ago"
                duration="35:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
