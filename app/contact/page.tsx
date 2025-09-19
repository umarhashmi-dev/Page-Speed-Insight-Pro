import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, MapPin, Clock, Send, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { BoxContainer } from "@/components/ui/box-container"
import { SectionBox } from "@/components/ui/section-box"
import { GridBox } from "@/components/ui/grid-box"
import { HeroBox } from "@/components/ui/hero-box"

export const metadata = {
  title: "Contact Us - PageSpeed Pro | Get in Touch for Website Performance Help",
  description:
    "Contact PageSpeed Pro for website performance optimization help, technical support, or partnership opportunities. We're here to help make your website faster.",
  keywords:
    "contact PageSpeed Pro, website performance help, technical support, performance optimization consultation, Umar Hashmi contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroBox background="gradient">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <BoxContainer variant="elevated" size="sm" className="p-4">
              <MessageSquare className="h-12 w-12 text-primary" />
            </BoxContainer>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance">Contact Us</h1>
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            Have questions about website performance? Need help optimizing your site? We're here to help you create
            faster, better web experiences.
          </p>
        </div>
      </HeroBox>

      <SectionBox>
        <GridBox cols={3} gap="xl">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <BoxContainer variant="elevated" size="lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-2 flex items-center gap-3">
                  <Send className="h-7 w-7 text-primary" />
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible. We typically respond within 24
                  hours.
                </p>
              </div>

              <div className="space-y-6">
                <GridBox cols={2} gap="md">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="bg-background border-border text-foreground h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="bg-background border-border text-foreground h-12"
                      required
                    />
                  </div>
                </GridBox>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background border-border text-foreground h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-card-foreground mb-2">
                    Website URL (Optional)
                  </label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    className="bg-background border-border text-foreground h-12"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 h-12 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="performance-help">Website Performance Help</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your website performance challenges or how we can help you..."
                    rows={6}
                    className="bg-background border-border text-foreground rounded-xl"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 h-4 w-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    I'd like to receive updates about new features and performance optimization tips. (Optional)
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg rounded-xl">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-service" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </BoxContainer>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <BoxContainer variant="elevated">
              <h3 className="text-xl font-bold text-card-foreground mb-2">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">Multiple ways to reach us for support and inquiries</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">support@pagespeedpro.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Creator's Portfolio</p>
                    <Link
                      href="https://umarhashmi.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      umarhashmi.dev
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Remote & Global</p>
                  </div>
                </div>
              </div>
            </BoxContainer>

            {/* FAQ Quick Links */}
            <BoxContainer variant="elevated">
              <h3 className="text-xl font-bold text-card-foreground mb-2">Quick Help</h3>
              <p className="text-muted-foreground mb-6">Common questions and helpful resources</p>

              <div className="space-y-3">
                <Link href="/faq" className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <p className="font-medium text-card-foreground">Frequently Asked Questions</p>
                  <p className="text-sm text-muted-foreground">Find answers to common questions</p>
                </Link>

                <Link href="/services" className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <p className="font-medium text-card-foreground">Our Services</p>
                  <p className="text-sm text-muted-foreground">Learn about our tools and features</p>
                </Link>

                <Link href="/blog" className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <p className="font-medium text-card-foreground">Performance Blog</p>
                  <p className="text-sm text-muted-foreground">Tips and insights for optimization</p>
                </Link>
              </div>
            </BoxContainer>

            {/* Support Types */}
            <BoxContainer variant="elevated">
              <h3 className="text-xl font-bold text-card-foreground mb-6">How We Can Help</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-card-foreground">Performance Analysis</p>
                    <p className="text-sm text-muted-foreground">Help interpreting your results</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-card-foreground">Technical Support</p>
                    <p className="text-sm text-muted-foreground">Issues with our tools</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-card-foreground">Optimization Guidance</p>
                    <p className="text-sm text-muted-foreground">Best practices and recommendations</p>
                  </div>
                </div>
              </div>
            </BoxContainer>
          </div>
        </GridBox>

        {/* Call to Action */}
        <div className="mt-16">
          <BoxContainer variant="elevated" size="xl" className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Need Immediate Help?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Try our PageSpeed analysis tool first - it might answer your performance questions instantly.
            </p>
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                Analyze Your Website
              </Button>
            </Link>
          </BoxContainer>
        </div>
      </SectionBox>
    </div>
  )
}
