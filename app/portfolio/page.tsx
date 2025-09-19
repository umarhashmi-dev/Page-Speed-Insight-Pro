import type { Metadata } from "next"
import { ExternalLink, TrendingUp, Zap, Shield } from "lucide-react"
import { BoxContainer } from "@/components/ui/box-container"
import { SectionBox } from "@/components/ui/section-box"
import { GridBox } from "@/components/ui/grid-box"
import { HeroBox } from "@/components/ui/hero-box"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Portfolio | PageSpeed Insights Tool",
  description:
    "Explore our case studies and successful website optimization projects using our PageSpeed Insights tool.",
  keywords: "portfolio, case studies, website optimization, PageSpeed Insights, performance improvements",
  openGraph: {
    title: "Portfolio | PageSpeed Insights Tool",
    description:
      "Explore our case studies and successful website optimization projects using our PageSpeed Insights tool.",
    type: "website",
  },
}

const caseStudies = [
  {
    title: "E-commerce Platform Optimization",
    client: "Fashion Retailer",
    challenge: "Slow loading product pages affecting conversion rates",
    solution: "Comprehensive performance audit and optimization strategy",
    results: ["40% faster page load times", "25% increase in conversion rate", "60% improvement in Core Web Vitals"],
    image: "/case-study-ecommerce.jpg",
    metrics: {
      before: { speed: 45, performance: 52 },
      after: { speed: 89, performance: 94 },
    },
  },
  {
    title: "News Website Performance Boost",
    client: "Digital Media Company",
    challenge: "High bounce rate due to slow article loading",
    solution: "Image optimization and caching strategy implementation",
    results: ["50% reduction in bounce rate", "3x faster image loading", "35% increase in page views"],
    image: "/case-study-news.jpg",
    metrics: {
      before: { speed: 38, performance: 41 },
      after: { speed: 85, performance: 91 },
    },
  },
  {
    title: "SaaS Application Optimization",
    client: "Tech Startup",
    challenge: "Poor user experience due to slow dashboard loading",
    solution: "Code splitting and lazy loading implementation",
    results: ["65% faster initial load", "80% improvement in Time to Interactive", "45% increase in user engagement"],
    image: "/case-study-saas.jpg",
    metrics: {
      before: { speed: 32, performance: 28 },
      after: { speed: 92, performance: 96 },
    },
  },
  {
    title: "Restaurant Chain Website",
    client: "Food Service Industry",
    challenge: "Mobile performance issues affecting online orders",
    solution: "Mobile-first optimization and progressive web app features",
    results: [
      "70% faster mobile loading",
      "55% increase in mobile orders",
      "90% improvement in mobile Core Web Vitals",
    ],
    image: "/case-study-restaurant.jpg",
    metrics: {
      before: { speed: 29, performance: 35 },
      after: { speed: 88, performance: 93 },
    },
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroBox background="gradient">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <BoxContainer variant="elevated" size="sm" className="p-4">
              <TrendingUp className="h-12 w-12 text-primary" />
            </BoxContainer>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance">Our Success Stories</h1>
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            Discover how we have helped businesses achieve remarkable performance improvements using our PageSpeed
            Insights tool and optimization strategies
          </p>
        </div>
      </HeroBox>

      <SectionBox>
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <BoxContainer key={index} variant="elevated" size="lg" className="overflow-hidden">
              <GridBox cols={2} gap="xl" className="items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-card-foreground mb-3">{study.title}</h2>
                  <p className="text-lg text-primary font-semibold mb-6">{study.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2 text-lg">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-card-foreground mb-2 text-lg">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-card-foreground mb-3 text-lg">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-muted-foreground">
                            <TrendingUp className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <GridBox cols={2} gap="md" className="mt-8">
                      <BoxContainer variant="bordered" className="text-center bg-red-50 border-red-200">
                        <div className="text-sm text-muted-foreground mb-1">Before</div>
                        <div className="text-3xl font-bold text-red-600">{study.metrics.before.speed}</div>
                        <div className="text-xs text-muted-foreground">Speed Score</div>
                      </BoxContainer>
                      <BoxContainer variant="bordered" className="text-center bg-green-50 border-green-200">
                        <div className="text-sm text-muted-foreground mb-1">After</div>
                        <div className="text-3xl font-bold text-green-600">{study.metrics.after.speed}</div>
                        <div className="text-xs text-muted-foreground">Speed Score</div>
                      </BoxContainer>
                    </GridBox>
                  </div>
                </div>
              </GridBox>
            </BoxContainer>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <BoxContainer
            variant="elevated"
            size="xl"
            className="text-center max-w-5xl mx-auto bg-primary text-primary-foreground"
          >
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Optimize Your Website?</h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Join our successful clients and experience significant performance improvements. Start with our free
                PageSpeed Insights analysis today.
              </p>
            </div>

            <GridBox cols={3} gap="lg" className="mb-12">
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
                <h3 className="font-bold mb-2 text-lg">Fast Results</h3>
                <p className="text-sm text-primary-foreground/80">Get instant performance insights</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
                <h3 className="font-bold mb-2 text-lg">Proven Methods</h3>
                <p className="text-sm text-primary-foreground/80">Strategies that deliver results</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
                <h3 className="font-bold mb-2 text-lg">Expert Support</h3>
                <p className="text-sm text-primary-foreground/80">Professional guidance available</p>
              </div>
            </GridBox>

            <Link href="/">
              <Button size="lg" variant="secondary" className="px-10 py-4 text-lg inline-flex items-center gap-3">
                Start Your Analysis
                <ExternalLink className="w-5 h-5" />
              </Button>
            </Link>
          </BoxContainer>
        </div>
      </SectionBox>
    </div>
  )
}
