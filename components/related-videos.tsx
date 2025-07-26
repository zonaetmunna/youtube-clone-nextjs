import VideoCard from "@/components/video-card"
import videos from "@/data/videos.json"

export default function RelatedVideos({ currentVideoId }: { currentVideoId: string }) {
  // Filter out the current video and get up to 5 related videos
  const relatedVideos = videos.filter((video) => video.id !== currentVideoId).slice(0, 5)

  return (
    <div className="flex flex-col gap-2">
      {relatedVideos.map((video) => (
        <VideoCard
          key={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          timestamp={video.timestamp}
          duration={video.duration}
          avatar={video.avatar}
          href={`/watch/${video.id}`}
          layout="compact"
        />
      ))}
    </div>
  )
}
