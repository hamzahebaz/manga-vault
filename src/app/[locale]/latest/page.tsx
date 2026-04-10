import { mockMangaDB } from '@/lib/mock-data';
import { MangaCard } from '@/components/ui/MangaCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Manga Updates | MangaVault',
  description: 'Find out what the most recently published manga and webtoons are. Fresh translations delivered daily.',
}

export default async function LatestPage() {
  // Sort DB by Year DESC
  const sorted = [...mockMangaDB].sort((a,b) => b.year - a.year);

  return (
    <div className="w-full py-12 px-4 max-w-7xl mx-auto flex flex-col gap-8 min-h-screen">
       <div className="border-b dark:border-slate-800 pb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Latest Releases</h1>
            <p className="text-slate-500">Stay up to date with the newest releases hitting the shelves.</p>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
         {sorted.map(manga => (
           <MangaCard key={manga.id} manga={manga} />
         ))}
       </div>
    </div>
  );
}
