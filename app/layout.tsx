import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "PageSpeed Pro - Professional Website Performance Analysis Tool",
  description:
    "Analyze your website performance and SEO with real Google PageSpeed Insights data. Get detailed insights, Core Web Vitals, and actionable recommendations to improve your site speed and user experience.",
  keywords:
    "PageSpeed Insights, website performance, SEO analysis, Core Web Vitals, site speed optimization, Google Lighthouse, web performance testing, website speed test, performance audit, SEO tools",
  authors: [{ name: "Umar Hashmi", url: "https://umarhashmi.dev" }],
  creator: "Umar Hashmi",
  publisher: "PageSpeed Pro",
  robots: "index, follow",
  openGraph: {
    title: "PageSpeed Pro - Professional Website Performance Analysis",
    description:
      "Analyze your website performance with real Google data. Get detailed insights and recommendations to improve speed, SEO, and user experience.",
    type: "website",
    locale: "en_US",
    url: "https://vnhaxai.com",
    siteName: "PageSpeed Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PageSpeed Pro - Website Performance Analysis Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PageSpeed Pro - Website Performance Analysis",
    description:
      "Professional website performance analysis tool powered by Google PageSpeed Insights API. Free, fast, and comprehensive.",
    images: ["/twitter-image.png"],
    creator: "@umarhashmi",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://vnhaxai.com",
  },
  category: "Technology",
  classification: "Web Development Tools",
  generator: "Next.js",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vnhaxai.com/#website",
      url: "https://vnhaxai.com",
      name: "PageSpeed Pro",
      description: "Professional website performance analysis tool powered by Google PageSpeed Insights API",
      publisher: {
        "@id": "https://vnhaxai.com/#person",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://vnhaxai.com/?url={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebApplication",
      "@id": "https://vnhaxai.com/#webapp",
      name: "PageSpeed Pro",
      url: "https://vnhaxai.com",
      description:
        "Free website performance analysis tool that provides detailed insights using Google PageSpeed Insights API",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Website Performance Analysis",
        "Core Web Vitals Monitoring",
        "SEO Analysis",
        "Accessibility Audit",
        "Mobile and Desktop Testing",
        "Google PageSpeed Insights Integration",
      ],
      screenshot: "https://vnhaxai.com/screenshot.png",
      author: {
        "@id": "https://vnhaxai.com/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://vnhaxai.com/#person",
      name: "Umar Hashmi",
      url: "https://umarhashmi.dev",
      image: "https://umarhashmi.dev/avatar.jpg",
      sameAs: ["https://umarhashmi.dev", "https://github.com/umarhashmi", "https://linkedin.com/in/umarhashmi"],
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "PageSpeed Pro",
      },
      knowsAbout: ["Web Performance Optimization", "SEO", "JavaScript", "React", "Next.js", "Web Development"],
    },
    {
      "@type": "Organization",
      "@id": "https://vnhaxai.com/#organization",
      name: "PageSpeed Pro",
      url: "https://vnhaxai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vnhaxai.com/logo.png",
        width: 512,
        height: 512,
      },
      founder: {
        "@id": "https://vnhaxai.com/#person",
      },
      foundingDate: "2024",
      description: "Professional website performance analysis tools and services",
      knowsAbout: [
        "Website Performance",
        "Core Web Vitals",
        "SEO Optimization",
        "Web Development",
        "Google PageSpeed Insights",
      ],
      areaServed: "Worldwide",
      serviceType: "Web Performance Analysis",
    },
    {
      "@type": "SoftwareApplication",
      name: "PageSpeed Pro Analyzer",
      applicationCategory: "WebApplication",
      operatingSystem: "Any",
      description: "Free website performance analysis tool powered by Google PageSpeed Insights",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Performance Metrics Analysis",
        "Core Web Vitals Monitoring",
        "SEO Recommendations",
        "Accessibility Testing",
        "Mobile Optimization Analysis",
        "Desktop Performance Testing",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://vnhaxai.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
