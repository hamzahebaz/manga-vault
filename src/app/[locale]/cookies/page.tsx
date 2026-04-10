import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | MangaVault',
}

export default async function Page() {
  return (
    <div className="w-full py-16 px-4 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 border-b dark:border-slate-800 pb-8">Cookie Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-500 mb-8 font-medium">Last Updated: April 10, 2026</p>
            
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">1. What Are Cookies</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">2. How We Use Cookies</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">MangaVault uses cookies to save your language preferences (e.g. English vs French), remember your dark-mode settings, and keep you securely logged into your account.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">3. Analytics Cookies</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">We use Google Analytics to help us understand how visitors interact with our website. These cookies collect information anonymously, reporting website trends without identifying individual visitors.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">4. Managing Cookies</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
    
        </div>
    </div>
  );
}