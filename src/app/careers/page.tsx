import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Career Opportunities - MIRSSA TECH LTD",
  description: "Join MIRSSA TECH LTD and build the future of technology. Explore exciting career opportunities in AI/ML, data analytics, software development, and digital transformation.",
  keywords: [
    "careers",
    "jobs",
    "employment",
    "technology careers",
    "AI ML jobs",
    "data analytics careers",
    "software development jobs",
    "digital transformation careers",
    "MIRSSA TECH careers"
  ],
};

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI and machine learning solutions for enterprise clients.",
      requirements: ["5+ years ML experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"]
    },
    {
      title: "Data Analytics Consultant",
      department: "Consulting",
      location: "Remote",
      type: "Full-time",
      description: "Help clients transform their data into actionable insights and drive business growth.",
      requirements: ["3+ years analytics experience", "SQL, Python, R", "Business intelligence tools"]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      description: "Build scalable web applications and digital solutions for our global client base.",
      requirements: ["4+ years full-stack experience", "React, Node.js, AWS", "Agile methodology"]
    },
    {
      title: "Digital Transformation Consultant",
      department: "Consulting",
      location: "Europe",
      type: "Full-time",
      description: "Guide enterprise clients through their digital transformation journey.",
      requirements: ["5+ years consulting experience", "Enterprise software knowledge", "MBA preferred"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      description: "Design and maintain cloud infrastructure and deployment pipelines.",
      requirements: ["3+ years DevOps experience", "AWS, Azure, Docker, Kubernetes", "CI/CD expertise"]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for our digital products.",
      requirements: ["3+ years design experience", "Figma, Adobe Creative Suite", "User research skills"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: "🏠",
      title: "Flexible Working",
      description: "Remote work options and flexible hours to support work-life balance"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities, conferences, and certification support"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career progression paths and mentorship programs"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Work on projects that make a difference worldwide"
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
                Join Our Team
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Build the future of technology with MIRSSA TECH. We&apos;re looking for passionate individuals who want to make a difference in the world of digital transformation.
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
            <span className="text-gray-600">Careers</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Work With Us */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                At MIRSSA TECH, we believe our people are our greatest asset. We foster an environment where innovation thrives and careers flourish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1} duration={0.8}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 font-inter">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Current Openings */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Current Openings
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
                Explore exciting career opportunities and find your perfect role with us.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.3 + index * 0.1} duration={0.8}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                    <p className="text-gray-700 mb-4 font-inter">
                      {job.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Culture & Values */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                  Our Culture & Values
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto font-inter">
                  We&apos;re committed to creating an inclusive, innovative, and supportive workplace where everyone can thrive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                  <p className="text-blue-100 text-sm">We work together to achieve common goals</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-blue-100 text-sm">We encourage creative thinking and new ideas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                  <p className="text-blue-100 text-sm">We strive for the highest quality in everything we do</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">Growth</h3>
                  <p className="text-blue-100 text-sm">We invest in our people&apos;s development</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Don&apos;t See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              We&apos;re always looking for talented individuals. Send us your resume and let us know how you&apos;d like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors font-poppins"
              >
                Send Your Resume
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
