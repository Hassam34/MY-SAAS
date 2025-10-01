import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "../../components/ScrollAnimation";

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
      <ScrollAnimation direction="fade" duration={0.8}>
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-poppins">
                The modern technology platform for a better digital world.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 font-inter">
                MIRSSA TECH brings AI, data, and digital solutions together on one purpose-built platform for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/team" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors font-poppins text-lg"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins">
                We make it easier and faster to build digital solutions.
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 font-poppins">
                We started MIRSSA TECH with a simple but urgent belief: Technology should empower people.
              </h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter">
                We live in a time of extraordinary technological progress — and yet many businesses are held back by systems that&apos;re fragmented, inefficient, and falling behind.
              </p>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter mt-6">
                Meanwhile, the stakes couldn&apos;t be higher. Digital transformation, AI adoption, data-driven decisions, and modern infrastructure all depend on our ability to build better technology solutions.
              </p>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter mt-6">
                We founded MIRSSA TECH to help fix that.
              </p>
            </div>

            {/* Team Image Placeholder */}
            <ScrollAnimation direction="fade" delay={0.3} duration={0.8}>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 mb-16">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4 font-poppins">The MIRSSA TECH team in 2024</h3>
                  <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-lg">Our global team of technology experts and innovators</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Stats Section */}
            <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 font-poppins">500+</div>
                  <div className="text-gray-600 font-inter">customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 font-poppins">50+</div>
                  <div className="text-gray-600 font-inter">technology partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 font-poppins">10+</div>
                  <div className="text-gray-600 font-inter">years in business</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 font-poppins">25+</div>
                  <div className="text-gray-600 font-inter">countries served</div>
                </div>
              </div>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>

        {/* Three Key Benefits */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Deliver solutions faster */}
              <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
                    <div className="text-6xl">⚡</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                    Deliver solutions faster, with far less friction.
                  </h3>
                </div>
              </ScrollAnimation>

              {/* Build strong teams */}
              <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
                    <div className="text-6xl">👥</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                    Build strong teams.
                  </h3>
                  <p className="text-lg text-gray-700 font-inter">
                    Our platform connects people, projects, and payments — bringing clarity and alignment to the complex work of building digital solutions.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Control costs */}
              <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
                    <div className="text-6xl">💰</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                    Control project costs.
                  </h3>
                  <p className="text-lg text-gray-700 font-inter">
                    When we help businesses work smarter, we all benefit — with better solutions, stronger infrastructure, cleaner processes, and thriving communities.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
              <div className="text-center mt-16">
                <p className="text-xl text-gray-700 font-inter">
                  We&apos;re not here to create another tool that solves a single problem. We&apos;re building the modern technology operating system.
                </p>
              </div>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>

        {/* Customer Success Stories */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="py-20 bg-gray-50">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Top companies run their business with MIRSSA TECH.
              </h2>
            </div>

            {/* Customer Story */}
            <ScrollAnimation direction="left" delay={0.3} duration={0.8}>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-poppins">TechCorp Solutions</h3>
                        <p className="text-gray-600 font-inter">Enterprise Client</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                      How One of the Southeast&apos;s Premier Tech Companies Fuels Their Rapid Expansion with MIRSSA TECH
                    </h4>
                    <div className="flex items-center text-blue-600 font-medium mb-4">
                      <span>Read more</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Company profile</span>
                        <p className="font-semibold">185 employees</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Working in</span>
                        <p className="font-semibold">Florida, Kentucky, North Carolina</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                    <div className="text-center">
                      <div className="text-4xl mb-4">💬</div>
                      <blockquote className="text-lg italic mb-4">
                        &ldquo;I went on my first vacation in years thanks to MIRSSA TECH.&rdquo;
                      </blockquote>
                      <div className="text-center">
                        <p className="font-bold">Sarah Johnson</p>
                        <p className="text-blue-100">CTO, TechCorp Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Another Testimonial */}
            <ScrollAnimation direction="right" delay={0.4} duration={0.8}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <blockquote className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                    &ldquo;95% of the manual calculations we had to do before are now automated by MIRSSA TECH. That is a game-changer.&rdquo;
                  </blockquote>
                  <div className="text-center">
                    <p className="font-bold text-lg">Lisa Rodriguez</p>
                    <p className="text-gray-600">VP of Operations, DataFlow Inc.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>

        {/* US-based Support */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
                US-based R&D & support
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 font-poppins">
                Homegrown support.
              </h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
                With our US-based R&D and support teams, you&apos;ll never have to worry about getting stuck on endless phone trees or passed around to different people around the globe.
              </p>
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="text-blue-600 hover:text-blue-700 font-medium font-inter"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Support Map Placeholder */}
            <ScrollAnimation direction="fade" delay={0.3} duration={0.8}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Our Global Presence</h4>
                <p className="text-gray-600 font-inter">Serving clients worldwide with local expertise</p>
              </div>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Interested in building a better digital world?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/team" 
                  className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors font-poppins text-lg"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Final CTA */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-center text-white">
            <h2 className="text-4xl font-bold mb-6 font-poppins">
              Connect your business, technology, and growth.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-inter">
              MIRSSA TECH is the missing piece that brings your projects, payments and people together, so you can build with confidence.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors font-poppins text-lg"
            >
              Get a demo
            </Link>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
}
