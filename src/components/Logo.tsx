import React, { useState } from 'react';

const Logo = ({ className = "w-10 h-10 md:w-14 md:h-14", src = "/logo.jpg" }: { className?: string, src?: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`${className} bg-white flex items-center justify-center rounded-full overflow-hidden shrink-0 border-2 border-brand-orange shadow-sm group`}>
      {!imageError ? (
        <img 
          src={src} 
          alt="School Logo" 
          className="w-full h-full object-contain p-1"
          onError={() => setImageError(true)}
        />
      ) : (
        <svg viewBox="0 0 100 100" className="w-full h-full p-1 bg-brand-blue/5">
          {/* Sun */}
          <circle cx="50" cy="40" r="15" fill="#fbbf24" />
          <g stroke="#fbbf24" strokeWidth="2">
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50" y1="40"
                x2={50 + 22 * Math.cos((i * 30 * Math.PI) / 180)}
                y2={40 + 22 * Math.sin((i * 30 * Math.PI) / 180)}
              />
            ))}
          </g>

          {/* Lotus */}
          <path
            d="M50 80 C30 80 25 60 50 50 C75 60 70 80 50 80"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="1"
          />
          
          {/* Text */}
          <text x="50" y="20" textAnchor="middle" fontSize="10" fontWeight="900" fill="#1e3a8a">NVM</text>
          <text x="50" y="90" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1e3a8a" className="font-sans">DARBHANGA</text>
        </svg>
      )}
    </div>
  );
};

export default Logo;
