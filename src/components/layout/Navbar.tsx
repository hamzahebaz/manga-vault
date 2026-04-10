'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Search, Globe, Menu, Bookmark } from 'lucide-react';
import { usePathname } from '@/i18n/routing';

export function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const locales = ['en', 'fr', 'es', 'it'];
    const currentIndex = locales.indexOf(locale);
    return locales[(currentIndex + 1) % locales.length];
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-indigo-700 transition-colors">M</div>
            <span className="text-xl font-extrabold tracking-tight hidden md:block text-slate-900 dark:text-white">Manga<span className="text-indigo-600 dark:text-indigo-400">Vault</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-4">
            <Link href="/" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">{t('home')}</Link>
            <Link href="/catalog" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">{t('catalog')}</Link>
            <Link href="/popular" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">{t('popular')}</Link>
            <Link href="/latest" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">{t('latest')}</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
          <div className="relative max-w-xs w-full hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-full leading-5 bg-slate-50 dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all focus:bg-white dark:focus:bg-slate-950"
              placeholder={t('search')}
            />
          </div>

          <Link href="/mylist" className="hidden sm:flex items-center justify-center gap-1.5 px-3 h-10 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-sm font-bold text-sm">
             <Bookmark className="w-4 h-4 text-indigo-500" />
             <span className="hidden lg:inline">{t('myList')}</span>
          </Link>

          <Link
             href={pathname}
             locale={toggleLanguage()}
             className="flex items-center justify-center gap-1.5 px-3 h-10 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-sm font-bold text-sm"
             title={t('language')}
          >
            <Globe className="h-4 w-4 text-indigo-500" />
            <span className="uppercase">{locale}</span>
          </Link>

          <button className="md:hidden flex flex-col items-center justify-center w-10 h-10">
            <Menu className="h-6 w-6 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
