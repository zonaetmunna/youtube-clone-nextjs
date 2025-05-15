"use client"

import { useState, useRef, useEffect } from "react"
import { Heart, MessageCircle, Share2, MoreVertical, ThumbsDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import shortsData from "@/data/shorts.json"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ShortsHeader from "@/components/shorts-header"
import ShortsSidebar from "@/components/shorts-sidebar"

function ShortVideo({
  short,
  isActive,
  onVideoClick,
}: {
  short: any
  isActive: boolean
  onVideoClick: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likeCount, setLikeCount] = useState(short.likes)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch((err) => console.error("Video play error:", err))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isActive])

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount((prev) => prev - 1)
    } else {
      setLiked(true)
      setLikeCount((prev) => prev + 1)
      if (disliked) {
        setDisliked(false)
      }
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      if (liked) {
        setLiked(false)
        setLikeCount((prev) => prev - 1)
      }
    }
  }

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  return (
    <div className="relative h-full w-full bg-black">
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={() => {
          onVideoClick()
          if (videoRef.current) {
            if (videoRef.current.paused) {
              videoRef.current.play().catch((err) => console.error("Video play error:", err))
            } else {
              videoRef.current.pause()
            }
          }
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={short.videoUrl}
          className="h-full w-full object-cover"
          loop
          playsInline
          muted={false}
          controls={showControls}
        />
      </div>

      {/* Video info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-white text-center">{short.title}</h3>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-white">
                <AvatarImage src={short.avatar || "/placeholder.svg"} alt={short.channel} />
                <AvatarFallback>{short.channel[0]}</AvatarFallback>
              </Avatar>
              <Link href={`/channel/${short.channel}`} className="text-sm text-white hover:text-white">
                @{short.channel}
              </Link>
            </div>
            <Button variant="secondary" size="sm" className="text-xs h-8 rounded-full">
              Subscribe
            </Button>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-300">{short.description} #shorts #funnyvideos #ytshort</p>
          </div>
        </div>
      </div>

      {/* Interaction buttons */}
      <div className="absolute bottom-36 right-4 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full bg-transparent text-white hover:bg-gray-700/60", liked && "text-white")}
            onClick={handleLike}
          >
            <Heart className="h-7 w-7" fill={liked ? "currentColor" : "none"} />
          </Button>
          <span className="mt-1 text-xs text-white">{formatCount(likeCount)}</span>
        </div>

        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full bg-transparent text-white hover:bg-gray-700/60", disliked && "text-white")}
            onClick={handleDislike}
          >
            <ThumbsDown className="h-7 w-7" fill={disliked ? "currentColor" : "none"} />
          </Button>
          <span className="mt-1 text-xs text-white">Dislike</span>
        </div>

        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="rounded-full bg-transparent text-white hover:bg-gray-700/60">
            <MessageCircle className="h-7 w-7" />
          </Button>
          <span className="mt-1 text-xs text-white">{formatCount(short.comments)}</span>
        </div>

        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="rounded-full bg-transparent text-white hover:bg-gray-700/60">
            <Share2 className="h-7 w-7" />
          </Button>
          <span className="mt-1 text-xs text-white">Share</span>
        </div>

        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="rounded-full bg-transparent text-white hover:bg-gray-700/60">
            <MoreVertical className="h-7 w-7" />
          </Button>
        </div>
      </div>

      {/* Channel avatar at bottom */}
      <div className="absolute bottom-4 right-4">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white">
          <Image
            src={short.channelAvatar || "/placeholder.svg?height=40&width=40"}
            alt={short.channel}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default function ShortsPage() {
  const [activeShortIndex, setActiveShortIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const shortRefs = useRef<(HTMLDivElement | null)[]>([])

  // Initialize refs array
  useEffect(() => {
    shortRefs.current = shortRefs.current.slice(0, shortsData.length)
  }, [])

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = shortRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveShortIndex(index)
            }
          }
        })
      },
      {
        threshold: 0.7,
        root: containerRef.current,
      },
    )

    // Observe all short elements
    shortRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleVideoClick = () => {
    // Toggle play/pause handled in the component
  }

  return (
    <div className="flex h-screen w-full bg-black">
      <ShortsSidebar />

      <div className="flex-1 flex flex-col">
        <ShortsHeader />

        <div ref={containerRef} className="flex-1 h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
          {shortsData.map((short, index) => (
            <div
              key={short.id}
              ref={(el) => (shortRefs.current[index] = el)}
              className="h-screen w-full snap-start snap-always"
            >
              <ShortVideo short={short} isActive={activeShortIndex === index} onVideoClick={handleVideoClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
