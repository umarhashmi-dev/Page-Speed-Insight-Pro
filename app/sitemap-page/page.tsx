import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | PageSpeed Insights Tool",
  description: "Complete sitemap of our PageSpeed Insights tool website with all important pages and sections.",
  keywords: "sitemap, website map, navigation, PageSpeed Insights, pages",
  openGraph: {
    title: "Sitemap | PageSpeed Insights Tool",
    description: "Complete sitemap of our PageSpeed Insights tool website with all important pages and sections.",
    type: "website",
  },
}

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "PageSpeed Insights tool and homepage" },
        { name: "About Us", url: "/about", description: "Learn about our company and mission" },
        { name: "Services", url: "/services", description: "Our web performance tools and services" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
      ],
    },
    {
      title: "Content & Resources",
      links: [
        { name: "Blog", url: "/blog", description: "Latest articles on web performance" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
        { name: "Gallery", url: "/gallery", description: "Showcase of our work and projects" },
        { name: "Testimonials", url: "/testimonials", description: "Client reviews and feedback" },
        { name: "Portfolio", url: "/portfolio", description: "Case studies and project examples" },
      ],
    },
    {
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we handle your data" },
        { name: "Terms of Service", url: "/terms-of-service", description: "Terms and conditions of use" },
        { name: "Cookies Policy", url: "/cookies-policy", description: "Information about cookies usage" },
        { name: "Disclaimer", url: "/disclaimer", description: "Important disclaimers and limitations" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Website Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through all sections of our website easily with this comprehensive sitemap
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-black mb-6 border-b border-gray-200 pb-2">{section.title}</h2>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url} className="block hover:bg-white p-3 rounded transition-colors">
                      <div className="font-medium text-black hover:underline">{link.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{link.description}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need Help Finding Something?</h2>
          <p className="text-gray-300 mb-4">
            Can't find what you're looking for? Our search functionality and contact form are here to help.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
