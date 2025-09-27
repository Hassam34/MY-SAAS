import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team - MIRSSA TECH LTD",
  description: "Meet the leadership team at MIRSSA TECH LTD. Our experienced executives bring decades of expertise in digital transformation, technology solutions, and business innovation.",
  keywords: [
    "leadership team",
    "executive team",
    "MIRSSA TECH leadership",
    "company executives",
    "technology leaders",
    "digital transformation experts"
  ],
};

// Team member data
const leadershipTeam = [
 
  {
    name: "Muhamad Saleh",
    title: "Chief Executive Officer & Founder",
    bio: "Muhamad Saleh is the CEO and Founder of MIRSSA TECH LTD. With over 10 years of experience in digital transformation and technology solutions, he has led the company from its inception to become a global provider of comprehensive IT services. Prior to founding MIRSSA TECH, Hassam held senior leadership positions at major technology companies, driving innovation and growth across multiple sectors. He holds a Master's degree in Computer Science and is passionate about leveraging technology to solve complex business challenges.",
    image: "/team/saleh.jpg",
    linkedin: "https://linkedin.com/in/saleh",
    email: "saleh@mirssatech.com"
  },
  {
    name: "Muhammad Hassam Yahya",
    title: "Chief Technical Officer & Co-Founder",
    bio: "Hassam Yahya is the CTO and Co-Founder of MIRSSA TECH LTD. With over 10 years of experience in digital transformation and technology solutions, he has led the company from its inception to become a global provider of comprehensive IT services. Prior to founding MIRSSA TECH, Hassam held senior leadership positions at major technology companies, driving innovation and growth across multiple sectors. He holds a Master's degree in Computer Science and is passionate about leveraging technology to solve complex business challenges.",
    image: "/team/hassam-yahya.jpg",
    linkedin: "https://linkedin.com/in/hassamyahya",
    email: "hassam@mirssatech.com"
  },
  {
    name: "Sarah Johnson",
    title: "Chief Technology Officer",
    bio: "Sarah Johnson serves as Chief Technology Officer, overseeing all technical operations and innovation initiatives at MIRSSA TECH LTD. With 15+ years of experience in enterprise architecture and cloud solutions, she has been instrumental in developing our cutting-edge AI and machine learning capabilities. Sarah previously held senior technical roles at leading technology companies and holds a Ph.D. in Artificial Intelligence from MIT. She is recognized as one of the top 100 technology leaders by industry publications.",
    image: "/team/sarah-johnson.jpg",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@mirssatech.com"
  },
  {
    name: "Michael Chen",
    title: "Chief Operating Officer",
    bio: "Michael Chen is the Chief Operating Officer responsible for global operations and strategic execution. With extensive experience in scaling technology companies, he has successfully led operations across multiple continents. Michael brings 12+ years of operational excellence from his previous roles at Fortune 500 companies, where he specialized in process optimization and digital transformation. He holds an MBA from Harvard Business School and is passionate about building efficient, scalable operations that drive business growth.",
    image: "/team/michael-chen.jpg",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael@mirssatech.com"
  },
  {
    name: "Dr. Aisha Patel",
    title: "Chief Innovation Officer",
    bio: "Dr. Aisha Patel leads innovation and research initiatives at MIRSSA TECH LTD. As Chief Innovation Officer, she is responsible for identifying emerging technologies and developing new solutions that keep our clients ahead of the curve. With a Ph.D. in Data Science and 10+ years of experience in AI research, Aisha has published numerous papers on machine learning and predictive analytics. She previously served as Director of Research at a leading technology institute and is a frequent speaker at international conferences.",
    image: "/team/aisha-patel.jpg",
    linkedin: "https://linkedin.com/in/aishapatel",
    email: "aisha@mirssatech.com"
  },
  {
    name: "David Rodriguez",
    title: "Chief Financial Officer",
    bio: "David Rodriguez serves as Chief Financial Officer, managing all financial operations and strategic planning. With 18+ years of experience in corporate finance and M&A, he has successfully guided multiple technology companies through periods of rapid growth and expansion. David holds a CPA certification and an MBA in Finance from Wharton School. He is responsible for financial strategy, investor relations, and ensuring sustainable growth while maintaining operational excellence.",
    image: "/team/david-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/davidrodriguez",
    email: "david@mirssatech.com"
  },
  {
    name: "Emma Thompson",
    title: "Chief Marketing Officer",
    bio: "Emma Thompson leads global marketing and brand strategy at MIRSSA TECH LTD. With 14+ years of experience in technology marketing, she has successfully built and scaled marketing operations for high-growth companies. Emma specializes in digital marketing, brand development, and customer acquisition strategies. She holds a Master's degree in Marketing from London Business School and has been recognized for her innovative approaches to B2B technology marketing. Emma is passionate about creating meaningful connections between technology and business outcomes.",
    image: "/team/emma-thompson.jpg",
    linkedin: "https://linkedin.com/in/emmathompson",
    email: "emma@mirssatech.com"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Leadership Team
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Shaping the Future of Digital Transformation
            </p>
            <p className="text-lg text-gray-600 mt-4 font-inter">
              Members of the MIRSSA TECH leadership team were selected for their experience, strategic thinking and planning skills, and their ability to effectively produce results in the digital transformation marketplace.
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
            <Link href="/about" className="text-blue-600 hover:text-blue-800">About Us</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Leadership Team</span>
          </nav>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Profile Image Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
                        {member.name}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-4 font-inter">
                        {member.title}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6 font-inter">
                        {member.bio}
                      </p>
                      
                      {/* Contact Links */}
                      <div className="flex space-x-4">
                        <a 
                          href={member.linkedin}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Our Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter">
              Our leadership team is united by a shared vision: to empower businesses through innovative technology solutions while maintaining the highest standards of integrity, excellence, and customer focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Innovation First</h3>
              <p className="text-gray-600 font-inter">
                We continuously explore emerging technologies and innovative approaches to deliver cutting-edge solutions that drive business transformation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Collaborative Excellence</h3>
              <p className="text-gray-600 font-inter">
                We believe in the power of teamwork and collaboration, fostering an environment where diverse perspectives drive exceptional outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Customer Success</h3>
              <p className="text-gray-600 font-inter">
                Our success is measured by our clients&apos; success. We are committed to delivering solutions that exceed expectations and drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Ready to work with our team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-inter">
            Let&apos;s discuss how our experienced leadership team can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors font-poppins"
            >
              GET IN TOUCH
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors font-poppins"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
