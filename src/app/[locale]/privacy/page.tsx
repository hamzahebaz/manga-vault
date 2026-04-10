import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MangaVault',
}

export default async function Page() {
  return (
    <div className="w-full py-16 px-4 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 border-b dark:border-slate-800 pb-8">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-500 mb-8 font-medium">Last Updated: April 10, 2026</p>
            
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">1. Information We Collect</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">We collect information you provide directly to us, such as when you create an account, update your profile, or build your manga wishlist. This includes your email address, username, and reading preferences.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">2. How We Use Your Information</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">We use the information we collect to provide, maintain, and improve our services, to personalize your reading experience, to send you technical notices, and to respond to your customer service requests.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">3. Data Security</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">We use reasonable security measures to protect the confidentiality of your personal information. We encrypt your passwords and use secure HTTP protocols for all data transfers.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">4. Third-Party Sharing</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">We do not sell your personal data. We may share anonymous aggregated data with analytics providers to better understand how our application is used.</p>
    
        </div>
    </div>
  );
}