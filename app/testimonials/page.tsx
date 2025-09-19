import type { Metadata } from "next"
import { Star } from "lucide-react"
import { BoxContainer } from "@/components/ui/box-container"
import { SectionBox } from "@/components/ui/section-box"
import { GridBox } from "@/components/ui/grid-box"
import { HeroBox } from "@/components/ui/hero-box"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Testimonials | PageSpeed Insights Tool",
  description: "Read what our clients say about our PageSpeed Insights tool and web performance services.",
  keywords: "testimonials, reviews, client feedback, PageSpeed Insights, web performance",
  openGraph: {
    title: "Testimonials | PageSpeed Insights Tool",
    description: "Read what our clients say about our PageSpeed Insights tool and web performance services.",
    type: "website",
  },
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp Solutions",
    content:
      "This PageSpeed Insights tool has been invaluable for optimizing our client websites. The detailed analysis and actionable recommendations have helped us improve site performance significantly.",
    rating: 5,
    image: "/professional-woman-developer.png",
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Manager",
    company: "Growth Agency",
    content:
      "The comprehensive performance reports have helped us demonstrate ROI to our clients. The tool is easy to use and provides insights that directly impact our SEO rankings.",
    rating: 5,
    image: "/professional-man-marketing.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Web Designer",
    company: "Creative Studio",
    content:
      "As a designer, I appreciate how this tool helps me understand the performance impact of my design decisions. It has made me more conscious about optimization from the start.",
    rating: 5,
    image: "/professional-woman-designer.png",
  },
  {
    name: "David Thompson",
    role: "E-commerce Manager",
    company: "Online Retail Co.",
    content:
      "Since using this tool to optimize our e-commerce site, we have seen a 25% improvement in page load times and a corresponding increase in conversion rates.",
    rating: 5,
    image: "/professional-man-manager.jpg",
  },
  {
    name: "Lisa Park",
    role: "SEO Specialist",
    company: "Digital Solutions",
    content:
      "The detailed Core Web Vitals analysis has been crucial for our SEO strategy. This tool provides the technical insights we need to improve search rankings.",
    rating: 5,
    image: "/professional-woman-seo.jpg",
  },
  {
    name: "James Wilson",
    role: "Full Stack Developer",
    company: "Startup Inc.",
    content:
      "The tool provides comprehensive analysis that helps identify bottlenecks quickly. It has become an essential part of our development workflow.",
    rating: 5,
    image: "/professional-man-developer.png",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroBox background="gradient">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <BoxContainer variant="elevated" size="sm" className="p-4">
              <Star className="h-12 w-12 text-primary" />
            </BoxContainer>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance">What Our Clients Say</h1>
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            Discover how our PageSpeed Insights tool has helped businesses improve their website performance and user
            experience
          </p>
        </div>
      </HeroBox>

      <SectionBox>
        <GridBox cols={3} gap="lg" className="mb-16">
          {testimonials.map((testimonial, index) => (
            <BoxContainer key={index} variant="elevated" className="hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-muted-foreground mb-8 italic text-lg leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-card-foreground text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground font-medium">{testimonial.company}</div>
                </div>
              </div>
            </BoxContainer>
          ))}
        </GridBox>

        {/* Call to Action */}
        <BoxContainer
          variant="elevated"
          size="xl"
          className="text-center max-w-4xl mx-auto bg-primary text-primary-foreground"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Experience the difference our PageSpeed Insights tool can make for your website performance. Start
            optimizing today and see results like our clients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Try Our Tool
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </BoxContainer>
      </SectionBox>
    </div>
  )
}
