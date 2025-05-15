import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface VideoCardProps {
  thumbnail: string
  title: string
  channel: string
  views: string
  timestamp: string
  duration: string
  avatar: string
  href: string
  layout?: "default" | "compact"
  hideAvatar?: boolean
}

export default function VideoCard({
  thumbnail,
  title,
  channel,
  views,
  timestamp,
  duration,
  avatar,
  href,
  layout = "default",
  hideAvatar = false,
}: VideoCardProps) {
  if (layout === "compact") {
    return (
      <div className="group relative flex gap-3">
        <div className="relative aspect-video h-24 overflow-hidden rounded-lg">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-xs text-white">{duration}</div>
          <Link href={href} className="absolute inset-0">
            <span className="sr-only">View</span>
          </Link>
        </div>
        <div className="flex-1">
          <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
          <div className="mt-1 text-xs text-muted-foreground">{channel}</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <span>{views}</span>
            <span>•</span>
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-xs text-white">{duration}</div>
        <Link href={href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      </div>
      <div className="mt-2 flex gap-2">
        {!hideAvatar && (
          <Image
            src={avatar || "/placeholder.svg"}
            alt={channel}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
        )}
        <div className={cn(!hideAvatar ? "" : "ml-0")}>
          <h3 className="font-medium line-clamp-2">{title}</h3>
          <div className="mt-1 text-sm text-muted-foreground">{channel}</div>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <span>{views}</span>
            <span>•</span>
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
