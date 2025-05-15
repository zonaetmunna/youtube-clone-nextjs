import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex h-screen w-full bg-black">
      <div className="fixed inset-y-0 left-0 z-40 hidden w-[72px] flex-col border-r border-gray-800 bg-black md:flex">
        <div className="flex h-14 items-center justify-center border-b border-gray-800">
          <Skeleton className="h-6 w-6 rounded-full bg-gray-800" />
        </div>

        <div className="flex flex-col items-center gap-6 py-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <Skeleton className="h-5 w-5 rounded-full bg-gray-800" />
                <Skeleton className="h-2 w-10 rounded bg-gray-800" />
              </div>
            ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between bg-black/90 px-4">
          <Skeleton className="h-5 w-5 rounded-full bg-gray-800" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-5 rounded-full bg-gray-800" />
            <Skeleton className="h-5 w-5 rounded-full bg-gray-800" />
            <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <Skeleton className="h-80 w-60 rounded-lg bg-gray-800" />
            <Skeleton className="mt-4 h-4 w-40 rounded bg-gray-800" />
            <Skeleton className="mt-2 h-3 w-32 rounded bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  )
}
