import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FashionPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Fashion & Beauty</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
            <TabsTrigger value="beauty">Beauty</TabsTrigger>
            <TabsTrigger value="makeup">Makeup</TabsTrigger>
            <TabsTrigger value="hair">Hair</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Trending in Fashion & Beauty</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Summer Fashion Trends 2023"
                  channel="Fashion Forward"
                  views="1.5M views"
                  timestamp="2 weeks ago"
                  duration="15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/fashion1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="10-Minute Everyday Makeup Tutorial"
                  channel="Beauty Basics"
                  views="2.3M views"
                  timestamp="1 month ago"
                  duration="12:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/beauty1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Hair Styling Tips for All Hair Types"
                  channel="Hair Experts"
                  views="987K views"
                  timestamp="3 weeks ago"
                  duration="18:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/hair1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Sustainable Fashion Guide - Eco-Friendly Brands"
                  channel="Eco Fashion"
                  views="765K views"
                  timestamp="1 month ago"
                  duration="22:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/fashion2"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Top Fashion & Beauty Creators</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Creator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Creator Name</h3>
                  <p className="text-xs text-muted-foreground">Fashion</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Creator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Creator Name</h3>
                  <p className="text-xs text-muted-foreground">Makeup</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Creator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Creator Name</h3>
                  <p className="text-xs text-muted-foreground">Hair</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Creator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Creator Name</h3>
                  <p className="text-xs text-muted-foreground">Skincare</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Creator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Creator Name</h3>
                  <p className="text-xs text-muted-foreground">Style</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Creator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Creator Name</h3>
                  <p className="text-xs text-muted-foreground">Beauty</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Latest Fashion & Beauty Videos</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Fall Wardrobe Essentials - Must-Have Items"
                  channel="Fashion Guide"
                  views="543K views"
                  timestamp="1 week ago"
                  duration="18:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/fashion3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Natural Skincare Routine - Morning & Night"
                  channel="Skincare Basics"
                  views="876K views"
                  timestamp="2 weeks ago"
                  duration="15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/beauty2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="5-Minute Hairstyles for Busy Mornings"
                  channel="Quick Hair"
                  views="1.2M views"
                  timestamp="3 days ago"
                  duration="8:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/hair2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Fashion Week Highlights - Designer Collections"
                  channel="Fashion Week"
                  views="1.5M views"
                  timestamp="5 days ago"
                  duration="25:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/fashion4"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="fashion" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Summer Fashion Trends 2023"
                channel="Fashion Forward"
                views="1.5M views"
                timestamp="2 weeks ago"
                duration="15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Sustainable Fashion Guide - Eco-Friendly Brands"
                channel="Eco Fashion"
                views="765K views"
                timestamp="1 month ago"
                duration="22:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Fall Wardrobe Essentials - Must-Have Items"
                channel="Fashion Guide"
                views="543K views"
                timestamp="1 week ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Fashion Week Highlights - Designer Collections"
                channel="Fashion Week"
                views="1.5M views"
                timestamp="5 days ago"
                duration="25:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion4"
              />
            </div>
          </TabsContent>

          <TabsContent value="beauty" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="10-Minute Everyday Makeup Tutorial"
                channel="Beauty Basics"
                views="2.3M views"
                timestamp="1 month ago"
                duration="12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Natural Skincare Routine - Morning & Night"
                channel="Skincare Basics"
                views="876K views"
                timestamp="2 weeks ago"
                duration="15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Beauty Products Worth The Hype - Honest Review"
                channel="Beauty Reviews"
                views="1.2M views"
                timestamp="3 weeks ago"
                duration="22:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Skincare Myths Debunked - Expert Advice"
                channel="Skincare Expert"
                views="987K views"
                timestamp="1 month ago"
                duration="28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty4"
              />
            </div>
          </TabsContent>

          <TabsContent value="makeup" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Everyday Makeup Tutorial - Natural Look"
                channel="Makeup Basics"
                views="1.8M views"
                timestamp="2 weeks ago"
                duration="15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/makeup1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Glam Makeup Tutorial - Evening Look"
                channel="Glam Makeup"
                views="1.2M views"
                timestamp="1 month ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/makeup2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Makeup for Beginners - Essential Products"
                channel="Makeup 101"
                views="2.5M views"
                timestamp="3 weeks ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/makeup3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Celebrity Makeup Artist Secrets Revealed"
                channel="Pro Makeup"
                views="1.5M views"
                timestamp="1 month ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/makeup4"
              />
            </div>
          </TabsContent>

          <TabsContent value="hair" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Hair Styling Tips for All Hair Types"
                channel="Hair Experts"
                views="987K views"
                timestamp="3 weeks ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/hair1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="5-Minute Hairstyles for Busy Mornings"
                channel="Quick Hair"
                views="1.2M views"
                timestamp="3 days ago"
                duration="8:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/hair2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Hair Care Routine for Healthy Hair"
                channel="Hair Care"
                views="876K views"
                timestamp="2 weeks ago"
                duration="15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/hair3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Hair Color Trends 2023 - New Techniques"
                channel="Hair Color"
                views="765K views"
                timestamp="1 month ago"
                duration="25:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/hair4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
