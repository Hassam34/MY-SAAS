'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

interface Service {
  id: number;
  title: string;
  icon: string;
  color: string;
  link: string;
}

const ServicesInfographic = () => {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Map the actual services from services.json to the infographic format
  const services = [
    {
      id: 1,
      title: "Do you want to transform<br />your business digitally?",
      icon: "chart",
      color: "#8b5cf6",
      link: "/services/digital-transformation"
    },
    {
      id: 2,
      title: "Do you want to harness<br />AI & Machine Learning?",
      icon: "brain",
      color: "#3b82f6",
      link: "/services/ai-machine-learning"
    },
    {
      id: 3,
      title: "Do you want to unlock<br />data insights?",
      icon: "analytics",
      color: "#10b981",
      link: "/services/data-analytics"
    },
    {
      id: 4,
      title: "Do you want to build<br />mobile solutions?",
      icon: "mobile",
      color: "#f59e0b",
      link: "/services/enterprise-mobility"
    },
    {
      id: 5,
      title: "Do you want to explore<br />emerging technologies?",
      icon: "rocket",
      color: "#ef4444",
      link: "/services/innovation-emerging-tech"
    },
    {
      id: 6,
      title: "Do you want to automate<br />business processes?",
      icon: "settings",
      color: "#06b6d4",
      link: "/services/business-solutions"
    },
    {
      id: 7,
      title: "Do you want to boost<br />your digital marketing?",
      icon: "marketing",
      color: "#84cc16",
      link: "/services/digital-marketing"
    }
  ];

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    // Start auto-rotation after component mounts
    const timer = setTimeout(() => {
      setIsAutoRotating(true);
    }, 1000); // 1 second delay to ensure smooth start

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating || !isMounted) return;

    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // 3 seconds per service

    return () => clearInterval(interval);
  }, [isAutoRotating, services.length, isMounted]);

  // Set current service when auto-rotating
  useEffect(() => {
    if (isAutoRotating && isMounted) {
      setHoveredService(services[currentServiceIndex]);
    }
  }, [currentServiceIndex, isAutoRotating, isMounted]);

  // Handle manual hover
  const handleServiceHover = (service: Service | null) => {
    if (!isMounted) return;
    
    if (service) {
      setIsAutoRotating(false);
      setHoveredService(service);
    } else {
      setIsAutoRotating(true);
    }
  };

  const getServiceIcon = (iconType: string) => {
    const iconProps = {
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (iconType) {
      case 'chart':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M3 3v18h18"/>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
          </svg>
        );
      case 'brain':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-4.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-4.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
          </svg>
        );
      case 'analytics':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        );
      case 'rocket':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
        );
      case 'settings':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        );
      case 'marketing':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        );
      default:
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
        );
    }
  };

  // Pre-calculate segment paths with fixed precision to ensure server/client consistency
  const segmentPaths = [
    "M 400,400 L 291.52906522061039,174.75778302439528 A 250,250 0 0,1 508.47093477938961,174.75778302439525 Z",
    "M 400,400 L 508.47093477938961,174.75778302439525 A 250,250 0 0,1 643.73197804545589,344.36976651092141 Z",
    "M 400,400 L 643.73197804545589,344.36976651092141 A 250,250 0 0,1 595.45787061700742,555.87245046468342 Z",
    "M 400,400 L 595.45787061700753,555.87245046468331 A 250,250 0 0,1 400.00000000000000,650.00000000000000 Z",
    "M 400,400 L 400.00000000000000,650.00000000000000 A 250,250 0 0,1 204.54212938299258,555.87245046468342 Z",
    "M 400,400 L 204.54212938299258,555.87245046468342 A 250,250 0 0,1 156.26802195454414,344.36976651092124 Z",
    "M 400,400 L 156.26802195454405,344.36976651092152 A 250,250 0 0,1 291.52906522061045,174.75778302439525 Z"
  ];

  // Pre-calculate icon positions with fixed precision to ensure server/client consistency
  const iconPositions = [
    { x: 400.00000000000000, y: 220.00000000000000 },
    { x: 540.72966684424534, y: 287.77183566542794 },
    { x: 575.48702419272831, y: 440.05376811213659 },
    { x: 478.09907304116052, y: 562.17439622243546 },
    { x: 321.90092695883948, y: 562.17439622243546 },
    { x: 224.51297580727174, y: 440.05376811213659 },
    { x: 259.27033315575466, y: 287.77183566542800 }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <div className="text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              The backbone of your business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
              As an industry pioneer and one of the world&apos;s most experienced technology providers, 
              MIRSSA TECH offers both public and private connectivity solutions - a perfect combination 
              of flexibility and security for global enterprises.
            </p>
          </div>
        </ScrollAnimation>

        {/* Desktop Circle View */}
        <div className="hidden md:flex justify-center ">
          <div className="relative w-full max-w-6xl">
            <svg 
              width="100%" 
              height="800" 
              viewBox="0 0 800 800" 
              className="drop-shadow-lg "
            >
              {/* Service segments - properly positioned complete circle */}
              {services.map((service, index) => {
                const isHovered = hoveredService?.id === service.id;
                const isCurrentlyActive = index === currentServiceIndex && isAutoRotating && isMounted;
                
                const iconX = iconPositions[index].x;
                const iconY = iconPositions[index].y;
                const segmentPath = segmentPaths[index];
                
                return (
                  <g key={service.id}>
                    {/* Segment */}
                    <path
                      d={segmentPath}
                      fill={isHovered || isCurrentlyActive ? service.color : '#f8f9fa'}
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-500 hover:stroke-gray-300"
                      style={{
                        filter: isHovered || isCurrentlyActive ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' : 'none',
                        transform: isHovered || isCurrentlyActive ? 'scale(1.02)' : 'scale(1)',
                        transformOrigin: '400px 400px',
                      }}
                      onMouseEnter={() => handleServiceHover(service)}
                      onMouseLeave={() => handleServiceHover(null)}
                      onClick={() => window.location.href = service.link}
                    />
                    
                    {/* Service icon */}
                    <g
                      transform={`translate(${iconX}, ${iconY})`}
                      className="pointer-events-none"
                    >
                      <circle
                        cx="0"
                        cy="0"
                        r="25"
                        fill={isHovered || isCurrentlyActive ? 'white' : service.color}
                        stroke={isHovered || isCurrentlyActive ? service.color : 'white'}
                        strokeWidth="2"
                        className="transition-all duration-500"
                        style={{
                          transform: isHovered || isCurrentlyActive ? 'scale(1.1)' : 'scale(1)',
                        }}
                      />
                      <foreignObject x="-10" y="-10" width="20" height="20">
                        <div 
                          className="flex items-center justify-center h-full transition-all duration-500"
                          style={{ 
                            color: isHovered || isCurrentlyActive ? service.color : 'white',
                            transform: isHovered || isCurrentlyActive ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          {getServiceIcon(service.icon)}
                        </div>
                      </foreignObject>
                    </g>
                    
                    {/* Service title - positioned well outside circle */}
                    <foreignObject 
                      x={iconX + (iconX > 400 ? 250 : -250) - 100} 
                      y={iconY - 80} 
                      width="200" 
                      height="80"
                    >
                      <div 
                        className={`text-xs font-medium transition-all duration-500 text-center ${
                          isHovered || isCurrentlyActive ? 'font-bold' : 'font-normal'
                        }`}
                        style={{
                          color: isHovered || isCurrentlyActive ? service.color : '#6b7280',
                          opacity: isHovered || isCurrentlyActive ? 1 : 0.8,
                          transform: isHovered || isCurrentlyActive ? 'scale(1.05)' : 'scale(1)',
                          marginTop: [2,4, 5, 6, 3,7].includes(service.id) ? '20px' : '-3px',
                        }}
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                    </foreignObject>
                    
                   
                  </g>
                );
              })}
              
              {/* Center circle */}
              <circle
                cx="400"
                cy="400"
                r="80"
                fill="white"
                stroke="#e5e7eb"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              
              {/* Mirssa Tech Logo */}
              <foreignObject x="320" y="320" width="160" height="160">
                <div className="flex items-center justify-center h-full w-full">
                  <img 
                    src="/mirssa_tech.png" 
                    alt="Mirssa Tech Logo" 
                    className="w-32 h-20 object-contain"
                  />
                </div>
              </foreignObject>
              
              {/* Center text */}
             
            </svg>
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden">
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative h-96 overflow-hidden">
              {services.map((service, index) => {
                const isCurrentlyActive = index === currentServiceIndex && isAutoRotating && isMounted;
                const isHovered = hoveredService?.id === service.id;
                
                return (
                  <div
                    key={service.id}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      isCurrentlyActive || isHovered
                        ? 'opacity-100 scale-100 translate-x-0'
                        : 'opacity-0 scale-95 translate-x-full'
                    }`}
                    style={{
                      zIndex: isCurrentlyActive || isHovered ? 10 : 1,
                    }}
                    onMouseEnter={() => handleServiceHover(service)}
                    onMouseLeave={() => handleServiceHover(null)}
                    onClick={() => window.location.href = service.link}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col justify-center items-center text-center border-2 border-gray-100 hover:border-gray-200 transition-all duration-300">
                      {/* Service Icon */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                        style={{ 
                          backgroundColor: service.color,
                          transform: isCurrentlyActive || isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                      >
                        <div 
                          className="text-white"
                          style={{ 
                            transform: isCurrentlyActive || isHovered ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          {getServiceIcon(service.icon)}
                        </div>
                      </div>
                      
                      {/* Service Title */}
                      <h3 
                        className="text-lg font-semibold text-gray-900 mb-3 leading-tight"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                      
                      {/* Read More Button */}
                      <button
                        className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: service.color,
                          color: 'white',
                          boxShadow: isCurrentlyActive || isHovered 
                            ? `0 8px 25px ${service.color}40` 
                            : '0 4px 15px rgba(0,0,0,0.1)',
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Mobile Progress Indicators */}
            {/* <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentServiceIndex && isAutoRotating && isMounted
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    setCurrentServiceIndex(index);
                    setHoveredService(services[index]);
                  }}
                />
              ))}
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <div className="text-center mt-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors font-poppins text-base"
              >
                Contact us today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors font-poppins text-base"
              >
                Find my solution
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesInfographic;
