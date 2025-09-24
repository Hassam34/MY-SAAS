'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Transform your business with",
    subtitle: "AI & Machine Learning",
    description: "Leverage cutting-edge artificial intelligence and machine learning technologies to automate processes, gain insights from data, and create intelligent solutions that drive growth and efficiency.",
    backgroundImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    primaryButtonText: "Explore AI Solutions",
    primaryButtonLink: "/services/ai-machine-learning",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "/services"
  },
  {
    id: 2,
    title: "The backbone of your",
    subtitle: "digital business",
    description: "As an industry pioneer and one of the world's most experienced web development teams, MIRSSA TECH LTD offers both public and private web solutions - a perfect combination of flexibility and security for global enterprises.",
    backgroundImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    primaryButtonText: "View Our Work",
    primaryButtonLink: "/portfolio",
    secondaryButtonText: "Get Started",
    secondaryButtonLink: "/contact"
  },
  {
    id: 3,
    title: "Unlock the power of",
    subtitle: "Data Analytics",
    description: "Turn your data into actionable insights with our advanced analytics solutions. Make informed decisions, identify opportunities, and optimize your business performance with data-driven strategies.",
    backgroundImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    primaryButtonText: "See Analytics",
    primaryButtonLink: "/services/data-analytics",
    secondaryButtonText: "Get Started",
    secondaryButtonLink: "/contact"
  },
  {
    id: 4,
    title: "Build the future with",
    subtitle: "Enterprise Solutions",
    description: "Scale your business with robust, scalable enterprise solutions designed to handle complex workflows, integrate seamlessly with existing systems, and support your growth ambitions.",
    backgroundImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    primaryButtonText: "View Solutions",
    primaryButtonLink: "/services/enterprise-solutions",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images and handle loading states
  useEffect(() => {
    console.log('Starting to load images...');
    slides.forEach((slide, index) => {
      console.log(`Loading slide ${index + 1}:`, slide.backgroundImage);
      const img = new Image();
      img.onload = () => {
        console.log('✅ Image loaded successfully:', slide.backgroundImage);
      };
      img.onerror = (error) => {
        console.log('❌ Image failed to load:', slide.backgroundImage, error);
      };
      img.src = slide.backgroundImage;
    });
    setImagesLoaded(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Loading indicator */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-gray-900">
          <div className="flex flex-col items-center space-y-4">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <div className="text-white text-lg font-medium">Loading </div>
          </div>
        </div>
      )}
      
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              width: '100%',
              // Fallback gradient
              backgroundColor: index === 0 ? '#667eea' : 
                             index === 1 ? '#f093fb' : 
                             index === 2 ? '#4facfe' : '#43e97b'
            }}
          >
            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className={`transition-all duration-700 ${
              isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins drop-shadow-lg">
                {slides[currentSlide].title}
                <span className="block text-blue-300 drop-shadow-lg">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto mb-8 font-inter drop-shadow-md">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={slides[currentSlide].primaryButtonLink}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-poppins transform hover:scale-105"
                >
                  {slides[currentSlide].primaryButtonText}
                </Link>
                <Link 
                  href={slides[currentSlide].secondaryButtonLink}
                  className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 font-poppins transform hover:scale-105"
                >
                  {slides[currentSlide].secondaryButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-blue-500 transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div> */}
    </section>
  );
}
