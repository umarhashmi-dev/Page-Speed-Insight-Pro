import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, Zap, Search, Clock, Globe, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "FAQ - PageSpeed Pro | Frequently Asked Questions",
  description:
    "Find answers to common questions about PageSpeed Pro, website performance analysis, Core Web Vitals, and optimization tips.",
  keywords:
    "PageSpeed Pro FAQ, website performance questions, PageSpeed Insights help, Core Web Vitals FAQ, performance optimization help",
}

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What is PageSpeed Pro?",
        answer:
          "PageSpeed Pro is a free website performance analysis tool that uses Google's PageSpeed Insights API to provide comprehensive performance reports. We analyze your website's speed, accessibility, SEO, and best practices, giving you actionable recommendations to improve user experience and search rankings.",
      },
      {
        question: "Is PageSpeed Pro really free?",
        answer:
          "Yes, PageSpeed Pro is completely free to use. There are no hidden costs, subscription fees, or premium tiers. We believe that website performance optimization tools should be accessible to everyone, from individual developers to large enterprises.",
      },
      {
        question: "How accurate are the results?",
        answer:
          "Our results are powered by Google's PageSpeed Insights API, the same technology used by Google to evaluate websites for search rankings. The data is highly accurate and reflects real-world performance metrics from actual Chrome users visiting your website.",
      },
      {
        question: "Who created PageSpeed Pro?",
        answer:
          "PageSpeed Pro was created by Umar Hashmi, a full-stack developer passionate about web performance optimization. You can learn more about Umar and his work at umarhashmi.dev.",
      },
    ],
  },
  {
    title: "Using the Tool",
    icon: Zap,
    questions: [
      {
        question: "How do I analyze my website?",
        answer:
          "Simply enter your website URL in the analysis form on our homepage and click 'Analyze Website'. Our tool will automatically test both mobile and desktop versions of your site and provide comprehensive results within seconds.",
      },
      {
        question: "What's the difference between mobile and desktop analysis?",
        answer:
          "Mobile analysis simulates how your website performs on mobile devices with slower connections and less processing power. Desktop analysis shows performance on traditional computers. Since most web traffic is mobile, we recommend focusing on mobile performance first.",
      },
      {
        question: "Can I analyze any website?",
        answer:
          "You can analyze any publicly accessible website. However, websites behind login screens, private networks, or those that block automated access may not be analyzable. The website must be accessible via HTTP or HTTPS.",
      },
      {
        question: "How often should I test my website?",
        answer:
          "We recommend testing your website after any significant changes, such as adding new features, updating content, or changing hosting providers. For active websites, monthly performance checks are a good practice to ensure optimal performance.",
      },
    ],
  },
  {
    title: "Understanding Results",
    icon: Search,
    questions: [
      {
        question: "What do the performance scores mean?",
        answer:
          "Performance scores range from 0-100. Scores of 90+ are considered excellent, 50-89 need improvement, and below 50 are poor. The score is calculated based on various metrics including loading speed, interactivity, and visual stability.",
      },
      {
        question: "What are Core Web Vitals?",
        answer:
          "Core Web Vitals are Google's key metrics for measuring user experience: Largest Contentful Paint (LCP) measures loading performance, First Input Delay (FID) measures interactivity, and Cumulative Layout Shift (CLS) measures visual stability. These directly impact search rankings.",
      },
      {
        question: "Why do my scores vary between tests?",
        answer:
          "Performance scores can vary due to server load, network conditions, and other external factors. For the most accurate assessment, run multiple tests and look at the average results. Real-world Core Web Vitals data (when available) provides the most reliable performance picture.",
      },
      {
        question: "What should I focus on first?",
        answer:
          "Start with the 'Opportunities' section, which shows the biggest potential improvements. Focus on issues that offer the largest time savings first, such as image optimization, eliminating render-blocking resources, and reducing unused code.",
      },
    ],
  },
  {
    title: "Technical Questions",
    icon: Globe,
    questions: [
      {
        question: "Do you store my website data?",
        answer:
          "No, we don't store the content of your website. We only temporarily cache analysis results for performance purposes. Your website URL and basic analysis metadata may be stored to improve our service, but no sensitive content is retained.",
      },
      {
        question: "Are there any usage limits?",
        answer:
          "We implement fair usage policies to ensure our service remains available for everyone. Excessive automated requests may be temporarily rate-limited. For normal usage, you shouldn't encounter any restrictions.",
      },
      {
        question: "Can I use this for client websites?",
        answer:
          "Many web developers and agencies use PageSpeed Pro to analyze client websites and generate performance reports. You're free to use our tool for commercial purposes and share results with clients.",
      },
      {
        question: "Do you have an API?",
        answer:
          "Currently, we don't offer a public API. Our tool is designed for web-based analysis through our user interface. If you need API access for large-scale analysis, please contact us to discuss your requirements.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <HelpCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Find answers to common questions about PageSpeed Pro, website performance analysis, and optimization
              strategies. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Links */}
          <Card className="shadow-xl border border-border bg-card mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground text-center">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {faqCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={`#category-${index}`}
                    className="flex flex-col items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <category.icon className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-semibold text-card-foreground text-center">{category.title}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`category-${categoryIndex}`}>
                <Card className="shadow-xl border border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, questionIndex) => (
                        <AccordionItem
                          key={questionIndex}
                          value={`item-${categoryIndex}-${questionIndex}`}
                          className="border-b border-border"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="font-semibold text-card-foreground">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16">
            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground text-center">Need More Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Try Our Tool</h3>
                    <p className="text-muted-foreground mb-4">
                      The best way to understand our service is to try it with your own website.
                    </p>
                    <Link href="/">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Analyze Website
                      </Button>
                    </Link>
                  </div>

                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Learn More</h3>
                    <p className="text-muted-foreground mb-4">
                      Read our blog for detailed guides and performance optimization tips.
                    </p>
                    <Link href="/blog">
                      <Button variant="outline" className="bg-transparent">
                        Visit Blog
                      </Button>
                    </Link>
                  </div>

                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Contact Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Have a specific question? We're here to help you optimize your website.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="bg-transparent">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Tips */}
          <div className="mt-16">
            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Quick Performance Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Immediate Improvements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Optimize and compress images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Enable browser caching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Minify CSS and JavaScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Use a Content Delivery Network (CDN)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Advanced Optimizations</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Implement lazy loading for images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Eliminate render-blocking resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Optimize server response times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Use modern image formats (WebP, AVIF)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <Card className="shadow-xl border border-border bg-card p-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We're here to help! Contact us directly and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Support
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                    <Zap className="mr-2 h-5 w-5" />
                    Try PageSpeed Pro
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
