import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of projects delivered by MIRSSA TECH LTD.",
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    category: "Web Application",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS companies with real-time data visualization and reporting features.",
    category: "Dashboard",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and transaction management.",
    category: "Mobile App",
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    technologies: ["React Native", "TypeScript", "Firebase", "AWS"],
  },
  {
    id: 4,
    title: "Content Management System",
    description: "Headless CMS with multi-tenant architecture and advanced content workflow management.",
    category: "CMS",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
  },
  {
    id: 5,
    title: "Real-time Chat Platform",
    description: "Scalable chat platform with video calling, file sharing, and message encryption.",
    category: "Communication",
    image: "bg-gradient-to-br from-indigo-500 to-blue-600",
    technologies: ["Socket.io", "WebRTC", "Node.js", "Redis"],
  },
  {
    id: 6,
    title: "AI-Powered Analytics",
    description: "Machine learning platform for predictive analytics and business intelligence.",
    category: "AI/ML",
    image: "bg-gradient-to-br from-yellow-500 to-orange-600",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 font-poppins">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              A showcase of our latest projects and the innovative solutions we've delivered 
              for clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-200"
              >
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2 font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 font-inter">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium font-poppins"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Ready to start your project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-inter">
            Let's discuss your requirements and create something amazing together.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 font-poppins"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}

