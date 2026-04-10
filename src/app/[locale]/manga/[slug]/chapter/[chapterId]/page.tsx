import { getMangaBySlug } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Settings, Maximize, MessageSquare } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string; locale: string; chapterId: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug, locale, chapterId } = await params;
  const manga = getMangaBySlug(slug);

  if (!manga) return { title: 'Chapter Not Found | MangaVault' };
  const title = manga.title[locale] || manga.title.en;

  return {
    title: `Read ${title} Chapter ${chapterId} | MangaVault`,
  };
}

export default async function ChapterReaderPage({ params }: Props) {
  const { slug, locale, chapterId } = await params;
  const manga = getMangaBySlug(slug);

  if (!manga) {
    notFound();
  }

  const title = manga.title[locale] || manga.title.en;
  
  // Convert current chapter string to number for prev/next calculation
  const currentChapter = parseInt(chapterId);
  const totalChapters = manga.chapters || 12; // fallback
  const hasNext = currentChapter < totalChapters;
  const hasPrev = currentChapter > 1;

  // We will generate 4 dummy manga images for this chapter
  // Using generic comic placeholoders
  const chapterPages = [
    `https://images.unsplash.com/photo-1542838686-37ed7a056ed6?q=80&w=2000&auto=format&fit=crop`,
    `https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2000&auto=format&fit=crop`,
    `https://images.unsplash.com/photo-1560967520-2c7003ff0646?q=80&w=2000&auto=format&fit=crop`,
    `https://images.unsplash.com/photo-1542838686-37ed7a056ed6?q=80&w=2000&auto=format&fit=crop`
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-300 min-h-screen font-sans">
      {/* Reader Nav */}
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-4 w-full flex items-center justify-between">
         <div className="flex items-center gap-4">
             <Link href={`/${locale}/manga/${slug}`} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6" />
             </Link>
             <div className="flex items-center gap-2">
                 {manga.coverImage && <Image src={manga.coverImage} alt={title} width={36} height={36} unoptimized className="rounded object-cover h-9 w-9" />}
                 <div>
                    <h1 className="font-bold text-white text-sm md:text-base leading-tight">{title}</h1>
                    <p className="text-xs text-slate-400">Chapter {chapterId}</p>
                 </div>
             </div>
         </div>
         <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors" title="Settings"><Settings className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors hidden sm:block" title="Comments"><MessageSquare className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors hidden sm:block" title="Fullscreen"><Maximize className="w-5 h-5" /></button>
         </div>
      </div>

      {/* Pages Container */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center pb-20 pt-8 gap-4 px-2">
          {chapterPages.map((pageSrc, i) => (
             <div key={i} className="relative w-full shadow-2xl">
                {/* Simulated vertical scroll reader, uses next/image with unoptimized for dummy unsplash paths */}
                <Image 
                   src={pageSrc} 
                   alt={`Page ${i+1}`} 
                   width={800} 
                   height={1200}
                   className="w-full h-auto object-contain rounded filter grayscale contrast-125" 
                   unoptimized 
                />
                <div className="absolute bottom-2 right-4 text-xs font-bold text-white/50 bg-black/40 px-2 py-1 rounded">{i+1}</div>
             </div>
          ))}

          {/* Reader Footer Controls */}
          <div className="w-full flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl mt-12 shadow-xl">
             {hasPrev ? (
                 <Link href={`/${locale}/manga/${slug}/chapter/${currentChapter - 1}`} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold px-4 py-2 bg-indigo-950/30 rounded-lg hover:bg-indigo-950/50 transition-colors">
                    <ChevronLeft className="w-5 h-5" /> Prev Chapter
                 </Link>
             ) : (
                 <button disabled className="flex items-center gap-2 text-slate-600 font-bold px-4 py-2 cursor-not-allowed">
                    <ChevronLeft className="w-5 h-5" /> Prev Chapter
                 </button>
             )}

             <Link href={`/${locale}/manga/${slug}`} className="text-white hover:text-indigo-400 font-semibold transition-colors">
                Back to Details
             </Link>

             {hasNext ? (
                 <Link href={`/${locale}/manga/${slug}/chapter/${currentChapter + 1}`} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold px-4 py-2 bg-indigo-950/30 rounded-lg hover:bg-indigo-950/50 transition-colors">
                    Next Chapter <ChevronRight className="w-5 h-5" />
                 </Link>
             ) : (
                 <button disabled className="flex items-center gap-2 text-slate-600 font-bold px-4 py-2 cursor-not-allowed">
                    Next Chapter <ChevronRight className="w-5 h-5" />
                 </button>
             )}
          </div>
      </div>
    </div>
  );
}
