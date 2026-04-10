import { mockMangaDB } from '@/lib/mock-data';
import { MangaCard } from '@/components/ui/MangaCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Rated Popular Manga | MangaVault',
  description: 'Discover the ultimate ranking of the most beloved and highest-rated manga on the internet.',
}

export default async function PopularPage() {
  // Sort DB by rating
  const sorted = [...mockMangaDB].sort((a,b) => b.rating - a.rating);

  return (
    <div className="w-full py-12 px-4 max-w-7xl mx-auto flex flex-col gap-8 min-h-screen">
       <div className="border-b dark:border-slate-800 pb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Top Rated Manga</h1>
            <p className="text-slate-500">The most legendary and critically acclaimed stories globally.</p>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
         {sorted.map(manga => (
           <MangaCard key={manga.id} manga={manga} />
         ))}
       </div>
    </div>
  );
}
