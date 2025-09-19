import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, ImageIcon, Zap, TrendingUp, Monitor, Smartphone, Globe, Eye } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Photo Gallery - PageSpeed Pro | Website Performance Showcases",
  description:
    "Explore our gallery of website performance analysis examples, before/after optimization showcases, and visual performance insights.",
  keywords:
    "website performance gallery, PageSpeed examples, performance optimization showcases, before after website speed",
}

const galleryItems = [
  {
    id: 1,
    title: "E-commerce Site Optimization",
    description: "Complete performance transformation of an online store",
    category: "E-commerce",
    beforeScore: 45,
    afterScore: 92,
    improvement: "+47 points",
    featured: true,
  },
  {
    id: 2,
    title: "Blog Performance Enhancement",
    description: "Content-heavy site optimization with image improvements",
    category: "Blog",
    beforeScore: 38,
    afterScore: 85,
    improvement: "+47 points",
    featured: false,
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    description: "Professional services site with mobile-first approach",
    category: "Corporate",
    beforeScore: 52,
    afterScore: 94,
    improvement: "+42 points",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Site Optimization",
    description: "Creative portfolio with heavy visual content optimization",
    category: "Portfolio",
    beforeScore: 41,
    afterScore: 88,
    improvement: "+47 points",
    featured: false,
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    description: "High-converting landing page with perfect performance",
    category: "SaaS",
    beforeScore: 49,
    afterScore: 96,
    improvement: "+47 points",
    featured: false,
  },
  {
    id: 6,
    title: "News Website Optimization",
    description: "Content-rich news site with ad optimization",
    category: "News",
    beforeScore: 35,
    afterScore: 78,
    improvement: "+43 points",
    featured: false,
  },
]

const categories = ["All", "E-commerce", "Blog", "Corporate", "Portfolio", "SaaS", "News"]

export default function GalleryPage() {
  const featuredItem = galleryItems.find((item) => item.featured)
  const regularItems = galleryItems.filter((item) => !item.featured)

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 50) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-200"
    if (score >= 50) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-red-100 text-red-800 border-red-200"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <Camera className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Performance Gallery</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Explore real-world examples of website performance transformations. See how proper optimization can
              dramatically improve loading speeds, user experience, and search rankings.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Showcase */}
        {featuredItem && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Transformation</h2>
              <p className="text-muted-foreground">Our most impressive performance optimization showcase</p>
            </div>

            <Card className="shadow-2xl border border-border bg-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/20 p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Before</p>
                      <p className={`text-3xl font-bold ${getScoreColor(featuredItem.beforeScore)}`}>
                        {featuredItem.beforeScore}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <TrendingUp className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <p className="text-sm font-semibold text-primary mt-1">{featuredItem.improvement}</p>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">After</p>
                      <p className={`text-3xl font-bold ${getScoreColor(featuredItem.afterScore)}`}>
                        {featuredItem.afterScore}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{featuredItem.category}</Badge>
                    <Badge className={getScoreBadgeColor(featuredItem.afterScore)}>Excellent Performance</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{featuredItem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredItem.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Monitor className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-card-foreground">Desktop Optimized</p>
                      <p className="text-xs text-muted-foreground">Perfect desktop experience</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-card-foreground">Mobile First</p>
                      <p className="text-xs text-muted-foreground">Optimized for mobile users</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">View Case Study</Button>
                    <Button variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} className="mb-2">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Optimization Showcases</h2>
            <p className="text-muted-foreground">Real websites, real improvements, real results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularItems.map((item) => (
              <Card
                key={item.id}
                className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge className={getScoreBadgeColor(item.afterScore)}>
                      {item.afterScore >= 90 ? "Excellent" : item.afterScore >= 50 ? "Good" : "Poor"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Before</p>
                      <p className={`text-2xl font-bold ${getScoreColor(item.beforeScore)}`}>{item.beforeScore}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mx-auto mb-1">
                        <TrendingUp className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <p className="text-xs font-semibold text-primary">{item.improvement}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">After</p>
                      <p className={`text-2xl font-bold ${getScoreColor(item.afterScore)}`}>{item.afterScore}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Metrics Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Performance Metrics</h2>
            <p className="text-muted-foreground">Key improvements across different performance categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-xl border border-border bg-card text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">92%</h3>
              <p className="text-muted-foreground">Average Performance Score</p>
              <p className="text-sm text-green-600 font-semibold mt-1">+45 points improvement</p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">2.1s</h3>
              <p className="text-muted-foreground">Average Load Time</p>
              <p className="text-sm text-blue-600 font-semibold mt-1">65% faster loading</p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">98%</h3>
              <p className="text-muted-foreground">SEO Score Average</p>
              <p className="text-sm text-purple-600 font-semibold mt-1">Perfect optimization</p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Accessibility Score</p>
              <p className="text-sm text-orange-600 font-semibold mt-1">Inclusive design</p>
            </Card>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <Card className="shadow-xl border border-border bg-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Typical Optimization Results</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See the dramatic improvements our optimization strategies can achieve for different types of websites.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Before Optimization</h3>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-4">
                  <div className="text-4xl font-bold text-red-600 mb-2">42</div>
                  <p className="text-red-700">Poor Performance Score</p>
                </div>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Slow loading times (5-8 seconds)</li>
                  <li>• Large unoptimized images</li>
                  <li>• Render-blocking resources</li>
                  <li>• Poor mobile experience</li>
                  <li>• Low search engine rankings</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-4">After Optimization</h3>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">94</div>
                  <p className="text-green-700">Excellent Performance Score</p>
                </div>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Fast loading times (1-2 seconds)</li>
                  <li>• Optimized modern image formats</li>
                  <li>• Efficient resource loading</li>
                  <li>• Perfect mobile experience</li>
                  <li>• Improved search visibility</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-xl border border-border bg-card p-8">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Transform Your Website?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Start your performance optimization journey today and join our gallery of success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Analyze Your Website
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                  <ImageIcon className="mr-2 h-5 w-5" />
                  View Our Services
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
