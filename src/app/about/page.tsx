import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - MIRSSA TECH LTD",
  description: "Learn about MIRSSA TECH LTD - a global digital transformation company that champions people and technology. We solve complex IT problems today with complete solutions that can transition tomorrow.",
  keywords: [
    "about MIRSSA TECH",
    "digital transformation company",
    "technology solutions",
    "AI machine learning",
    "data analytics",
    "enterprise solutions",
    "company culture",
    "leadership team"
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Get to Know Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              We solve complex IT problems TODAY with complete solutions that can transition TOMORROW.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">About Us</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              We value human expertise and innovation above all else.
            </h2>
            <p className="text-xl text-gray-700 font-inter">
              <strong>We are The Real People Behind IT</strong> – and our customers&apos; <strong>First Choice for IT</strong>.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Digital Workplace</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Networking</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Cloud & Data Center</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Security</h3>
            </div>
          </div>

          {/* Customer Quote */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <blockquote className="text-xl text-gray-700 italic mb-4 font-inter">
              &ldquo;Finally, a tech company that truly understands our world is always evolving. That knows we need a true partner. Somebody that&apos;s part of the solution, not the problem.&rdquo;
            </blockquote>
            <p className="text-gray-600">— Our valued customers</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                In a world full of technology,<br />
                we champion people.
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-inter">
                MIRSSA TECH LTD began as a promising technology startup focused on delivering innovative digital solutions. Today, we&apos;re a global provider of comprehensive digital transformation services, reaching clients across multiple countries and employing talented professionals worldwide.
              </p>
              <p className="text-lg text-gray-700 font-inter">
                Human relationships and expertise are at the core of our approach – because technology without people is limited. People behind it, in front of it, elevating it, and propelling it forward. We value the human effort of IT because we live and thrive in the relentless curiosity and imperative change of today&apos;s world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Technology Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size doesn't matter */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Size doesn&apos;t matter.
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
              We help organizations of all sizes succeed with custom digital transformation services and solutions for business, healthcare, government, and education, plus market verticals like retail, utilities, and financial services, to name a few.
            </p>
            <p className="text-lg text-gray-600 mt-4 font-inter">
              Whether you&apos;re local, growing globally, or somewhere in between, we have the expertise and the scale to help you achieve your goals – and even exceed them.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Customer-Centered</h3>
              <p className="text-gray-600 text-sm font-inter">
                Human relationships and expertise are at the core of our approach – people and technology pushing business forward.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Built for You</h3>
              <p className="text-gray-600 text-sm font-inter">
                We architect solutions that simplify the complex and meet your individual business needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Right-Sized</h3>
              <p className="text-gray-600 text-sm font-inter">
                Sure, we&apos;re global, but we aren&apos;t so big we&apos;re impersonal. We&apos;re small enough to be nimble and keep simplicity in mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Future-Focused</h3>
              <p className="text-gray-600 text-sm font-inter">
                We exist to help you reach your business potential and are dedicated to growth that meets your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Values Matter */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Values matter.
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
              MIRSSA TECH LTD is founded on diversity, and our team reflects it. Our team members come from all walks of life and all corners of the world. We wouldn&apos;t have it any other way.
            </p>
            <p className="text-lg text-gray-600 mt-4 font-inter">
              We&apos;re also committed to supporting local communities. We take pride in a culture that gives back to the community and promotes environmental sustainability.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">We listen and collaborate with purpose.</h3>
              <p className="text-gray-600 mb-4 font-inter">
                <strong>We&apos;re prepared, proactive, and precise.</strong> We listen to understand your needs. And we believe in the power of collaboration to spark innovation and deliver results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">We continuously learn.</h3>
              <p className="text-gray-600 mb-4 font-inter">
                <strong>We develop our talent.</strong> Continuous training is the norm, including engagements with strategic partners. We believe our never-stop-learning approach distinguishes us in a global marketplace.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">We provide Five-Star Service.</h3>
              <p className="text-gray-600 mb-4 font-inter">
                <strong>You can expect exceptional service.</strong> Our teams of certified sales, technical engineering, and global supply chain specialists are driven to please.
              </p>
            </div>
          </div>

          {/* Service Principles */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center font-poppins">Our Service Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Commitment</h4>
                <p className="text-sm text-gray-600 font-inter">To provide high-quality service by maintaining a relationship based on trust, responsiveness, and flexibility.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2 font-poppins">&ldquo;Consider-it-done&rdquo; approach</h4>
                <p className="text-sm text-gray-600 font-inter">To support you through every stage of the delivery process.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Proactive partnership</h4>
                <p className="text-sm text-gray-600 font-inter">To take the initiative to understand your industry, business model, goals – anything necessary to develop valuable and relevant solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Openness</h4>
                <p className="text-sm text-gray-600 font-inter">To collaborate and develop optimal, cost-effective, and relevant solutions for your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">5</div>
                <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Focus on results</h4>
                <p className="text-sm text-gray-600 font-inter">To create positive long-term, bottom-line outcomes by providing you with the capacity and IT infrastructure for extraordinary performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              We lend our expertise. All 10-plus years of it.
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
              <strong>We&apos;re passionate about technology.</strong> Our subject matter experts and advisors bring a wealth of experience to every project. We want nothing more than to ensure you get the optimal digital transformation services and solutions for your organization, your budget, and your ambitions for the future.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 font-poppins">
            We have just the right amount of everything. Right in one place.
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-inter">
            MIRSSA TECH LTD is the first choice for digital transformation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors font-poppins"
            >
              START A CONVERSATION
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors font-poppins"
            >
              VIEW OUR SERVICES
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
