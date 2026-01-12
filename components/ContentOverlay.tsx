import React, { useState } from 'react';
import { SectionType } from '../types';
import { X, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { POEMS, TIMELINE } from '../constants';
import { Oracle } from './Oracle';

interface ContentOverlayProps {
  section: SectionType;
  onClose: () => void;
}

export const ContentOverlay: React.FC<ContentOverlayProps> = ({ section, onClose }) => {
  const [pageIndex, setPageIndex] = useState(0);

  // Helper to render specific section content
  const renderContent = () => {
    switch (section) {
      case SectionType.BIOGRAPHY:
        return (
          <div className="h-full flex flex-col">
            <h2 className="text-4xl font-decorative text-dannunzio-gold mb-8 text-center tracking-widest border-b border-dannunzio-gold/30 pb-4">
              Cronache di una Vita Inimitabile
            </h2>
            <div className="flex-1 relative overflow-hidden flex items-center justify-center">
              {/* Horizontal Pagination for Timeline */}
              <div 
                className="flex transition-transform duration-700 ease-in-out w-full h-full" 
                style={{ transform: `translateX(-${pageIndex * 100}%)` }}
              >
                {TIMELINE.map((event, idx) => (
                    <div key={idx} className="min-w-full h-full flex flex-col md:flex-row items-center justify-center p-8 gap-8">
                       <div className="w-full md:w-1/2 h-64 md:h-96 relative border-4 border-double border-dannunzio-gold/40 p-1 bg-black/50 rotate-1 transform hover:rotate-0 transition-all duration-500">
                           <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover sepia-[.5] opacity-80 hover:opacity-100 transition-opacity duration-500"
                           />
                       </div>
                       <div className="w-full md:w-1/2 text-left space-y-4">
                           <h3 className="font-decorative text-6xl text-dannunzio-gold/20 absolute -z-10 -mt-10 -ml-10">{event.year}</h3>
                           <h3 className="font-decorative text-3xl text-dannunzio-gold relative">{event.title}</h3>
                           <p className="font-body text-xl md:text-2xl leading-relaxed text-dannunzio-paper/90 drop-cap">
                             {event.description}
                           </p>
                       </div>
                    </div>
                ))}
              </div>
            </div>
            {/* Nav Controls */}
            <div className="flex justify-center gap-8 mt-4">
                <button 
                  disabled={pageIndex === 0}
                  onClick={() => setPageIndex(p => p - 1)}
                  className="p-3 border border-dannunzio-gold/50 rounded-full hover:bg-dannunzio-gold hover:text-dannunzio-dark transition-all disabled:opacity-20"
                >
                    <ChevronLeft size={24} />
                </button>
                <span className="font-decorative text-xl self-center">{pageIndex + 1} / {TIMELINE.length}</span>
                <button 
                  disabled={pageIndex === TIMELINE.length - 1}
                  onClick={() => setPageIndex(p => p + 1)}
                  className="p-3 border border-dannunzio-gold/50 rounded-full hover:bg-dannunzio-gold hover:text-dannunzio-dark transition-all disabled:opacity-20"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
          </div>
        );

      case SectionType.POETRY:
        const currentPoem = POEMS[pageIndex % POEMS.length]; // Simple cycle for demo
        return (
          <div className="h-full flex flex-col md:flex-row overflow-hidden">
             <div className="w-full md:w-1/3 border-r border-dannunzio-gold/20 p-8 flex flex-col justify-center bg-black/20">
                <h2 className="font-decorative text-3xl md:text-5xl text-dannunzio-gold mb-4 leading-tight">
                  {currentPoem.title}
                </h2>
                <span className="font-script text-3xl text-dannunzio-paper/60 mb-8">{currentPoem.year}</span>
                <div className="flex gap-4">
                    <button 
                        onClick={() => setPageIndex(prev => Math.max(0, prev - 1))}
                        disabled={pageIndex === 0}
                        className="text-sm border border-dannunzio-gold/30 px-4 py-2 hover:bg-dannunzio-gold/10 transition-colors disabled:opacity-30"
                    >
                        Precedente
                    </button>
                    <button 
                        onClick={() => setPageIndex(prev => Math.min(POEMS.length - 1, prev + 1))}
                        disabled={pageIndex === POEMS.length - 1}
                        className="text-sm border border-dannunzio-gold/30 px-4 py-2 hover:bg-dannunzio-gold/10 transition-colors disabled:opacity-30"
                    >
                        Successiva
                    </button>
                </div>
             </div>
             <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-paper-texture bg-blend-multiply bg-[#1a1a1a]">
                <div className="max-w-2xl mx-auto space-y-8">
                    {currentPoem.content.map((stanza, i) => (
                        <p key={i} className="font-body text-2xl leading-loose text-dannunzio-paper whitespace-pre-line">
                            {stanza}
                        </p>
                    ))}
                    <div className="pt-12 text-center text-dannunzio-gold/40">
                        <Quote className="inline-block mb-2" />
                    </div>
                </div>
             </div>
          </div>
        );

        case SectionType.ORACLE:
            return <Oracle />;
        
        case SectionType.FIUME:
        case SectionType.VITTORIALE:
            // Placeholder for sections that follow a similar pattern or single rich page
            return (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                    <h2 className="font-decorative text-5xl text-dannunzio-gold">
                        {section === SectionType.FIUME ? "Reggenza del Carnaro" : "Il Vittoriale degli Italiani"}
                    </h2>
                    <p className="font-body text-2xl max-w-3xl text-dannunzio-paper/80 leading-relaxed">
                        {section === SectionType.FIUME 
                            ? "Un'esperienza rivoluzionaria dove arte, vita e politica si fusero. A Fiume, la costituzione era scritta in versi e la musica era un'istituzione dello Stato."
                            : "Una cittadella monumentale sulle rive del Garda. Un libro di pietre vive, dove ogni stanza, ogni oggetto, ogni ombra racconta la leggenda del Vate."
                        }
                    </p>
                    <div className="w-full h-64 md:h-96 max-w-4xl border-2 border-dannunzio-gold/30 p-2 relative group overflow-hidden">
                        <img 
                            src={section === SectionType.FIUME 
                                ? "https://picsum.photos/800/400?grayscale&blur=2" 
                                : "https://picsum.photos/800/401?grayscale&blur=2"
                            } 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                </div>
            );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in bg-black/80 backdrop-blur-md">
        {/* Book Container */}
      <div className="w-full h-full max-w-7xl bg-dannunzio-green relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col border border-dannunzio-gold/20">
        
        {/* Background Texture for Container */}
        <div className="absolute inset-0 bg-damask opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 border-[16px] border-double border-dannunzio-gold/10 pointer-events-none"></div>

        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 text-dannunzio-gold hover:text-white hover:rotate-90 transition-all duration-300 bg-black/50 p-2 rounded-full border border-dannunzio-gold/30"
        >
            <X size={28} />
        </button>

        {/* Content Area */}
        <div className="flex-1 relative z-10 overflow-hidden">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};
