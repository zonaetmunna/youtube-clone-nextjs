import Layout from "@/components/layout"
import VideoGrid from "@/components/video-grid"
import CategoryFilter from "@/components/category-filter"

export default function HomePage() {
  return (
    <Layout>
      <div className="grid gap-6 p-4 md:p-6">
        <CategoryFilter />
        <VideoGrid />
      </div>
    </Layout>
  )
}
