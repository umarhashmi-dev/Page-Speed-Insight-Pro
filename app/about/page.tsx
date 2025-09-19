import { Badge } from "@/components/ui/badge"
import { Zap, Target, Users, Award, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"
import { BoxContainer } from "@/components/ui/box-container"
import { SectionBox } from "@/components/ui/section-box"
import { GridBox } from "@/components/ui/grid-box"
import { FeatureBox } from "@/components/ui/feature-box"
import { HeroBox } from "@/components/ui/hero-box"

export const metadata = {
  title: "About Us - PageSpeed Pro | Professional Website Performance Analysis",
  description:
    "Learn about PageSpeed Pro, our mission to help websites achieve optimal performance, and meet the team behind the tools that make the web faster.",
  keywords:
    "about PageSpeed Pro, website performance team, web optimization experts, Google PageSpeed Insights, Umar Hashmi",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroBox background="gradient">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <BoxContainer variant="elevated" size="sm" className="p-4">
              <Users className="h-12 w-12 text-primary" />
            </BoxContainer>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance">About PageSpeed Pro</h1>
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            We are dedicated to making the web faster, more accessible, and better optimized for everyone. Our mission
            is to provide professional-grade website performance analysis tools that help developers and businesses
            create exceptional user experiences.
          </p>
        </div>
      </HeroBox>

      {/* Mission Section */}
      <SectionBox>
        <GridBox cols={2} gap="xl">
          <FeatureBox
            icon={<Target className="h-8 w-8 text-primary" />}
            title="Our Mission"
            description="To democratize website performance optimization by providing free, professional-grade tools that help developers and businesses understand and improve their web presence. We believe that fast, accessible websites should be the standard, not the exception."
            variant="elevated"
          />
          <FeatureBox
            icon={<Award className="h-8 w-8 text-primary" />}
            title="Our Vision"
            description="A web where every website loads instantly, provides excellent user experience, and is accessible to all users regardless of their device or connection speed. We envision a future where performance optimization is seamlessly integrated into every development workflow."
            variant="elevated"
          />
        </GridBox>
      </SectionBox>

      {/* What We Do Section */}
      <SectionBox
        title="What We Do"
        description="We provide comprehensive website performance analysis tools powered by Google's industry-standard technologies."
        background="muted"
      >
        <GridBox cols={3} gap="lg">
          <FeatureBox
            icon={<Zap className="h-8 w-8 text-primary" />}
            title="Performance Analysis"
            description="Real-time website performance testing using Google PageSpeed Insights API. Get detailed metrics on Core Web Vitals, loading times, and optimization opportunities."
          />
          <FeatureBox
            icon={<TrendingUp className="h-8 w-8 text-primary" />}
            title="Actionable Insights"
            description="Comprehensive reports with specific recommendations for improving website speed, accessibility, SEO, and best practices. Every suggestion is backed by Google's expertise."
          />
          <FeatureBox
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Mobile & Desktop"
            description="Separate analysis for mobile and desktop experiences, ensuring your website performs optimally across all devices and screen sizes."
          />
        </GridBox>
      </SectionBox>

      {/* Creator Section */}
      <SectionBox
        title="Meet the Creator"
        description="PageSpeed Pro is created and maintained by a passionate web developer dedicated to performance optimization."
      >
        <BoxContainer variant="elevated" size="xl" className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-40 h-40 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl font-bold text-primary-foreground">UH</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-4xl font-bold text-card-foreground mb-3">Umar Hashmi</h3>
              <p className="text-2xl text-primary font-semibold mb-6">Full Stack Developer & Performance Expert</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With years of experience in web development and performance optimization, Umar is passionate about
                creating tools that help developers build faster, more efficient websites. His expertise spans modern
                web technologies, performance monitoring, and user experience optimization.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  React
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Performance Optimization
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Web Vitals
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  SEO
                </Badge>
              </div>
              <Link
                href="https://umarhashmi.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
              >
                Visit Portfolio
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </BoxContainer>
      </SectionBox>

      {/* Why Choose Us Section */}
      <SectionBox
        title="Why Choose PageSpeed Pro?"
        description="We combine cutting-edge technology with user-friendly design to deliver the best performance analysis experience."
        background="muted"
      >
        <GridBox cols={4} gap="lg">
          <FeatureBox
            icon={<Zap className="h-8 w-8 text-primary" />}
            title="100% Free"
            description="All our tools are completely free to use with no hidden costs or limitations."
            variant="bordered"
          />
          <FeatureBox
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Google Powered"
            description="Built on Google PageSpeed Insights API for accurate, industry-standard results."
            variant="bordered"
          />
          <FeatureBox
            icon={<TrendingUp className="h-8 w-8 text-primary" />}
            title="Real-time Analysis"
            description="Get instant performance insights with detailed recommendations for improvement."
            variant="bordered"
          />
          <FeatureBox
            icon={<Users className="h-8 w-8 text-primary" />}
            title="User Friendly"
            description="Clean, intuitive interface designed for both beginners and experts."
            variant="bordered"
          />
        </GridBox>
      </SectionBox>

      {/* Call to Action */}
      <SectionBox>
        <BoxContainer variant="elevated" size="xl" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-6">Ready to Optimize Your Website?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Start analyzing your website performance today and discover how to make it faster and more user-friendly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Zap className="h-6 w-6" />
            Analyze Your Website
          </Link>
        </BoxContainer>
      </SectionBox>
    </div>
  )
}
