'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

interface ProductCategory {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  heading: string;
  subheading: string;
  features: string[];
  visual: {
    type: 'dashboard' | 'mobile' | 'chart';
    title: string;
    data: {
      progress?: number;
      projects?: string;
      savings?: string;
      users?: string;
      rating?: string;
      downloads?: string;
      efficiency?: string;
      uptime?: string;
      costReduction?: string;
    };
  };
}

const productCategories: ProductCategory[] = [
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    shortName: 'Digital',
    description: 'Modernize your business with cutting-edge technology solutions',
    icon: '🚀',
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    heading: 'Transform your business with technology.',
    subheading: 'Build a stronger digital foundation with less complexity. MIRSSA TECH streamlines processes, automates workflows, and integrates systems — so you can focus on growth.',
    features: ['AI/ML Solutions', 'Process Automation', 'System Integration', 'Cloud Migration', 'Data Analytics'],
    visual: {
      type: 'dashboard',
      title: 'Digital Transformation Dashboard',
      data: {
        progress: 85,
        projects: '12',
        savings: '$2.4M'
      }
    }
  },
  {
    id: 'web-mobile',
    name: 'Web & Mobile Development',
    shortName: 'Development',
    description: 'Build powerful digital experiences across all platforms',
    icon: '💻',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
    heading: 'Build digital experiences that users love.',
    subheading: 'One platform for web, mobile, and desktop applications. Ensure your digital presence works seamlessly across all devices and delivers exceptional user experiences.',
    features: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Progressive Web Apps', 'Cross-platform'],
    visual: {
      type: 'mobile',
      title: 'Mobile App Analytics',
      data: {
        users: '45K',
        rating: '4.8',
        downloads: '125K'
      }
    }
  },
  {
    id: 'enterprise-solutions',
    name: 'Enterprise Solutions',
    shortName: 'Enterprise',
    description: 'Scalable solutions for large organizations and complex requirements',
    icon: '🏢',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    heading: 'Enterprise-grade solutions for complex needs.',
    subheading: 'Centralize operations, streamline workflows, and ensure compliance with enterprise-grade security and scalability built for large organizations.',
    features: ['Enterprise Software', 'Security & Compliance', 'Legacy Modernization', 'API Development', 'Custom Solutions'],
    visual: {
      type: 'chart',
      title: 'Enterprise Performance Metrics',
      data: {
        efficiency: '92%',
        uptime: '99.9%',
        costReduction: '35%'
      }
    }
  }
];

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll-triggered tab switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveCategory(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (index: number) => {
    if (categoryRefs.current[index]) {
      categoryRefs.current[index]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const renderVisual = (category: ProductCategory) => {
    switch (category.visual.type) {
      case 'dashboard':
        return (
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl"></div>
            <div className="relative z-10 bg-white rounded-xl p-6 shadow-2xl max-w-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Project Progress</h4>
                <span className="text-sm text-gray-500">Overall Progress</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Digital Transformation</span>
                    <span>{category.visual.data.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${category.visual.data.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{category.visual.data.projects}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{category.visual.data.savings}</div>
                    <div className="text-xs text-gray-500">Saved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'mobile':
        return (
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="relative z-10 bg-white rounded-3xl p-4 shadow-2xl w-64 h-80">
              <div className="bg-gray-100 rounded-t-2xl h-8 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-300 rounded"></div>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-bold text-gray-900">App Analytics</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <span className="font-bold">{category.visual.data.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Rating</span>
                    <span className="font-bold">{category.visual.data.rating} ⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Downloads</span>
                    <span className="font-bold">{category.visual.data.downloads}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'chart':
        return (
          <div className="relative bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="relative z-10 bg-white rounded-xl p-6 shadow-2xl max-w-sm w-full">
              <h4 className="font-bold text-gray-900 mb-4 text-center">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Efficiency</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="font-bold text-sm">{category.visual.data.efficiency}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Uptime</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                    <span className="font-bold text-sm">{category.visual.data.uptime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cost Reduction</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <span className="font-bold text-sm">{category.visual.data.costReduction}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">PRODUCTS</p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Connect your business, technology, and growth.
            </h2>
          </div>

          {/* Sticky Category Tabs - Hidden on Mobile */}
          <div 
            ref={tabsRef}
            className="hidden md:block sticky top-16 z-50 bg-white py-3 mb-8 md:mb-12 border-b border-gray-200"
          >
            <div className="flex w-full bg-gray-100 rounded-lg p-1">
              {productCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => scrollToCategory(index)}
                  className={`relative flex-1 px-2 sm:px-4 md:px-6 py-2 md:py-3 rounded-md font-medium transition-all duration-300 text-xs sm:text-sm md:text-base ${
                    activeCategory === index
                      ? 'text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeCategory === index && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 ${category.color} rounded-md`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base md:text-lg">{category.icon}</span>
                    <span className="hidden sm:inline">{category.shortName}</span>
                    <span className="sm:hidden">{category.shortName.charAt(0)}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* All Category Content - Show All Products */}
          <div className="space-y-16 md:space-y-24">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                ref={(el) => { categoryRefs.current[index] = el; }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-8 md:py-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                  {/* Left Panel - Text Content */}
                  <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                      <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                        {category.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">
                      {category.heading}
                    </h3>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-inter">
                      {category.subheading}
                    </p>
                    
                            <Link 
                              href="/services" 
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                            >
                              Learn more
                              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-2 md:px-3 py-1 text-xs md:text-sm font-medium ${category.bgColor} text-gray-700 rounded-full`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Panel - Visual Content */}
                  <div className="flex justify-center order-1 lg:order-2">
                    {renderVisual(category)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ProductsShowcase;
