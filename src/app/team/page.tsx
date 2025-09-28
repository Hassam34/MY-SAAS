"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollAnimation from "../../components/ScrollAnimation";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
}

// Team member component with image fallback
const TeamMember = ({ member, index }: { member: TeamMember; index: number }) => {
  const [imageError, setImageError] = useState(false);
  
  // Alternating layout: even index = image left, odd index = image right
  const isImageLeft = index % 2 === 0;
  
  // Background colors for images
  const imageBgColors = [
    'bg-green-100', // Light green
    'bg-purple-100', // Light purple  
    'bg-green-100', // Light green
    'bg-blue-100'   // Light blue
  ];
  
  const textBgColor = 'bg-gray-50';

  return (
    <ScrollAnimation 
      direction={isImageLeft ? "left" : "right"} 
      delay={index * 0.2} 
      duration={0.8}
      distance={100}
    >
      <div className="w-full">
        <div className={`flex flex-col lg:flex-row items-center min-h-[400px] ${textBgColor}`}>
          {/* Profile Image - Conditionally positioned */}
          <div className={`w-full lg:w-1/2 h-96 lg:h-auto ${imageBgColors[index % imageBgColors.length]} flex items-center justify-center p-8 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="w-80 h-80 rounded-lg overflow-hidden bg-white shadow-lg">
              {!imageError ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
              )}
            </div>
          </div>
          
          {/* Content - Conditionally positioned */}
          <div className={`w-full lg:w-1/2 p-12 ${textBgColor} flex flex-col justify-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <h3 className="text-4xl font-bold text-blue-900 mb-4 font-poppins">
              {member.name}
            </h3>
            <p className="text-xl text-blue-700 font-semibold mb-6 font-inter">
              {member.title}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-8 font-inter">
              {member.bio}
            </p>
            
            {/* Contact Link */}
            <a 
              href={`mailto:${member.email}`}
              className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors font-semibold text-lg"
            >
              Reach out to {member.name.split(' ')[0]} →
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

// Leadership team data
const leadershipTeam = [
  {
    name: "Muhamad Saleh",
    title: "Chairman, Board of Directors",
    bio: "Prior to founding MIRSSA TECH, Muhamad spent two decades in technology consulting, most recently as a Managing Director advising global clients in digital transformation. He led MIRSSA TECH's growth strategy, expanding our services 7x in 3 years. He has worked with some of the region's fast-growing technology companies and has been instrumental in developing our comprehensive digital solutions portfolio.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    linkedin: "https://linkedin.com/in/saleh",
    email: "saleh@mirssatech.com"
  },
  {
    name: "Muhammad Hassam Yahya",
    title: "Chief Executive Officer",
    bio: "Hassam brings nearly 2 decades of expertise in Technology Leadership, Strategic Planning, Digital Innovation, Operations, and Team Management. With a strong track record of building innovative teams and driving impactful initiatives, Hassam is committed to solving some of the world's most critical challenges in digital transformation and technology adoption. He is also a certified technology strategist and has led multiple successful digital transformation projects across various industries.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    linkedin: "https://linkedin.com/in/hassamyahya",
    email: "hassam@mirssatech.com"
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Health & Public Sector Senior Advisor",
    bio: "A leading authority in Technology Innovation in Pakistan, Dr. Sarah Johnson has more than 28 years of diverse experience in public and private technology sectors. Her expertise includes program management, digital transformation initiatives, public sector technology implementations, team building & leadership, project proposal development, execution, and monitoring. She has been instrumental in developing our health tech and public sector solutions.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@mirssatech.com"
  },
  {
    name: "Michael Chen",
    title: "Senior Advisor",
    bio: "Michael is a Senior Advisor at MIRSSA TECH, having 20+ years of experience in the tech industry. Before joining MIRSSA TECH he was the Chief Executive Officer at Tech Solutions Inc. and prior to that served as the Chief Commercial Officer of Global Tech Corp. Having experience in enterprise solutions and business technology, he is passionate about building scalable and reliable software systems that can innovate various business sectors.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael@mirssatech.com"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimation direction="fade" duration={0.8}>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                OUR LEADERSHIP
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-inter">
                Leading today to build tomorrow
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Leadership Team */}
      <section className="bg-white">
        <div className="mx-auto max-w-full">
          <div>
            {leadershipTeam.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Got a bold vision for change?
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-inter">
              A challenge that keeps you up at night? Let's join forces and turn your ideas into solutions that leave a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors font-poppins text-lg"
              >
                Reach out
              </Link>
              <a 
                href="mailto:contact@mirssatech.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors font-poppins text-lg"
              >
                contact@mirssatech.com
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}