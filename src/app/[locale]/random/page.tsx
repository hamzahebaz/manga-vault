import { mockMangaDB } from '@/lib/mock-data';
import { redirect } from 'next/navigation';

export default async function RandomPage({ params }: { params: Promise<{locale: string}> }) {
    const { locale } = await params;
    const randomManga = mockMangaDB[Math.floor(Math.random() * mockMangaDB.length)];
    redirect(`/${locale}/manga/${randomManga.slug}`);
}
