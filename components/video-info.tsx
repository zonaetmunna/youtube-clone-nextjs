"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import ShareDialog from "@/components/share-dialog"

interface VideoInfoProps {
  title: string
  channel: string
  channelId: string
  avatar: string
  subscribers: string
  views: string
  timestamp: string
  description: string
  likes: number
  dislikes: number
}

export default function VideoInfo({
  title,
  channel,
  channelId,
  avatar,
  subscribers,
  views,
  timestamp,
  description,
  likes: initialLikes,
  dislikes: initialDislikes,
}: VideoInfoProps) {
  const [expanded, setExpanded] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
      if (disliked) {
        setDisliked(false)
        setDislikes(dislikes - 1)
      }
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
      setDislikes(dislikes - 1)
    } else {
      setDisliked(true)
      setDislikes(dislikes + 1)
      if (liked) {
        setLiked(false)
        setLikes(likes - 1)
      }
    }
  }

  const handleSubscribe = () => {
    setSubscribed(!subscribed)
    toast({
      title: subscribed ? "Unsubscribed" : "Subscribed",
      description: subscribed ? `You have unsubscribed from ${channel}` : `You have subscribed to ${channel}`,
      duration: 3000,
    })
  }

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your video will be downloaded shortly.",
      duration: 3000,
    })
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
    <div className="mt-4">
      <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/channel/${channelId}`}>
            <Image src={avatar || "/placeholder.svg"} alt={channel} width={40} height={40} className="rounded-full" />
          </Link>
          <div>
            <Link href={`/channel/${channelId}`} className="font-medium hover:underline">
              {channel}
            </Link>
            <div className="text-sm text-muted-foreground">{subscribers} subscribers</div>
          </div>
          <Button
            variant={subscribed ? "outline" : "default"}
            size="sm"
            className={cn("ml-4", subscribed && "gap-1")}
            onClick={handleSubscribe}
          >
            {subscribed && <Check className="h-4 w-4" />}
            {subscribed ? "Subscribed" : "Subscribe"}
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex overflow-hidden rounded-full bg-muted">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-1 rounded-l-full rounded-r-none px-4",
                liked && "bg-muted-foreground/10 text-foreground",
              )}
              onClick={handleLike}
            >
              <ThumbsUp className={cn("h-4 w-4", liked && "fill-current")} />
              <span>{formatCount(likes)}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn("rounded-l-none rounded-r-full px-4", disliked && "bg-muted-foreground/10 text-foreground")}
              onClick={handleDislike}
            >
              <ThumbsDown className={cn("h-4 w-4", disliked && "fill-current")} />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 rounded-full" onClick={() => setShareDialogOpen(true)}>
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 rounded-full" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full px-2">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-muted p-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{views} views</span>
          <span>•</span>
          <span>{timestamp}</span>
        </div>
        <div className={cn("mt-2 whitespace-pre-wrap text-sm", !expanded && "line-clamp-2")}>{description}</div>
        {description.length > 120 && (
          <Button variant="link" size="sm" className="mt-1 h-auto p-0" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
      <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} videoTitle={title} />
    </div>
  )
}
