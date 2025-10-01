import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "../../../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Healthcare Technology Solutions - MIRSSA TECH LTD",
  description: "Transform healthcare delivery with MIRSSA TECH's innovative technology solutions. Electronic health records, telemedicine, AI diagnostics, and patient management systems.",
  keywords: [
    "healthcare technology",
    "electronic health records",
    "telemedicine solutions",
    "AI healthcare",
    "medical software",
    "healthcare digital transformation",
    "patient management systems",
    "healthcare analytics"
  ],
};

export default function HealthcarePage() {
  const solutions = [
    {
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive EHR systems that streamline patient data management and improve care coordination.",
      features: ["Patient data centralization", "Interoperability", "Clinical decision support", "Secure data sharing"],
      icon: "📋"
    },
    {
      title: "Telemedicine Platforms",
      description: "Secure video consultation platforms enabling remote patient care and virtual health services.",
      features: ["Video consultations", "Remote monitoring", "Prescription management", "Appointment scheduling"],
      icon: "📹"
    },
    {
      title: "AI-Powered Diagnostics",
      description: "Machine learning algorithms that assist in medical imaging analysis and diagnostic decision-making.",
      features: ["Medical image analysis", "Predictive analytics", "Risk assessment", "Treatment recommendations"],
      icon: "🤖"
    },
    {
      title: "Patient Management Systems",
      description: "Integrated systems for managing patient flow, appointments, and care coordination.",
      features: ["Appointment scheduling", "Patient tracking", "Care team coordination", "Outcome monitoring"],
      icon: "👥"
    },
    {
      title: "Healthcare Analytics",
      description: "Data analytics solutions that provide insights into patient outcomes and operational efficiency.",
      features: ["Performance metrics", "Population health insights", "Cost analysis", "Quality indicators"],
      icon: "📊"
    },
    {
      title: "Mobile Health Apps",
      description: "Patient-facing mobile applications for health monitoring and engagement.",
      features: ["Health tracking", "Medication reminders", "Symptom reporting", "Provider communication"],
      icon: "📱"
    }
  ];

  const benefits = [
    {
      title: "Improved Patient Outcomes",
      description: "Better care coordination and data-driven decision making lead to improved patient health outcomes."
    },
    {
      title: "Enhanced Efficiency",
      description: "Streamlined workflows and automated processes reduce administrative burden and improve efficiency."
    },
    {
      title: "Cost Reduction",
      description: "Optimized resource utilization and reduced readmissions result in significant cost savings."
    },
    {
      title: "Regulatory Compliance",
      description: "Built-in compliance features ensure adherence to healthcare regulations and standards."
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
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Transform healthcare delivery with innovative technology solutions that improve patient outcomes, 
                enhance operational efficiency, and ensure regulatory compliance.
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
            <Link href="/industries" className="text-blue-600 hover:text-blue-800">Industries</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Healthcare</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Industry Overview */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                  Revolutionizing Healthcare Through Technology
                </h2>
                <p className="text-lg text-gray-700 mb-6 font-inter">
                  The healthcare industry is undergoing a digital transformation, and MIRSSA TECH is at the forefront 
                  of this revolution. We help healthcare organizations leverage cutting-edge technology to improve 
                  patient care, streamline operations, and reduce costs.
                </p>
                <p className="text-lg text-gray-700 mb-8 font-inter">
                  Our comprehensive healthcare technology solutions are designed to address the unique challenges 
                  faced by hospitals, clinics, and healthcare providers while ensuring compliance with industry 
                  regulations and standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors font-poppins"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors font-poppins"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-poppins">Healthcare Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Patient Satisfaction</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Operational Efficiency</span>
                    <span className="text-2xl font-bold">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cost Reduction</span>
                    <span className="text-2xl font-bold">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Compliance Rate</span>
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Solutions */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Our Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Comprehensive technology solutions designed specifically for the healthcare industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.3 + index * 0.1} duration={0.8}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-inter">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Benefits */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                  Benefits for Healthcare Organizations
                </h2>
                <p className="text-xl text-green-100 max-w-3xl mx-auto font-inter">
                  Our healthcare technology solutions deliver measurable benefits that improve both patient care and operational efficiency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-green-100">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Compliance & Security */}
        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Compliance & Security
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                We understand the critical importance of compliance and security in healthcare technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                  Regulatory Compliance
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    HIPAA compliance for patient data protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    FDA guidelines for medical software
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    HITECH Act compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    International healthcare standards
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                  Security Features
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    End-to-end encryption
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Multi-factor authentication
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Regular security audits
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Advanced threat protection
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Ready to Transform Your Healthcare Organization?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              Let&apos;s discuss how our healthcare technology solutions can help you improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Explore Our Services
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
}
