'use client';

import { useState, useEffect } from 'react';
import { useRouter } from '@/i18n/routing';
import { mockMangaDB } from '@/lib/mock-data';
import Image from 'next/image';
import { Sparkles, Dice5, ArrowRight } from 'lucide-react';

export default function SurpriseMePage({ params }: { params: Promise<{locale: string}> }) {
  const router = useRouter();
  const [spinning, setSpinning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedManga, setSelectedManga] = useState(mockMangaDB[0]);

  const triggerRoulette = () => {
    if (spinning) return;
    setSpinning(true);
    
    let spins = 0;
    const maxSpins = 30; // Number of rapid cycles
    const intervalTime = 50; // Speed of spin

    const spinInterval = setInterval(() => {
       const randomIndex = Math.floor(Math.random() * mockMangaDB.length);
       setCurrentIndex(randomIndex);
       spins++;

       if (spins >= maxSpins) {
           clearInterval(spinInterval);
           setSpinning(false);
           setSelectedManga(mockMangaDB[randomIndex]);
       }
    }, intervalTime);
  };

  const currentDisplay = spinning ? mockMangaDB[currentIndex] : selectedManga;

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Blur derived from featured image */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 transition-opacity duration-500">
           {currentDisplay.featuredImage && (
              <Image src={currentDisplay.featuredImage} alt="bg" fill className="object-cover blur-3xl scale-110" unoptimized={true} />
           )}
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 flex items-center gap-4 drop-shadow-sm">
                <Sparkles className="w-12 h-12 text-indigo-500" />
                Surprise Me
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl">
                Don't know what to read? Spin the roulette and let us pick a guaranteed banger for you!
            </p>

            {/* Display Card */}
            <div className={'w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 ' + (spinning ? 'scale-95 blur-[2px]' : 'scale-100 blur-0 ring-4 ring-indigo-500/50')}>
                <div className="relative h-64 w-full bg-slate-800">
                   {currentDisplay.featuredImage && (
                       <Image src={currentDisplay.featuredImage} alt="Cover" fill className="object-cover opacity-80" unoptimized={true} />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                   
                   <div className="absolute bottom-6 left-6 right-6 text-left">
                       <h2 className="text-3xl font-bold text-white mb-2 line-clamp-1">{currentDisplay.title.en}</h2>
                       <div className="flex gap-2 flex-wrap">
                          {currentDisplay.genres.map(g => (
                              <span key={g} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                  {g}
                              </span>
                          ))}
                       </div>
                   </div>
                </div>
            </div>

            {/* Controls */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={triggerRoulette} 
                  disabled={spinning}
                  className={'flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-lg ' + (spinning ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95')}
                >
                    <Dice5 className="w-6 h-6" />
                    {spinning ? 'Rolling...' : 'Spin the Wheel'}
                </button>
                
                {!spinning && (
                    <button 
                      onClick={() => router.push('/manga/' + currentDisplay.slug)}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        Read Now <ArrowRight className="w-6 h-6" />
                    </button>
                )}
            </div>
        </div>
    </div>
  );
}
