import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | PageSpeed Insights Tool",
  description:
    "Important disclaimer and responsibility limits for using our PageSpeed Insights tool and website services.",
  keywords: "disclaimer, responsibility, legal, PageSpeed Insights, website terms",
  openGraph: {
    title: "Disclaimer | PageSpeed Insights Tool",
    description:
      "Important disclaimer and responsibility limits for using our PageSpeed Insights tool and website services.",
    type: "website",
  },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Important information about the use of our services and website content
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">General Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The information contained on this website is for general information purposes only. While we endeavor to
              keep the information up to date and correct, we make no representations or warranties of any kind, express
              or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or
              the information, products, services, or related graphics contained on the website.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Website Performance Analysis</h2>
              <p className="text-gray-700 mb-4">
                Our PageSpeed Insights tool provides performance analysis based on publicly available data and testing
                methodologies. The results are for informational purposes only and should not be considered as
                professional advice for website optimization.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Performance scores may vary based on testing conditions and server response times</li>
                <li>Recommendations are general suggestions and may not apply to all website configurations</li>
                <li>We are not responsible for any changes made to websites based on our analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event will we be liable for any loss or damage including without limitation, indirect or
                consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
                arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">External Links</h2>
              <p className="text-gray-700 mb-4">
                Through this website, you may be able to link to other websites which are not under our control. We have
                no control over the nature, content, and availability of those sites. The inclusion of any links does
                not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Technical Accuracy</h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate technical information and analysis, technology and web standards are
                constantly evolving. We cannot guarantee that all information provided will be current or applicable to
                all situations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about this disclaimer, please contact us through our
                <a href="/contact" className="text-black hover:underline ml-1">
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
