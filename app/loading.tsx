import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero section skeleton */}
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-2" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>

          {/* Main content skeleton */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <Skeleton className="h-8 w-1/3 mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>

          {/* Features grid skeleton */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <Skeleton className="h-12 w-12 mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
