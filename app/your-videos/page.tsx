import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Filter } from "lucide-react"

export default function YourVideosPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold">Your videos</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="videos">
          <TabsList className="mb-6">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="shorts">Shorts</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="My First Coding Tutorial"
                channel="Your Channel"
                views="1.2K views"
                timestamp="2 weeks ago"
                duration="14:23"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/your1"
                hideAvatar
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="How I Built My Portfolio Website"
                channel="Your Channel"
                views="856 views"
                timestamp="1 month ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/your2"
                hideAvatar
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="React vs Vue - My Thoughts"
                channel="Your Channel"
                views="1.5K views"
                timestamp="3 months ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/your3"
                hideAvatar
              />
            </div>
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <div className="rounded-md bg-muted p-8 text-center">
              <h3 className="text-lg font-medium">No live streams yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your live streams will appear here. Start a live stream to connect with your audience in real-time.
              </p>
              <Button className="mt-4 gap-2">
                <Upload className="h-4 w-4" />
                <span>Go live</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="shorts" className="space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-muted">
                <img
                  src="/placeholder.svg?height=320&width=180"
                  alt="Short thumbnail"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm font-medium text-white">Quick Coding Tip #1</h3>
                  <p className="text-xs text-white/80">2.5K views</p>
                </div>
              </div>
              <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-muted">
                <img
                  src="/placeholder.svg?height=320&width=180"
                  alt="Short thumbnail"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm font-medium text-white">Day in the Life of a Developer</h3>
                  <p className="text-xs text-white/80">1.8K views</p>
                </div>
              </div>
              <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-muted">
                <img
                  src="/placeholder.svg?height=320&width=180"
                  alt="Short thumbnail"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm font-medium text-white">5 VS Code Tricks</h3>
                  <p className="text-xs text-white/80">3.2K views</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
