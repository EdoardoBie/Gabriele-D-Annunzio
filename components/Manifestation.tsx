import React, { useEffect, useState, useRef } from 'react';
import { Fragment } from '../types';
import { X, Quote, MapPin, ChevronRight, ChevronLeft, Film, Feather, Star, AlignLeft } from 'lucide-react';
import { Oracle } from './Oracle';

interface ManifestationProps {
  fragment: Fragment;
  onClose: () => void;
}

// --- TEXT FORMATTER UTILITY ---
// Parses raw strings to create semantic HTML (lists, headers, paragraphs)
const FormattedText = ({ text, className = "", isPoetry = false }: { text: string, className?: string, isPoetry?: boolean }) => {
  if (!text) return null;

  if (isPoetry) {
      return <div className={`whitespace-pre-line leading-loose ${className}`}>{text}</div>;
  }

  const lines = text.split('\n');
  return (
    <div className={className}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-4" />;

        // Header detection (Starts with number followed by dot, e.g., "1. Titolo")
        if (/^\d+\./.test(trimmed)) {
            return <h3 key={i} className="text-xl md:text-2xl font-bold mt-6 mb-3 opacity-100">{trimmed}</h3>;
        }

        // List item detection
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            return (
                <div key={i} className="flex items-start gap-3 ml-2 md:ml-4 mb-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-60"></span>
                    <span className="leading-relaxed opacity-90">{trimmed.replace(/^[•-]\s*/, '')}</span>
                </div>
            );
        }

        // Standard paragraph
        return <p key={i} className="mb-4 leading-relaxed opacity-90">{trimmed}</p>;
      })}
    </div>
  );
};

export const Manifestation: React.FC<ManifestationProps> = ({ fragment, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 800);
  };

  // --- 1. ARCHIVIO (GENESI) - Vertical Stacked Files ---
  const GenesiLayout = ({ content }: { content: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <div className="w-full h-full bg-[#eaddcf] text-[#2c241b] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] mix-blend-multiply"></div>
        <div className="absolute inset-0 border-[20px] border-[#2c241b]/5 pointer-events-none"></div>

        <div className="relative w-full max-w-3xl h-[85vh] flex flex-col items-center">
            <h2 className="font-archaic text-3xl md:text-4xl mb-6 tracking-widest text-[#2c241b] uppercase border-b-2 border-[#2c241b] pb-2 text-center">
                Archivio Biografico
            </h2>
            
            <div className="relative w-full flex-1 perspective-1000">
                {content.map((text, idx) => {
                    const offset = idx - activeIndex;
                    const isActive = idx === activeIndex;
                    // Stack effect
                    const style = {
                        transform: `translateY(${offset * 40}px) scale(${1 - Math.abs(offset) * 0.05}) translateZ(${isActive ? 0 : -100}px)`,
                        opacity: isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.3),
                        zIndex: 100 - Math.abs(offset),
                        filter: isActive ? 'none' : 'blur(2px) grayscale(100%)',
                        display: offset < 0 ? 'none' : 'block' // Hide passed cards completely
                    };

                    return (
                        <div 
                            key={idx}
                            className="absolute top-0 left-0 w-full h-full max-h-[60vh] md:max-h-[70vh] bg-white shadow-2xl p-6 md:p-10 border border-stone-300 transition-all duration-700 ease-out origin-top overflow-y-auto custom-scrollbar"
                            style={style}
                        >
                            <div className="absolute top-4 right-4 font-monumental text-xs text-stone-400">SCHEDA N. {idx + 1}</div>
                            <div className="font-prose text-lg md:text-xl text-justify">
                                <FormattedText text={text} />
                            </div>
                            
                            <div className="mt-8 pb-8 text-center sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-4">
                                <button 
                                    onClick={() => setActiveIndex(prev => Math.min(content.length - 1, prev + 1))}
                                    className={`px-6 py-2 border border-stone-800 hover:bg-stone-800 hover:text-white transition-colors font-monumental text-sm ${idx === content.length - 1 ? 'hidden' : ''}`}
                                >
                                    ARCHIVIA E PROCEDI
                                </button>
                                {idx > 0 && idx === activeIndex && (
                                     <button 
                                     onClick={() => setActiveIndex(prev => prev - 1)}
                                     className="px-6 py-2 text-stone-500 hover:text-stone-800 text-xs block mx-auto mt-2 uppercase tracking-widest"
                                 >
                                     (Recupera precedente)
                                 </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    );
  };

  // --- 2. SALOTTO (PIACERE) - Luxurious Card with Explicit Nav ---
  const PiacereLayout = ({ content }: { content: string[] }) => {
    const [page, setPage] = useState(0);
    const total = content.length;
    
    return (
        <div className="w-full h-full bg-[#1a0505] flex items-center justify-center relative overflow-hidden p-4">
             {/* Damask Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
             
             {/* Main Card */}
             <div className="relative w-full max-w-5xl min-h-[60vh] md:h-auto bg-[#2a0a0a] border-[4px] md:border-[8px] border-double border-[#D4AF37] shadow-[0_0_100px_rgba(212,175,55,0.2)] p-8 md:p-16 flex flex-col justify-between transition-all duration-700">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[#D4AF37] opacity-50 font-handwriting text-4xl">Estetismo</div>
                
                <div className="flex-1 flex flex-col items-center justify-center my-4 overflow-y-auto max-h-[60vh] custom-scrollbar">
                    <div className="font-prose text-xl md:text-2xl text-[#E6DCC8] leading-relaxed drop-shadow-lg animate-fadeIn w-full">
                        <FormattedText text={content[page]} />
                    </div>
                </div>

                <div className="w-full flex justify-between items-center text-[#D4AF37] mt-6 pt-6 border-t border-[#D4AF37]/20">
                    <button 
                        onClick={() => setPage(p => Math.max(0, p - 1))} 
                        disabled={page === 0} 
                        className="group flex items-center gap-2 disabled:opacity-20 hover:text-white transition-colors"
                    >
                        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-monumental text-sm hidden md:inline">PRECEDENTE</span>
                    </button>

                    <div className="font-monumental text-xs tracking-[0.5em]">{page + 1} / {total}</div>
                    
                    <button 
                        onClick={() => setPage(p => Math.min(total - 1, p + 1))} 
                        disabled={page === total - 1} 
                        className="group flex items-center gap-2 disabled:opacity-20 hover:text-white transition-colors"
                    >
                        <span className="font-monumental text-sm hidden md:inline">SUCCESSIVO</span>
                        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
             </div>
        </div>
    );
  };

  // --- 3. TEATRO (DUSE) - Ethereal Ghost ---
  const DuseLayout = ({ content }: { content: string[] }) => {
      const [index, setIndex] = useState(0);

      return (
          <div className="w-full h-full bg-[#0a0a1a] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Spotlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] bg-indigo-900/20 blur-[100px] pointer-events-none rounded-full"></div>
              
              <div className="relative z-10 w-full max-w-4xl px-8 h-[80vh] flex flex-col justify-center">
                  <div key={index} className="animate-blur-in flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-center text-center">
                      <h2 className="font-handwriting text-6xl md:text-8xl text-indigo-200/80 mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] shrink-0">
                          Eleonora
                      </h2>
                      <div className="font-prose text-xl md:text-2xl text-indigo-100/90 leading-relaxed mx-auto max-w-2xl text-justify">
                          <FormattedText text={content[index]} />
                      </div>
                  </div>

                  <div className="flex justify-center gap-4 mt-8 shrink-0 pb-8">
                      {content.map((_, i) => (
                          <button 
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-500 ${i === index ? 'bg-indigo-400 scale-150 shadow-[0_0_10px_rgba(129,140,248,0.8)]' : 'bg-indigo-900 border border-indigo-500/30'}`}
                          />
                      ))}
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. FORESTA (PIOGGIA) - Improved Columns & Poetry Format ---
  const PioggiaLayout = ({ content }: { content: string[] }) => {
      return (
          <div className="w-full h-full bg-[#051405] text-[#8fbc8f] relative overflow-x-hidden overflow-y-auto custom-scrollbar">
              {/* Rain animation overlay */}
              <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10 animate-drift"></div>
              
              <div className="max-w-6xl mx-auto p-6 md:p-20">
                <h1 className="font-handwriting text-5xl md:text-7xl text-[#90EE90] opacity-60 mb-16 text-center drop-shadow-[0_0_15px_rgba(144,238,144,0.2)]">
                    La Pioggia nel Pineto
                </h1>
                
                {/* Masonry-like grid for stanzas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {content.map((stanza, idx) => (
                        <div key={idx} className="relative group bg-[#0a1f0a]/50 p-6 md:p-8 rounded-lg border border-[#90EE90]/10 hover:border-[#90EE90]/30 transition-colors">
                            <div className="font-prose text-lg md:text-xl leading-[2.2] whitespace-pre-line text-left">
                                <FormattedText text={stanza} isPoetry={true} />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16 pb-16">
                    <p className="font-monumental text-xs tracking-[0.5em] text-[#90EE90]/40 uppercase">E piove su i nostri volti silvani...</p>
                </div>
              </div>
          </div>
      );
  };

  // --- 5. PELLICOLA (ESILIO) - Horizontal Film Strip ---
  const EsilioLayout = ({ content }: { content: string[] }) => {
      const scrollRef = useRef<HTMLDivElement>(null);

      const scroll = (dir: 'left' | 'right') => {
          if (scrollRef.current) {
              const amount = window.innerWidth * 0.6;
              scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
          }
      };

      return (
          <div className="w-full h-full bg-[#111] flex items-center relative overflow-hidden">
              {/* Film Sprockets */}
              <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-black border-b-2 border-zinc-800 flex justify-between px-2 overflow-hidden z-20">
                  {Array.from({length: 40}).map((_, i) => <div key={i} className="w-8 h-8 md:w-10 md:h-12 bg-zinc-900 m-2 rounded-sm" />)}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-black border-t-2 border-zinc-800 flex justify-between px-2 overflow-hidden z-20">
                  {Array.from({length: 40}).map((_, i) => <div key={i} className="w-8 h-8 md:w-10 md:h-12 bg-zinc-900 m-2 rounded-sm" />)}
              </div>

              {/* Main Reel */}
              <div 
                ref={scrollRef}
                className="flex items-center gap-12 md:gap-24 px-12 md:px-24 overflow-x-auto h-full hide-scrollbar snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none' }}
              >
                  {content.map((frame, idx) => (
                      <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-[60vw] h-[65vh] bg-sepia relative group grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
                            {/* Frame Border */}
                           <div className="absolute inset-0 border-x-[20px] md:border-x-[40px] border-y-[20px] border-black opacity-90 pointer-events-none z-10"></div>
                           
                           <div className="relative w-full h-full p-8 md:p-16 flex flex-col bg-[#e6dcc8] text-black overflow-y-auto custom-scrollbar">
                                <div className="font-monumental text-xs tracking-widest mb-4 opacity-50 flex items-center gap-2">
                                    <Film size={14} /> SCENA {idx + 1}
                                </div>
                                <div className="font-prose text-xl md:text-2xl leading-relaxed text-justify">
                                    <FormattedText text={frame} />
                                </div>
                           </div>
                      </div>
                  ))}
                  <div className="w-12 shrink-0"></div>
              </div>

              {/* Controls */}
              <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black rounded-full text-white border border-white/20">
                  <ChevronLeft size={32} />
              </button>
              <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black rounded-full text-white border border-white/20">
                  <ChevronRight size={32} />
              </button>
          </div>
      );
  };

  // --- 6. CARTIGLI (NOTTURNO) - Fixed Layout (High Contrast Box) ---
  const NotturnoLayout = ({ content }: { content: string[] }) => {
      const [index, setIndex] = useState(0);

      // Keyboard nav support
      useEffect(() => {
          const handleKey = (e: KeyboardEvent) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') setIndex(i => Math.min(content.length - 1, i + 1));
              if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setIndex(i => Math.max(0, i - 1));
          };
          window.addEventListener('keydown', handleKey);
          return () => window.removeEventListener('keydown', handleKey);
      }, [content.length]);

      return (
          <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 relative">
              <div className="absolute top-8 left-0 w-full text-center">
                   <span className="text-zinc-600 font-monumental text-xs tracking-[1em] uppercase block mb-2">Il Commentario della Tenebra</span>
                   <span className="text-zinc-800 font-monumental text-[10px] tracking-widest uppercase block">Cartiglio {index + 1} di {content.length}</span>
              </div>
              
              {/* The "Cartiglio" - A concentrated block of text, emulating a piece of paper in the dark */}
              <div className="w-full max-w-2xl bg-zinc-900 border-y-2 border-zinc-800 p-8 md:p-12 relative shadow-[0_0_50px_rgba(255,255,255,0.05)] min-h-[40vh] flex flex-col justify-center">
                  
                  {/* Decorative faint lines simulating blind writing guides */}
                  <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_29px,#fff_30px)]"></div>

                  <div className="relative z-10 font-monumental text-lg md:text-xl text-zinc-200 leading-[2.5] tracking-wide text-justify">
                      <FormattedText text={content[index]} />
                  </div>
              </div>
              
              {/* Navigation */}
              <div className="mt-12 flex items-center gap-12">
                  <button 
                    onClick={() => setIndex(i => Math.max(0, i - 1))} 
                    disabled={index === 0}
                    className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-20 transition-colors"
                  >
                      <ChevronLeft size={24} />
                      <span className="uppercase tracking-widest text-xs border-b border-transparent group-hover:border-white pb-1">Precedente</span>
                  </button>

                  <div className="w-1 h-8 bg-zinc-800"></div>

                  <button 
                    onClick={() => setIndex(i => Math.min(content.length - 1, i + 1))} 
                    disabled={index === content.length - 1}
                    className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-20 transition-colors"
                  >
                      <ChevronRight size={24} />
                      <span className="uppercase tracking-widest text-xs border-b border-transparent group-hover:border-white pb-1">Successivo</span>
                  </button>
              </div>
          </div>
      );
  };

  // --- 7. MANIFESTO (IMPRESA) - Propaganda ---
  const ImpresaLayout = ({ content }: { content: string[] }) => {
      const [idx, setIdx] = useState(0);

      return (
          <div className="w-full h-full bg-[#E5E5E5] text-black relative flex overflow-hidden">
              {/* Geometric Background */}
              <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-red-600 transform -skew-x-12 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-[20vw] h-[150vh] bg-black transform rotate-12 -translate-x-32 opacity-90"></div>

              <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-16 gap-8 md:gap-12">
                   {/* Big Number */}
                   <div className="font-archaic text-[120px] md:text-[200px] leading-none text-black/10 md:text-black absolute top-4 left-4 md:relative md:top-auto md:left-auto z-0 select-none">
                       {idx + 1}
                   </div>

                   <div className="relative z-10 bg-white p-6 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full border-4 border-black transform md:-rotate-1 transition-transform hover:rotate-0 duration-300 max-h-[80vh] flex flex-col">
                       <h2 className="font-monumental text-3xl md:text-6xl text-red-600 mb-6 uppercase leading-none shrink-0 border-b-4 border-black pb-4">
                           Eia! Eia! Alalà!
                       </h2>
                       <div className="font-monumental text-base md:text-xl leading-snug tracking-wide text-justify flex-1 overflow-y-auto custom-scrollbar pr-2">
                           <FormattedText text={content[idx]} />
                       </div>
                       
                       <div className="mt-6 flex justify-between border-t-4 border-black pt-4 shrink-0">
                           <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0} className="font-archaic text-xl md:text-2xl hover:bg-black hover:text-white px-4 disabled:opacity-20">INDIETRO</button>
                           <button onClick={() => setIdx(i => Math.min(content.length - 1, i + 1))} disabled={idx === content.length - 1} className="font-archaic text-xl md:text-2xl hover:bg-red-600 hover:text-white px-4 disabled:opacity-20">AVANTI</button>
                       </div>
                   </div>
              </div>
          </div>
      );
  };

  // --- 8. MAUSOLEO (VITTORIALE/LOCATION) ---
  const VittorialeLayout = ({ fragment }: { fragment: Fragment }) => {
    return (
        <div className="w-full h-full relative bg-stone-900 overflow-y-auto custom-scrollbar">
            {/* Hero Image */}
            <div className="h-[50vh] md:h-[60vh] w-full relative">
                <img src={fragment.image} className="w-full h-full object-cover grayscale opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <MapPin className="text-gold-dust w-8 h-8 md:w-12 md:h-12 mb-4 animate-bounce" />
                    <h1 className="font-monumental text-4xl md:text-8xl text-stone-100 leading-none">{fragment.label}</h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div className="font-prose text-xl md:text-2xl text-stone-300 leading-loose">
                    <span className="float-left text-6xl text-gold-dust font-monumental mr-4 mt-[-10px]">I</span>
                    <FormattedText text={Array.isArray(fragment.content) ? fragment.content[0] : fragment.content} />
                </div>
                
                <div className="space-y-8">
                    {fragment.gallery?.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden border border-stone-700">
                            <img src={item.image} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                                <h3 className="font-monumental text-gold-dust">{item.title}</h3>
                                <p className="text-stone-400 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };

  // --- RENDER SWITCHER ---
  const renderContent = () => {
    // Array content check
    const content = Array.isArray(fragment.content) ? fragment.content : [fragment.content || ""];

    switch (fragment.id) {
        case 'prodigio': return <GenesiLayout content={content} />;
        case 'piacere': return <PiacereLayout content={content} />;
        case 'duse': return <DuseLayout content={content} />;
        case 'pioggia': return <PioggiaLayout content={content} />;
        case 'esilio': return <EsilioLayout content={content} />;
        case 'notturno': return <NotturnoLayout content={content} />;
        case 'impresa': return <ImpresaLayout content={content} />;
        case 'vittoriale': return <VittorialeLayout fragment={fragment} />;
        default: 
            return (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-black text-white">
                    <h1 className="font-monumental text-6xl mb-8">{fragment.label}</h1>
                    <div className="font-prose text-2xl max-w-2xl">
                        <FormattedText text={content[0]} />
                    </div>
                </div>
            );
    }
  };

  if (fragment.type === 'ORACLE') {
      return (
           <div className={`fixed inset-0 z-50 flex items-center justify-center bg-void/95 backdrop-blur-xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button onClick={handleClose} className="absolute top-8 right-8 text-gold-dust hover:text-white transition-colors z-50 p-4">
                  <X size={24} strokeWidth={1} />
              </button>
              <div className="w-full max-w-3xl h-[80vh]">
                  <Oracle />
              </div>
           </div>
      );
  }

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
            onClick={handleClose}
            className="fixed top-6 right-6 z-50 text-white/50 hover:text-white hover:rotate-90 transition-all duration-500 bg-black/20 p-2 rounded-full backdrop-blur-md border border-white/10 mix-blend-difference"
        >
            <X size={32} strokeWidth={1} />
        </button>

        {renderContent()}
    </div>
  );
};