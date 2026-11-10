import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ 
  variant = 'dark', 
  size = 'default', // 'sm', 'default', 'lg', 'xl'
  symbolOnly = false,
  className = '' 
}) {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: { symbol: 'w-7 h-7', textTitle: 'text-lg', textSub: 'text-[9px]' },
    default: { symbol: 'w-10 h-10', textTitle: 'text-2xl', textSub: 'text-[10px]' },
    lg: { symbol: 'w-14 h-14', textTitle: 'text-3xl', textSub: 'text-xs' },
    xl: { symbol: 'w-20 h-20', textTitle: 'text-4xl', textSub: 'text-sm' },
  }[size] || { symbol: 'w-10 h-10', textTitle: 'text-2xl', textSub: 'text-[10px]' };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="Gulmohar Cafe - Home"
    >
      {/* Gulmohar Blossom & Warm Chai Motif Emblem */}
      <div className={`relative flex-shrink-0 ${sizeClasses.symbol}`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-500 group-hover:rotate-6"
        >
          <defs>
            <linearGradient id="gulmoharGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B4A" />
              <stop offset="60%" stopColor="#E84A27" />
              <stop offset="100%" stopColor="#B4230D" />
            </linearGradient>
            <linearGradient id="gulmoharGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#E84A27" />
            </linearGradient>
            <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#E84A27" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Outer botanical halo / warmth ring */}
          <circle cx="50" cy="50" r="46" stroke="url(#goldAccent)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          
          {/* Main 5 Gulmohar Petals */}
          {/* Top Petal (Royal standard petal with gold tips) */}
          <path 
            d="M50 12C57 26 62 36 50 48C38 36 43 26 50 12Z" 
            fill="url(#goldAccent)" 
            opacity="0.95"
          />
          {/* Top Right Petal */}
          <path 
            d="M84 34C73 43 63 46 50 50C54 37 68 28 84 34Z" 
            fill="url(#gulmoharGrad1)" 
          />
          {/* Bottom Right Petal */}
          <path 
            d="M74 78C62 73 57 63 50 50C63 53 74 64 74 78Z" 
            fill="url(#gulmoharGrad2)" 
          />
          {/* Bottom Left Petal */}
          <path 
            d="M26 78C26 64 37 53 50 50C43 63 38 73 26 78Z" 
            fill="url(#gulmoharGrad2)" 
          />
          {/* Top Left Petal */}
          <path 
            d="M16 34C32 28 46 37 50 50C37 46 27 43 16 34Z" 
            fill="url(#gulmoharGrad1)" 
          />

          {/* Stylized Chai Cup & Steam Center */}
          <circle cx="50" cy="50" r="14" fill="#2A1F18" />
          {/* Steaming Chai Silhouette */}
          <path 
            d="M44 49C44 54 56 54 56 49H44Z" 
            fill="#FBBF24" 
          />
          <path 
            d="M46 45C46 43 48 43 48 41M52 45C52 43 54 43 54 41" 
            stroke="#FFF5F1" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
          />
          {/* Delicate stamen seeds */}
          <circle cx="50" cy="28" r="1.5" fill="#B4230D" />
          <circle cx="70" cy="40" r="1.5" fill="#FFF" />
          <circle cx="30" cy="40" r="1.5" fill="#FFF" />
        </svg>
      </div>

      {/* Typography Brand Mark */}
      {!symbolOnly && (
        <div className="flex flex-col leading-none whitespace-nowrap">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className={`font-serif font-black tracking-wider uppercase transition-colors whitespace-nowrap ${
              isLight ? 'text-white' : 'text-chai-900 group-hover:text-gulmohar-600'
            } ${sizeClasses.textTitle}`}>
              Gulmohar
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gulmohar-500 animate-pulse"></span>
          </div>
          <div className="flex items-center gap-2 mt-0.5 whitespace-nowrap">
            <span className={`font-sans tracking-[0.25em] font-semibold uppercase whitespace-nowrap ${
              isLight ? 'text-saffron-300' : 'text-gulmohar-600'
            } ${sizeClasses.textSub}`}>
              Cafe & Chaat House
            </span>
            <span className={`text-[8px] tracking-widest uppercase font-medium whitespace-nowrap ${
              isLight ? 'text-chai-300' : 'text-chai-800'
            }`}>
              • Morrisville
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}
