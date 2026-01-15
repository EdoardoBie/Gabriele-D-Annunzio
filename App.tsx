import React, { useState } from 'react';
    import { Fragment } from './types';
    import { FragmentField } from './components/FragmentField';
    import { Manifestation } from './components/Manifestation';
    import { Monitor, BookOpen } from 'lucide-react';
    
    const App: React.FC = () => {
      const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
      const [isPresentationMode, setIsPresentationMode] = useState(false);
    
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
             <span className="font-monumental text-[10px] tracking-widest text-parchment/60 uppercase hidden md:inline">Modalità</span>
             
             <button 
                onClick={() => setIsPresentationMode(false)}
                className={`p-2 rounded-full transition-all duration-300 ${!isPresentationMode ? 'bg-gold-dust text-void shadow-[0_0_10px_rgba(197,160,89,0.5)]' : 'text-parchment/40 hover:text-parchment'}`}
                title="Versione Studio (Completa)"
             >
                <BookOpen size={18} />
             </button>

             <div className="w-[1px] h-4 bg-gold-dust/20"></div>

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
    
        </main>
      );
    };
    
    export default App;