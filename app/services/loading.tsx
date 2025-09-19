import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header skeleton */}
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>

          {/* Services grid skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mx-auto mb-4" />
                <Skeleton className="h-10 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
