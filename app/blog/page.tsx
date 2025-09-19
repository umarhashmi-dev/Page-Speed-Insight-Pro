import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, TrendingUp, Zap, Search, Eye } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Blog - PageSpeed Pro | Web Performance Tips & Insights",
  description:
    "Stay updated with the latest web performance optimization tips, Core Web Vitals insights, and website speed improvement strategies from PageSpeed Pro.",
  keywords:
    "web performance blog, PageSpeed Insights tips, Core Web Vitals, website optimization, performance monitoring, SEO tips",
}

const blogPosts = [
  {
    id: 1,
    title: "Understanding Core Web Vitals: A Complete Guide for 2024",
    excerpt:
      "Learn everything you need to know about Google's Core Web Vitals metrics and how they impact your website's search rankings and user experience.",
    category: "Performance",
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Umar Hashmi",
    featured: true,
  },
  {
    id: 2,
    title: "10 Quick Wins to Improve Your PageSpeed Score",
    excerpt:
      "Discover actionable optimization techniques that can significantly boost your website's performance score with minimal effort.",
    category: "Optimization",
    readTime: "6 min read",
    date: "2024-01-10",
    author: "Umar Hashmi",
    featured: false,
  },
  {
    id: 3,
    title: "Mobile Performance: Why It Matters More Than Ever",
    excerpt:
      "Explore the importance of mobile-first performance optimization and learn strategies to create lightning-fast mobile experiences.",
    category: "Mobile",
    readTime: "7 min read",
    date: "2024-01-05",
    author: "Umar Hashmi",
    featured: false,
  },
  {
    id: 4,
    title: "Image Optimization: Techniques for Faster Loading",
    excerpt:
      "Master the art of image optimization with modern formats, compression techniques, and lazy loading strategies.",
    category: "Images",
    readTime: "9 min read",
    date: "2023-12-28",
    author: "Umar Hashmi",
    featured: false,
  },
  {
    id: 5,
    title: "JavaScript Performance: Best Practices and Common Pitfalls",
    excerpt:
      "Learn how to optimize JavaScript for better performance, reduce bundle sizes, and improve user experience.",
    category: "JavaScript",
    readTime: "10 min read",
    date: "2023-12-20",
    author: "Umar Hashmi",
    featured: false,
  },
  {
    id: 6,
    title: "SEO and Performance: The Perfect Partnership",
    excerpt:
      "Understand how website performance directly impacts SEO rankings and learn strategies to optimize for both.",
    category: "SEO",
    readTime: "8 min read",
    date: "2023-12-15",
    author: "Umar Hashmi",
    featured: false,
  },
]

const categories = ["All", "Performance", "Optimization", "Mobile", "Images", "JavaScript", "SEO"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <TrendingUp className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Performance Blog</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Stay ahead of the curve with expert insights, practical tips, and the latest trends in web performance
              optimization. Learn from real-world examples and industry best practices.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Article</h2>
              <p className="text-muted-foreground">Our latest and most comprehensive guide</p>
            </div>

            <Card className="shadow-2xl border border-border bg-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Read Article</Button>
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

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Practical tips and insights for better web performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="shadow-xl border border-border bg-card hover:shadow-2xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-card-foreground line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <Card className="shadow-xl border border-border bg-card p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Get the latest web performance tips and insights delivered straight to your inbox. No spam, just
                valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Join 1,000+ developers who trust our insights</p>
            </div>
          </Card>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Popular Topics</h2>
            <p className="text-muted-foreground">Explore our most read content categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-xl border border-border bg-card text-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Core Web Vitals</h3>
              <p className="text-muted-foreground text-sm">
                Understanding and optimizing Google's key performance metrics
              </p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Performance Tips</h3>
              <p className="text-muted-foreground text-sm">Practical strategies for faster loading websites</p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">SEO & Performance</h3>
              <p className="text-muted-foreground text-sm">How speed impacts search rankings and visibility</p>
            </Card>

            <Card className="shadow-xl border border-border bg-card text-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">User Experience</h3>
              <p className="text-muted-foreground text-sm">Creating better experiences through performance</p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-xl border border-border bg-card p-8">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Optimize Your Website?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Put these insights into practice with our free PageSpeed analysis tool.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                <Zap className="mr-2 h-5 w-5" />
                Analyze Your Website
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
