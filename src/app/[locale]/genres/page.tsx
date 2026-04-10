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
  const currentPage = parseInt(resolvedParams.page || '1', 10);
  const limit = 20;
  
  // Extract unique genres
  const allGenres = new Set<string>();
  mockMangaDB.forEach(m => m.genres.forEach(g => allGenres.add(g)));
  const genres = ['All', ...Array.from(allGenres).sort()];

  // Filter Manga
  const allFilteredManga = activeGenre === 'All' 
     ? mockMangaDB 
     : mockMangaDB.filter(m => m.genres.includes(activeGenre));

  // Pagination slice
  const totalPages = Math.ceil(allFilteredManga.length / limit);
  const paginatedManga = allFilteredManga.slice((currentPage - 1) * limit, currentPage * limit);

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
                    href={g === 'All' ? '/' + locale + '/genres' : '/' + locale + '/genres?genre=' + encodeURIComponent(g)} 
                    className={'px-6 py-3 border rounded-xl font-bold transition-colors shadow-sm hover:shadow-md ' + (isActive 
                        ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500')}
                 >
                    {g}
                 </Link>
             );
          })}
       </div>

       <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{activeGenre} Manga</h2>
            <span className="text-slate-500">{allFilteredManga.length} titles</span>
       </div>

       {paginatedManga.length > 0 ? (
           <>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
               {paginatedManga.map(manga => (
                 <MangaCard key={manga.id} manga={manga} />
               ))}
             </div>
             
             {/* Pagination Controls */}
             {totalPages > 1 && (
               <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t dark:border-slate-800">
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNumber = i + 1;
                    const isCurrent = pageNumber === currentPage;
                    const queryStr = activeGenre !== 'All' ? '&genre=' + encodeURIComponent(activeGenre) : '';
                    return (
                      <a 
                        key={pageNumber} 
                        href={'/' + locale + '/genres?page=' + pageNumber + queryStr}
                        className={'w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-all ' + (isCurrent ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-600 border hover:border-indigo-500')}
                      >
                        {pageNumber}
                      </a>
                    )
                  })}
               </div>
             )}
           </>
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