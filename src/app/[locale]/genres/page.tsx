import { mockMangaDB } from '@/lib/mock-data';
import { Metadata } from 'next';
import Link from 'next/link';
import { MangaCard } from '@/components/ui/MangaCard';

export const metadata: Metadata = {
  title: 'Browse Manga by Genres | MangaVault',
  description: 'Explore our vast collection of manga categorized by genres like Action, Adventure, Fantasy, and more.',
}

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function GenresPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedParams = await searchParams;
  const activeGenre = resolvedParams.genre || 'All';
  
  // Extract unique genres
  const allGenres = new Set<string>();
  mockMangaDB.forEach(m => m.genres.forEach(g => allGenres.add(g)));
  const genres = ['All', ...Array.from(allGenres).sort()];

  // Filter Manga
  const filteredManga = activeGenre === 'All' 
     ? mockMangaDB 
     : mockMangaDB.filter(m => m.genres.includes(activeGenre));

  return (
    <div className="w-full py-12 px-4 max-w-7xl mx-auto min-h-screen">
       <div className="border-b dark:border-slate-800 pb-8 mb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Browse by Genres</h1>
            <p className="text-slate-500">Find the exact type of story you are looking for.</p>
       </div>
       
       <div className="flex flex-wrap gap-4 mb-12">
          {genres.map(g => {
             const isActive = activeGenre === g;
             return (
                 <Link 
                    key={g} 
                    href={g === 'All' ? \`/\${locale}/genres\` : \`/\${locale}/genres?genre=\${encodeURIComponent(g)}\`} 
                    className={\`px-6 py-3 border rounded-xl font-bold transition-colors shadow-sm hover:shadow-md \${isActive 
                        ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500'}\`}
                 >
                    {g}
                 </Link>
             );
          })}
       </div>

       <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{activeGenre} Manga</h2>
            <span className="text-slate-500">{filteredManga.length} titles</span>
       </div>

       {filteredManga.length > 0 ? (
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
             {filteredManga.map(manga => (
               <MangaCard key={manga.id} manga={manga} />
             ))}
           </div>
       ) : (
           <div className="text-center py-20 text-slate-500">
               <span className="text-6xl mb-4 block">🥺</span>
               <p className="text-xl font-semibold mb-2">No manga found for this genre</p>
               <p>Our database is still growing. Check back later!</p>
           </div>
       )}
    </div>
  );
}