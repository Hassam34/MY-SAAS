'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Client {
  id: string;
  name: string;
  logo: string;
  logoUrl: string;
  alt: string;
  caseStudyUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  };
}

const clients: Client[] = [
  {
    id: '1',
    name: 'Knight Commercial',
    logo: 'KNIGHT',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070cdf4199d406174f075_knight-p-800-1.png',
    alt: 'knight commercial logo',
    caseStudyUrl: '/case-study/knight-commercial',
    testimonial: {
      quote: "They adapted really well. It was 100 times smoother than I ever imagined.",
      author: "Jason Chenoweth",
      position: "CFO & CEO",
      company: "Green Mechanical",
      avatar: '/images/testimonials/jason-chenoweth.jpg'
    }
  },
  {
    id: '2',
    name: 'Ramjack West',
    logo: 'RAMJACK',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070cdea6bba6a40631f3d_ramjack-2.png',
    alt: 'ramjack west logo gray black dark',
    caseStudyUrl: '/case-study/ramjack-west',
    testimonial: {
      quote: "Outstanding technical expertise and project management. They delivered beyond our expectations.",
      author: "Sarah Johnson",
      position: "Project Manager",
      company: "Ramjack West",
      avatar: '/images/testimonials/sarah-johnson.jpg'
    }
  },
  {
    id: '3',
    name: 'WJ O\'Neil',
    logo: 'WO',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/Vector.png',
    alt: 'wjo w j oneil logo dark',
    caseStudyUrl: '/case-study/wj-oneil',
    testimonial: {
      quote: "I was set in my ways, but I love it. Everything we were told was going to work works.",
      author: "Judy Marasco",
      position: "Assistant Controller",
      company: "WJ O'Neil",
      avatar: '/images/testimonials/judy-marasco.jpg'
    }
  },
  {
    id: '4',
    name: 'Green Mechanical Construction',
    logo: 'GREEN',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2024/08/ChatGPT-Image-Apr-24-2025-11_19_51-PM-3-1.png',
    alt: 'green mechanical',
    caseStudyUrl: '/case-study/green-mechanical',
    testimonial: {
      quote: "Professional, reliable, and innovative solutions that exceeded our business goals.",
      author: "David Kaufman",
      position: "Founder & CEO",
      company: "Green Mechanical",
      avatar: '/images/testimonials/david-kaufman.jpg'
    }
  },
  {
    id: '5',
    name: 'IBCC Island Building',
    logo: 'IBCC',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070cc7aa75f6a7dc7517b_inland-1.png',
    alt: 'ibcc logo inland logo dark',
    caseStudyUrl: '/case-study/ibcc-island-building',
    testimonial: {
      quote: "Their mobile app solution streamlined our field operations significantly.",
      author: "Lisa Thompson",
      position: "Field Operations Manager",
      company: "IBCC Island Building",
      avatar: '/images/testimonials/lisa-thompson.jpg'
    }
  },
  {
    id: '6',
    name: 'Kaufman Lynn Construction',
    logo: 'KL',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/05/dark.png',
    alt: 'kaufman lynn construction logo dark',
    caseStudyUrl: '/case-study/kaufman-lynn',
    testimonial: {
      quote: "Exceptional data analytics platform that gave us insights we never had before.",
      author: "Carlos Almendariz",
      position: "Founder",
      company: "Kaufman Lynn Construction",
      avatar: '/images/testimonials/carlos-almendariz.jpg'
    }
  },
  {
    id: '7',
    name: 'American Roofing & Metal',
    logo: 'AR',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070cd1320098e6ec8243d_amr-p-500-1.png',
    alt: 'american roofing logo dark',
    caseStudyUrl: '/case-study/american-roofing',
    testimonial: {
      quote: "The AI implementation helped us optimize our manufacturing processes by 40%.",
      author: "Jennifer Lee",
      position: "CTO",
      company: "American Roofing & Metal",
      avatar: '/images/testimonials/jennifer-lee.jpg'
    }
  },
  {
    id: '8',
    name: 'Perry McCall Construction',
    logo: 'PM',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070cdc8b0a18c35ae5825_perrymccall-p-500-1.png',
    alt: 'perry mccall logo dark',
    caseStudyUrl: '/case-study/perry-mccall',
    testimonial: {
      quote: "Outstanding enterprise solution that integrated seamlessly with our existing systems.",
      author: "Robert Chen",
      position: "IT Director",
      company: "Perry McCall",
      avatar: '/images/testimonials/robert-chen.jpg'
    }
  },
  {
    id: '9',
    name: 'Truebeck Construction',
    logo: 'TRUEBECK',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070ccd19641ced6a412f2_truebeck-p-800-1.png',
    alt: 'truebeck logo dark',
    caseStudyUrl: '/case-study/truebeck',
    testimonial: {
      quote: "The digital transformation exceeded all our expectations and improved our efficiency.",
      author: "Maria Garcia",
      position: "Operations Manager",
      company: "Truebeck",
      avatar: '/images/testimonials/maria-garcia.jpg'
    }
  },
  {
    id: '10',
    name: 'Almendariz Consulting',
    logo: 'ACT',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/acilogo_hor_all_clr_no-border-1.png',
    alt: 'almendariz consulting logo dark',
    caseStudyUrl: '/case-study/almendariz',
    testimonial: {
      quote: "Exceptional data analytics platform that gave us insights we never had before.",
      author: "Carlos Almendariz",
      position: "Founder",
      company: "Almendariz Consulting",
      avatar: '/images/testimonials/carlos-almendariz.jpg'
    }
  },
  {
    id: '11',
    name: 'Modular Inc.',
    logo: 'A-1',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/03/662070cc4db8ffd71d56afe9_a1-1.png',
    alt: 'a-1 modular logo dark',
    caseStudyUrl: '/case-study/modular',
    testimonial: {
      quote: "The AI implementation helped us optimize our manufacturing processes by 40%.",
      author: "Jennifer Lee",
      position: "CTO",
      company: "Modular Inc.",
      avatar: '/images/testimonials/jennifer-lee.jpg'
    }
  },
  {
    id: '12',
    name: 'MECO',
    logo: 'MECO',
    logoUrl: 'https://mitercms.wpenginepowered.com/wp-content/uploads/2025/04/meco-llc-logo-dark-1.png',
    alt: 'Meco Llc Logo Dark',
    caseStudyUrl: '/case-study/meco',
    testimonial: {
      quote: "Outstanding enterprise solution that integrated seamlessly with our existing systems.",
      author: "Robert Chen",
      position: "IT Director",
      company: "MECO",
      avatar: '/images/testimonials/robert-chen.jpg'
    }
  }
];

// Animated Counter Component
const AnimatedCounter = ({ targetNumber }: { targetNumber: number }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.floor(increment * currentStep), targetNumber);
      setDisplayNumber(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayNumber(targetNumber);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return <span>{displayNumber.toLocaleString()}</span>;
};

export default function TrustedBy() {

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto w-full px-5 md:px-10">
        <div className=" absolute top-0 bottom-0 left-5 md:left-10"></div>
        <div className=" absolute top-0 right-5 bottom-0 md:right-10"></div>
        <div className="relative mx-auto max-w-[1360px] pt-12 pb-10 text-center">
          <div className="font-heading px-2 text-2xl sm:text-3xl font-bold leading-[1.3] tracking-[0.1em] uppercase text-gray-900">
            <span>Trusted by </span>
            <div className="rolling-stat whitespace-nowrap inline-block will-change-transform !text-midnight">
              <AnimatedCounter targetNumber={700} />
            </div>
            <span>+ contractors</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="pattern-lines border-borderGrey absolute top-0 bottom-[-1px] left-[-100%] w-full border-l">
            <div className=" absolute top-0 left-0 w-full"></div>
            <div className=" absolute right-0 bottom-0.25 w-full"></div>
          </div>
          <div className="pattern-lines border-borderGrey absolute top-[0px] right-[-100%] bottom-[-1px] w-full border-r">
            <div className=" absolute top-0 left-0 w-full"></div>
            <div className=" absolute right-0 bottom-0.25 w-full"></div>
          </div>
          <div className="border-gray-200 relative grid grid-cols-3 overflow-hidden border-2 md:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className={`relative flex items-center justify-center px-3 py-7.5 lg:h-24.5 lg:px-8 border-gray-200 border-r-2 ${
                  index < 6 ? 'border-b-2' : ''
                }`}
              >
                <div className="pointer-events-none max-w-[163px] h-6 sm:h-6">
                  <Image
                    alt={client.alt}
                    src={client.logoUrl}
                    width={26}
                    height={78}
                    className="h-full w-auto object-contain object-left"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 90vw"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
