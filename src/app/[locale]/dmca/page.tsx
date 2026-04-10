import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | MangaVault',
}

export default async function Page() {
  return (
    <div className="w-full py-16 px-4 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 border-b dark:border-slate-800 pb-8">DMCA Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-500 mb-8 font-medium">Last Updated: April 10, 2026</p>
            
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">1. Copyright Infringement</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">MangaVault respects the intellectual property rights of others. We expect our users to do the same. It is our policy to respond to clear notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA).</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">2. Submitting a Takedown Notice</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">If you are a copyright owner or an authorized agent and believe that any content hosted on MangaVault infringes upon your copyright, you may submit a notification under the DMCA by providing us with written communication detailing the infringement.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">3. Required Information</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Your notice must include: physical or electronic signature, identification of the infringed work, identification of the material that is to be removed (with explicit URLs), and a statement of good faith belief that the use is unauthorized.</p>
    
        <h2 className="text-2xl font-bold mt-8 mb-4 tracking-tight">4. Counter-Notice</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">If you believe your removed content is not infringing, you may send a counter-notice containing your contact information and a statement under penalty of perjury that the content was removed by mistake.</p>
    
        </div>
    </div>
  );
}