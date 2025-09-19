import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Search,
  Eye,
  CheckCircle,
  Clock,
  TrendingUp,
  Monitor,
  Smartphone,
  Globe,
  Target,
  Award,
  Users,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services & Tools - PageSpeed Pro | Website Performance Analysis Tools",
  description:
    "Explore our comprehensive suite of website performance analysis tools including PageSpeed Insights, Core Web Vitals monitoring, and SEO optimization services.",
  keywords:
    "website performance tools, PageSpeed Insights, Core Web Vitals, SEO analysis, website optimization services, performance monitoring",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Services & Tools</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Comprehensive website performance analysis tools designed to help you optimize your web presence, improve
              user experience, and boost your search engine rankings.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Tool Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Primary Tool</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade website performance analysis powered by Google's industry-standard technology.
            </p>
          </div>

          <Card className="shadow-2xl border border-border bg-card max-w-4xl mx-auto">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-primary rounded-xl">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl text-card-foreground">PageSpeed Insights Analyzer</CardTitle>
              </div>
              <CardDescription className="text-lg text-muted-foreground">
                Get comprehensive performance analysis with real Google data and actionable optimization
                recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Performance Metrics
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      First Contentful Paint (FCP)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Largest Contentful Paint (LCP)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Cumulative Layout Shift (CLS)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Speed Index & Total Blocking Time
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Analysis Categories
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Performance Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Accessibility Compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      SEO Best Practices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Web Development Standards
                    </li>
                  </ul>
                </div>
              </div>

              {/* Device Support */}
              <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-4 text-center">Multi-Device Analysis</h3>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Smartphone className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-semibold text-card-foreground">Mobile</p>
                    <p className="text-sm text-muted-foreground">Optimized for mobile users</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Monitor className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-semibold text-card-foreground">Desktop</p>
                    <p className="text-sm text-muted-foreground">Desktop performance analysis</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Try PageSpeed Analyzer
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Analysis Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every analysis provides detailed insights across multiple performance dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  Optimization Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Identify specific areas for improvement with actionable recommendations and potential savings
                  calculations.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Image optimization suggestions</li>
                  <li>• JavaScript and CSS minification</li>
                  <li>• Render-blocking resource elimination</li>
                  <li>• Caching strategy improvements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  Accessibility Audits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Comprehensive accessibility testing to ensure your website is usable by everyone.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Color contrast analysis</li>
                  <li>• Alt text verification</li>
                  <li>• Keyboard navigation testing</li>
                  <li>• Screen reader compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  SEO Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Search engine optimization insights to improve your website's visibility and ranking.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Meta tag optimization</li>
                  <li>• Structured data validation</li>
                  <li>• Mobile-friendliness check</li>
                  <li>• Content structure analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  Core Web Vitals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real-world performance data from actual Chrome users visiting your website.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Loading performance (LCP)</li>
                  <li>• Interactivity (FID)</li>
                  <li>• Visual stability (CLS)</li>
                  <li>• 28-day user experience data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Validation against modern web development standards and security best practices.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• HTTPS implementation</li>
                  <li>• Security headers validation</li>
                  <li>• Modern web standards compliance</li>
                  <li>• Performance best practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  Detailed Diagnostics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In-depth technical analysis with specific metrics and resource breakdown.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Network request analysis</li>
                  <li>• JavaScript execution time</li>
                  <li>• DOM size optimization</li>
                  <li>• Third-party impact assessment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Use Our Tools?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade analysis that helps you make data-driven decisions for your website optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl border border-border bg-card text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Industry Standard</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on Google PageSpeed Insights API, the same technology used by web professionals worldwide for
                performance analysis.
              </p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">User-Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complex performance data presented in an easy-to-understand format with clear recommendations and
                priority levels.
              </p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Instant Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get comprehensive analysis results in seconds, with detailed breakdowns and actionable insights for
                immediate implementation.
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-xl border border-border bg-card p-8">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Optimize Your Website?</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your website performance analysis today and discover specific ways to improve speed, accessibility,
              and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Analyze Your Website
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
