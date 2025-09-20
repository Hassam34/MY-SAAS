'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileServicesMenu from './MobileServicesMenu';

export default function MobileServices() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
    <div>
      <div className="flex items-center justify-between">
        <Link
          href="/services"
          className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium flex-1"
          onClick={handleLinkClick}
        >
          Services
        </Link>
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="px-3 py-2 text-gray-400 hover:text-gray-600"
          aria-expanded={isServicesOpen}
        >
          <svg
            className={`h-4 w-4 transform transition-transform ${
              isServicesOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {isServicesOpen && (
        <div className="mt-2 bg-gray-50 rounded">
          <MobileServicesMenu />
        </div>
      )}
    </div>
  );
}
