import React, { useState, useRef, useEffect } from 'react';
    import { consultTheOracle } from '../services/geminiService';
    
    export const Oracle: React.FC = () => {
      const [history, setHistory] = useState<{ type: 'user' | 'daimon', text: string }[]>([]);
      const [input, setInput] = useState('');
      const [thinking, setThinking] = useState(false);
      const bottomRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [history, thinking]);
    
      const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || thinking) return;
    
        const userText = input;
        setInput('');
        setHistory(prev => [...prev, { type: 'user', text: userText }]);
        setThinking(true);
    
        const response = await consultTheOracle(userText);
        setThinking(false);
        setHistory(prev => [...prev, { type: 'daimon', text: response }]);
      };
    
      return (
        <div className="flex flex-col h-full relative p-8">
            <div className="flex-1 overflow-y-auto space-y-12 pr-4 custom-scrollbar">
                {history.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <h2 className="font-archaic text-6xl text-center text-gold-dust animate-pulse-slow">
                            Chiedi all'Ombra
                        </h2>
                    </div>
                )}
                
                {history.map((msg, i) => (
                    <div key={i} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-2xl ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                            <p className={`
                                font-prose text-2xl leading-loose
                                ${msg.type === 'user' ? 'text-parchment/60 italic' : 'text-gold-dust drop-shadow-md'}
                            `}>
                                {msg.text}
                            </p>
                            {msg.type === 'daimon' && (
                                <div className="h-[1px] w-24 bg-blood-dried mt-4 opacity-50" />
                            )}
                        </div>
                    </div>
                ))}
    
                {thinking && (
                    <div className="text-center font-monumental text-sm tracking-[0.5em] text-blood-dried animate-pulse">
                        IL VATE RIMEMBRA...
                    </div>
                )}
                <div ref={bottomRef} />
            </div>
    
            <form onSubmit={handleSubmit} className="mt-8 relative border-t border-gold-dust/20 pt-8">
                <input 
                    type="text" 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="..."
                    className="w-full bg-transparent font-handwriting text-4xl text-parchment focus:outline-none placeholder-parchment/10 text-center"
                    autoFocus
                />
            </form>
        </div>
      );
    };
    