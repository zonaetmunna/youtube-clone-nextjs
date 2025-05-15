import VideoCard from "@/components/video-card"
import videos from "@/data/videos.json"

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((video) => (
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
        />
      ))}
    </div>
  )
}
