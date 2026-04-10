import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MangaVault',
}

export default async function Page() {
  return (
    <div className="w-full py-16 px-4 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 border-b dark:border-slate-800 pb-8">Terms of Service</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-500 mb-8 font-medium">Last Updated: April 10, 2026</p>
            
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">1. Acceptance of Terms</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">By accessing or using MangaVault, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">2. User Accounts</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">3. Content Accessibility</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Our service allows you to discover and read manga. We act as an indexing directory and do not host copyrighted files on our own servers without permission. The availability of content may vary based on your geographic location.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">4. Acceptable Use</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">You agree not to use the platform for any unlawful purpose, or in any way that interrupts, damages, or impairs the service. Automated scraping of our database without written consent is strictly prohibited.</p>
    
        </div>
    </div>
  );
}