import Layout from "@/components/layout"
import VideoCard from "@/components/video-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearningPage() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">Learning</h1>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="science">Science</TabsTrigger>
            <TabsTrigger value="math">Mathematics</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Popular Courses</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Learn Python Programming - Complete Course"
                  channel="Coding Academy"
                  views="2.1M views"
                  timestamp="3 months ago"
                  duration="4:32:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning1"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Mathematics Made Easy - Calculus Basics"
                  channel="Math Simplified"
                  views="1.3M views"
                  timestamp="2 months ago"
                  duration="45:22"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning2"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="History of Ancient Civilizations - Documentary"
                  channel="History Channel"
                  views="876K views"
                  timestamp="1 month ago"
                  duration="1:28:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning3"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Physics Explained - Quantum Mechanics"
                  channel="Science Simplified"
                  views="654K views"
                  timestamp="3 weeks ago"
                  duration="52:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning4"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Top Educators</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Educator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Educator Name</h3>
                  <p className="text-xs text-muted-foreground">Computer Science</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Educator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Educator Name</h3>
                  <p className="text-xs text-muted-foreground">Mathematics</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Educator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Educator Name</h3>
                  <p className="text-xs text-muted-foreground">Physics</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Educator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Educator Name</h3>
                  <p className="text-xs text-muted-foreground">History</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Educator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Educator Name</h3>
                  <p className="text-xs text-muted-foreground">Chemistry</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Educator"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium">Educator Name</h3>
                  <p className="text-xs text-muted-foreground">Biology</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Latest Educational Videos</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Web Development Tutorial - Full Stack Basics"
                  channel="Coding Tutorials"
                  views="1.5M views"
                  timestamp="2 weeks ago"
                  duration="1:15:32"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning5"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Language Learning - Beginner's Guide"
                  channel="Language Academy"
                  views="876K views"
                  timestamp="1 month ago"
                  duration="42:18"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning6"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Financial Literacy - Investment Basics"
                  channel="Finance Education"
                  views="1.2M views"
                  timestamp="3 weeks ago"
                  duration="35:45"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning7"
                />
                <VideoCard
                  thumbnail="/placeholder.svg?height=200&width=360"
                  title="Art History - Renaissance Period"
                  channel="Art Education"
                  views="543K views"
                  timestamp="1 month ago"
                  duration="48:22"
                  avatar="/placeholder.svg?height=40&width=40"
                  href="/watch/learning8"
                />
              </div>
            </section>
          </TabsContent>

          <TabsContent value="programming" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Learn Python Programming - Complete Course"
                channel="Coding Academy"
                views="2.1M views"
                timestamp="3 months ago"
                duration="4:32:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/programming1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="JavaScript Fundamentals for Beginners"
                channel="Web Dev Simplified"
                views="1.8M views"
                timestamp="2 months ago"
                duration="3:15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/programming2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Data Structures and Algorithms"
                channel="CS Fundamentals"
                views="1.5M views"
                timestamp="1 month ago"
                duration="2:48:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/programming3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="React.js Crash Course for Beginners"
                channel="Frontend Masters"
                views="2.3M views"
                timestamp="3 weeks ago"
                duration="1:52:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/programming4"
              />
            </div>
          </TabsContent>

          <TabsContent value="science" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Physics Explained - Quantum Mechanics"
                channel="Science Simplified"
                views="654K views"
                timestamp="3 weeks ago"
                duration="52:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Chemistry Basics - Atomic Structure"
                channel="Chemistry Explained"
                views="876K views"
                timestamp="1 month ago"
                duration="45:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Biology 101 - Cell Structure and Function"
                channel="Biology Basics"
                views="1.2M views"
                timestamp="2 months ago"
                duration="1:12:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Astronomy - Exploring Our Solar System"
                channel="Space Science"
                views="1.5M views"
                timestamp="3 weeks ago"
                duration="1:28:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/science4"
              />
            </div>
          </TabsContent>

          <TabsContent value="math" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Mathematics Made Easy - Calculus Basics"
                channel="Math Simplified"
                views="1.3M views"
                timestamp="2 months ago"
                duration="45:22"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/math1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Algebra Fundamentals - Solving Equations"
                channel="Math Tutorials"
                views="987K views"
                timestamp="1 month ago"
                duration="52:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/math2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Geometry Explained - Shapes and Theorems"
                channel="Geometry Basics"
                views="765K views"
                timestamp="3 weeks ago"
                duration="48:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/math3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Statistics and Probability - Data Analysis"
                channel="Stats Explained"
                views="543K views"
                timestamp="1 month ago"
                duration="1:15:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/math4"
              />
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="History of Ancient Civilizations - Documentary"
                channel="History Channel"
                views="876K views"
                timestamp="1 month ago"
                duration="1:28:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/history1"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="World War II - Complete Documentary"
                channel="Historical Archives"
                views="2.1M views"
                timestamp="2 months ago"
                duration="2:45:18"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/history2"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="The Renaissance - Art and Culture"
                channel="Art History"
                views="1.2M views"
                timestamp="3 weeks ago"
                duration="1:32:45"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/history3"
              />
              <VideoCard
                thumbnail="/placeholder.svg?height=200&width=360"
                title="Ancient Egypt - Pyramids and Pharaohs"
                channel="Ancient History"
                views="1.5M views"
                timestamp="1 month ago"
                duration="1:48:32"
                avatar="/placeholder.svg?height=40&width=40"
                href="/watch/history4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
