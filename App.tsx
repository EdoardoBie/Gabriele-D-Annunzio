import React, { useState } from 'react';
    import { Fragment } from './types';
    import { FragmentField } from './components/FragmentField';
    import { Manifestation } from './components/Manifestation';
    import { Monitor, BookOpen, Library, X, ExternalLink } from 'lucide-react';
    
    const App: React.FC = () => {
      const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
      const [isPresentationMode, setIsPresentationMode] = useState(false);
      const [showBibliography, setShowBibliography] = useState(false);

      const SOURCES = [
        { name: "Studenti.it - Vita e Opere", url: "https://www.studenti.it/gabriele-d-annunzio-vita-opere.html" },
        { name: "Treccani - Enciclopedia", url: "https://www.treccani.it/enciclopedia/gabriele-d-annunzio/" },
        { name: "WeSchool - Letteratura", url: "https://library.weschool.com/lezioni/letteratura/letteratura-italiana/ottocento/gabriele-d-annunzio" }
      ];
    
      return (
        <main className="relative w-screen h-screen overflow-hidden bg-void selection:bg-blood-dried selection:text-gold-dust">
          
          {/* Aesthetic Layers (Background) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Breathing light spot */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold-dust rounded-full blur-[150px] opacity-[0.03] animate-pulse-slow"></div>
          </div>
    
          {/* The Exploratory Field */}
          <FragmentField onSelect={setActiveFragment} />

          {/* MODE SWITCHER - Artistic UI */}
          <div className="absolute top-6 right-6 z-40 flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-gold-dust/20 group hover:border-gold-dust/50 transition-all">
             
             {/* Bibliography Button */}
             <button 
                onClick={() => setShowBibliography(true)}
                className="p-2 rounded-full text-parchment/60 hover:text-gold-dust hover:bg-gold-dust/10 transition-all duration-300"
                title="Fonti & Bibliografia"
             >
                <Library size={18} />
             </button>

             <div className="w-[1px] h-4 bg-gold-dust/20"></div>

             <span className="font-monumental text-[10px] tracking-widest text-parchment/60 uppercase hidden md:inline">Modalità</span>
             
             <button 
                onClick={() => setIsPresentationMode(false)}
                className={`p-2 rounded-full transition-all duration-300 ${!isPresentationMode ? 'bg-gold-dust text-void shadow-[0_0_10px_rgba(197,160,89,0.5)]' : 'text-parchment/40 hover:text-parchment'}`}
                title="Versione Studio (Completa)"
             >
                <BookOpen size={18} />
             </button>

             <button 
                onClick={() => setIsPresentationMode(true)}
                className={`p-2 rounded-full transition-all duration-300 ${isPresentationMode ? 'bg-gold-dust text-void shadow-[0_0_10px_rgba(197,160,89,0.5)]' : 'text-parchment/40 hover:text-parchment'}`}
                title="Versione Presentazione (Riassunta)"
             >
                <Monitor size={18} />
             </button>
          </div>
    
          {/* Central Anchor Text (Optional, minimal) */}
          {!activeFragment && (
              <div className="absolute bottom-12 left-12 z-0 pointer-events-none">
                  <h1 className="font-monumental text-sm tracking-[0.8em] text-parchment/20">
                      GABRIELE D'ANNUNZIO
                  </h1>
                  {isPresentationMode && (
                      <h2 className="font-handwriting text-2xl text-gold-dust/40 mt-2">Versione Presentazione</h2>
                  )}
              </div>
          )}
    
          {/* The Manifestation (Overlay) */}
          {activeFragment && (
            <Manifestation 
                fragment={activeFragment} 
                onClose={() => setActiveFragment(null)} 
                isPresentationMode={isPresentationMode}
            />
          )}

          {/* BIBLIOGRAPHY MODAL */}
          {showBibliography && (
             <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
                 <div className="relative w-full max-w-md bg-void border border-gold-dust/40 shadow-[0_0_50px_rgba(197,160,89,0.1)] p-8 flex flex-col items-center text-center">
                     <button 
                        onClick={() => setShowBibliography(false)}
                        className="absolute top-4 right-4 text-parchment/40 hover:text-gold-dust transition-colors cursor-pointer"
                     >
                         <X size={24} strokeWidth={1} />
                     </button>

                     <div className="mb-6">
                         <Library size={32} className="text-gold-dust mb-4 mx-auto opacity-80" />
                         <h2 className="font-archaic text-2xl text-gold-dust tracking-widest uppercase">Bibliotheca</h2>
                         <p className="font-monumental text-[10px] text-parchment/40 tracking-[0.3em] mt-2">FONTI E RIFERIMENTI</p>
                     </div>

                     <div className="w-full space-y-4">
                        {SOURCES.map((source, idx) => (
                            <a 
                                key={idx}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between w-full p-4 border border-white/5 hover:border-gold-dust/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="font-prose text-lg text-parchment/80 group-hover:text-gold-dust transition-colors text-left">{source.name}</span>
                                <ExternalLink size={16} className="text-parchment/30 group-hover:text-gold-dust transition-colors" />
                            </a>
                        ))}
                     </div>
                 </div>
             </div>
          )}
    
        </main>
      );
    };
    
    export default App;