import Image from "next/image"
import Link from "next/link"

interface SearchResultCardProps {
  thumbnail: string
  title: string
  channel: string
  views: string
  timestamp: string
  duration: string
  avatar: string
  description: string
  href: string
}

export default function SearchResultCard({
  thumbnail,
  title,
  channel,
  views,
  timestamp,
  duration,
  avatar,
  description,
  href,
}: SearchResultCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 sm:flex-row">
      <div className="relative aspect-video w-full sm:w-64 overflow-hidden rounded-xl">
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
        <h3 className="font-medium line-clamp-2 text-lg">{title}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <span>{views}</span>
          <span>•</span>
          <span>{timestamp}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={channel}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
          <div className="text-sm text-muted-foreground">{channel}</div>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
