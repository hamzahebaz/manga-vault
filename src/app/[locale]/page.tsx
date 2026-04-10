import {useTranslations} from 'next-intl';
import {getTrendingManga} from '@/lib/mock-data';
import {MangaCard} from '@/components/ui/MangaCard';
import { Flame, Play, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('Index');
  const trending = getTrendingManga();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-slate-900 py-32 md:py-40 overflow-hidden flex items-center min-h-[600px] border-b border-indigo-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left flex flex-col items-center md:items-start">
           <span className="bg-indigo-600/30 text-indigo-300 border border-indigo-500/50 px-5 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 backdrop-blur-md shadow-xl inline-block -rotate-1 transform transition-transform hover:rotate-2">
             ⚔️ Discover Your Next Obsession
           </span>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] leading-tight">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">Unlock</span> The World<br/>of Manga.
           </h1>
           <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mb-10 drop-shadow-md pb-4">
             Dive into an infinite library of seamlessly localized manga and webtoons. Join our community, track your progress, and read instantly in high-definition.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full sm:w-auto">
             <Link href="/catalog" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
                <Play className="w-5 h-5 fill-current" /> Browse Catalog
             </Link>
             <Link href="/random" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
                Surprise Me <ChevronRight className="w-5 h-5" />
             </Link>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-16 flex flex-col gap-16">
        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold flex items-center gap-3 text-slate-900 dark:text-white tracking-tight">
              <span className="bg-orange-100 dark:bg-orange-950/30 p-2 rounded-lg text-orange-500">
                <Flame className="w-6 h-6 fill-current animate-pulse" />
              </span>
              {t('trending')}
            </h2>
            <Link href="/catalog" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-1 group">
               View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {trending.map(manga => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
