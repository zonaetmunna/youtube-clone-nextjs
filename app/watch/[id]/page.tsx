"use client"

import CommentSection from "@/components/comment-section"
import Layout from "@/components/layout"
import RelatedVideos from "@/components/related-videos"
import VideoInfo from "@/components/video-info"
import VideoPlayer from "@/components/video-player"
import allComments from "@/data/comments.json"
import allVideos from "@/data/videos.json"
import { useEffect, useState } from "react"

export default async function WatchPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const [video, setVideo] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch with a small delay
    const fetchData = async () => {
      setLoading(true)

      // Find the video by ID
      const foundVideo = allVideos.find((v) => v.id === params.id)

      // Find comments for this video
      const videoComments = allComments.filter((c) => c.videoId === params.id)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      setVideo(foundVideo || null)
      setComments(videoComments || [])
      setLoading(false)
    }

    fetchData()
  }, [id])

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col gap-4 p-4 md:flex-row md:p-6">
          <div className="w-full md:w-2/3">
            <div className="aspect-video w-full animate-pulse rounded-lg bg-muted"></div>
            <div className="mt-4 h-8 w-3/4 animate-pulse rounded-lg bg-muted"></div>
            <div className="mt-2 h-4 w-1/2 animate-pulse rounded-lg bg-muted"></div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="h-full animate-pulse rounded-lg bg-muted"></div>
          </div>
        </div>
      </Layout>
    )
  }

  if (!video) {
    return (
      <Layout>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Video not found</h2>
            <p className="text-muted-foreground">The video you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col gap-4 p-4 md:flex-row md:p-6">
        <div className="w-full md:w-2/3">
          <VideoPlayer videoUrl={video.videoUrl} />
          <VideoInfo
            title={video.title}
            channel={video.channel}
            channelId={video.channelId}
            avatar={video.avatar}
            subscribers={video.subscribers || "1.2M"}
            views={video.views}
            timestamp={video.timestamp}
            description={video.description}
            likes={video.likes}
            dislikes={video.dislikes}
          />
          <CommentSection comments={comments} />
        </div>
        <div className="w-full md:w-1/3">
          <RelatedVideos currentVideoId={params.id} />
        </div>
      </div>
    </Layout>
  )
}
