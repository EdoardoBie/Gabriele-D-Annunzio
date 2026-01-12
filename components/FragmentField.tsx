import React, { useState, useEffect } from 'react';
import { Fragment } from '../types';
import { FRAGMENTS } from '../constants';

interface FragmentFieldProps {
  onSelect: (fragment: Fragment) => void;
}

export const FragmentField: React.FC<FragmentFieldProps> = ({ onSelect }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Helper to calculate SVG points based on percentage coordinates
  const getPoint = (xPercent: number, yPercent: number) => {
    return `${(xPercent / 100) * windowSize.width},${(yPercent / 100) * windowSize.height}`;
  };

  // Generate the path string for the SVG line connecting items
  const pathData = FRAGMENTS.reduce((acc, frag, i) => {
    const point = getPoint(frag.x, frag.y);
    return i === 0 ? `M ${point}` : `${acc} L ${point}`;
  }, '');

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      
      {/* 1. THE GOLDEN THREAD (Visual Connector) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <path 
            d={pathData} 
            fill="none" 
            stroke="#C5A059" 
            strokeWidth="1" 
            strokeDasharray="5,5"
        />
      </svg>

      {/* 2. THE CHRONOLOGICAL NODES */}
      {FRAGMENTS.map((frag, idx) => {
        // Subtle parallax, much reduced from before to keep structure
        const moveX = mousePos.x * (10 / frag.scale); 
        const moveY = mousePos.y * (10 / frag.scale);

        const isOracle = frag.type === 'ORACLE';
        
        return (
          <div
            key={frag.id}
            className="absolute flex flex-col items-center pointer-events-auto"
            style={{
              left: `${frag.x}%`,
              top: `${frag.y}%`,
              transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) rotate(${frag.rotation}deg)`,
              zIndex: Math.floor(frag.scale * 10),
            }}
          >
            {/* Era Label (Background Context) */}
            {frag.era && (
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-monumental tracking-[0.3em] text-gold-dust/30 whitespace-nowrap uppercase">
                    {frag.era}
                </span>
            )}

            <button
                onClick={() => onSelect(frag)}
                className="group focus:outline-none"
            >
                <div className={`
                  relative flex flex-col items-center justify-center
                  transition-all duration-500
                  ${isOracle ? 'animate-pulse-slow' : ''}
                  group-hover:scale-110
                `}>
                  
                  {/* Node Marker */}
                  <div className={`
                    w-3 h-3 md:w-4 md:h-4 rounded-full border border-gold-dust/60 bg-void
                    mb-4 transition-all duration-300
                    group-hover:bg-gold-dust group-hover:shadow-[0_0_15px_rgba(197,160,89,0.8)]
                    ${isOracle ? 'bg-gold-dust shadow-[0_0_10px_rgba(197,160,89,0.5)]' : ''}
                  `}></div>

                  {/* Main Label */}
                  <span className={`
                    font-monumental tracking-widest uppercase text-center whitespace-nowrap
                    text-sm md:text-base lg:text-xl
                    transition-all duration-500
                    text-parchment/70 group-hover:text-gold-dust group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]
                    bg-void/40 backdrop-blur-sm px-4 py-1 border border-transparent group-hover:border-gold-dust/20 rounded-sm
                  `}>
                    {frag.label}
                  </span>

                  {/* Connecting Line from Node to Label (Decorative) */}
                  <div className="absolute top-2 w-[1px] h-4 bg-gold-dust/20 group-hover:h-6 transition-all duration-300 -z-10"></div>
                </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};