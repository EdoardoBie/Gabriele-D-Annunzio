
import React, { useEffect, useState, useRef } from 'react';
import { Fragment } from '../types';
import { X, ChevronRight, ChevronLeft, Film, MapPin, Moon, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';
import { Oracle } from './Oracle';

interface ManifestationProps {
  fragment: Fragment;
  onClose: () => void;
  isPresentationMode: boolean;
}

// --- TEXT FORMATTER UTILITY ---
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

        if (/^\d+\./.test(trimmed)) {
            return <h3 key={i} className="text-xl md:text-2xl font-bold mt-6 mb-3 opacity-100 font-monumental">{trimmed}</h3>;
        }

        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            return (
                <div key={i} className="flex items-start gap-3 ml-2 md:ml-4 mb-2 text-left">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-60"></span>
                    <span className="leading-relaxed opacity-90">{trimmed.replace(/^[•-]\s*/, '')}</span>
                </div>
            );
        }

        return <p key={i} className="mb-4 leading-relaxed opacity-90">{trimmed}</p>;
      })}
    </div>
  );
};

// --- CONTENT TOGGLER COMPONENT ---
const ContentToggler = ({ isOpen, onToggle, label = "Leggi Testo Completo" }: { isOpen: boolean, onToggle: () => void, label?: string }) => (
    <div className="w-full flex justify-center mt-8 mb-8 sticky bottom-0 z-30 pointer-events-none">
        <button 
            onClick={onToggle}
            className="pointer-events-auto bg-black/80 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition-all shadow-xl font-monumental text-xs tracking-widest uppercase group"
        >
            {label}
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
    </div>
);

// --- STANZA COMPONENT ---
const Stanza: React.FC<{ text: string; idx: number }> = ({ text, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div className="relative w-full max-w-2xl group mb-8">
          <div className="hidden md:block absolute -left-20 top-0 text-[#90EE90]/10 font-archaic text-6xl select-none group-hover:text-[#90EE90]/30 transition-colors">
              {['I', 'II', 'III', 'IV'][idx] || (idx + 1)}
          </div>
          
          <div className="pl-6 border-l-2 border-[#90EE90]/10 group-hover:border-[#90EE90]/40 transition-colors duration-500">
              <div 
                  className={`font-prose text-xl md:text-2xl leading-[2.8] whitespace-pre-line text-left text-[#c1e6c1] drop-shadow-md relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[3000px]' : 'max-h-[400px]'}`}
              >
                  <FormattedText text={text} isPoetry={true} />
                  <div className={`absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#051405] to-transparent pointer-events-none transition-opacity duration-1000 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
              </div>

              <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 flex items-center gap-2 text-[#90EE90]/50 hover:text-[#90EE90] font-monumental text-[10px] tracking-[0.3em] uppercase transition-colors"
              >
                  {isExpanded ? (
                      <>Riduci <ChevronUp size={12} /></>
                  ) : (
                      <>Espandi <ChevronDown size={12} /></>
                  )}
              </button>
          </div>
      </div>
  );
};

export const Manifestation: React.FC<ManifestationProps> = ({ fragment, onClose, isPresentationMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 800);
  };

  // --- 1. ARCHIVIO (GENESI) ---
  const GenesiLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showFull, setShowFull] = useState(!isPresentationMode);

    const activeContent = (isPresentationMode && !showFull && summary) ? [summary] : content;

    return (
      <div className="w-full h-full bg-[#eaddcf] text-[#2c241b] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] mix-blend-multiply"></div>
        <div className="absolute inset-0 border-[20px] border-[#2c241b]/5 pointer-events-none"></div>

        <div className="relative w-full max-w-4xl h-[85vh] flex flex-col items-center">
            <h2 className="font-archaic text-3xl md:text-4xl mb-6 tracking-widest text-[#2c241b] uppercase border-b-2 border-[#2c241b] pb-2 text-center">
                {isPresentationMode && !showFull ? "Sintesi Biografica" : "Archivio Biografico"}
            </h2>
            
            <div className="relative w-full flex-1 perspective-1000">
                {activeContent.map((text, idx) => {
                    const offset = idx - activeIndex;
                    const isActive = idx === activeIndex;
                    const style = {
                        transform: `translateY(${offset * 40}px) scale(${1 - Math.abs(offset) * 0.05}) translateZ(${isActive ? 0 : -100}px)`,
                        opacity: isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.3),
                        zIndex: 100 - Math.abs(offset),
                        filter: isActive ? 'none' : 'blur(2px) grayscale(100%)',
                        display: offset < 0 ? 'none' : 'block'
                    };

                    return (
                        <div key={idx} className="absolute top-0 left-0 w-full h-full max-h-[75vh] bg-white shadow-2xl p-6 md:p-10 border border-stone-300 transition-all duration-700 ease-out origin-top overflow-y-auto custom-scrollbar" style={style}>
                             {isPresentationMode && !showFull && (
                                <div className="font-monumental text-xs text-stone-400 mb-4">RIASSUNTO</div>
                             )}
                             
                             {image && (
                                <div className="float-none md:float-right md:ml-6 mb-6 md:w-1/2 w-full">
                                    <div className="relative p-2 bg-white border border-stone-200 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <img src={image} className="w-full h-auto max-h-[50vh] object-contain grayscale sepia-[0.3]" alt="Archivio" />
                                        <div className="absolute bottom-1 right-2 font-handwriting text-stone-400 text-lg">Gabriele</div>
                                    </div>
                                </div>
                             )}

                            <div className="font-prose text-lg md:text-xl text-justify">
                                <FormattedText text={text} />
                            </div>
                            
                            <div className="clear-both mt-8 pb-8 text-center">
                                {!isPresentationMode && (
                                    <button 
                                        onClick={() => setActiveIndex(prev => Math.min(activeContent.length - 1, prev + 1))}
                                        className={`px-6 py-2 border border-stone-800 hover:bg-stone-800 hover:text-white transition-colors font-monumental text-sm ${idx === activeContent.length - 1 ? 'hidden' : ''}`}
                                    >
                                        ARCHIVIA E PROCEDI
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {isPresentationMode && summary && (
                <ContentToggler isOpen={showFull} onToggle={() => setShowFull(!showFull)} label={showFull ? "Nascondi Archivio" : "Apri Archivio Completo"} />
            )}
        </div>
      </div>
    );
  };

  // --- 2. SALOTTO (PIACERE) ---
  const PiacereLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
    const [page, setPage] = useState(0);
    const [showFull, setShowFull] = useState(!isPresentationMode);
    
    return (
        <div className="w-full h-full bg-[#1a0505] flex items-center justify-center relative overflow-hidden p-4">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
             
             <div className="relative w-full max-w-6xl min-h-[70vh] max-h-[90vh] bg-[#2a0a0a] border-[4px] md:border-[8px] border-double border-[#D4AF37] shadow-[0_0_100px_rgba(212,175,55,0.2)] flex flex-col md:flex-row overflow-hidden">
                
                {/* Image Section (Book Cover / Illustration) */}
                {image && (
                    <div className="w-full md:w-1/3 bg-[#111] relative border-b md:border-b-0 md:border-r border-[#D4AF37] p-8 flex items-center justify-center">
                        <div className="relative group perspective-1000 w-full max-w-sm">
                            <div className="absolute inset-0 bg-[#D4AF37] blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
                            <img 
                                src={image} 
                                className="relative z-10 w-full h-auto object-contain shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-12" 
                                alt="Il Piacere" 
                            />
                        </div>
                    </div>
                )}

                {/* Text Section */}
                <div className="flex-1 p-8 md:p-12 flex flex-col relative overflow-hidden">
                    <div className="absolute top-4 right-8 text-[#D4AF37] opacity-30 font-handwriting text-5xl z-0">Il Piacere</div>
                    
                    <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar pr-4">
                        {(!isPresentationMode || showFull) ? (
                            <div className="font-prose text-xl md:text-2xl text-[#E6DCC8] leading-relaxed drop-shadow-lg animate-fadeIn">
                                <FormattedText text={content[page]} />
                            </div>
                        ) : (
                            <div className="flex flex-col h-full justify-center">
                                <h3 className="font-monumental text-3xl text-[#D4AF37] mb-6">Sintesi dell'Opera</h3>
                                <div className="font-prose text-2xl text-[#E6DCC8] leading-relaxed">
                                    <FormattedText text={summary || ""} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    {(!isPresentationMode || showFull) && (
                        <div className="w-full flex justify-between items-center text-[#D4AF37] mt-8 pt-6 border-t border-[#D4AF37]/20 shrink-0">
                            <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="group flex items-center gap-2 disabled:opacity-20 hover:text-white transition-colors">
                                <ChevronLeft size={24} /> <span className="font-monumental text-xs tracking-widest hidden md:inline">PRECEDENTE</span>
                            </button>
                            <div className="font-monumental text-xs tracking-[0.5em]">{page + 1} / {content.length}</div>
                            <button onClick={() => setPage(p => Math.min(content.length - 1, p + 1))} disabled={page === content.length - 1} className="group flex items-center gap-2 disabled:opacity-20 hover:text-white transition-colors">
                                <span className="font-monumental text-xs tracking-widest hidden md:inline">SUCCESSIVO</span> <ChevronRight size={24} />
                            </button>
                        </div>
                    )}

                    {isPresentationMode && summary && (
                        <div className="mt-4 flex justify-center shrink-0">
                            <button onClick={() => setShowFull(!showFull)} className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 hover:bg-[#D4AF37] hover:text-black transition-colors font-monumental text-xs uppercase">
                                {showFull ? "Torna al Riassunto" : "Leggi Opera Completa"}
                            </button>
                        </div>
                    )}
                </div>
             </div>
        </div>
    );
  };

  // --- 3. TEATRO (DUSE) ---
  const DuseLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
      const [index, setIndex] = useState(0);
      const [showFull, setShowFull] = useState(!isPresentationMode);

      return (
          <div className="w-full h-full bg-[#0a0a1a] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] bg-indigo-900/20 blur-[100px] pointer-events-none rounded-full"></div>
              
              <div className="relative z-10 w-full max-w-5xl px-8 h-[85vh] flex flex-col md:flex-row gap-12 items-center">
                  
                  {/* Portrait Image Left */}
                  {image && (
                      <div className="w-full md:w-1/3 flex justify-center md:justify-end shrink-0">
                          <div className="relative w-64 h-80 md:w-80 md:h-[500px] rounded-full md:rounded-b-none md:rounded-t-full border-4 border-indigo-900/50 shadow-[0_0_50px_rgba(79,70,229,0.2)] overflow-hidden group">
                                <img src={image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Duse" />
                                <div className="absolute inset-0 ring-inset ring-4 ring-black/20 rounded-full md:rounded-b-none md:rounded-t-full pointer-events-none"></div>
                          </div>
                      </div>
                  )}

                  <div className="flex-1 flex flex-col justify-center h-full overflow-hidden">
                      <div className="animate-blur-in flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-center text-center md:text-left items-center md:items-start pr-4">
                          <h2 className="font-handwriting text-6xl md:text-8xl text-indigo-200/80 mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] shrink-0">
                              Eleonora
                          </h2>
                          <div className="font-prose text-xl md:text-2xl text-indigo-100/90 leading-relaxed text-justify w-full">
                              <FormattedText text={showFull ? content[index] : (summary || "")} />
                          </div>
                      </div>

                      {showFull && (
                          <div className="flex justify-center md:justify-start gap-4 mt-8 shrink-0 pb-8">
                              {content.map((_, i) => (
                                  <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-500 ${i === index ? 'bg-indigo-400 scale-150 shadow-[0_0_10px_rgba(129,140,248,0.8)]' : 'bg-indigo-900 border border-indigo-500/30'}`} />
                              ))}
                          </div>
                      )}

                      {isPresentationMode && summary && (
                          <div className="mt-4 shrink-0">
                             <ContentToggler isOpen={showFull} onToggle={() => setShowFull(!showFull)} label={showFull ? "Chiudi Dettagli" : "Approfondisci la Storia"} />
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- NEW: ALCYONE ---
  const AlcyoneLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
    const [page, setPage] = useState(0);
    const [showFull, setShowFull] = useState(!isPresentationMode);
    
    // Atmospheric colors based on sections/mood
    const atmospheres = [
        "bg-gradient-to-br from-amber-100 to-yellow-200 text-amber-900", // Intro
        "bg-gradient-to-br from-yellow-50 to-lime-100 text-emerald-900", // Structure
        "bg-gradient-to-b from-lime-200 to-green-300 text-green-950", // June
        "bg-gradient-to-t from-cyan-100 to-white text-cyan-900", // July
        "bg-gradient-to-br from-orange-400 to-red-500 text-white", // High Summer
        "bg-gradient-to-br from-orange-300 to-amber-700 text-amber-950", // Decline
        "bg-gradient-to-b from-indigo-300 to-purple-800 text-indigo-100", // Sept
        "bg-gradient-to-br from-gray-200 to-slate-400 text-slate-900", // End
    ];
    const currentAtmosphere = showFull ? (atmospheres[page] || atmospheres[0]) : atmospheres[3];

    return (
        <div className={`w-full h-full transition-colors duration-1000 ease-in-out relative overflow-hidden flex flex-col items-center justify-center ${currentAtmosphere}`}>
             <div className="absolute w-64 h-64 rounded-full blur-[60px] opacity-60 z-0 bg-yellow-200 top-10 left-1/2"></div>
             <div className="absolute inset-0 z-10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>

             <div className="relative z-20 w-full max-w-6xl h-[85vh] flex flex-col md:flex-row gap-8 p-6 md:p-12 items-center">
                 
                 {/* Left Panel: Content */}
                 <div className="w-full md:w-2/3 h-full flex flex-col justify-center bg-white/20 backdrop-blur-md border border-white/30 p-8 md:p-12 rounded-lg shadow-xl animate-float transition-all duration-500">
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                         <div className="animate-blur-in">
                            {/* Mobile Image */}
                            {image && (
                                <div className="md:hidden w-full h-40 mb-6 overflow-hidden rounded border border-white/40 shadow-inner">
                                    <img src={image} className="w-full h-full object-cover opacity-90" alt="Alcyone" />
                                </div>
                            )}
                            
                            <h2 className="font-monumental text-3xl md:text-4xl mb-6 opacity-60 uppercase tracking-widest border-b border-current/20 pb-4">
                                {showFull ? (page === 0 ? "Prologo" : "Canto " + (page)) : "Sintesi"}
                            </h2>
                            <div className="font-prose text-xl md:text-3xl leading-relaxed drop-shadow-sm">
                                <FormattedText text={showFull ? content[page] : (summary || "")} />
                            </div>
                         </div>
                    </div>
                    
                    {showFull && (
                        <div className="mt-8 pt-6 border-t border-current/20 flex justify-between items-center font-monumental text-xs tracking-widest uppercase">
                            <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="hover:opacity-100 opacity-60 disabled:opacity-20 flex items-center gap-2"><ChevronLeft size={16} /></button>
                            <div className="flex gap-2">
                                {content.map((_, i) => ( <div key={i} className={`h-1 transition-all duration-500 ${i === page ? 'w-8 bg-current opacity-100' : 'w-2 bg-current opacity-30'}`} /> ))}
                            </div>
                            <button onClick={() => setPage(p => Math.min(content.length - 1, p + 1))} disabled={page === content.length - 1} className="hover:opacity-100 opacity-60 disabled:opacity-20 flex items-center gap-2"><ChevronRight size={16} /></button>
                        </div>
                    )}

                    {isPresentationMode && summary && (
                        <div className="mt-4 pt-4 border-t border-current/20 text-center">
                            <button onClick={() => setShowFull(!showFull)} className="font-monumental text-xs uppercase bg-black/10 hover:bg-black/20 px-4 py-2 rounded">
                                {showFull ? "Torna alla Sintesi" : "Esplora Struttura"}
                            </button>
                        </div>
                    )}
                 </div>

                 {/* Right Panel: Image & Title */}
                 <div className="hidden md:flex w-1/3 h-full flex-col justify-between items-center text-center gap-4">
                     <div className="flex-1 w-full rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl relative group">
                        {image && <img src={image} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[20s]" alt="Alcyone Mood" />}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-0 w-full font-handwriting text-white text-4xl">L'Estate Infinita</div>
                     </div>
                     <div className="font-archaic text-8xl opacity-20 whitespace-nowrap select-none tracking-widest transform -rotate-2">ALCYONE</div>
                 </div>
             </div>
             <style>{`@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } } .animate-float { animation: float 6s ease-in-out infinite; }`}</style>
        </div>
    );
  };

  // --- NEW: SERA FIESOLANA ---
  const SeraLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
    const [showFull, setShowFull] = useState(!isPresentationMode);

    return (
        <div className="w-full h-full bg-gradient-to-b from-[#0f172a] via-[#312e81] to-[#000000] text-indigo-100 overflow-y-auto custom-scrollbar relative">
             <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 pointer-events-none"></div>
             <div className="fixed top-8 right-8 text-indigo-200/20 animate-pulse-slow"><Moon size={80} strokeWidth={1} /></div>

             <div className="max-w-5xl mx-auto p-8 md:p-24 space-y-16 relative z-10">
                 <div className="text-center space-y-4">
                    <h1 className="font-handwriting text-6xl md:text-9xl text-indigo-200 opacity-90 drop-shadow-[0_0_15px_rgba(199,210,254,0.3)]">La Sera Fiesolana</h1>
                    <p className="font-monumental text-sm tracking-[0.5em] text-indigo-400">GIUGNO 1899</p>
                 </div>
                 
                 {image && (
                     <div className="w-full h-[50vh] overflow-hidden rounded-xl border border-indigo-500/20 shadow-[0_0_80px_rgba(49,46,129,0.4)] relative group">
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                         <img src={image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[30s]" alt="Sera Fiesolana" />
                         <div className="absolute bottom-8 left-8 z-20 max-w-lg">
                             <p className="font-prose text-2xl italic text-white/90">"Fresche le mie parole ne la sera..."</p>
                         </div>
                     </div>
                 )}

                 {/* Summary Block */}
                 {(!showFull && summary) && (
                     <div className="bg-[#1e1b4b]/60 p-12 border border-indigo-500/30 rounded-xl backdrop-blur-md shadow-2xl">
                         <h2 className="font-monumental text-xl mb-8 text-indigo-300 border-b border-indigo-500/30 pb-4">Analisi e Sintesi</h2>
                         <div className="font-prose text-2xl leading-relaxed text-indigo-100/90 columns-1 md:columns-2 gap-12">
                             <FormattedText text={summary} />
                         </div>
                     </div>
                 )}

                 {/* Full Poem Accordion */}
                 <div className={`transition-all duration-1000 overflow-hidden ${showFull ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-1 gap-16">
                        {content.map((block, idx) => (
                            <div key={idx} className="relative bg-black/20 p-8 md:p-12 rounded-lg border-l-4 border-indigo-500/40 hover:border-indigo-400 transition-colors">
                                <div className="absolute -left-6 top-0 text-indigo-500/10 font-archaic text-8xl -z-10">{idx + 1}</div>
                                <div className="font-prose text-xl md:text-2xl leading-[2.2] text-indigo-100/90">
                                    <FormattedText text={block} />
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                 {isPresentationMode && summary && (
                     <ContentToggler isOpen={showFull} onToggle={() => setShowFull(!showFull)} />
                 )}
                 
                 <div className="h-24 flex items-center justify-center opacity-30">
                     <span className="w-1 h-24 bg-gradient-to-b from-indigo-500 to-transparent"></span>
                 </div>
             </div>
        </div>
    );
  };

  // --- 4. FORESTA (PIOGGIA) ---
  const PioggiaLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
      const [showFull, setShowFull] = useState(!isPresentationMode);

      return (
          <div className="w-full h-full bg-[#051405] text-[#8fbc8f] relative overflow-x-hidden overflow-y-auto custom-scrollbar">
              <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-5 animate-drift"></div>
              
              <div className="max-w-6xl mx-auto p-6 md:p-20 relative z-10">
                <header className="sticky top-0 z-40 py-6 backdrop-blur-sm mix-blend-screen transition-all">
                    <h1 className="font-handwriting text-5xl md:text-8xl text-[#90EE90] opacity-70 text-center drop-shadow-[0_0_20px_rgba(144,238,144,0.15)]">
                        La Pioggia nel Pineto
                    </h1>
                </header>
                
                {image && (
                    <div className="w-64 h-64 md:w-96 md:h-96 mx-auto my-12 rounded-full border-4 border-[#90EE90]/20 shadow-[0_0_60px_rgba(144,238,144,0.1)] overflow-hidden relative group">
                        <img src={image} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[20s]" alt="Pioggia" />
                        <div className="absolute inset-0 bg-[#051405]/30 group-hover:bg-transparent transition-colors"></div>
                    </div>
                )}
                
                {(!showFull && summary) && (
                     <div className="max-w-3xl mx-auto bg-[#0a1f0a]/90 p-12 border-y-2 border-[#90EE90]/30 backdrop-blur-md mb-16 shadow-[0_0_40px_rgba(144,238,144,0.05)]">
                         <div className="font-prose text-xl md:text-2xl leading-relaxed text-[#90EE90] text-center">
                             <FormattedText text={summary} />
                         </div>
                     </div>
                 )}

                {/* Stanzas Container */}
                <div className={`flex flex-col items-center gap-16 transition-all duration-1000 ${showFull ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 hidden'}`}>
                    {content.map((stanza, idx) => {
                        if (idx < 4) {
                            return <Stanza key={idx} text={stanza} idx={idx} />;
                        }
                        return (
                             <div key={idx} className="w-full max-w-4xl mt-8 px-8 py-12 border-t border-[#90EE90]/10 bg-[#081808]">
                                <h3 className="font-monumental text-[#90EE90]/50 text-center mb-8 tracking-[0.3em]">ANALISI</h3>
                                <div className="font-prose text-xl md:text-2xl leading-relaxed text-[#90EE90]/80 columns-1 md:columns-2 gap-12 text-justify">
                                    <FormattedText text={stanza} isPoetry={false} />
                                </div>
                             </div>
                        );
                    })}
                </div>

                {isPresentationMode && summary && (
                    <ContentToggler isOpen={showFull} onToggle={() => setShowFull(!showFull)} label={showFull ? "Chiudi Poesia" : "Leggi i Versi"} />
                )}
                
                <div className="text-center mt-24 pb-16">
                    <p className="font-monumental text-xs tracking-[0.5em] text-[#90EE90]/40 uppercase animate-pulse">E piove su i nostri volti silvani...</p>
                </div>
              </div>
          </div>
      );
  };

  // --- 5. PELLICOLA (ESILIO) ---
  const EsilioLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
      const scrollRef = useRef<HTMLDivElement>(null);
      const [showFull, setShowFull] = useState(!isPresentationMode);

      const scroll = (dir: 'left' | 'right') => {
          if (scrollRef.current) {
              const amount = window.innerWidth * 0.6;
              scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
          }
      };

      if (!showFull && isPresentationMode && summary) {
          return (
            <div className="w-full h-full bg-[#111] flex items-center justify-center relative p-8">
                <div className="max-w-3xl border-y-4 border-zinc-800 bg-zinc-900/90 p-12 text-center shadow-2xl relative">
                    <div className="font-monumental text-xs tracking-[0.5em] text-zinc-500 mb-4 uppercase flex items-center justify-center gap-2"><Film size={16}/> Sintesi</div>
                    {image && (
                        <div className="w-full h-64 mb-8 border-4 border-black shadow-lg overflow-hidden">
                             <img src={image} className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700" alt="Esilio" />
                        </div>
                    )}
                    <div className="font-prose text-2xl text-[#e6dcc8] leading-relaxed text-left">
                        <FormattedText text={summary} />
                    </div>
                    <button onClick={() => setShowFull(true)} className="mt-8 bg-[#e6dcc8] text-black font-monumental px-6 py-2 uppercase tracking-widest hover:bg-white transition-colors">
                        Svolgi la Pellicola
                    </button>
                </div>
            </div>
          )
      }

      return (
          <div className="w-full h-full bg-[#111] flex items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-black border-b-2 border-zinc-800 flex justify-between px-2 overflow-hidden z-20">
                  {Array.from({length: 40}).map((_, i) => <div key={i} className="w-8 h-8 md:w-10 md:h-12 bg-zinc-900 m-2 rounded-sm" />)}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-black border-t-2 border-zinc-800 flex justify-between px-2 overflow-hidden z-20">
                  {Array.from({length: 40}).map((_, i) => <div key={i} className="w-8 h-8 md:w-10 md:h-12 bg-zinc-900 m-2 rounded-sm" />)}
              </div>

              <div ref={scrollRef} className="flex items-center gap-12 md:gap-24 px-12 md:px-24 overflow-x-auto h-full hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                  
                  {/* Image Frame for Film Strip (Ensuring full content visibility) */}
                  {image && (
                    <div className="snap-center shrink-0 w-[85vw] md:w-[50vw] h-[65vh] bg-black relative border-x-[20px] md:border-x-[40px] border-y-[20px] border-black shadow-2xl flex items-center justify-center overflow-hidden">
                        <img src={image} className="w-full h-full object-contain sepia-[0.2]" alt="Esilio Frame" />
                    </div>
                  )}

                  {content.map((frame, idx) => (
                      <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-[60vw] h-[65vh] bg-sepia relative group grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
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

              <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black rounded-full text-white border border-white/20"><ChevronLeft size={32} /></button>
              <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black rounded-full text-white border border-white/20"><ChevronRight size={32} /></button>
              
              {isPresentationMode && (
                  <button onClick={() => setShowFull(false)} className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 bg-black/80 text-white px-4 py-2 font-monumental text-xs border border-white/20">Chiudi Pellicola</button>
              )}
          </div>
      );
  };

  // --- 6. CARTIGLI (NOTTURNO) ---
  const NotturnoLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
      const [index, setIndex] = useState(0);
      const [showFull, setShowFull] = useState(!isPresentationMode);

      return (
          <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 relative">
              <div className="absolute top-8 left-0 w-full text-center z-20">
                   <span className="text-zinc-600 font-monumental text-xs tracking-[1em] uppercase block mb-2">Il Commentario della Tenebra</span>
                   {showFull && <span className="text-zinc-800 font-monumental text-[10px] tracking-widest uppercase block">Cartiglio {index + 1} di {content.length}</span>}
              </div>
              
              <div className="w-full max-w-2xl bg-zinc-900 border-y-2 border-zinc-800 p-8 md:p-12 relative shadow-[0_0_50px_rgba(255,255,255,0.05)] min-h-[50vh] flex flex-col justify-center transition-all">
                  {image && (
                      <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-2 border-zinc-700 shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-20 bg-black">
                          <img src={image} className="w-full h-full object-cover grayscale brightness-75" alt="Notturno" />
                      </div>
                  )}
                  <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_29px,#fff_30px)]"></div>
                  <div className="relative z-10 font-monumental text-lg md:text-xl text-zinc-300 leading-[2.5] tracking-wide text-justify">
                      <FormattedText text={showFull ? content[index] : (summary || "")} />
                  </div>
              </div>
              
              {showFull ? (
                  <div className="mt-12 flex items-center gap-12 z-20">
                      <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0} className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-20 transition-colors">
                          <ChevronLeft size={24} />
                      </button>
                      <div className="w-1 h-8 bg-zinc-800"></div>
                      <button onClick={() => setIndex(i => Math.min(content.length - 1, i + 1))} disabled={index === content.length - 1} className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-20 transition-colors">
                          <ChevronRight size={24} />
                      </button>
                  </div>
              ) : (
                  isPresentationMode && summary && <button onClick={() => setShowFull(true)} className="mt-12 text-zinc-500 hover:text-white font-monumental border-b border-zinc-800 uppercase tracking-widest text-xs pb-2 z-20">Apri Cartigli</button>
              )}
              
              {isPresentationMode && showFull && (
                   <button onClick={() => setShowFull(false)} className="absolute bottom-8 text-zinc-700 hover:text-zinc-500 text-xs uppercase tracking-widest z-20">Torna al Riassunto</button>
              )}
          </div>
      );
  };

  // --- 7. MANIFESTO (IMPRESA) ---
  const ImpresaLayout = ({ content, summary, image }: { content: string[], summary?: string, image?: string }) => {
      const [idx, setIdx] = useState(0);
      const [showFull, setShowFull] = useState(!isPresentationMode);

      return (
          <div className="w-full h-full bg-[#E5E5E5] text-black relative flex overflow-hidden">
              <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-red-600 transform -skew-x-12 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-[20vw] h-[150vh] bg-black transform rotate-12 -translate-x-32 opacity-90"></div>

              <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-16 gap-8 md:gap-12">
                   {showFull && <div className="font-archaic text-[120px] md:text-[200px] leading-none text-black/10 md:text-black absolute top-4 left-4 md:relative md:top-auto md:left-auto z-0 select-none">{idx + 1}</div>}

                   <div className="relative z-10 bg-white p-6 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full border-4 border-black transform md:-rotate-1 transition-transform hover:rotate-0 duration-300 max-h-[85vh] flex flex-col">
                       {image && (
                           <div className="w-full mb-6 border-b-4 border-black shrink-0 bg-stone-100 flex justify-center">
                               {/* Use object-contain to show the full document/flyer */}
                               <img src={image} className="w-auto h-auto max-h-48 md:max-h-64 object-contain grayscale contrast-125" alt="Impresa Flyer" />
                           </div>
                       )}
                       <h2 className="font-monumental text-3xl md:text-6xl text-red-600 mb-6 uppercase leading-none shrink-0 border-b-4 border-black pb-4">
                           {showFull ? "Eia! Eia! Alalà!" : "Fiume"}
                       </h2>
                       <div className="font-monumental text-base md:text-xl leading-snug tracking-wide text-justify flex-1 overflow-y-auto custom-scrollbar pr-2">
                           <FormattedText text={showFull ? content[idx] : (summary || "")} />
                       </div>
                       
                       {showFull ? (
                           <div className="mt-6 flex justify-between border-t-4 border-black pt-4 shrink-0">
                               <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0} className="font-archaic text-xl md:text-2xl hover:bg-black hover:text-white px-4 disabled:opacity-20">INDIETRO</button>
                               <button onClick={() => setIdx(i => Math.min(content.length - 1, i + 1))} disabled={idx === content.length - 1} className="font-archaic text-xl md:text-2xl hover:bg-red-600 hover:text-white px-4 disabled:opacity-20">AVANTI</button>
                           </div>
                       ) : (
                           isPresentationMode && summary && <button onClick={() => setShowFull(true)} className="mt-6 font-archaic text-xl md:text-2xl bg-black text-white px-4 hover:bg-red-600 w-full">LEGGI CRONACA</button>
                       )}
                   </div>
                   
                   {showFull && isPresentationMode && (
                        <button onClick={() => setShowFull(false)} className="absolute top-4 right-4 bg-white border-2 border-black p-2 font-bold z-50">X</button>
                   )}
              </div>
          </div>
      );
  };

  // --- 8. MAUSOLEO (VITTORIALE/LOCATION) ---
  const VittorialeLayout = ({ fragment, summary }: { fragment: Fragment, summary?: string }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full h-full relative bg-stone-900 overflow-y-auto custom-scrollbar flex flex-col">
             {/* Header Section with Main Image */}
             <div className="w-full relative shrink-0">
                <div className="h-[50vh] w-full relative overflow-hidden group">
                    <img src={fragment.image} className="w-full h-full object-cover grayscale transition-all duration-[30s] group-hover:scale-105" alt="Vittoriale Main" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-stone-900/40 to-stone-900"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-5xl">
                         <div className="flex items-center gap-4 text-gold-dust mb-4 animate-fadeIn">
                             <MapPin size={32} />
                             <span className="font-monumental tracking-[0.3em] text-sm">GARDONE RIVIERA</span>
                         </div>
                         <h1 className="font-monumental text-5xl md:text-8xl text-stone-100 leading-none mb-6 drop-shadow-lg">{fragment.label}</h1>
                         <div className="font-prose text-xl md:text-2xl text-stone-300 leading-relaxed border-l-4 border-gold-dust pl-8 bg-black/40 p-4 backdrop-blur-sm max-w-3xl">
                            <FormattedText text={isPresentationMode && summary ? summary : (Array.isArray(fragment.content) ? fragment.content[0] : fragment.content || "")} />
                         </div>
                    </div>
                </div>
             </div>

             {/* Gallery Section - MASONRY LAYOUT for Mixed Aspect Ratios */}
             <div className="flex-1 bg-stone-900 p-4 md:p-12">
                 <h3 className="font-monumental text-gold-dust text-center text-xl tracking-[0.5em] mb-12 uppercase border-b border-gold-dust/20 pb-4 max-w-md mx-auto">
                    Stanze e Segreti
                 </h3>
                 <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1600px] mx-auto">
                    {fragment.gallery?.map((item, i) => (
                        <div key={i} className="break-inside-avoid mb-8 group relative overflow-hidden border border-stone-800 bg-black shadow-lg cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                            {/* Image with w-full but auto height to respect aspect ratio */}
                            <img 
                                src={item.image} 
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-auto object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="font-monumental text-gold-dust text-sm tracking-widest uppercase mb-1">{item.title}</h4>
                                <p className="font-prose text-stone-400 text-lg italic opacity-0 group-hover:opacity-100 transition-opacity delay-100">{item.description}</p>
                                <div className="absolute right-4 bottom-4 text-gold-dust opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
                 <div className="h-24"></div>
             </div>

             {/* Lightbox for Gallery */}
             {selectedImage && (
                 <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-fadeIn" onClick={() => setSelectedImage(null)}>
                     <button className="absolute top-8 right-8 text-white hover:text-gold-dust transition-colors"><X size={48} strokeWidth={1} /></button>
                     <img src={selectedImage} className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)]" alt="Full View" />
                 </div>
             )}
        </div>
    );
  };

  // --- RENDER SWITCHER ---
  const renderContent = () => {
    const content = Array.isArray(fragment.content) ? fragment.content : [fragment.content || ""];
    const summary = fragment.summary;
    const image = fragment.image;

    switch (fragment.id) {
        case 'prodigio': return <GenesiLayout content={content} summary={summary} image={image} />;
        case 'piacere': return <PiacereLayout content={content} summary={summary} image={image} />;
        case 'duse': return <DuseLayout content={content} summary={summary} image={image} />;
        case 'alcyone': return <AlcyoneLayout content={content} summary={summary} image={image} />;
        case 'sera': return <SeraLayout content={content} summary={summary} image={image} />;
        case 'pioggia': return <PioggiaLayout content={content} summary={summary} image={image} />;
        case 'esilio': return <EsilioLayout content={content} summary={summary} image={image} />;
        case 'notturno': return <NotturnoLayout content={content} summary={summary} image={image} />;
        case 'impresa': return <ImpresaLayout content={content} summary={summary} image={image} />;
        case 'vittoriale': return <VittorialeLayout fragment={fragment} summary={summary} />;
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
