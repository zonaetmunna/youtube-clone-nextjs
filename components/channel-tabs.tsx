"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ThumbsUp, ThumbsDown, Share } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import VideoCard from "@/components/video-card"

export default function ChannelTabs() {
  const [activeTab, setActiveTab] = useState("videos")

  return (
    <Tabs defaultValue="videos" value={activeTab} onValueChange={setActiveTab} className="mt-6">
      <TabsList className="w-full justify-start border-b pb-px">
        <TabsTrigger
          value="videos"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600"
        >
          Videos
        </TabsTrigger>
        <TabsTrigger
          value="playlists"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600"
        >
          Playlists
        </TabsTrigger>
        <TabsTrigger
          value="community"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600"
        >
          Community
        </TabsTrigger>
        <TabsTrigger
          value="about"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600"
        >
          About
        </TabsTrigger>
      </TabsList>
      <TabsContent value="videos" className="mt-6">
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
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Introducing the frontend cloud"
            channel="Vercel"
            views="1.5M views"
            timestamp="2 months ago"
            duration="18:32"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/3"
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Introducing v0: Generative UI"
            channel="Vercel"
            views="2.1M views"
            timestamp="1 month ago"
            duration="22:45"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/2"
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Server Components in Next.js 14"
            channel="Vercel"
            views="876K views"
            timestamp="3 weeks ago"
            duration="26:18"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/4"
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Building with the Vercel AI SDK"
            channel="Vercel"
            views="543K views"
            timestamp="2 weeks ago"
            duration="31:45"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/5"
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Optimizing Next.js Applications"
            channel="Vercel"
            views="432K views"
            timestamp="1 month ago"
            duration="28:56"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/6"
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Next.js Conf 2023 Highlights"
            channel="Vercel"
            views="987K views"
            timestamp="5 months ago"
            duration="42:11"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/7"
            hideAvatar
          />
          <VideoCard
            thumbnail="/placeholder.svg?height=200&width=360"
            title="Vercel Storage: KV, Postgres, and Blob"
            channel="Vercel"
            views="654K views"
            timestamp="3 months ago"
            duration="35:22"
            avatar="/placeholder.svg?height=40&width=40"
            href="/watch/8"
            hideAvatar
          />
        </div>
      </TabsContent>
      <TabsContent value="playlists" className="mt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-xl">
            <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold">Next.js Tutorials</h3>
              <p className="text-xs text-muted-foreground">8 videos</p>
            </div>
            <Link href="#" className="absolute inset-0">
              <span className="sr-only">View playlist</span>
            </Link>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold">Vercel AI SDK</h3>
              <p className="text-xs text-muted-foreground">12 videos</p>
            </div>
            <Link href="#" className="absolute inset-0">
              <span className="sr-only">View playlist</span>
            </Link>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <div className="aspect-video grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-muted">
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=90&width=160"
                alt="Playlist thumbnail"
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold">Next.js Conf Talks</h3>
              <p className="text-xs text-muted-foreground">24 videos</p>
            </div>
            <Link href="#" className="absolute inset-0">
              <span className="sr-only">View playlist</span>
            </Link>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="community" className="mt-6">
        <div className="space-y-6">
          <div className="rounded-xl border p-4">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Channel avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Vercel</span>
                  <span className="text-xs text-muted-foreground">2 days ago</span>
                </div>
                <p className="mt-2">
                  We're excited to announce the release of Next.js 14! Check out our latest video to learn about all the
                  new features.
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=720"
                    alt="Post image"
                    width={720}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>12K</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border p-4">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Channel avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Vercel</span>
                  <span className="text-xs text-muted-foreground">1 week ago</span>
                </div>
                <p className="mt-2">
                  What features would you like to see in the next version of Next.js? Let us know in the comments!
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>8.5K</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="about" className="mt-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vercel is the platform for frontend developers, providing the speed and reliability innovators need to
              create at the moment of inspiration.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold">Links</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Website</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Twitter</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Stats</h2>
            <dl className="mt-2 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Joined</dt>
                <dd>Jan 12, 2015</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Total views</dt>
                <dd>128.5M</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subscribers</dt>
                <dd>1.2M</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Videos</dt>
                <dd>250</dd>
              </div>
            </dl>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
