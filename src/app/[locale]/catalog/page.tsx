import { searchManga, mockMangaDB } from '@/lib/mock-data';
import { MangaCard } from '@/components/ui/MangaCard';
import { Search } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manga Catalog Directory - Find Your Next Favorite Webtoon | MangaVault',
  description: 'Browse through thousands of the latest and most popular Manga, Manhwa, and Webtoons securely in high quality English and French translation.',
  keywords: 'manga catalog, read manga, manhwa directory, manga listing, popular manga',
}

export default async function CatalogPage({
  searchParams,
  params
}: {
  searchParams: Promise<{ q?: string }>;
  params: Promise<{ locale: string }>;
}) {
  const { q } = await searchParams;
  const { locale } = await params;
  
  const query = q || '';
  const results = query ? searchManga(query, locale) : mockMangaDB;

  return (
    <div className="w-full py-12 px-4 max-w-7xl mx-auto flex flex-col gap-8 min-h-screen">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b dark:border-slate-800 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Manga Directory</h1>
            <p className="text-slate-500">Discover and browse through {mockMangaDB.length} curated manga titles.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
                type="text"
                defaultValue={query}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 shadow-sm"
                placeholder="Search series, authors..."
            />
          </div>
       </div>

       <div className="flex items-center gap-4 flex-wrap text-sm mb-2">
         {/* Filter Toggles Demo */}
         <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-sm">All</button>
         <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 transition-colors">Ongoing</button>
         <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 transition-colors">Completed</button>
       </div>

       {results.length > 0 ? (
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
           {results.map(manga => (
             <MangaCard key={manga.id} manga={manga} />
           ))}
         </div>
       ) : (
         <div className="py-32 text-center flex flex-col items-center">
            <Search className="w-16 h-16 text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">No results found</h3>
            <p className="text-slate-500 mt-2">We couldn't find any manga matching "{query}".</p>
         </div>
       )}
    </div>
  );
}
