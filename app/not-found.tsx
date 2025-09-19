"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-black mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-black mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you might
            have entered the wrong URL.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-black mb-4">What you can do:</h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li>• Check the URL for any typos</li>
            <li>• Go back to the previous page</li>
            <li>• Visit our homepage</li>
            <li>• Use our sitemap to find what you're looking for</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>

          <Link
            href="/sitemap-page"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors inline-flex items-center"
          >
            <Search className="w-4 h-4 mr-2" />
            View Sitemap
          </Link>
        </div>

        <div className="mt-12 p-6 bg-black text-white rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
          <p className="text-gray-300 mb-4">
            If you believe this is an error or need assistance, please contact our support team.
          </p>
          <Link href="/contact" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
