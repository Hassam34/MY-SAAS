import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "../../../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Financial Services Technology Solutions - MIRSSA TECH LTD",
  description: "Transform financial services with MIRSSA TECH's cutting-edge technology solutions. Banking systems, fintech platforms, risk management, and regulatory compliance solutions.",
  keywords: [
    "financial services technology",
    "banking software",
    "fintech solutions",
    "risk management systems",
    "regulatory compliance",
    "financial analytics",
    "payment processing",
    "digital banking"
  ],
};

export default function FinancePage() {
  const solutions = [
    {
      title: "Digital Banking Platforms",
      description: "Comprehensive digital banking solutions that enhance customer experience and operational efficiency.",
      features: ["Online banking", "Mobile banking", "Account management", "Transaction processing"],
      icon: "🏦"
    },
    {
      title: "Risk Management Systems",
      description: "Advanced risk assessment and management platforms for financial institutions.",
      features: ["Credit risk analysis", "Market risk monitoring", "Operational risk assessment", "Compliance reporting"],
      icon: "⚠️"
    },
    {
      title: "Payment Processing",
      description: "Secure and scalable payment processing solutions for various financial transactions.",
      features: ["Real-time payments", "Cross-border transfers", "Fraud detection", "Payment analytics"],
      icon: "💳"
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting systems for financial regulations.",
      features: ["KYC/AML compliance", "Regulatory reporting", "Audit trails", "Compliance dashboards"],
      icon: "📋"
    },
    {
      title: "Financial Analytics",
      description: "Data analytics solutions that provide insights into financial performance and market trends.",
      features: ["Performance analytics", "Predictive modeling", "Market analysis", "Customer insights"],
      icon: "📊"
    },
    {
      title: "Trading Platforms",
      description: "High-performance trading platforms for securities and derivatives trading.",
      features: ["Real-time trading", "Order management", "Market data feeds", "Risk controls"],
      icon: "📈"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Multi-layered security measures protect sensitive financial data and transactions."
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance processes ensure adherence to financial regulations and standards."
    },
    {
      title: "Operational Efficiency",
      description: "Streamlined processes and automation reduce operational costs and improve efficiency."
    },
    {
      title: "Customer Experience",
      description: "Intuitive interfaces and fast processing enhance customer satisfaction and retention."
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
                Financial Services Technology Solutions
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Empower financial institutions with cutting-edge technology solutions that enhance security, 
                ensure compliance, and deliver exceptional customer experiences.
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
            <span className="text-gray-600">Finance</span>
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
                  Revolutionizing Financial Services
                </h2>
                <p className="text-lg text-gray-700 mb-6 font-inter">
                  The financial services industry is rapidly evolving with digital transformation, and MIRSSA TECH 
                  is leading the charge. We help banks, fintech companies, and financial institutions leverage 
                  advanced technology to stay competitive and compliant.
                </p>
                <p className="text-lg text-gray-700 mb-8 font-inter">
                  Our comprehensive financial technology solutions address the unique challenges of the industry, 
                  including security, compliance, scalability, and customer experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors font-poppins"
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
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-poppins">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Transaction Speed</span>
                    <span className="text-2xl font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Security Uptime</span>
                    <span className="text-2xl font-bold">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Compliance Rate</span>
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cost Reduction</span>
                    <span className="text-2xl font-bold">35%</span>
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
                Our Financial Services Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Comprehensive technology solutions designed specifically for the financial services industry.
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
                          <span className="text-green-500 mr-2">•</span>
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
                  Benefits for Financial Institutions
                </h2>
                <p className="text-xl text-green-100 max-w-3xl mx-auto font-inter">
                  Our financial technology solutions deliver measurable benefits that improve both operational efficiency and customer satisfaction.
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

        {/* Security & Compliance */}
        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Security & Compliance
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                We understand the critical importance of security and compliance in financial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                  Security Standards
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PCI DSS compliance for payment processing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    SOC 2 Type II certification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    ISO 27001 information security management
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    End-to-end encryption
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                  Regulatory Compliance
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Basel III compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    MiFID II reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    GDPR data protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Anti-money laundering (AML)
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
              Ready to Transform Your Financial Services?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              Let&apos;s discuss how our financial technology solutions can help you stay competitive and compliant in today&apos;s digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
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
