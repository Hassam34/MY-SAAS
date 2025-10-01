'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function TeamDropdown() {
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

  // Handle team link click to close dropdown
  const handleTeamClick = () => {
    setIsOpen(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  // Team sections data
  const teamSections = [
    {
      title: "Leadership Team",
      color: "border-blue-500",
      items: [
        { name: "Executive Leadership", href: "/team#leadership" },
        { name: "Board of Directors", href: "/team#board" },
        { name: "Advisory Board", href: "/team#advisory" }
      ]
    },
    {
      title: "Technical Team",
      color: "border-green-500",
      items: [
        { name: "Engineering Team", href: "/team#engineering" },
        { name: "Data Science", href: "/team#data-science" },
        { name: "DevOps & Infrastructure", href: "/team#devops" }
      ]
    },
    {
      title: "Business Team",
      color: "border-purple-500",
      items: [
        { name: "Sales & Marketing", href: "/team#sales-marketing" },
        { name: "Customer Success", href: "/team#customer-success" },
        { name: "Operations", href: "/team#operations" }
      ]
    },
    {
      title: "Support Team",
      color: "border-orange-500",
      items: [
        { name: "Technical Support", href: "/team#support" },
        { name: "HR & People", href: "/team#hr" },
        { name: "Finance & Admin", href: "/team#finance" }
      ]
    }
  ];

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
        Our Team
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
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-4xl bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 mx-2">
          <div className="p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {teamSections.map((section, index) => (
                <div key={index} className={`border-l-4 ${section.color} pl-3 md:pl-4`}>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                        onClick={handleTeamClick}
                      >
                        <span className="text-gray-400 group-hover:text-blue-500 mr-2 flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <span className="text-xs">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom section with main team page link */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <Link
                  href="/team"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group text-sm font-medium"
                  onClick={handleTeamClick}
                >
                  <span className="mr-2">→</span>
                  View Full Team Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
