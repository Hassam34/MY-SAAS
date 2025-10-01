import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Sustainability - MIRSSA TECH LTD",
  description: "Learn about MIRSSA TECH's commitment to sustainability, environmental responsibility, and creating a positive impact on our planet through technology.",
  keywords: [
    "sustainability",
    "environmental responsibility",
    "green technology",
    "carbon footprint",
    "sustainable development",
    "ESG",
    "corporate responsibility",
    "MIRSSA TECH sustainability"
  ],
};

export default function SustainabilityPage() {
  const initiatives = [
    {
      title: "Carbon Neutral Operations",
      description: "We&apos;ve achieved carbon neutrality across all our operations through renewable energy and carbon offset programs.",
      icon: "🌱",
      metrics: "100% Renewable Energy"
    },
    {
      title: "Green Technology Solutions",
      description: "We develop and implement technology solutions that help our clients reduce their environmental impact.",
      icon: "💚",
      metrics: "50+ Green Projects"
    },
    {
      title: "Sustainable Supply Chain",
      description: "We work with suppliers who share our commitment to environmental responsibility and ethical practices.",
      icon: "🔄",
      metrics: "95% Sustainable Suppliers"
    },
    {
      title: "Digital Waste Reduction",
      description: "Our digital transformation solutions help clients reduce paper waste and improve efficiency.",
      icon: "📱",
      metrics: "80% Paper Reduction"
    }
  ];

  const goals = [
    {
      year: "2025",
      title: "Net Zero Emissions",
      description: "Achieve net zero carbon emissions across all operations"
    },
    {
      year: "2026",
      title: "100% Renewable Energy",
      description: "Power all facilities with 100% renewable energy sources"
    },
    {
      year: "2027",
      title: "Zero Waste to Landfill",
      description: "Eliminate all waste sent to landfills through recycling and composting"
    },
    {
      year: "2028",
      title: "Carbon Negative",
      description: "Remove more carbon from the atmosphere than we produce"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimation direction="fade" duration={0.8}>
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                Sustainability & Environmental Responsibility
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                At MIRSSA TECH, we&apos;re committed to building a sustainable future through innovative technology solutions and responsible business practices.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Navigation Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Sustainability</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Commitment */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Our Sustainability Commitment
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
                We believe that technology companies have a responsibility to lead the way in environmental stewardship. 
                Our sustainability initiatives are integrated into every aspect of our business, from our operations 
                to the solutions we deliver for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1} duration={0.8}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="text-4xl mb-4">{initiative.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-inter">
                      {initiative.description}
                    </p>
                    <div className="text-green-600 font-bold text-lg">
                      {initiative.metrics}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Environmental Impact */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                  Our Environmental Impact
                </h2>
                <p className="text-xl text-green-100 max-w-3xl mx-auto font-inter">
                  Through our sustainability efforts, we&apos;ve made significant progress in reducing our environmental footprint.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">75%</div>
                  <div className="text-green-100">Reduction in Carbon Emissions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <div className="text-green-100">Waste Diverted from Landfill</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-green-100">Renewable Energy Usage</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-green-100">Green Projects Delivered</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Sustainability Goals */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Our Sustainability Roadmap
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                We&apos;ve set ambitious goals to continue our journey toward a more sustainable future.
              </p>
            </div>

            <div className="space-y-8">
              {goals.map((goal, index) => (
                <ScrollAnimation key={index} direction="left" delay={0.4 + index * 0.1} duration={0.8}>
                  <div className="flex items-center bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-green-600">{goal.year}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 font-inter">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Green Technology Solutions */}
        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Green Technology Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                We help our clients achieve their sustainability goals through innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation direction="left" delay={0.5} duration={0.8}>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    Smart Energy Management
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter">
                    AI-powered systems that optimize energy consumption and reduce costs while minimizing environmental impact.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time energy monitoring</li>
                    <li>• Predictive analytics for consumption</li>
                    <li>• Automated optimization systems</li>
                    <li>• Carbon footprint tracking</li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.6} duration={0.8}>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    Sustainable Data Centers
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter">
                    Green cloud infrastructure solutions that reduce energy consumption and environmental impact.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Renewable energy powered servers</li>
                    <li>• Efficient cooling systems</li>
                    <li>• Waste heat recovery</li>
                    <li>• Carbon-neutral hosting</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Partner With Us for a Sustainable Future
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              Let&apos;s work together to create technology solutions that benefit both your business and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Start Your Green Journey
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Explore Our Solutions
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
}
