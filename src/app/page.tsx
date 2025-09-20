import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "MIRSSA TECH LTD builds modern web applications. Explore our portfolio and get in touch.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 font-poppins">
              The backbone of your
              <span className="block text-blue-600">digital business</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-inter">
              As an industry pioneer and one of the world's most experienced web development teams, 
              MIRSSA TECH LTD offers both public and private web solutions - a perfect combination 
              of flexibility and security for global enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 font-poppins"
              >
                View Our Work
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 font-poppins"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 font-poppins">
              Why Choose MIRSSA TECH LTD?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-inter">
              We ensure that our development process, organization, and tools are optimized 
              to deliver the highest levels of performance and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 font-poppins">Fast Development</h3>
              <p className="text-gray-700 font-inter">
                Rapid prototyping and development with modern frameworks and best practices.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 font-poppins">Quality Assurance</h3>
              <p className="text-gray-700 font-inter">
                Comprehensive testing and quality control to ensure your app works flawlessly.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 font-poppins">Dedicated Support</h3>
              <p className="text-gray-700 font-inter">
                Ongoing maintenance and support to keep your application running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Ready to build your next project?
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
    </>
  );
}
