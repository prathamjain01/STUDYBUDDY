import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple secret for now
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid admin password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="p-xl border border-outline bg-surface-container rounded-xl w-full max-w-[400px]">
          <h1 className="font-headline-lg text-headline-lg text-on-background mb-md text-center">Admin Access</h1>
          <p className="text-outline text-center mb-lg">Please enter the admin password to continue.</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-md">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (hint: admin123)"
              className="py-3 px-4 rounded-md font-body-md text-body-md w-full bg-background border border-outline-variant focus:border-primary focus:outline-none text-on-background"
            />
            {error && <p className="text-error font-body-sm">{error}</p>}
            <button type="submit" className="bg-primary text-on-primary py-3 w-full rounded-md font-semibold mt-2 hover:opacity-90">
              Login
            </button>
          </form>
          <div className="mt-lg text-center">
             <Link to="/" className="text-primary hover:underline">Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ background: '#111', padding: '10px', display: 'flex', gap: '15px', justifyContent: 'center', borderBottom: '2px solid #cfbcff' }}>
        <span style={{ color: '#fff', fontWeight: 'bold' }}>Admin Tools:</span>
        <Link style={{ color: '#cfbcff' }} to="/subject-portal">Subject Portal</Link>
        <Link style={{ color: '#cfbcff' }} to="/pdf-previewer">PDF Previewer</Link>
      </div>
      
{/* TopNavBar */}
<nav className="bg-background dark:bg-background border-b border-outline-variant w-full h-16 sticky top-0 z-50 transition-colors">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full h-full">
<div className="flex items-center gap-gutter">
<Link className="font-headline-md text-headline-md font-bold text-on-background whitespace-nowrap" to="/">RGPV Exam Hub</Link>
<div className="hidden md:flex gap-md items-center h-full pt-2">
<Link className="text-outline hover:text-on-surface transition-colors font-body-md text-body-md h-full flex items-center hover:bg-surface-container-high px-3 rounded-t-sm active:scale-95 duration-100" to="/">Home</Link>
<Link className="text-outline hover:text-on-surface transition-colors font-body-md text-body-md h-full flex items-center hover:bg-surface-container-high px-3 rounded-t-sm active:scale-95 duration-100" to="/branches">Branches</Link>
<Link className="text-outline hover:text-on-surface transition-colors font-body-md text-body-md h-full flex items-center hover:bg-surface-container-high px-3 rounded-t-sm active:scale-95 duration-100" to="/community">Community</Link>
<Link className="text-outline hover:text-on-surface transition-colors font-body-md text-body-md h-full flex items-center hover:bg-surface-container-high px-3 rounded-t-sm active:scale-95 duration-100 mt-2" to="/dashboard">My Dashboard</Link>
</div>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline text-body-md" style={{fontVariationSettings: '\'FILL\' 0'}}>search</span>
<input className="input-field py-2 pl-10 pr-4 rounded-md font-body-sm text-body-sm w-48 transition-all focus:w-64" placeholder="Search..." type="text"/>
</div>
<Link to="/upload" className="btn-primary px-4 py-2 text-body-sm font-body-sm flex items-center gap-2 hover:bg-opacity-90 transition-opacity">
<span className="material-symbols-outlined text-body-sm" style={{fontVariationSettings: '\'FILL\' 0'}}>upload</span>
                    Upload
                </Link>
</div>
</div>
</nav>
{/* Main Canvas */}
<main className="flex-grow w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
{/* Header */}
<header className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-[#F5F5F5] tracking-tight mb-sm">Review Queue</h1>
<p className="font-body-lg text-body-lg text-[#888888]">Process pending submissions to maintain repository quality.</p>
</div>
<div className="flex gap-sm">
<button className="btn-secondary px-4 py-2 font-body-sm text-body-sm flex items-center gap-2">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>filter_list</span>
                    Filter
                </button>
<button className="btn-secondary px-4 py-2 font-body-sm text-body-sm flex items-center gap-2">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>sort</span>
                    Sort
                </button>
</div>
</header>
{/* Stats Grid (Bento Style) */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
{/* Pending Stat */}
<div className="surface-card p-lg flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-display-lg" style={{fontVariationSettings: '\'FILL\' 1'}}>pending_actions</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-[#888888] uppercase tracking-wider mb-2">Pending Review</h3>
<div className="font-display-lg text-display-lg text-[#F5F5F5]">142</div>
</div>
<div className="mt-md pt-md border-t border-[#888888]/30 font-body-sm text-body-sm text-[#CCCCCC]">
<span className="material-symbols-outlined text-[16px] align-middle mr-1" style={{fontVariationSettings: '\'FILL\' 0'}}>trending_up</span>
                    +12 since yesterday
                </div>
</div>
{/* Approved Stat */}
<div className="surface-card p-lg flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-display-lg" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-[#888888] uppercase tracking-wider mb-2">Approved Today</h3>
<div className="font-display-lg text-display-lg text-[#F5F5F5]">48</div>
</div>
<div className="mt-md pt-md border-t border-[#888888]/30 font-body-sm text-body-sm text-[#888888]">
                    Avg. review time: 2.4h
                </div>
</div>
{/* Rejected Stat */}
<div className="surface-card p-lg flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-display-lg" style={{fontVariationSettings: '\'FILL\' 1'}}>cancel</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-[#888888] uppercase tracking-wider mb-2">Rejected Today</h3>
<div className="font-display-lg text-display-lg text-[#F5F5F5]">7</div>
</div>
<div className="mt-md pt-md border-t border-[#888888]/30 font-body-sm text-body-sm text-[#888888]">
                    Main reason: Poor Quality
                </div>
</div>
</section>
{/* Submissions Queue */}
<section>
<h2 className="font-headline-md text-headline-md text-[#F5F5F5] mb-md border-b border-[#888888] pb-sm">Pending Submissions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Submission Card 1 */}
<article className="surface-card p-lg flex flex-col hover:border-[#CCCCCC] transition-colors duration-300">
<div className="flex justify-between items-start mb-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#111111] border border-[#888888] flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-[#888888]" style={{fontVariationSettings: '\'FILL\' 1'}}>person</span>
</div>
<div>
<h4 className="font-body-md text-body-md font-semibold text-[#F5F5F5]">Rahul Sharma</h4>
<p className="font-label-md text-label-md text-[#888888]">CSE - 3rd Year • 2 hours ago</p>
</div>
</div>
<div className="tag-chip px-2 py-1 text-[#CCCCCC] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '\'FILL\' 0'}}>description</span>
<span className="font-label-md text-label-md">PDF</span>
</div>
</div>
<div className="mb-md flex-grow">
<h3 className="font-body-lg text-body-lg text-[#F5F5F5] mb-2 leading-tight">Data Structures Mid-Term 2023</h3>
<p className="font-body-sm text-body-sm text-[#888888] line-clamp-2">Complete question paper for CS-303 with rough work included in the margins. Scanned in high resolution.</p>
</div>
<div className="flex gap-2 mb-md">
<span className="tag-chip px-2 py-1 font-label-md text-label-md text-[#888888]">CS-303</span>
<span className="tag-chip px-2 py-1 font-label-md text-label-md text-[#888888]">2.4 MB</span>
<span className="tag-chip px-2 py-1 font-label-md text-label-md text-[#888888]">5 Pages</span>
</div>
<div className="flex gap-sm mt-auto pt-md border-t border-[#888888]/30">
<button className="btn-primary flex-1 py-2 font-body-sm text-body-sm flex items-center justify-center gap-2 hover:bg-[#FFFFFF] transition-colors">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
                            Approve
                        </button>
<button className="btn-secondary flex-1 py-2 font-body-sm text-body-sm flex items-center justify-center gap-2 hover:bg-[#222222] transition-colors">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 0'}}>close</span>
                            Reject
                        </button>
<button className="btn-secondary px-3 py-2 flex items-center justify-center hover:bg-[#222222] transition-colors" title="Preview Document">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 0'}}>visibility</span>
</button>
</div>
</article>
{/* Submission Card 2 */}
<article className="surface-card p-lg flex flex-col hover:border-[#CCCCCC] transition-colors duration-300">
<div className="flex justify-between items-start mb-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#111111] border border-[#888888] flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-[#888888]" style={{fontVariationSettings: '\'FILL\' 1'}}>person</span>
</div>
<div>
<h4 className="font-body-md text-body-md font-semibold text-[#F5F5F5]">Priya Patel</h4>
<p className="font-label-md text-label-md text-[#888888]">IT - 4th Year • 3 hours ago</p>
</div>
</div>
<div className="tag-chip px-2 py-1 text-[#CCCCCC] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '\'FILL\' 0'}}>image</span>
<span className="font-label-md text-label-md">JPG</span>
</div>
</div>
<div className="mb-md flex-grow">
<h3 className="font-body-lg text-body-lg text-[#F5F5F5] mb-2 leading-tight">Cloud Computing Hand-written Notes</h3>
<p className="font-body-sm text-body-sm text-[#888888] line-clamp-2">Unit 1 to 3 notes covering virtualization, AWS basics, and deployment models. Clear handwriting.</p>
</div>
<div className="flex gap-2 mb-md">
<span className="tag-chip px-2 py-1 font-label-md text-label-md text-[#888888]">IT-401</span>
<span className="tag-chip px-2 py-1 font-label-md text-label-md text-[#888888]">15 MB</span>
<span className="tag-chip px-2 py-1 font-label-md text-label-md text-[#888888]">12 Images</span>
</div>
<div className="flex gap-sm mt-auto pt-md border-t border-[#888888]/30">
<button className="btn-primary flex-1 py-2 font-body-sm text-body-sm flex items-center justify-center gap-2 hover:bg-[#FFFFFF] transition-colors">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
                            Approve
                        </button>
<button className="btn-secondary flex-1 py-2 font-body-sm text-body-sm flex items-center justify-center gap-2 hover:bg-[#222222] transition-colors">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 0'}}>close</span>
                            Reject
                        </button>
<button className="btn-secondary px-3 py-2 flex items-center justify-center hover:bg-[#222222] transition-colors" title="Preview Document">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 0'}}>visibility</span>
</button>
</div>
</article>
</div>
<div className="mt-xl flex justify-center">
<button className="btn-ghost font-body-md text-body-md px-6 py-2 flex items-center gap-2 border border-transparent hover:border-[#888888] rounded-md transition-all">
                    Load More Submissions
                    <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'FILL\' 0'}}>expand_more</span>
</button>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-background dark:bg-background border-t border-outline-variant w-full py-xl mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full gap-md">
<div className="font-headline-md text-headline-md text-on-background">RGPV Exam Hub</div>
<div className="flex flex-wrap justify-center gap-lg">
<a className="text-outline font-body-sm text-body-sm hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-outline font-body-sm text-body-sm hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-outline font-body-sm text-body-sm hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
<a className="text-outline font-body-sm text-body-sm hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">About Us</a>
</div>
<div className="text-outline font-body-sm text-body-sm">
                © 2024 RGPV Exam Hub. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
};

export default AdminDashboard;
