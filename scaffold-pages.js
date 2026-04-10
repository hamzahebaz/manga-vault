const fs = require('fs');
const path = require('path');

const pages = [
    { name: 'explore', comp: 'Explore', title: 'Explore Manga' },
    { name: 'trending', comp: 'Trending', title: 'Trending Manga' },
    { name: 'genres', comp: 'Genres', title: 'Browse by Genres' },
    { name: 'legal', comp: 'Legal', title: 'Legal Information' },
    { name: 'terms', comp: 'TermsOfService', title: 'Terms of Service' },
    { name: 'privacy', comp: 'PrivacyPolicy', title: 'Privacy Policy' },
    { name: 'cookies', comp: 'CookiePolicy', title: 'Cookie Policy' },
    { name: 'dmca', comp: 'DMCA', title: 'DMCA Policy' },
];

const basePath = path.join(__dirname, 'src', 'app', '[locale]');

pages.forEach(p => {
    const dir = path.join(basePath, p.name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let content = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${p.title} | MangaVault',
  description: '${p.title} information for MangaVault.',
}

export default async function ${p.comp}Page() {
  return (
    <div className="w-full py-20 px-4 flex flex-col items-center align-middle min-h-screen text-center bg-slate-50 dark:bg-slate-950">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">${p.title}</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          This is a placeholder for the ${p.title} page. Content will be populated here shortly.
        </p>
    </div>
  );
}
`;

    // For explore and trending, we can make them simple redirects to popular/catalog or just show a nice placeholder.
    if (p.name === 'explore' || p.name === 'trending') {
        content = `import { mockMangaDB } from '@/lib/mock-data';
import { MangaCard } from '@/components/ui/MangaCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${p.title} | MangaVault',
}

export default async function ${p.comp}Page() {
  return (
    <div className="w-full py-12 px-4 max-w-7xl mx-auto flex flex-col gap-8 min-h-screen">
       <div className="border-b dark:border-slate-800 pb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">${p.title}</h1>
            <p className="text-slate-500">Discover handpicked selections for you.</p>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
         {mockMangaDB.map(manga => (
           <MangaCard key={manga.id} manga={manga} />
         ))}
       </div>
    </div>
  );
}`;
    }

    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});

// Create random redirect page
const randDir = path.join(basePath, 'random');
if (!fs.existsSync(randDir)) fs.mkdirSync(randDir, { recursive: true });
fs.writeFileSync(path.join(randDir, 'page.tsx'), `import { mockMangaDB } from '@/lib/mock-data';
import { redirect } from 'next/navigation';

export default async function RandomPage({ params }: { params: Promise<{locale: string}> }) {
    const { locale } = await params;
    const randomManga = mockMangaDB[Math.floor(Math.random() * mockMangaDB.length)];
    redirect(\`/\${locale}/manga/\${randomManga.slug}\`);
}
`);

console.log('Successfully created all requested pages.');
