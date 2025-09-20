'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import servicesData from '../data/services.json';

interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  services: Array<{
    name: string;
    description: string;
  }>;
}

const ServicesCircle = () => {
  const [hoveredService, setHoveredService] = useState<ServiceCategory | null>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const { serviceCategories } = servicesData;
  
  const ROTATION_DURATION = 4000; // 4 seconds per service

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % serviceCategories.length);
          return 0;
        }
        return prevProgress + (100 / (ROTATION_DURATION / 50)); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoRotating, serviceCategories.length]);

  // Set current service when auto-rotating
  useEffect(() => {
    if (isAutoRotating) {
      setHoveredService(serviceCategories[currentServiceIndex]);
    }
  }, [currentServiceIndex, isAutoRotating, serviceCategories]);

  // Handle manual hover
  const handleServiceHover = (service: ServiceCategory | null) => {
    if (service) {
      setIsAutoRotating(false);
      setHoveredService(service);
    } else {
      setIsAutoRotating(true);
      setProgress(0);
    }
  };

  const getColorFromBorderClass = (borderClass: string) => {
    const colorMap: { [key: string]: string } = {
      'border-l-purple-500': '#8b5cf6',
      'border-l-blue-500': '#3b82f6',
      'border-l-green-500': '#10b981',
      'border-l-orange-500': '#f97316',
      'border-l-red-500': '#ef4444',
      'border-l-indigo-500': '#6366f1',
      'border-l-pink-500': '#ec4899',
    };
    return colorMap[borderClass] || '#3b82f6';
  };

  // Create SVG path for each segment
  const createSegmentPath = (index: number, total: number, radius: number) => {
    const segmentAngle = 360 / total;
    const startAngle = index * segmentAngle - 90; // Start from top
    const endAngle = (index + 1) * segmentAngle - 90;
    
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const largeArcFlag = segmentAngle > 180 ? 1 : 0;
    
    const x1 = Math.cos(startRad) * radius;
    const y1 = Math.sin(startRad) * radius;
    const x2 = Math.cos(endRad) * radius;
    const y2 = Math.sin(endRad) * radius;
    
    return `M 0,0 L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
  };

  // Get position for service icon
  const getIconPosition = (index: number, total: number, radius: number) => {
    const segmentAngle = 360 / total;
    const angle = index * segmentAngle + segmentAngle / 2 - 90; // Middle of segment
    const iconRadius = radius * 0.7; // Position icon at 70% of radius
    const radians = (angle * Math.PI) / 180;
    
    return {
      x: Math.cos(radians) * iconRadius,
      y: Math.sin(radians) * iconRadius,
    };
  };

  // Get SVG icon for each service
  const getServiceIcon = (serviceId: string) => {
    const iconProps = {
      width: "24",
      height: "24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (serviceId) {
      case 'digital-transformation':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        );
      case 'ai-machine-learning':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            <circle cx="15" cy="9" r="2"/>
          </svg>
        );
      case 'data-analytics':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        );
      case 'enterprise-mobility':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        );
      case 'innovation-emerging-tech':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      case 'business-solutions':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        );
      case 'digital-marketing':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M23 7l-7 5 7 5V7z"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
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

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Comprehensive Services
          </h2>
         
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Services Circle - Pie Chart Style */}
          <div className="relative w-full flex justify-center">
            <svg 
              width="100%" 
              height="auto" 
              viewBox="-450 -450 900 900" 
              className="drop-shadow-lg max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
              style={{ aspectRatio: '1/1' }}
            >
              {/* Service segments */}
              {serviceCategories.map((service, index) => {
                const color = getColorFromBorderClass(service.color);
                const isHovered = hoveredService?.id === service.id;
                const isCurrentlyActive = index === currentServiceIndex && isAutoRotating;
                const path = createSegmentPath(index, serviceCategories.length, 250);
                
                return (
                  <g key={service.id}>
                    {/* Segment */}
                    <path
                      d={path}
                      fill={isHovered || isCurrentlyActive ? color : '#ffffff'}
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      className={`cursor-pointer transition-all duration-300 hover:stroke-gray-300`}
                      style={{
                        filter: isHovered || isCurrentlyActive ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' : 'none',
                      }}
                      onMouseEnter={() => handleServiceHover(service)}
                      onMouseLeave={() => handleServiceHover(null)}
                      onClick={() => window.location.href = `/services/${service.slug}`}
                    />
                    
                    {/* Service icon and name */}
                    {(() => {
                      const iconPos = getIconPosition(index, serviceCategories.length, 250);
                      const isTop = iconPos.y < -50;
                      const isBottom = iconPos.y > 50;
                      const isLeft = iconPos.x < -50;
                      const isRight = iconPos.x > 50;
                      
                      return (
                        <g
                          transform={`translate(${iconPos.x}, ${iconPos.y})`}
                          className="pointer-events-none"
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="white"
                            stroke={isHovered || isCurrentlyActive ? color : '#d1d5db'}
                            strokeWidth="2"
                            className="transition-all duration-300"
                          />
                          <foreignObject x="-12" y="-12" width="24" height="24">
                            <div className={`transition-colors duration-300`} style={{ color: isHovered || isCurrentlyActive ? color : '#6b7280' }}>
                              {getServiceIcon(service.id)}
                            </div>
                          </foreignObject>
                          
                          {/* Service name - always visible */}
                          <g className="pointer-events-none">
                            {/* Service name text - always visible */}
                            <text
                              x={isLeft ? -160 : isRight ? 160 : 0}
                              y={isTop ? -130 : isBottom ? 135 : (isLeft || isRight ? 5 : 160)}
                              textAnchor="middle"
                              className={`text-sm transition-all duration-300 ${
                                isHovered || isCurrentlyActive ? 'font-bold' : 'font-medium'
                              }`}
                              fontSize="12"
                              fill={isHovered || isCurrentlyActive ? color : '#6b7280'}
                            >
                              {service.name}
                            </text>
                          </g>
                        </g>
                      );
                    })()}
                  </g>
                );
              })}
              
              {/* Center circle */}
              <circle
                cx="0"
                cy="0"
                r="100"
                fill="white"
                stroke="#e5e7eb"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              
              {/* Center business icon */}
              <foreignObject x="-20" y="-35" width="40" height="30">
                <div className="text-gray-700 flex justify-center">
                  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                </div>
              </foreignObject>
              
              {/* Center text */}
              <text x="0" y="15" textAnchor="middle" className="fill-gray-700 font-bold text-lg" fontSize="16">
                MIRSSA
              </text>
              <text x="0" y="35" textAnchor="middle" className="fill-gray-600 text-sm" fontSize="14">
                TECH
              </text>
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f9fafb" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Service details panel */}
          <div className="w-full lg:w-80 lg:max-w-sm px-4 lg:px-0">
            {hoveredService ? (
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 transition-all duration-300" style={{ borderColor: getColorFromBorderClass(hoveredService.color) }}>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 mr-2 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${getColorFromBorderClass(hoveredService.color)}20` }}>
                    <div className="text-gray-700" style={{ color: getColorFromBorderClass(hoveredService.color) }}>
                      {getServiceIcon(hoveredService.id)}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 font-poppins">
                    {hoveredService.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 font-inter leading-relaxed text-sm">
                  {hoveredService.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2 font-poppins">
                    Available Services:
                  </h4>
                  <ul className="space-y-1">
                    {hoveredService.services.slice(0, 3).map((subService, index) => (
                      <li key={index} className="flex items-center text-gray-600 font-inter text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: getColorFromBorderClass(hoveredService.color) }} />
                        {subService.name}
                      </li>
                    ))}
                    {hoveredService.services.length > 3 && (
                      <li className="text-gray-500 font-inter text-xs md:text-sm">
                        +{hoveredService.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                </div>

                <Link
                  href={`/services/${hoveredService.slug}`}
                  className="inline-flex items-center px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors font-poppins text-xs md:text-sm"
                  style={{ 
                    backgroundColor: getColorFromBorderClass(hoveredService.color),
                    color: 'white'
                  }}
                >
                  Explore Services
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2 font-poppins">
                  Complete Business Solutions
                </h3>
                <p className="text-gray-500 font-inter text-xs md:text-sm">
                  We provide end-to-end technology services to transform your business operations, enhance efficiency, and drive digital innovation across all aspects of your organization.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-full max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-3">
            {/* <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors font-inter"
            >
              {isAutoRotating ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
            </button> */}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full transition-all duration-75 ease-linear"
              style={{
                width: `${progress}%`,
                backgroundColor: hoveredService ? getColorFromBorderClass(hoveredService.color) : '#3b82f6'
              }}
            />
          </div>
        
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 lg:mt-16 px-4">
          <Link
            href="/services"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors font-poppins text-sm md:text-base"
          >
            View All Services
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
