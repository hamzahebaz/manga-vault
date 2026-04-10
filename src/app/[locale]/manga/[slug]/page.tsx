import { getMangaBySlug } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, BookOpen, Clock, Tag, ChevronLeft } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;
  const manga = getMangaBySlug(slug);

  if (!manga) return { title: 'Manga Not Found | MangaVault' };

  const title = manga.title[locale] || manga.title.en;
  const description = (manga.synopsis[locale] || manga.synopsis.en).substring(0, 160);

  return {
    title: `${title} - Read Manga Online | MangaVault`,
    description,
    openGraph: {
      title,
      description,
      images: [manga.coverImage],
      type: 'article',
    },
    alternates: {
      canonical: `/${locale}/manga/${slug}`,
    }
  };
}

export default async function MangaDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const manga = getMangaBySlug(slug);

  if (!manga) {
    notFound();
  }

  const title = manga.title[locale] || manga.title.en;
  const synopsis = manga.synopsis[locale] || manga.synopsis.en;

  // Fake Chapters
  const chaptersList = Array.from({ length: Math.max(12, manga.chapters || 12) }).map((_, i) => ({
      number: manga.chapters ? manga.chapters - i : 12 - i,
      date: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(locale),
      title: `Chapter ${manga.chapters ? manga.chapters - i : 12 - i}`
  })).slice(0, 50);

  // Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ComicSeries',
    name: title,
    description: synopsis,
    author: {
      '@type': 'Person',
      name: manga.author,
    },
    image: manga.coverImage,
    genre: manga.genres,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: manga.rating,
      ratingCount: manga.ratingCount,
      bestRating: '10',
      worstRating: '1',
    },
  };

  return (
    <div className="w-full flex justify-center py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 h-full relative">
         <div className="col-span-1">
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 group">
                <div className="relative aspect-[2/3] w-full">
                  <Image src={manga.coverImage} alt={title} fill priority unoptimized className="object-cover" />
                </div>
                <div className="p-6">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform active:scale-95 mb-3 flex justify-center items-center gap-2">
                        <BookOpen className="w-5 h-5"/> Read First Chapter
                    </button>
                    <button className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors text-slate-800 dark:text-slate-200">
                        Add to Watchlist
                    </button>
                </div>
            </div>
         </div>

         <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
            <div>
               <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white leading-tight">{title}</h1>
               <div className="flex items-center gap-4 text-slate-500 mb-6 font-medium flex-wrap">
                  <span className="flex items-center gap-1.5"><Star className="w-5 h-5 fill-amber-500 text-amber-500" /> {manga.rating} ({manga.ratingCount.toLocaleString()})</span>
                  <span className="flex items-center gap-1.5"><Tag className="w-5 h-5" /> {manga.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-5 h-5" /> {manga.status}</span>
                  <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-bold">{manga.year}</span>
               </div>
               
               <div className="flex flex-wrap gap-2 mb-8">
                 {manga.genres.map(g => (
                    <span key={g} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-semibold">{g}</span>
                 ))}
               </div>

               <h2 className="text-xl font-bold mb-3 border-b dark:border-slate-800 pb-2">Synopsis</h2>
               <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {synopsis}
               </div>
            </div>

            <div className="mt-4">
               <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b dark:border-slate-800 pb-4">
                  <BookOpen className="w-6 h-6 text-indigo-500" /> Chapters
               </h2>
               <div className="flex flex-col gap-3">
                  {chaptersList.map((chap, idx) => (
                     <Link href={`/${locale}/manga/${slug}/chapter/${chap.number}`} key={idx} className="flex justify-between items-center p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors cursor-pointer group shadow-sm hover:shadow-md">
                        <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                           {chap.title}
                        </div>
                        <div className="text-sm text-slate-500 font-medium flex items-center gap-2">
                           {chap.date}
                           <span className="bg-slate-100 dark:bg-slate-800 px-2 flex items-center justify-center rounded text-xs py-1 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Read</span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
