import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Technology Partners - MIRSSA TECH LTD",
  description: "Discover MIRSSA TECH's strategic technology partnerships with leading companies including Microsoft, AWS, Google Cloud, and other industry leaders.",
  keywords: [
    "technology partners",
    "strategic partnerships",
    "Microsoft Gold Partner",
    "AWS partner",
    "Google Cloud partner",
    "technology alliances",
    "partner ecosystem",
    "MIRSSA TECH partners"
  ],
};

export default function PartnersPage() {
  const partners = [
    {
      name: "Microsoft",
      logo: "🔷",
      tier: "Gold Partner",
      description: "Microsoft Gold Partner with expertise in Azure, Office 365, and Dynamics 365 solutions.",
      certifications: ["Azure Solutions Architect", "Microsoft 365 Expert", "Dynamics 365 Specialist"]
    },
    {
      name: "Amazon Web Services",
      logo: "☁️",
      tier: "Advanced Partner",
      description: "AWS Advanced Consulting Partner specializing in cloud migration and optimization.",
      certifications: ["AWS Solutions Architect", "AWS DevOps Engineer", "AWS Security Specialist"]
    },
    {
      name: "Google Cloud",
      logo: "🌐",
      tier: "Premier Partner",
      description: "Google Cloud Premier Partner with deep expertise in AI/ML and data analytics.",
      certifications: ["Google Cloud Architect", "Data Engineer", "Machine Learning Engineer"]
    },
    {
      name: "Salesforce",
      logo: "⚡",
      tier: "Silver Partner",
      description: "Salesforce Silver Consulting Partner delivering CRM and automation solutions.",
      certifications: ["Salesforce Administrator", "Salesforce Developer", "Salesforce Architect"]
    },
    {
      name: "Oracle",
      logo: "🗄️",
      tier: "Platinum Partner",
      description: "Oracle Platinum Partner with comprehensive database and enterprise solutions expertise.",
      certifications: ["Oracle Database Administrator", "Oracle Cloud Architect", "Oracle Applications"]
    },
    {
      name: "IBM",
      logo: "🔵",
      tier: "Business Partner",
      description: "IBM Business Partner specializing in AI, analytics, and hybrid cloud solutions.",
      certifications: ["IBM Cloud Architect", "Watson AI Specialist", "IBM Security Expert"]
    }
  ];

  const benefits = [
    {
      title: "Access to Latest Technologies",
      description: "Early access to cutting-edge tools and platforms from our technology partners"
    },
    {
      title: "Expert Training & Certification",
      description: "Comprehensive training programs and industry-recognized certifications"
    },
    {
      title: "Dedicated Support",
      description: "Priority support and technical assistance from partner engineering teams"
    },
    {
      title: "Co-Marketing Opportunities",
      description: "Joint marketing initiatives and go-to-market strategies"
    },
    {
      title: "Innovation Labs",
      description: "Access to partner innovation labs and research facilities"
    },
    {
      title: "Global Reach",
      description: "Leverage partner networks for global project delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimation direction="fade" duration={0.8}>
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                Technology Partners
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Strategic partnerships with industry leaders enable us to deliver cutting-edge solutions and exceptional value to our clients worldwide.
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
            <span className="text-gray-600">Partners</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Partnership Overview */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Strategic Technology Alliances
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
                Our partnerships with leading technology companies allow us to stay at the forefront of innovation 
                and provide our clients with access to the most advanced tools and platforms in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1} duration={0.8}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{partner.logo}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                        {partner.name}
                      </h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {partner.tier}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 font-inter text-sm">
                      {partner.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Certifications:</h4>
                      <ul className="space-y-1">
                        {partner.certifications.map((cert, certIndex) => (
                          <li key={certIndex} className="text-xs text-gray-600">• {cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Partnership Benefits */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                  Benefits of Our Partnerships
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto font-inter">
                  Our strategic partnerships provide significant advantages for our clients and our business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Partnership Statistics */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Partnership Impact
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Our partnerships have enabled us to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Technology Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Certified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Become a Partner */}
        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                  Become Our Technology Partner
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                  Are you a technology company looking to expand your reach and deliver better solutions? 
                  Join our partner ecosystem and grow your business with us.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                    Partner Benefits
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Access to our global client base
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Joint marketing and sales support
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Technical training and certification
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Dedicated partner success manager
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Co-development opportunities
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                    Partner Requirements
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Proven track record in technology solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Certified professionals in relevant technologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Commitment to quality and customer success
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Global presence or expansion plans
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Alignment with our values and mission
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              Let&apos;s explore how we can work together to deliver exceptional technology solutions to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Become a Partner
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Learn More About Us
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
}
