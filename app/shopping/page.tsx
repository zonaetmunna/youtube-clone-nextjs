import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShoppingPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Shopping</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="beauty">Beauty</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Trending Products</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Top 10 Tech Gadgets of 2023 - Honest Review"
                  channel="Tech Reviews"
                  views="1.5M views"
                  timestamp="2 weeks ago"
                  duration="18:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Fashion Haul - Summer Collection"
                  channel="Fashion Channel"
                  views="876K views"
                  timestamp="1 month ago"
                  duration="22:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Home Decor Ideas - Budget Friendly"
                  channel="Home Design"
                  views="654K views"
                  timestamp="3 weeks ago"
                  duration="15:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Beauty Products Worth The Hype"
                  channel="Beauty Reviews"
                  views="1.2M views"
                  timestamp="1 week ago"
                  duration="25:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping4"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Top Shopping Channels</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Shopping Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Channel Name</h3>
                  <p className="text-xs text-muted-foreground">Tech Reviews</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Shopping Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Channel Name</h3>
                  <p className="text-xs text-muted-foreground">Fashion</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Shopping Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Channel Name</h3>
                  <p className="text-xs text-muted-foreground">Home Decor</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Shopping Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Channel Name</h3>
                  <p className="text-xs text-muted-foreground">Beauty</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Shopping Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Channel Name</h3>
                  <p className="text-xs text-muted-foreground">Kitchen Gadgets</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Shopping Channel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Channel Name</h3>
                  <p className="text-xs text-muted-foreground">Fitness Gear</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Latest Reviews</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Smartphone Review - Is It Worth It?"
                  channel="Tech Reviews"
                  views="987K views"
                  timestamp="3 days ago"
                  duration="15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping5"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Designer vs. Budget Fashion - Comparison"
                  channel="Fashion Reviews"
                  views="765K views"
                  timestamp="1 week ago"
                  duration="22:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping6"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Kitchen Gadgets That Changed My Life"
                  channel="Home Reviews"
                  views="543K views"
                  timestamp="2 weeks ago"
                  duration="18:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping7"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Luxury vs. Drugstore Makeup - Worth The Price?"
                  channel="Beauty Reviews"
                  views="1.1M views"
                  timestamp="5 days ago"
                  duration="28:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/shopping8"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="tech" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Top 10 Tech Gadgets of 2023 - Honest Review"
                channel="Tech Reviews"
                views="1.5M views"
                timestamp="2 weeks ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-shopping1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Smartphone Review - Is It Worth It?"
                channel="Tech Reviews"
                views="987K views"
                timestamp="3 days ago"
                duration="15:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-shopping2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Best Laptops for Every Budget - 2023 Guide"
                channel="Tech Guide"
                views="1.2M views"
                timestamp="1 month ago"
                duration="25:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-shopping3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Smart Home Devices - Complete Setup Guide"
                channel="Tech Home"
                views="876K views"
                timestamp="2 weeks ago"
                duration="32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/tech-shopping4"
              />
            </div>
          </TabsContent>

          <TabsContent value="fashion" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Fashion Haul - Summer Collection"
                channel="Fashion Channel"
                views="876K views"
                timestamp="1 month ago"
                duration="22:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion-shopping1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Designer vs. Budget Fashion - Comparison"
                channel="Fashion Reviews"
                views="765K views"
                timestamp="1 week ago"
                duration="22:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion-shopping2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Sustainable Fashion Brands - Eco-Friendly Options"
                channel="Eco Fashion"
                views="543K views"
                timestamp="2 weeks ago"
                duration="18:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion-shopping3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Wardrobe Essentials - Build Your Collection"
                channel="Fashion Basics"
                views="987K views"
                timestamp="3 weeks ago"
                duration="25:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/fashion-shopping4"
              />
            </div>
          </TabsContent>

          <TabsContent value="home" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Home Decor Ideas - Budget Friendly"
                channel="Home Design"
                views="654K views"
                timestamp="3 weeks ago"
                duration="15:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/home-shopping1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Kitchen Gadgets That Changed My Life"
                channel="Home Reviews"
                views="543K views"
                timestamp="2 weeks ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/home-shopping2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Furniture Shopping Guide - Quality vs. Price"
                channel="Home Guide"
                views="432K views"
                timestamp="1 month ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/home-shopping3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Small Space Organization - Maximize Your Home"
                channel="Home Organization"
                views="765K views"
                timestamp="2 weeks ago"
                duration="22:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/home-shopping4"
              />
            </div>
          </TabsContent>

          <TabsContent value="beauty" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Beauty Products Worth The Hype"
                channel="Beauty Reviews"
                views="1.2M views"
                timestamp="1 week ago"
                duration="25:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty-shopping1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Luxury vs. Drugstore Makeup - Worth The Price?"
                channel="Beauty Reviews"
                views="1.1M views"
                timestamp="5 days ago"
                duration="28:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty-shopping2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Skincare Products for Every Skin Type"
                channel="Skincare Guide"
                views="876K views"
                timestamp="2 weeks ago"
                duration="18:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty-shopping3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Hair Care Products - Professional Recommendations"
                channel="Hair Care"
                views="654K views"
                timestamp="3 weeks ago"
                duration="22:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/beauty-shopping4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
