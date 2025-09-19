import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, Mail, Globe } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - PageSpeed Pro | How We Protect Your Data",
  description:
    "Learn how PageSpeed Pro collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and data protection.",
  keywords: "privacy policy, data protection, PageSpeed Pro privacy, website analytics privacy, user data security",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Privacy Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use PageSpeed Pro.
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
                Quick Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Data Protection</h3>
                  <p className="text-sm text-muted-foreground">We use industry-standard security measures</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Minimal Collection</h3>
                  <p className="text-sm text-muted-foreground">We only collect necessary information</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">No Selling</h3>
                  <p className="text-sm text-muted-foreground">We never sell your personal data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Website URLs you submit for analysis</li>
                    <li>Contact information when you reach out to us</li>
                    <li>Email address if you subscribe to our newsletter</li>
                    <li>Feedback and comments you provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>IP address and general location information</li>
                    <li>Browser type and version</li>
                    <li>Device information and screen resolution</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referral source (how you found our site)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Third-Party Data</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Google PageSpeed Insights API data for website analysis</li>
                    <li>Analytics data from Google Analytics (anonymized)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Primary Uses</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Provide website performance analysis services</li>
                    <li>Improve our tools and user experience</li>
                    <li>Respond to your inquiries and provide support</li>
                    <li>Send important updates about our services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Analytics and Improvements</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Understand how users interact with our website</li>
                    <li>Identify and fix technical issues</li>
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Generate anonymized statistics and reports</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Marketing (Optional)</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Send newsletters and performance tips (with your consent)</li>
                    <li>Notify you about new features and improvements</li>
                    <li>Share relevant content and resources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">We Do Not Sell Your Data</h3>
                  <p className="text-muted-foreground">
                    We never sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Limited Sharing</h3>
                  <p className="text-muted-foreground mb-2">We may share your information only in these situations:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who help us operate our website (under strict confidentiality)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Third-Party Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Google PageSpeed Insights API (for performance analysis)</li>
                    <li>Google Analytics (for website analytics, anonymized)</li>
                    <li>Vercel (for hosting and infrastructure)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Security Measures</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>HTTPS encryption for all data transmission</li>
                    <li>Secure hosting infrastructure with regular updates</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                    <li>Regular security audits and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Data Retention</h3>
                  <p className="text-muted-foreground">
                    We retain your personal information only as long as necessary to provide our services and comply
                    with legal obligations. Website analysis data is typically stored for up to 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Your Rights</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Access the personal information we have about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">How to Exercise Your Rights</h3>
                  <p className="text-muted-foreground">
                    To exercise any of these rights, please contact us at{" "}
                    <Link href="mailto:privacy@pagespeedpro.com" className="text-primary hover:underline">
                      privacy@pagespeedpro.com
                    </Link>
                    . We will respond to your request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">6. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Managing Cookies</h3>
                  <p className="text-muted-foreground">
                    You can control cookies through your browser settings. However, disabling certain cookies may affect
                    website functionality. For more details, see our{" "}
                    <Link href="/cookies-policy" className="text-primary hover:underline">
                      Cookies Policy
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">7. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. We ensure that
                  such transfers comply with applicable data protection laws and that your information receives adequate
                  protection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any material changes by
                  posting the new policy on this page and updating the "Last updated" date. We encourage you to review
                  this policy periodically.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-card-foreground">Email:</span>
                  </div>
                  <p className="text-muted-foreground ml-8">
                    <Link href="mailto:privacy@pagespeedpro.com" className="text-primary hover:underline">
                      privacy@pagespeedpro.com
                    </Link>
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-card-foreground">Website:</span>
                  </div>
                  <p className="text-muted-foreground ml-8">
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact Form
                    </Link>
                  </p>
                </div>
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
