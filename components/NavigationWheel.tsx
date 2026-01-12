import React, { useState, useEffect } from 'react';
import { SectionType } from '../types';
import { Feather, BookOpen, Anchor, MapPin, Eye, Star } from 'lucide-react';

interface NavigationWheelProps {
  onSelect: (section: SectionType) => void;
  activeSection: SectionType;
}

const SECTIONS = [
  { id: SectionType.BIOGRAPHY, label: 'La Vita', icon: Feather, angle: 0 },
  { id: SectionType.POETRY, label: 'Le Opere', icon: BookOpen, angle: 72 },
  { id: SectionType.FIUME, label: 'L\'Impresa', icon: Anchor, angle: 144 },
  { id: SectionType.VITTORIALE, label: 'Il Vittoriale', icon: MapPin, angle: 216 },
  { id: SectionType.ORACLE, label: 'L\'Oracolo', icon: Eye, angle: 288 },
];

export const NavigationWheel: React.FC<NavigationWheelProps> = ({ onSelect, activeSection }) => {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<SectionType | null>(null);

  const handleSelect = (sectionId: SectionType, angle: number) => {
    // Calculate rotation needed to bring selected item to top (0 degrees visual, but -90 in CSS terms or similar logic)
    // Here we just rotate the wheel so the clicked item aligns.
    // Let's rotate so the clicked item is at the BOTTOM (90deg) for easy reading, or TOP (-90deg).
    // Let's aim for TOP (270deg or -90deg).
    const targetAngle = -angle; 
    setRotation(targetAngle);
    onSelect(sectionId);
  };

  return (
    <div className="relative w-[80vmin] h-[80vmin] md:w-[60vmin] md:h-[60vmin] transition-all duration-1000 ease-out z-10">
      {/* Decorative Outer Rings */}
      <div className="absolute inset-0 border-[1px] border-dannunzio-gold/20 rounded-full animate-slow-spin" style={{ animationDuration: '120s' }}></div>
      <div className="absolute inset-4 border-[1px] border-dannunzio-gold/40 rounded-full"></div>
      
      {/* Central Hub Image/Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-48 h-48 flex flex-col items-center justify-center z-20 pointer-events-none">
        <h1 className="font-decorative text-4xl text-dannunzio-gold tracking-widest drop-shadow-md">GABRIELE</h1>
        <h2 className="font-decorative text-2xl text-dannunzio-paper opacity-80 tracking-widest">D'ANNUNZIO</h2>
        {hovered && (
          <div className="mt-4 text-dannunzio-gold font-script text-3xl animate-fade-in">
             {SECTIONS.find(s => s.id === hovered)?.label}
          </div>
        )}
      </div>

      {/* The Wheel */}
      <div 
        className="relative w-full h-full transition-transform duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {SECTIONS.map((section) => {
          // Calculate position on circle
          const radius = 50; // percent
          const angleRad = (section.angle - 90) * (Math.PI / 180);
          const left = 50 + 42 * Math.cos(angleRad); // 42% radius to keep inside
          const top = 50 + 42 * Math.sin(angleRad);
          
          const isActive = activeSection === section.id;
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => handleSelect(section.id, section.angle)}
              onMouseEnter={() => setHovered(section.id)}
              onMouseLeave={() => setHovered(null)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-500`}
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div 
                className={`
                  relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 
                  transition-all duration-500 backdrop-blur-sm
                  ${isActive 
                    ? 'border-dannunzio-gold bg-dannunzio-gold/20 scale-125 shadow-[0_0_30px_rgba(197,160,89,0.3)]' 
                    : 'border-dannunzio-gold/30 bg-black/40 hover:border-dannunzio-gold hover:bg-dannunzio-gold/10'}
                `}
                // Counter-rotate the icon so it stays upright relative to screen? 
                // Or let it rotate with wheel? Let's counter-rotate for readability.
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                <Icon 
                  size={32} 
                  className={`transition-colors duration-300 ${isActive ? 'text-dannunzio-gold' : 'text-dannunzio-paper/60 group-hover:text-dannunzio-gold'}`} 
                />
              </div>
              
              {/* Connector Line to center */}
              <div 
                className={`absolute top-1/2 left-1/2 w-[35vmin] h-[1px] bg-gradient-to-r from-transparent via-dannunzio-gold/20 to-transparent -z-10 origin-left transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                    transform: `rotate(${section.angle + 180}deg)`,
                    width: '30vmin', // Adjust based on design
                }} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
