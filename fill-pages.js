const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src', 'app', '[locale]');

// --- 1. Genres Page ---
const genresContent = `import { mockMangaDB } from '@/lib/mock-data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Browse Manga by Genres | MangaVault',
  description: 'Explore our vast collection of manga categorized by genres like Action, Adventure, Fantasy, and more.',
}

export default async function GenresPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  
  // Extract unique genres
  const allGenres = new Set<string>();
  mockMangaDB.forEach(m => m.genres.forEach(g => allGenres.add(g)));
  const genres = Array.from(allGenres).sort();

  return (
    <div className="w-full py-12 px-4 max-w-7xl mx-auto min-h-screen">
       <div className="border-b dark:border-slate-800 pb-8 mb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Browse by Genres</h1>
            <p className="text-slate-500">Find the exact type of story you are looking for.</p>
       </div>
       <div className="flex flex-wrap gap-4">
          {genres.map(g => (
             <Link key={g} href={\`/\${locale}/catalog?q=\${g}\`} className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 transition-colors shadow-sm hover:shadow-md">
                {g}
             </Link>
          ))}
       </div>
    </div>
  );
}`;
fs.writeFileSync(path.join(basePath, 'genres', 'page.tsx'), genresContent);

// --- 2. Legal Landing ---
const legalContent = `import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Cookie, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Information | MangaVault',
}

export default async function LegalPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  return (
    <div className="w-full py-16 px-4 max-w-4xl mx-auto min-h-screen">
       <div className="border-b dark:border-slate-800 pb-8 mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Legal Center</h1>
            <p className="text-slate-500">Important information regarding your rights, our policies, and data handling.</p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={\`/\${locale}/terms\`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <FileText className="w-8 h-8 text-indigo-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500">Terms of Service</h3>
             <p className="text-slate-500 text-sm">The rules and guidelines for using MangaVault.</p>
          </Link>
          <Link href={\`/\${locale}/privacy\`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <Shield className="w-8 h-8 text-indigo-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500">Privacy Policy</h3>
             <p className="text-slate-500 text-sm">How we collect, use, and protect your personal data.</p>
          </Link>
          <Link href={\`/\${locale}/cookies\`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <Cookie className="w-8 h-8 text-indigo-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500">Cookie Policy</h3>
             <p className="text-slate-500 text-sm">Information about how we use cookies and tracking technology.</p>
          </Link>
          <Link href={\`/\${locale}/dmca\`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-red-500">DMCA Policy</h3>
             <p className="text-slate-500 text-sm">Copyright infringement reporting and protection policies.</p>
          </Link>
       </div>
    </div>
  );
}`;
fs.writeFileSync(path.join(basePath, 'legal', 'page.tsx'), legalContent);

// Function to generate standard text pages
function generateTextPage(title, contentBlocks) {
    let htmlContent = contentBlocks.map(block => `
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">${block.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">${block.text}</p>
    `).join('');

    return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | MangaVault',
}

export default async function Page() {
  return (
    <div className="w-full py-16 px-4 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 border-b dark:border-slate-800 pb-8">${title}</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-500 mb-8 font-medium">Last Updated: April 10, 2026</p>
            ${htmlContent}
        </div>
    </div>
  );
}`;
}

// terms
fs.writeFileSync(path.join(basePath, 'terms', 'page.tsx'), generateTextPage('Terms of Service', [
    { title: '1. Acceptance of Terms', text: 'By accessing or using MangaVault, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.' },
    { title: '2. User Accounts', text: 'When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.' },
    { title: '3. Content Accessibility', text: 'Our service allows you to discover and read manga. We act as an indexing directory and do not host copyrighted files on our own servers without permission. The availability of content may vary based on your geographic location.' },
    { title: '4. Acceptable Use', text: 'You agree not to use the platform for any unlawful purpose, or in any way that interrupts, damages, or impairs the service. Automated scraping of our database without written consent is strictly prohibited.' }
]));

// privacy
fs.writeFileSync(path.join(basePath, 'privacy', 'page.tsx'), generateTextPage('Privacy Policy', [
    { title: '1. Information We Collect', text: 'We collect information you provide directly to us, such as when you create an account, update your profile, or build your manga wishlist. This includes your email address, username, and reading preferences.' },
    { title: '2. How We Use Your Information', text: 'We use the information we collect to provide, maintain, and improve our services, to personalize your reading experience, to send you technical notices, and to respond to your customer service requests.' },
    { title: '3. Data Security', text: 'We use reasonable security measures to protect the confidentiality of your personal information. We encrypt your passwords and use secure HTTP protocols for all data transfers.' },
    { title: '4. Third-Party Sharing', text: 'We do not sell your personal data. We may share anonymous aggregated data with analytics providers to better understand how our application is used.' }
]));

// cookies
fs.writeFileSync(path.join(basePath, 'cookies', 'page.tsx'), generateTextPage('Cookie Policy', [
    { title: '1. What Are Cookies', text: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.' },
    { title: '2. How We Use Cookies', text: 'MangaVault uses cookies to save your language preferences (e.g. English vs French), remember your dark-mode settings, and keep you securely logged into your account.' },
    { title: '3. Analytics Cookies', text: 'We use Google Analytics to help us understand how visitors interact with our website. These cookies collect information anonymously, reporting website trends without identifying individual visitors.' },
    { title: '4. Managing Cookies', text: 'Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.' }
]));

// dmca
fs.writeFileSync(path.join(basePath, 'dmca', 'page.tsx'), generateTextPage('DMCA Policy', [
    { title: '1. Copyright Infringement', text: 'MangaVault respects the intellectual property rights of others. We expect our users to do the same. It is our policy to respond to clear notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA).' },
    { title: '2. Submitting a Takedown Notice', text: 'If you are a copyright owner or an authorized agent and believe that any content hosted on MangaVault infringes upon your copyright, you may submit a notification under the DMCA by providing us with written communication detailing the infringement.' },
    { title: '3. Required Information', text: 'Your notice must include: physical or electronic signature, identification of the infringed work, identification of the material that is to be removed (with explicit URLs), and a statement of good faith belief that the use is unauthorized.' },
    { title: '4. Counter-Notice', text: 'If you believe your removed content is not infringing, you may send a counter-notice containing your contact information and a statement under penalty of perjury that the content was removed by mistake.' }
]));

console.log('Successfully wrote rich content to Legal and Genres pages.');
