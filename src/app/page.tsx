import type { Metadata } from "next";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import ServicesInfographic from "../components/ServicesInfographic";
import TrustedBy from "../components/TrustedBy";
import FeaturesSlider from "../components/FeaturesSlider";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Digital Transformation & Technology Solutions",
  description: "MIRSSA TECH LTD is a leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions. Transform your business with cutting-edge technology.",
  keywords: [
    "digital transformation",
    "AI machine learning", 
    "data analytics",
    "web development",
    "mobile app development",
    "enterprise solutions",
    "business automation",
    "technology consulting",
    "MIRSSA TECH"
  ],
  openGraph: {
    title: "MIRSSA TECH LTD - Digital Transformation & Technology Solutions",
    description: "Leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions.",
    images: ["/mirssa_tech.png"],
  },
  twitter: {
    title: "MIRSSA TECH LTD - Digital Transformation & Technology Solutions", 
    description: "Leading digital transformation company offering AI/ML, data analytics, web development, mobile apps, and enterprise solutions.",
    images: ["/mirssa_tech.png"],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Slider Section */}
      <ScrollAnimation direction="fade" duration={0.8}>
        <HeroSlider />
      </ScrollAnimation>

      {/* Services Infographic Section */}
      <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
        <ServicesInfographic />
      </ScrollAnimation>

      {/* Trusted By Section */}
      <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
        <TrustedBy />
      </ScrollAnimation>

      {/* Features Slider Section */}
      <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
        <FeaturesSlider />
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
        <section className="py-20 bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
              Ready to build your next project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-inter">
              Let&apos;s discuss your requirements and create something amazing together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 font-poppins"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
}
