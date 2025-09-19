"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Loader2,
  Search,
  Globe,
  Zap,
  Eye,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Info,
  Monitor,
  Smartphone,
  TreePine,
  Users,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { BoxContainer } from "@/components/ui/box-container"
import { SectionBox } from "@/components/ui/section-box"
import { GridBox } from "@/components/ui/grid-box"
import { FeatureBox } from "@/components/ui/feature-box"
import { HeroBox } from "@/components/ui/hero-box"
import { CircularProgress } from "@/components/ui/circular-progress"

interface PageSpeedData {
  lighthouseResult: {
    categories: {
      performance: { score: number }
      accessibility: { score: number }
      "best-practices": { score: number }
      seo: { score: number }
    }
    audits: {
      [key: string]: {
        title: string
        description: string
        score: number | null
        displayValue?: string
        details?: any
        scoreDisplayMode?: string
      }
    }
  }
  loadingExperience?: {
    metrics: {
      LARGEST_CONTENTFUL_PAINT_MS?: { percentile: number }
      FIRST_INPUT_DELAY_MS?: { percentile: number }
      CUMULATIVE_LAYOUT_SHIFT_SCORE?: { percentile: number }
    }
  }
}

export default function PageSpeedInsights() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [mobileData, setMobileData] = useState<PageSpeedData | null>(null)
  const [desktopData, setDesktopData] = useState<PageSpeedData | null>(null)
  const [error, setError] = useState("")
  const [activeStrategy, setActiveStrategy] = useState<"mobile" | "desktop">("mobile")

  const analyzeWebsite = async () => {
    if (!url) return

    setLoading(true)
    setError("")
    setMobileData(null)
    setDesktopData(null)

    try {
      const apiKey = "AIzaSyAkmqyx8Wq9w2A_Z_Xu3ZQnctmc9Q61u5Q"

      const [mobileResponse, desktopResponse] = await Promise.all([
        fetch(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo&strategy=mobile`,
        ),
        fetch(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo&strategy=desktop`,
        ),
      ])

      if (!mobileResponse.ok || !desktopResponse.ok) {
        throw new Error("Failed to analyze website")
      }

      const [mobileResult, desktopResult] = await Promise.all([mobileResponse.json(), desktopResponse.json()])

      setMobileData(mobileResult)
      setDesktopData(desktopResult)
    } catch (err) {
      setError("Failed to analyze website. Please check the URL and try again.")
    } finally {
      setLoading(false)
    }
  }

  const getCurrentData = () => (activeStrategy === "mobile" ? mobileData : desktopData)

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return "text-green-600"
    if (score >= 0.5) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeColor = (score: number) => {
    if (score >= 0.9) return "bg-green-100 text-green-800 border-green-200"
    if (score >= 0.5) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-red-100 text-red-800 border-red-200"
  }

  const getKeyMetrics = () => {
    const data = getCurrentData()
    if (!data) return []

    const audits = data.lighthouseResult.audits
    const keyMetrics = [
      {
        id: "first-contentful-paint",
        title: "First Contentful Paint",
        value: audits["first-contentful-paint"]?.displayValue || "N/A",
        score: audits["first-contentful-paint"]?.score || 0,
        description: "First Contentful Paint marks the time at which the first text or image is painted.",
      },
      {
        id: "largest-contentful-paint",
        title: "Largest Contentful Paint",
        value: audits["largest-contentful-paint"]?.displayValue || "N/A",
        score: audits["largest-contentful-paint"]?.score || 0,
        description: "Largest Contentful Paint marks the time at which the largest text or image is painted.",
      },
      {
        id: "first-input-delay",
        title: "First Input Delay",
        value: audits["max-potential-fid"]?.displayValue || "N/A",
        score: audits["max-potential-fid"]?.score || 0,
        description:
          "First Input Delay measures the time from when a user first interacts with a page to the time when the browser is actually able to begin processing event handlers.",
      },
      {
        id: "cumulative-layout-shift",
        title: "Cumulative Layout Shift",
        value: audits["cumulative-layout-shift"]?.displayValue || "N/A",
        score: audits["cumulative-layout-shift"]?.score || 0,
        description: "Cumulative Layout Shift measures the movement of visible elements within the viewport.",
      },
      {
        id: "speed-index",
        title: "Speed Index",
        value: audits["speed-index"]?.displayValue || "N/A",
        score: audits["speed-index"]?.score || 0,
        description: "Speed Index shows how quickly the contents of a page are visibly populated.",
      },
      {
        id: "total-blocking-time",
        title: "Total Blocking Time",
        value: audits["total-blocking-time"]?.displayValue || "N/A",
        score: audits["total-blocking-time"]?.score || 0,
        description: "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms.",
      },
    ]

    return keyMetrics
  }

  const getOpportunities = () => {
    const data = getCurrentData()
    if (!data) return []

    const audits = data.lighthouseResult.audits
    const opportunities = [
      "render-blocking-resources",
      "unused-css-rules",
      "unused-javascript",
      "modern-image-formats",
      "offscreen-images",
      "unminified-css",
      "unminified-javascript",
      "efficient-animated-content",
      "duplicated-javascript",
      "legacy-javascript",
      "uses-optimized-images",
      "uses-webp-images",
      "uses-responsive-images",
      "preload-lcp-image",
      "reduce-unused-css",
      "prioritize-lcp-image",
    ]
      .map((auditId) => {
        const audit = audits[auditId]
        if (audit && audit.score !== null && audit.score < 1) {
          return {
            id: auditId,
            title: audit.title,
            description: audit.description,
            displayValue: audit.displayValue,
            score: audit.score,
            details: audit.details,
          }
        }
        return null
      })
      .filter(Boolean)

    return opportunities
  }

  const getDiagnostics = () => {
    const data = getCurrentData()
    if (!data) return []

    const audits = data.lighthouseResult.audits
    const diagnostics = [
      "mainthread-work-breakdown",
      "bootup-time",
      "uses-long-cache-ttl",
      "total-byte-weight",
      "dom-size",
      "critical-request-chains",
      "user-timings",
      "network-requests",
      "network-rtt",
      "network-server-latency",
      "third-party-summary",
      "lcp-lazy-loaded",
    ]
      .map((auditId) => {
        const audit = audits[auditId]
        if (audit) {
          return {
            id: auditId,
            title: audit.title,
            description: audit.description,
            displayValue: audit.displayValue,
            score: audit.score,
            details: audit.details,
          }
        }
        return null
      })
      .filter(Boolean)

    return diagnostics
  }

  const getAccessibilityAudits = () => {
    const data = getCurrentData()
    if (!data) return { passed: [], failed: [], manual: [] }

    const audits = data.lighthouseResult.audits
    const accessibilityAudits = [
      "color-contrast",
      "image-alt",
      "label",
      "link-name",
      "button-name",
      "document-title",
      "html-has-lang",
      "html-lang-valid",
      "meta-description",
      "heading-order",
      "landmark-one-main",
      "list",
      "listitem",
      "definition-list",
      "dlitem",
      "bypass",
      "focus-traps",
      "focusable-controls",
      "interactive-element-affordance",
      "logical-tab-order",
      "managed-focus",
      "offscreen-content-hidden",
      "use-landmarks",
      "visual-order-follows-dom",
    ]

    const passed = []
    const failed = []
    const manual = []

    accessibilityAudits.forEach((auditId) => {
      const audit = audits[auditId]
      if (audit) {
        if (audit.scoreDisplayMode === "manual") {
          manual.push({
            id: auditId,
            title: audit.title,
            description: audit.description,
            details: audit.details,
          })
        } else if (audit.score === 1) {
          passed.push({
            id: auditId,
            title: audit.title,
            description: audit.description,
          })
        } else if (audit.score !== null && audit.score < 1) {
          failed.push({
            id: auditId,
            title: audit.title,
            description: audit.description,
            details: audit.details,
          })
        }
      }
    })

    return { passed, failed, manual }
  }

  const getPassedAudits = () => {
    const data = getCurrentData()
    if (!data) return []

    const audits = data.lighthouseResult.audits
    const passedAudits = []

    Object.keys(audits).forEach((auditId) => {
      const audit = audits[auditId]
      if (audit && audit.score === 1 && audit.scoreDisplayMode !== "manual") {
        passedAudits.push({
          id: auditId,
          title: audit.title,
          description: audit.description,
        })
      }
    })

    return passedAudits.slice(0, 20) // Limit to first 20 for performance
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroBox background="gradient">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <BoxContainer variant="elevated" size="sm" className="p-4">
              <Zap className="h-12 w-12 text-primary" />
            </BoxContainer>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance">PageSpeed Pro</h1>
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty mb-8">
            Professional website performance analysis powered by Google PageSpeed Insights. Get detailed insights and
            actionable recommendations to improve your site's speed, SEO, and user experience.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>A Tool by</span>
            <Link
              href="https://umarhashmi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              Umar Hashmi
            </Link>
          </div>
        </div>

        {/* URL Input */}
        <BoxContainer variant="elevated" size="lg" className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-card-foreground mb-2">
              <Globe className="h-7 w-7 text-primary" />
              Analyze Website Performance
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter any website URL to get comprehensive performance analysis powered by Google Lighthouse
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-16 text-lg px-6 border-2 border-input focus:border-primary transition-colors bg-background text-foreground rounded-xl"
                onKeyPress={(e) => e.key === "Enter" && analyzeWebsite()}
              />
            </div>
            <Button
              onClick={analyzeWebsite}
              disabled={loading || !url}
              className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl rounded-xl"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="mr-3 h-6 w-6" />
                  Analyze Website
                </>
              )}
            </Button>
          </div>
          {error && (
            <BoxContainer variant="bordered" className="mt-6 bg-destructive/5 border-destructive/20">
              <p className="text-destructive flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                {error}
              </p>
            </BoxContainer>
          )}
        </BoxContainer>
      </HeroBox>

      {!mobileData && !desktopData && (
        <>
          {/* Features Section */}
          <SectionBox
            title="Why Choose PageSpeed Pro?"
            description="Get professional-grade website analysis with industry-standard metrics and actionable insights."
            background="muted"
          >
            <GridBox cols={3} gap="lg">
              <FeatureBox
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Google Powered"
                description="Built on Google PageSpeed Insights API for accurate, industry-standard performance analysis that matches what Google sees."
              />
              <FeatureBox
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Comprehensive Analysis"
                description="Get detailed insights on performance, accessibility, SEO, and best practices with specific recommendations for improvement."
              />
              <FeatureBox
                icon={<Users className="h-8 w-8 text-primary" />}
                title="100% Free"
                description="All our tools are completely free to use with no hidden costs, registration requirements, or usage limitations."
              />
            </GridBox>
          </SectionBox>

          {/* What You Get Section */}
          <SectionBox
            title="What You Get"
            description="Every analysis provides comprehensive insights across multiple performance dimensions."
          >
            <GridBox cols={4} gap="lg">
              <FeatureBox
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="Core Web Vitals"
                description="LCP, FID, and CLS metrics that directly impact your Google search rankings."
                variant="bordered"
              />
              <FeatureBox
                icon={<Eye className="h-8 w-8 text-primary" />}
                title="Accessibility Audit"
                description="Comprehensive accessibility testing to ensure your site is usable by everyone."
                variant="bordered"
              />
              <FeatureBox
                icon={<Search className="h-8 w-8 text-primary" />}
                title="SEO Analysis"
                description="Search engine optimization insights to improve your website's visibility."
                variant="bordered"
              />
              <FeatureBox
                icon={<CheckCircle className="h-8 w-8 text-primary" />}
                title="Best Practices"
                description="Modern web development standards and security best practices validation."
                variant="bordered"
              />
            </GridBox>
          </SectionBox>

          {/* Device Support */}
          <SectionBox background="muted">
            <BoxContainer variant="elevated" size="xl" className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">Multi-Device Analysis</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Get separate analysis for mobile and desktop to optimize for all your users
              </p>
              <GridBox cols={2} gap="xl" className="max-w-4xl mx-auto">
                <BoxContainer variant="glass" className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Mobile Analysis</h3>
                  <p className="text-muted-foreground text-lg">
                    Optimized for mobile users with 3G connection simulation
                  </p>
                </BoxContainer>
                <BoxContainer variant="glass" className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Monitor className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Desktop Analysis</h3>
                  <p className="text-muted-foreground text-lg">
                    Desktop performance analysis with broadband connection
                  </p>
                </BoxContainer>
              </GridBox>
            </BoxContainer>
          </SectionBox>

          {/* Call to Action */}
          <SectionBox>
            <BoxContainer variant="elevated" size="xl" className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-6">
                Ready to Optimize Your Website?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Enter your website URL above to get started with professional performance analysis and discover specific
                ways to improve your site's speed and user experience.
              </p>
              <GridBox cols={2} gap="md" className="max-w-2xl mx-auto">
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full px-8 py-4 text-lg bg-transparent rounded-xl">
                    Learn More About Our Tools
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full px-8 py-4 text-lg bg-transparent rounded-xl">
                    About PageSpeed Pro
                  </Button>
                </Link>
              </GridBox>
            </BoxContainer>
          </SectionBox>
        </>
      )}

      {/* Results Section */}
      {(mobileData || desktopData) && (
        <SectionBox>
          {/* Device Toggle */}
          <div className="flex justify-center mb-12">
            <BoxContainer variant="elevated" size="sm" className="p-2">
              <div className="flex">
                <Button
                  variant={activeStrategy === "mobile" ? "default" : "ghost"}
                  onClick={() => setActiveStrategy("mobile")}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg"
                >
                  <Smartphone className="h-4 w-4" />
                  Mobile
                </Button>
                <Button
                  variant={activeStrategy === "desktop" ? "default" : "ghost"}
                  onClick={() => setActiveStrategy("desktop")}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg"
                >
                  <Monitor className="h-4 w-4" />
                  Desktop
                </Button>
              </div>
            </BoxContainer>
          </div>

          {/* Score Cards */}
          <GridBox cols={4} gap="lg" className="mb-12">
            <BoxContainer variant="elevated" className="text-center">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Zap className="h-5 w-5" />
                <span className="font-medium">Performance</span>
              </div>
              <CircularProgress
                value={getCurrentData()?.lighthouseResult.categories.performance.score * 100 || 0}
                size={100}
              />
              <Badge
                className={`mt-4 ${getScoreBadgeColor(getCurrentData()?.lighthouseResult.categories.performance.score || 0)}`}
              >
                {(getCurrentData()?.lighthouseResult.categories.performance.score || 0) >= 0.9
                  ? "Excellent"
                  : (getCurrentData()?.lighthouseResult.categories.performance.score || 0) >= 0.5
                    ? "Needs Work"
                    : "Poor"}
              </Badge>
            </BoxContainer>

            <BoxContainer variant="elevated" className="text-center">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Eye className="h-5 w-5" />
                <span className="font-medium">Accessibility</span>
              </div>
              <CircularProgress
                value={getCurrentData()?.lighthouseResult.categories.accessibility.score * 100 || 0}
                size={100}
              />
              <Badge
                className={`mt-4 ${getScoreBadgeColor(getCurrentData()?.lighthouseResult.categories.accessibility.score || 0)}`}
              >
                {(getCurrentData()?.lighthouseResult.categories.accessibility.score || 0) >= 0.9
                  ? "Excellent"
                  : (getCurrentData()?.lighthouseResult.categories.accessibility.score || 0) >= 0.5
                    ? "Needs Work"
                    : "Poor"}
              </Badge>
            </BoxContainer>

            <BoxContainer variant="elevated" className="text-center">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Best Practices</span>
              </div>
              <CircularProgress
                value={getCurrentData()?.lighthouseResult.categories["best-practices"].score * 100 || 0}
                size={100}
              />
              <Badge
                className={`mt-4 ${getScoreBadgeColor(getCurrentData()?.lighthouseResult.categories["best-practices"].score || 0)}`}
              >
                {(getCurrentData()?.lighthouseResult.categories["best-practices"].score || 0) >= 0.9
                  ? "Excellent"
                  : (getCurrentData()?.lighthouseResult.categories["best-practices"].score || 0) >= 0.5
                    ? "Needs Work"
                    : "Poor"}
              </Badge>
            </BoxContainer>

            <BoxContainer variant="elevated" className="text-center">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Search className="h-5 w-5" />
                <span className="font-medium">SEO</span>
              </div>
              <CircularProgress value={getCurrentData()?.lighthouseResult.categories.seo.score * 100 || 0} size={100} />
              <Badge
                className={`mt-4 ${getScoreBadgeColor(getCurrentData()?.lighthouseResult.categories.seo.score || 0)}`}
              >
                {(getCurrentData()?.lighthouseResult.categories.seo.score || 0) >= 0.9
                  ? "Excellent"
                  : (getCurrentData()?.lighthouseResult.categories.seo.score || 0) >= 0.5
                    ? "Needs Work"
                    : "Poor"}
              </Badge>
            </BoxContainer>
          </GridBox>

          {/* Core Web Vitals */}
          {getCurrentData()?.loadingExperience?.metrics && (
            <BoxContainer variant="elevated" size="lg" className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 flex items-center justify-center gap-3">
                  <Clock className="h-8 w-8 text-primary" />
                  Core Web Vitals
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real-world performance metrics from Chrome users over the past 28 days
                </p>
              </div>
              <GridBox cols={3} gap="lg">
                {getCurrentData()?.loadingExperience?.metrics.LARGEST_CONTENTFUL_PAINT_MS && (
                  <BoxContainer
                    variant="glass"
                    className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Largest Contentful Paint</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-2">
                      {(
                        getCurrentData()?.loadingExperience?.metrics.LARGEST_CONTENTFUL_PAINT_MS.percentile / 1000
                      ).toFixed(1)}
                      s
                    </p>
                    <p className="text-sm text-gray-600">75th percentile</p>
                  </BoxContainer>
                )}
                {getCurrentData()?.loadingExperience?.metrics.FIRST_INPUT_DELAY_MS && (
                  <BoxContainer
                    variant="glass"
                    className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">First Input Delay</h4>
                    <p className="text-3xl font-bold text-green-600 mb-2">
                      {getCurrentData()?.loadingExperience?.metrics.FIRST_INPUT_DELAY_MS.percentile}ms
                    </p>
                    <p className="text-sm text-gray-600">75th percentile</p>
                  </BoxContainer>
                )}
                {getCurrentData()?.loadingExperience?.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE && (
                  <BoxContainer
                    variant="glass"
                    className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Cumulative Layout Shift</h4>
                    <p className="text-3xl font-bold text-purple-600 mb-2">
                      {(
                        getCurrentData()?.loadingExperience?.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile / 100
                      ).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">75th percentile</p>
                  </BoxContainer>
                )}
              </GridBox>
            </BoxContainer>
          )}

          <Tabs defaultValue="metrics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto bg-card border border-border shadow-lg">
              <TabsTrigger value="metrics" className="text-sm font-semibold py-3">
                Performance Metrics
              </TabsTrigger>
              <TabsTrigger value="opportunities" className="text-sm font-semibold py-3">
                Opportunities
              </TabsTrigger>
              <TabsTrigger value="diagnostics" className="text-sm font-semibold py-3">
                Diagnostics
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="text-sm font-semibold py-3">
                Accessibility
              </TabsTrigger>
              <TabsTrigger value="passed" className="text-sm font-semibold py-3">
                Passed Audits
              </TabsTrigger>
              <TabsTrigger value="treemap" className="text-sm font-semibold py-3">
                View Treemap
              </TabsTrigger>
            </TabsList>

            <TabsContent value="metrics" className="space-y-6 mt-8">
              <Card className="shadow-xl border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-muted rounded-lg">
                      <Clock className="h-6 w-6 text-foreground" />
                    </div>
                    Performance Metrics
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Key timing metrics that directly impact user experience and Core Web Vitals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {getKeyMetrics().map((metric) => (
                      <div
                        key={metric.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-muted/50 rounded-xl border border-border hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1 mb-4 sm:mb-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                            <h4 className="font-bold text-card-foreground text-lg">{metric.title}</h4>
                            <Badge className={getScoreBadgeColor(metric.score)}>
                              {metric.score >= 0.9 ? "Excellent" : metric.score >= 0.5 ? "Needs Work" : "Poor"}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{metric.description}</p>
                        </div>
                        <div className="text-center sm:text-right">
                          <p className={`text-3xl font-bold ${getScoreColor(metric.score)}`}>{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-6 mt-8">
              <Card className="shadow-xl border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-muted rounded-lg">
                      <TrendingUp className="h-6 w-6 text-foreground" />
                    </div>
                    Optimization Opportunities
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Actionable suggestions to improve your page's performance and loading speed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {getOpportunities().length > 0 ? (
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {getOpportunities().map((opportunity, index) => (
                        <AccordionItem
                          key={opportunity.id}
                          value={`item-${index}`}
                          className="border border-border rounded-lg px-6 py-2 bg-muted/50"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <div className="flex items-center gap-4">
                              <AlertTriangle className={`h-5 w-5 ${getScoreColor(opportunity.score)}`} />
                              <div className="text-left">
                                <p className="font-bold text-card-foreground text-lg">{opportunity.title}</p>
                                {opportunity.displayValue && (
                                  <p className="text-green-600 font-semibold">
                                    Potential savings: {opportunity.displayValue}
                                  </p>
                                )}
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-6 pl-9">
                              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                                {opportunity.description}
                              </p>
                              {opportunity.details?.items && opportunity.details.items.length > 0 && (
                                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                                  <h5 className="font-bold mb-4 text-card-foreground">Affected Resources:</h5>
                                  <ul className="space-y-2">
                                    {opportunity.details.items.slice(0, 5).map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="text-muted-foreground bg-background p-3 rounded-lg border border-border"
                                      >
                                        <span className="font-medium">
                                          {item.url || item.source || item.node?.snippet || "Resource"}
                                        </span>
                                        {item.wastedBytes && (
                                          <span className="text-red-600 font-semibold ml-2">
                                            ({Math.round(item.wastedBytes / 1024)}KB savings)
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                    {opportunity.details.items.length > 5 && (
                                      <li className="text-center text-muted-foreground italic py-2">
                                        ...and {opportunity.details.items.length - 5} more resources
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="text-center py-16">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-3">Excellent Performance!</h3>
                      <p className="text-muted-foreground text-lg">
                        No major optimization opportunities found. Your site is well-optimized.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="diagnostics" className="space-y-6 mt-8">
              <Card className="shadow-xl border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-muted rounded-lg">
                      <Info className="h-6 w-6 text-foreground" />
                    </div>
                    Performance Diagnostics
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Additional technical information about your page's performance characteristics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {getDiagnostics().map((diagnostic) => (
                      <div
                        key={diagnostic.id}
                        className="p-6 bg-muted/50 rounded-xl border border-border hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                          <h4 className="font-bold text-card-foreground text-lg mb-2 sm:mb-0">{diagnostic.title}</h4>
                          {diagnostic.displayValue && (
                            <span className="text-base font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                              {diagnostic.displayValue}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{diagnostic.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accessibility" className="space-y-6 mt-8">
              <div className="grid gap-6">
                {/* Failed Accessibility Audits */}
                {getAccessibilityAudits().failed.length > 0 && (
                  <Card className="shadow-xl border border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <AlertTriangle className="h-6 w-6 text-destructive" />
                        </div>
                        Failed Accessibility Audits
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        Issues that need to be addressed to improve accessibility
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full space-y-4">
                        {getAccessibilityAudits().failed.map((audit, index) => (
                          <AccordionItem
                            key={audit.id}
                            value={`failed-${index}`}
                            className="border border-destructive/20 rounded-lg px-6 py-2 bg-destructive/5"
                          >
                            <AccordionTrigger className="text-left hover:no-underline">
                              <div className="flex items-center gap-4">
                                <AlertTriangle className="h-5 w-5 text-destructive" />
                                <div className="text-left">
                                  <p className="font-bold text-card-foreground text-lg">{audit.title}</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pt-6 pl-9">
                                <p className="text-muted-foreground mb-4 leading-relaxed text-base">
                                  {audit.description}
                                </p>
                                {audit.details?.items && audit.details.items.length > 0 && (
                                  <div className="bg-destructive/10 p-6 rounded-xl border border-destructive/20">
                                    <h5 className="font-bold mb-4 text-card-foreground">Affected Elements:</h5>
                                    <ul className="space-y-2">
                                      {audit.details.items.slice(0, 5).map((item, idx) => (
                                        <li
                                          key={idx}
                                          className="text-muted-foreground bg-background p-3 rounded-lg border border-destructive/10"
                                        >
                                          <span className="font-medium">
                                            {item.node?.snippet || item.source || "Element"}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                )}

                {/* Manual Accessibility Checks */}
                {getAccessibilityAudits().manual.length > 0 && (
                  <Card className="shadow-xl border border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Users className="h-6 w-6 text-yellow-600" />
                        </div>
                        Additional Items to Manually Check
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        These items require manual verification to ensure full accessibility compliance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {getAccessibilityAudits().manual.map((audit) => (
                          <div key={audit.id} className="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-card-foreground text-lg mb-3">{audit.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{audit.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Passed Accessibility Audits */}
                {getAccessibilityAudits().passed.length > 0 && (
                  <Card className="shadow-xl border border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        Passed Accessibility Audits
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        Accessibility features that are working correctly on your site
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {getAccessibilityAudits()
                          .passed.slice(0, 10)
                          .map((audit) => (
                            <div
                              key={audit.id}
                              className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-card-foreground">{audit.title}</h4>
                                <p className="text-muted-foreground text-sm">{audit.description}</p>
                              </div>
                            </div>
                          ))}
                        {getAccessibilityAudits().passed.length > 10 && (
                          <p className="text-center text-muted-foreground py-4">
                            ...and {getAccessibilityAudits().passed.length - 10} more passed audits
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="passed" className="space-y-6 mt-8">
              <Card className="shadow-xl border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-muted rounded-lg">
                      <CheckCircle className="h-6 w-6 text-foreground" />
                    </div>
                    Passed Audits
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    All the performance, SEO, and best practice audits that your site is passing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {getPassedAudits().map((audit) => (
                      <div
                        key={audit.id}
                        className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-card-foreground">{audit.title}</h4>
                          <p className="text-muted-foreground text-sm">{audit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="treemap" className="space-y-6 mt-8">
              <Card className="shadow-xl border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-muted rounded-lg">
                      <TreePine className="h-6 w-6 text-foreground" />
                    </div>
                    View Treemap
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Visual representation of your website's resource usage and bundle analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                      <TreePine className="h-10 w-10 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-3">Interactive Treemap</h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      The treemap visualization shows the relative sizes of your JavaScript bundles and resources.
                    </p>
                    <div className="bg-muted/30 p-8 rounded-xl border border-border max-w-2xl mx-auto">
                      <p className="text-muted-foreground leading-relaxed">
                        <strong>Note:</strong> The interactive treemap feature requires additional processing of your
                        site's resources. This visualization would typically show a hierarchical view of your JavaScript
                        bundles, helping you identify large dependencies and optimization opportunities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </SectionBox>
      )}
    </div>
  )
}
