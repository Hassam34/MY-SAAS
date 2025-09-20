import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 50, height = 60 }: LogoProps) {
  return (
    <Link href="/" className={`flex-shrink-0 ${className}`}>
      <div className="group">
        <Image
          src="/mirssa_tech.png"
          alt="MIRSSA TECH LTD"
          width={width}
          height={height}
          className=   "rotate-360 bounce-x group-hover:scale-110"
          priority
        />
        {/* 
        Alternative animation options - replace the className above with any of these:
        
        1. 360° Rotation + Scale:
        "rotate-360 group-hover:scale-110 hover:brightness-110 hover:drop-shadow-lg"
        
        2. Wiggle + Scale:
        "wiggle group-hover:scale-105 hover:brightness-110"
        
        3. Horizontal bounce:
        "bounce-x group-hover:scale-105 hover:brightness-110"
        
        4. Simple scale + glow:
        "group-hover:scale-125 hover:brightness-125 hover:drop-shadow-2xl"
        
        5. Rotate + bounce combination:
        "rotate-360 bounce-x group-hover:scale-110"
        */}
      </div>
    </Link>
  );
}
