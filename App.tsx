import React, { useState } from 'react';
    import { Fragment } from './types';
    import { FragmentField } from './components/FragmentField';
    import { Manifestation } from './components/Manifestation';
    
    const App: React.FC = () => {
      const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
    
      return (
        <main className="relative w-screen h-screen overflow-hidden bg-void selection:bg-blood-dried selection:text-gold-dust">
          
          {/* Aesthetic Layers (Background) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Breathing light spot */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold-dust rounded-full blur-[150px] opacity-[0.03] animate-pulse-slow"></div>
          </div>
    
          {/* The Exploratory Field */}
          <FragmentField onSelect={setActiveFragment} />
    
          {/* Central Anchor Text (Optional, minimal) */}
          {!activeFragment && (
              <div className="absolute bottom-12 left-12 z-0 pointer-events-none">
                  <h1 className="font-monumental text-sm tracking-[0.8em] text-parchment/20">
                      GABRIELE D'ANNUNZIO
                  </h1>
              </div>
          )}
    
          {/* The Manifestation (Overlay) */}
          {activeFragment && (
            <Manifestation 
                fragment={activeFragment} 
                onClose={() => setActiveFragment(null)} 
            />
          )}
    
        </main>
      );
    };
    
    export default App;
    