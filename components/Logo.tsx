import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", color = "currentColor" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Iglesia Vilar de Mar"
    >
      {/* Abstract Boat Hull / Cup Shape - symbolizing 'Mar' and Communion */}
      <path 
        d="M20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50" 
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      
      {/* Straight line for the top of the hull */}
      <path 
        d="M15 50L85 50" 
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round"
      />

      {/* The Cross / Mast rising from the center */}
      <path 
        d="M50 80L50 20" 
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      
      {/* The Circle / Sun / Host at the top */}
      <circle 
        cx="50" 
        cy="20" 
        r="8" 
        stroke={color} 
        strokeWidth="6"
      />
    </svg>
  );
};

export default Logo;