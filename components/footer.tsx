import Link from "next/link"
import { Zap, ExternalLink } from "lucide-react"
import { BoxContainer } from "@/components/ui/box-container"
import { GridBox } from "@/components/ui/grid-box"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <GridBox cols={4} gap="lg" className="mb-12">
          {/* Brand */}
          <BoxContainer variant="glass" className="bg-primary-foreground/5 border-primary-foreground/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-foreground rounded-xl shadow-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">PageSpeed Pro</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Professional website performance analysis and optimization tools to help you build faster, better
              websites.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary-foreground/70">A Tool by</span>
              <Link
                href="https://umarhashmi.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 font-semibold flex items-center gap-1 transition-colors"
              >
                Umar Hashmi
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </BoxContainer>

          {/* Quick Links */}
          <BoxContainer variant="glass" className="bg-primary-foreground/5 border-primary-foreground/10">
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </BoxContainer>

          {/* Tools & Resources */}
          <BoxContainer variant="glass" className="bg-primary-foreground/5 border-primary-foreground/10">
            <h3 className="font-semibold text-lg mb-6">Tools & Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  PageSpeed Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap-page"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </BoxContainer>

          {/* Legal */}
          <BoxContainer variant="glass" className="bg-primary-foreground/5 border-primary-foreground/10">
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies-policy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </BoxContainer>
        </GridBox>

        <div className="border-t border-primary-foreground/20 pt-8">
          <BoxContainer variant="glass" className="bg-primary-foreground/5 border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/80">
              © {currentYear} PageSpeed Pro. All rights reserved. |
              <Link
                href="https://umarhashmi.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 ml-1 font-semibold transition-colors"
              >
                A Tool by Umar Hashmi
              </Link>
            </p>
          </BoxContainer>
        </div>
      </div>
    </footer>
  )
}
