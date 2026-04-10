import { Metadata } from 'next';
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
          <Link href={`/${locale}/terms`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <FileText className="w-8 h-8 text-indigo-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500">Terms of Service</h3>
             <p className="text-slate-500 text-sm">The rules and guidelines for using MangaVault.</p>
          </Link>
          <Link href={`/${locale}/privacy`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <Shield className="w-8 h-8 text-indigo-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500">Privacy Policy</h3>
             <p className="text-slate-500 text-sm">How we collect, use, and protect your personal data.</p>
          </Link>
          <Link href={`/${locale}/cookies`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <Cookie className="w-8 h-8 text-indigo-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500">Cookie Policy</h3>
             <p className="text-slate-500 text-sm">Information about how we use cookies and tracking technology.</p>
          </Link>
          <Link href={`/${locale}/dmca`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-colors group">
             <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
             <h3 className="text-xl font-bold mb-2 group-hover:text-red-500">DMCA Policy</h3>
             <p className="text-slate-500 text-sm">Copyright infringement reporting and protection policies.</p>
          </Link>
       </div>
    </div>
  );
}