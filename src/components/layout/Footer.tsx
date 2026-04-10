import { Link } from '@/i18n/routing';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-10 mt-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">M</div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Manga<span className="text-indigo-600 dark:text-indigo-400">Vault</span></span>
          </div>
          <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
             A premium manga discovery and reading platform built for speed, SEO, and the best user experience. Read anywhere, in multiple languages.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4"><Link href="/explore" className="hover:text-indigo-600 transition-colors">Explore</Link></h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
             <li><Link href="/latest" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Latest Releases</Link></li>
             <li><Link href="/trending" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Trending</Link></li>
             <li><Link href="/popular" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Top Rated</Link></li>
             <li><Link href="/genres" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Genres</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4"><Link href="/legal" className="hover:text-indigo-600 transition-colors">Legal</Link></h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
             <li><Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
             <li><Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
             <li><Link href="/cookies" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
             <li><Link href="/dmca" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">DMCA</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">© {year} MangaVault. All Rights Reserved.</p>
        <p className="text-xs text-slate-400">Made with 🤍 for manga fans globally.</p>
      </div>
    </footer>
  );
}
