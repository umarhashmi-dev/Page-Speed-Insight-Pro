import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Settings, Eye, BarChart, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Cookies Policy - PageSpeed Pro | How We Use Cookies",
  description:
    "Learn about how PageSpeed Pro uses cookies to improve your experience. Understand what cookies we use and how to manage your preferences.",
  keywords: "cookies policy, PageSpeed Pro cookies, website cookies, cookie preferences, tracking cookies",
}

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <Cookie className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Cookies Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              This policy explains how PageSpeed Pro uses cookies and similar technologies to enhance your browsing
              experience and improve our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Overview */}
          <Card className="shadow-xl border border-border bg-card mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                Cookie Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Essential Only</h3>
                  <p className="text-sm text-muted-foreground">We use minimal cookies for core functionality</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <BarChart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Analytics</h3>
                  <p className="text-sm text-muted-foreground">Anonymous usage data to improve our service</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Your Control</h3>
                  <p className="text-sm text-muted-foreground">You can manage cookie preferences anytime</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">1. What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit a website. They help
                  websites remember information about your visit, such as your preferred language and other settings.
                  This can make your next visit easier and the site more useful to you.
                </p>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Types of Cookies</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period
                    </li>
                    <li>
                      <strong>First-party Cookies:</strong> Set by the website you're visiting (PageSpeed Pro)
                    </li>
                    <li>
                      <strong>Third-party Cookies:</strong> Set by external services we use (like Google Analytics)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">2. How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies are necessary for the website to function properly. They enable core functionality
                    such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Remembering your analysis preferences</li>
                    <li>Maintaining your session while using our tools</li>
                    <li>Ensuring website security and preventing fraud</li>
                    <li>Storing your cookie consent preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    We use analytics cookies to understand how visitors interact with our website. This helps us:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Count the number of visitors and see how they move around the site</li>
                    <li>Identify which pages are most popular</li>
                    <li>Understand user behavior patterns</li>
                    <li>Improve our website's performance and user experience</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <em>Note: All analytics data is anonymized and cannot be used to identify individual users.</em>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Preference Cookies</h3>
                  <p className="text-muted-foreground mb-2">These cookies remember your choices and preferences:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Your preferred device type for analysis (mobile/desktop)</li>
                    <li>Language and region settings</li>
                    <li>Display preferences and accessibility settings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">3. Specific Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border border-border p-3 text-left text-card-foreground">Cookie Name</th>
                        <th className="border border-border p-3 text-left text-card-foreground">Purpose</th>
                        <th className="border border-border p-3 text-left text-card-foreground">Duration</th>
                        <th className="border border-border p-3 text-left text-card-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">_ga</td>
                        <td className="border border-border p-3 text-muted-foreground">
                          Google Analytics - distinguishes users
                        </td>
                        <td className="border border-border p-3 text-muted-foreground">2 years</td>
                        <td className="border border-border p-3 text-muted-foreground">Analytics</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">_ga_*</td>
                        <td className="border border-border p-3 text-muted-foreground">
                          Google Analytics - session information
                        </td>
                        <td className="border border-border p-3 text-muted-foreground">2 years</td>
                        <td className="border border-border p-3 text-muted-foreground">Analytics</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">cookie-consent</td>
                        <td className="border border-border p-3 text-muted-foreground">
                          Stores your cookie preferences
                        </td>
                        <td className="border border-border p-3 text-muted-foreground">1 year</td>
                        <td className="border border-border p-3 text-muted-foreground">Essential</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">analysis-prefs</td>
                        <td className="border border-border p-3 text-muted-foreground">
                          Remembers your analysis preferences
                        </td>
                        <td className="border border-border p-3 text-muted-foreground">30 days</td>
                        <td className="border border-border p-3 text-muted-foreground">Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">4. Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Google Analytics</h3>
                  <p className="text-muted-foreground">
                    We use Google Analytics to analyze website traffic and usage patterns. Google Analytics uses cookies
                    to collect information about how visitors use our site. This information is used to compile reports
                    and help us improve the site.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Learn more about Google Analytics cookies:{" "}
                    <Link
                      href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Analytics Cookie Usage
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Google PageSpeed Insights</h3>
                  <p className="text-muted-foreground">
                    Our core service uses Google's PageSpeed Insights API. While this doesn't set cookies directly, your
                    analysis requests are processed by Google's servers and subject to Google's privacy policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">5. Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Browser Settings</h3>
                  <p className="text-muted-foreground mb-2">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>View what cookies are stored on your device</li>
                    <li>Delete cookies individually or all at once</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block all cookies (though this may affect website functionality)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Browser-Specific Instructions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-card-foreground mb-2">Chrome</h4>
                      <p className="text-sm text-muted-foreground">
                        Settings → Privacy and security → Cookies and other site data
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-card-foreground mb-2">Firefox</h4>
                      <p className="text-sm text-muted-foreground">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-card-foreground mb-2">Safari</h4>
                      <p className="text-sm text-muted-foreground">Preferences → Privacy → Manage Website Data</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-card-foreground mb-2">Edge</h4>
                      <p className="text-sm text-muted-foreground">
                        Settings → Cookies and site permissions → Cookies and site data
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Opt-Out Options</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Google Analytics Opt-out:{" "}
                      <Link
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Analytics Opt-out Browser Add-on
                      </Link>
                    </li>
                    <li>Do Not Track: We respect the Do Not Track browser setting where technically feasible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">6. Impact of Disabling Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    Disabling essential cookies may affect core website functionality, including the ability to use our
                    analysis tools effectively.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    Disabling analytics cookies won't affect your ability to use our services, but it will prevent us
                    from understanding how to improve the user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Preference Cookies</h3>
                  <p className="text-muted-foreground">
                    Without preference cookies, you'll need to reset your preferences each time you visit our site.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">7. Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this cookies policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  updated policy on this page.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">8. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <Link href="mailto:privacy@pagespeedpro.com" className="text-primary hover:underline">
                      privacy@pagespeedpro.com
                    </Link>
                  </p>
                  <p className="text-muted-foreground">
                    Contact Form:{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      /contact
                    </Link>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  For more information about our data practices, please see our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="text-sm text-muted-foreground">
                  Created by{" "}
                  <Link
                    href="https://umarhashmi.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Umar Hashmi
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
