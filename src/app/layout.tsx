import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Logo from "../components/Logo";
import ServicesDropdown from "../components/ServicesDropdown";
import TeamDropdown from "../components/TeamDropdown";
import MobileServices from "../components/MobileServices";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "MIRSSA TECH LTD — Digital Transformation & Technology Solutions",
    template: "%s | MIRSSA TECH LTD",
  },
  description: "Leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions. Transform your business with cutting-edge technology.",
  applicationName: "MIRSSA TECH LTD",
  keywords: [
    "digital transformation",
    "AI machine learning",
    "data analytics",
    "web development",
    "mobile app development",
    "enterprise solutions",
    "business automation",
    "cloud solutions",
    "innovation technology",
    "next.js",
    "react",
    "tailwind",
    "saas",
    "portfolio",
    "agency",
    "MIRSSA TECH",
    "technology consulting",
    "software development",
    "business intelligence",
    "emerging technology"
  ],
  authors: [{ name: "MIRSSA TECH LTD", url: "https://mirssatech.com" }],
  creator: "MIRSSA TECH LTD",
  publisher: "MIRSSA TECH LTD",
  category: "Technology",
  classification: "Business",
  openGraph: {
    type: "website",
    title: "MIRSSA TECH LTD — Digital Transformation & Technology Solutions",
    description: "Leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions. Transform your business with cutting-edge technology.",
    url: "/",
    siteName: "MIRSSA TECH LTD",
    locale: "en_US",
    images: [
      {
        url: "/mirssa_tech.png",
        width: 1200,
        height: 630,
        alt: "MIRSSA TECH LTD - Digital Transformation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIRSSA TECH LTD — Digital Transformation & Technology Solutions",
    description: "Leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions.",
    creator: "@mirssatech",
    images: ["/mirssa_tech.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for faster loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MIRSSA TECH" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* Business information */}
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Rich snippets preparation */}
        <meta property="business:contact_data:country_name" content="United Kingdom" />
        <meta property="business:contact_data:email" content="info@mirssatech.com" />
        <meta property="business:contact_data:website" content="https://mirssatech.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MIRSSA TECH LTD",
              alternateName: "MIRSSA TECH",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/mirssa_tech.png`,
              description: "Leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions.",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                addressCountry: "UK"
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "info@mirssatech.com",
                url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/contact`
              },
              sameAs: [
                "https://twitter.com/mirssatech",
                "https://linkedin.com/company/mirssatech"
              ],
              services: [
                "Digital Transformation",
                "AI & Machine Learning",
                "Data Analytics",
                "Web Development", 
                "Mobile App Development",
                "Enterprise Solutions",
                "Business Automation",
                "Innovation Technology"
              ],
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Transformation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Transformation",
                      description: "Transform your business with cutting-edge digital solutions"
                    }
                  },
                  {
                    "@type": "Offer", 
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Machine Learning",
                      description: "Harness the power of artificial intelligence and machine learning"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service", 
                      name: "Enterprise Data & Analytics",
                      description: "Transform your data into actionable insights"
                    }
                  }
                ]
              }
            }),
          }}
        />
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Logo />
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link href="/" className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </Link>
                  {/* <Link href="/portfolio" className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Portfolio
                  </Link> */}
                  <ServicesDropdown />
                 
                  <Link href="/about" className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    About
                  </Link>
                  <TeamDropdown />
                  <Link href="/contact" className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="hidden md:block">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile menu */}
            <div className="md:hidden hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <Link href="/" className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                  <Link href="/portfolio" className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium">
                    Portfolio
                  </Link>
                  <MobileServices />
                  <Link href="/about" className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium">
                    Contact
                  </Link>
                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        
        {/* Mobile menu script */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
                const mobileMenu = document.getElementById('mobile-menu');
                
                if (mobileMenuButton && mobileMenu) {
                  mobileMenuButton.addEventListener('click', function() {
                    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                    mobileMenu.classList.toggle('hidden');
                  });
                }
              });
            `,
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
