'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import servicesData from '../data/services.json';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter with slight delay to prevent accidental triggers
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsOpen(true);
  };

  // Handle mouse leave with delay to allow moving to dropdown
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Handle service link click to close dropdown
  const handleServiceClick = () => {
    setIsOpen(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  // Get main service categories (first 4)
  const mainCategories = servicesData.serviceCategories.slice(0, 4);
  
  // Additional services for the bottom section (remaining categories)
  const additionalServices = servicesData.serviceCategories.slice(4).map(category => ({
    name: category.name,
    color: category.color,
    href: `/services/${category.slug}`,
    services: category.services.slice(0, 3).map(service => ({
      name: service.name,
      href: `/services/${category.slug}/${service.slug}`
    }))
  }));

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
        aria-expanded={isOpen}
      >
        Services
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-6xl bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 mx-2">
          <div className="p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {mainCategories.map((category) => (
                <div key={category.id} className={`border-l-4 ${category.color} pl-3 md:pl-4`}>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${category.slug}/${service.slug}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                        onClick={handleServiceClick}
                      >
                        <span className="text-gray-400 group-hover:text-blue-500 mr-2 flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <span className="text-xs">{service.name}</span>
                      </Link>
                    ))}
                    {category.services.length > 3 && (
                      <Link
                        href={`/services/${category.slug}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group text-xs font-medium"
                        onClick={handleServiceClick}
                      >
                        <span className="mr-2">→</span>
                        View All {category.name}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom section with additional services */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {additionalServices.map((category, index) => (
                  <div key={index} className={`border-l-4 ${category.color} pl-3 md:pl-4`}>
                    <Link
                      href={category.href}
                      className="block hover:text-blue-600 transition-colors"
                      onClick={handleServiceClick}
                    >
                      <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                    </Link>
                  <div className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                    <Link
                          key={serviceIndex}
                          href={service.href}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                      onClick={handleServiceClick}
                    >
                      <span className="text-gray-400 group-hover:text-blue-500 mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                          <span className="text-xs">{service.name}</span>
                    </Link>
                      ))}
                </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}