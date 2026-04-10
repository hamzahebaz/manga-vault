import { searchManga, mockMangaDB } from '@/lib/mock-data';
import { MangaCard } from '@/components/ui/MangaCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Manga List | MangaVault',
  description: 'View your bookmarked manga and reading progress.',
}

export default async function MyListPage() {
  return (
    <div className="w-full py-20 px-4 flex flex-col items-center align-middle min-h-screen text-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center rounded-full mb-6 mx-auto">
             <span className="text-4xl">📚</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Your List is Empty</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto text-lg">
          You haven't added any manga to your list yet. Browse the catalog or search for titles to start building your personal library!
        </p>
        <a href="/en/catalog" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-colors shadow-lg hover:scale-105 active:scale-95 duration-200">
           Browse Catalog
        </a>
    </div>
  );
}
