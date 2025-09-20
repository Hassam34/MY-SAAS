'use client';

import { useState } from 'react';
import Link from 'next/link';
import servicesData from '../data/services.json';

interface SubService {
  name: string;
  href: string;
}

interface Service {
  name: string;
  href: string;
  subServices?: SubService[];
}

export default function MobileServicesMenu() {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  // Convert JSON data to component format - now includes all services
  const allServices: Service[] = servicesData.serviceCategories.map(category => ({
    name: category.name,
    href: `/services/${category.slug}`,
    subServices: category.services.map(service => ({
      name: service.name,
      href: `/services/${category.slug}/${service.slug}`
    }))
  }));

  const toggleService = (serviceName: string) => {
    setExpandedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(name => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      const button = document.querySelector('[aria-controls="mobile-menu"]');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    }
  };

  return (
    <div className="px-2 space-y-0.5">
      {allServices.map((service, index) => (
        <div key={`${service.name}-${index}`} className="border-b border-gray-100 last:border-b-0">
          <div className="flex items-center justify-between">
            <Link
              href={service.href}
              className="text-gray-700 hover:text-blue-600 block px-2 py-2 text-sm font-medium flex-1"
              onClick={handleLinkClick}
            >
              {service.name}
            </Link>
            {service.subServices && service.subServices.length > 0 && (
              <button
                onClick={() => toggleService(service.name)}
                className="px-2 py-2 text-gray-400 hover:text-gray-600"
                aria-label={`Toggle ${service.name} submenu`}
              >
                <svg
                  className={`h-3 w-3 transform transition-transform ${
                    expandedServices.includes(service.name) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
          {service.subServices && 
           service.subServices.length > 0 && 
           expandedServices.includes(service.name) && (
            <div className="pb-2">
              <div className="pl-4 space-y-1 bg-gray-50 rounded ml-2 mr-1 py-2">
                {service.subServices.map((subService) => (
                  <Link
                    key={subService.name}
                    href={subService.href}
                    className="text-gray-600 hover:text-blue-600 block px-3 py-1 text-xs"
                    onClick={handleLinkClick}
                  >
                    • {subService.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}