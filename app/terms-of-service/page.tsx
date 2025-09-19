import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service - PageSpeed Pro | Website Usage Terms",
  description:
    "Read PageSpeed Pro's terms of service to understand your rights and responsibilities when using our website performance analysis tools.",
  keywords: "terms of service, PageSpeed Pro terms, website usage agreement, service terms, user agreement",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-primary rounded-2xl shadow-lg">
                <Scale className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">Terms of Service</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              These terms govern your use of PageSpeed Pro and our website performance analysis services. Please read
              them carefully before using our platform.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Summary */}
          <Card className="shadow-xl border border-border bg-card mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3 text-card-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                Quick Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Free Service</h3>
                  <p className="text-sm text-muted-foreground">Our tools are free to use for everyone</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">Fair Use</h3>
                  <p className="text-sm text-muted-foreground">Use our services responsibly and legally</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-card-foreground mb-1">No Warranty</h3>
                  <p className="text-sm text-muted-foreground">Services provided "as is" without guarantees</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using PageSpeed Pro ("the Service"), you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
                <p className="text-muted-foreground">
                  These terms apply to all visitors, users, and others who access or use the service. By using our
                  service, you represent that you are at least 18 years old or have parental consent.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">What We Provide</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Website performance analysis using Google PageSpeed Insights API</li>
                    <li>Performance metrics and optimization recommendations</li>
                    <li>Educational content about web performance</li>
                    <li>Free access to all analysis tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Service Availability</h3>
                  <p className="text-muted-foreground">
                    We strive to maintain high availability but do not guarantee uninterrupted service. We may
                    temporarily suspend the service for maintenance, updates, or other operational reasons.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Acceptable Use</h3>
                  <p className="text-muted-foreground mb-2">
                    You agree to use our service only for lawful purposes and in accordance with these terms. You agree
                    not to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Use the service for any illegal or unauthorized purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Use automated tools to excessively access our service</li>
                    <li>Submit malicious URLs or attempt to analyze harmful websites</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Rate Limits</h3>
                  <p className="text-muted-foreground">
                    To ensure fair usage for all users, we may implement rate limits on our API calls. Excessive use may
                    result in temporary restrictions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">4. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Our Content</h3>
                  <p className="text-muted-foreground">
                    The service and its original content, features, and functionality are owned by PageSpeed Pro and are
                    protected by international copyright, trademark, patent, trade secret, and other intellectual
                    property laws.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Your Content</h3>
                  <p className="text-muted-foreground">
                    You retain ownership of any URLs or content you submit for analysis. By using our service, you grant
                    us a limited license to analyze the submitted URLs and provide you with results.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Third-Party Content</h3>
                  <p className="text-muted-foreground">
                    Our service uses Google PageSpeed Insights API. The analysis results are provided by Google and are
                    subject to Google's terms and conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">5. Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our collection and use of personal information is governed by our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  , which is incorporated into these terms by reference.
                </p>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Data Usage</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>We do not store the content of analyzed websites</li>
                    <li>Analysis results may be temporarily cached for performance</li>
                    <li>We may use anonymized data to improve our services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">6. Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">Important Disclaimers</h3>
                      <p className="text-yellow-700 text-sm">
                        Please read this section carefully as it limits our liability and affects your legal rights.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Service "As Is"</h3>
                  <p className="text-muted-foreground">
                    The service is provided on an "as is" and "as available" basis. We make no warranties, expressed or
                    implied, regarding the service, including but not limited to warranties of merchantability, fitness
                    for a particular purpose, or non-infringement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Accuracy of Information</h3>
                  <p className="text-muted-foreground">
                    While we strive to provide accurate performance analysis, we do not guarantee the accuracy,
                    completeness, or reliability of any information provided by our service. Analysis results are based
                    on third-party APIs and may vary.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    In no event shall PageSpeed Pro, its directors, employees, or agents be liable for any indirect,
                    incidental, special, consequential, or punitive damages arising out of your use of the service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">7. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Google PageSpeed Insights</h3>
                  <p className="text-muted-foreground">
                    Our service relies on Google PageSpeed Insights API. Your use of our service is also subject to
                    Google's terms of service and privacy policy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">External Links</h3>
                  <p className="text-muted-foreground">
                    Our service may contain links to third-party websites. We are not responsible for the content,
                    privacy policies, or practices of these external sites.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">8. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may terminate or suspend your access to the service immediately, without prior notice or liability,
                  for any reason, including breach of these terms.
                </p>
                <p className="text-muted-foreground">
                  You may discontinue use of the service at any time. Upon termination, your right to use the service
                  will cease immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to modify or replace these terms at any time. If a revision is material, we will
                  try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-muted-foreground">
                  Your continued use of the service after any changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms shall be interpreted and governed by the laws of the jurisdiction in which the service
                  operates, without regard to conflict of law provisions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about these terms of service, please contact us:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <Link href="mailto:legal@pagespeedpro.com" className="text-primary hover:underline">
                      legal@pagespeedpro.com
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
