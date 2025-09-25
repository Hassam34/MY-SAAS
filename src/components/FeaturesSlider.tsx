'use client';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Fast Development",
    description: "Rapid prototyping and development with modern frameworks and best practices.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "Comprehensive testing and quality control to ensure your app works flawlessly.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: 3,
    title: "Dedicated Support",
    description: "Ongoing maintenance and support to keep your application running smoothly.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: 4,
    title: "Scalable Solutions",
    description: "Build applications that grow with your business using cloud-native architectures.",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: 5,
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and user privacy.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    id: 6,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring and alerting to ensure optimal performance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  },
  {
    id: 7,
    title: "Cost Effective",
    description: "Optimized solutions that deliver maximum value for your investment.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    id: 8,
    title: "Innovation Focus",
    description: "Cutting-edge technologies and innovative approaches to solve complex problems.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "text-teal-600",
    bgColor: "bg-teal-100"
  }
];

export default function FeaturesSlider() {
  // Create exactly 2 copies for seamless infinite scroll
  const duplicatedFeatures = [...features, ...features];

  return (
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
        
        <div className="relative overflow-hidden">
          {/* Continuous Moving Slider */}
          <div className="flex animate-scroll">
            {duplicatedFeatures.map((feature, index) => (
              <div 
                key={`${feature.id}-${index}`}
                className="flex-shrink-0 w-80 px-4"
              >
                <div className="text-center p-6 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-8 h-8 ${feature.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 font-inter">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
