"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-black mb-4">Something went wrong!</h1>
          <p className="text-lg text-gray-600 mb-8">
            We encountered an unexpected error. This has been logged and we'll look into it.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-black mb-2">Error Details</h3>
          <p className="text-sm text-gray-600 font-mono bg-white p-3 rounded border">
            {error.message || "An unexpected error occurred"}
          </p>
          {error.digest && <p className="text-xs text-gray-500 mt-2">Error ID: {error.digest}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>

          <Link
            href="/"
            className="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition-colors inline-flex items-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          If this problem persists, please{" "}
          <Link href="/contact" className="text-black hover:underline">
            contact our support team
          </Link>
          .
        </div>
      </div>
    </div>
  )
}
