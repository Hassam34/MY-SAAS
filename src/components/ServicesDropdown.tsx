'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import servicesData from '../data/services.json';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
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
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 mx-4">
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {mainCategories.map((category) => (
                <div key={category.id} className={`border-l-4 ${category.color} pl-4 md:pl-6`}>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${category.slug}/${service.slug}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-gray-400 group-hover:text-blue-500 mr-2 md:mr-3 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <span className="text-xs md:text-sm">{service.name}</span>
                      </Link>
                    ))}
                    {category.services.length > 3 && (
                      <Link
                        href={`/services/${category.slug}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group text-xs md:text-sm font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mr-2 md:mr-3">→</span>
                        View All {category.name}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom section with additional services */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {additionalServices.map((category, index) => (
                  <div key={index} className={`border-l-4 ${category.color} pl-4 md:pl-6`}>
                    <Link
                      href={category.href}
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-blue-600 transition-colors"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                    </Link>
                  <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                    <Link
                          key={serviceIndex}
                          href={service.href}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-gray-400 group-hover:text-blue-500 mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                          <span className="text-xs md:text-sm">{service.name}</span>
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