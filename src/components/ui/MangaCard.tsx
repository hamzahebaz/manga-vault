import Image from 'next/image';
import Link from 'next/link';
import { Star, BookOpen } from 'lucide-react';
import type { Manga } from '@/lib/mock-data';
import { useLocale } from 'next-intl';

export function MangaCard({ manga }: { manga: Manga }) {
  const locale = useLocale();
  const title = manga.title[locale] || manga.title.en;

  return (
    <Link href={`/${locale}/manga/${manga.slug}`} className="group relative rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {manga.coverImage ? (
          <Image
            src={manga.coverImage}
            alt={title}
            fill
            unoptimized={true}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            No Image
          </div>
        )}
        <div className="absolute top-2 left-2 flex gap-1">
          {manga.status === 'Ongoing' && (
            <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-sm shadow-sm font-semibold tracking-wide">ONGOING</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xs font-medium flex items-center gap-1">
             <BookOpen className="w-4 h-4" /> {manga.chapters} Chapters
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[15px] leading-tight mb-2 line-clamp-2 text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <div className="mt-auto pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
           <div className="flex flex-wrap gap-1">
              {manga.genres.slice(0, 1).map(g => (
                 <span key={g} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-sm">{g}</span>
              ))}
           </div>
           <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{manga.rating}</span>
           </div>
        </div>
      </div>
    </Link>
  );
}
