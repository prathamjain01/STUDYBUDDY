import React from 'react';

const SubjectPortal = () => {
  return (
    <>
      
{/* TopNavBar Shared Component */}
<header className="bg-background dark:bg-background text-on-background dark:text-on-background font-body-md text-body-md w-full h-16 border-b border-outline-variant flat no shadows">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full h-full">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-on-background">RGPV Exam Hub</span>
</div>
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center gap-lg h-full">
<a className="text-outline hover:text-on-surface transition-colors hover:bg-surface-container-high transition-all active:scale-95 duration-100 px-md h-full flex items-center" href="#">Home</a>
{/* Active Navigation: Intent mapped to Branches as this is a subject portal under a branch */}
<a className="text-primary border-b-2 border-primary hover:bg-surface-container-high transition-all active:scale-95 duration-100 px-md h-full flex items-center" href="#">Branches</a>
<a className="text-outline hover:text-on-surface transition-colors hover:bg-surface-container-high transition-all active:scale-95 duration-100 px-md h-full flex items-center" href="#">Community</a>
<a className="text-outline hover:text-on-surface transition-colors hover:bg-surface-container-high transition-all active:scale-95 duration-100 px-md h-full flex items-center" href="#">My Dashboard</a>
</nav>
<div className="flex items-center gap-md">
<button className="hidden md:flex items-center justify-center bg-primary-container text-on-primary-container rounded px-lg py-sm font-label-md text-label-md font-bold active:scale-95 duration-100 transition-transform">
                    Upload
                </button>
<button className="md:hidden text-on-background p-sm">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl flex flex-col gap-xl">
{/* Subject Header Section */}
<section className="flex flex-col gap-md">
<div className="flex items-center gap-sm text-outline font-label-md text-label-md uppercase tracking-wider">
<span>Computer Science (CS)</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span>3rd Semester</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
<div className="flex flex-col gap-sm">
<div className="flex items-center gap-md">
<span className="px-sm py-xs border border-outline rounded bg-surface-container-low font-label-md text-label-md text-on-surface-variant">CS-303</span>
<span className="px-sm py-xs border border-outline rounded bg-surface-container-low font-label-md text-label-md text-on-surface-variant">Core Subject</span>
</div>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-background mt-sm">Data Structures &amp; Algorithms</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-sm">
                        Master the foundational concepts of organizing, processing, and retrieving data efficiently. Essential preparation for technical interviews and advanced computing.
                    </p>
</div>
<div className="flex shrink-0">
<button className="flex items-center gap-sm border border-outline bg-transparent text-on-background hover:bg-surface-container-high transition-colors rounded-lg px-lg py-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                        Save Subject
                    </button>
</div>
</div>
</section>
{/* Tab Navigation Bar */}
<div className="w-full border-b border-outline-variant mt-lg overflow-x-auto no-scrollbar">
<div className="flex gap-lg min-w-max px-sm" role="tablist">
<button aria-selected="true" className="flex items-center gap-sm pb-md border-b-2 border-primary text-primary font-label-md text-label-md uppercase tracking-wider transition-colors" role="tab">
<span className="material-symbols-outlined text-[20px]">menu_book</span>
                    Study Notes
                </button>
<button aria-selected="false" className="flex items-center gap-sm pb-md border-b-2 border-transparent text-outline hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider" role="tab">
<span className="material-symbols-outlined text-[20px]">history_edu</span>
                    Past Year Papers
                </button>
<button aria-selected="false" className="flex items-center gap-sm pb-md border-b-2 border-transparent text-outline hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider" role="tab">
<span className="material-symbols-outlined text-[20px]">smart_display</span>
                    Video Lectures
                </button>
<button aria-selected="false" className="flex items-center gap-sm pb-md border-b-2 border-transparent text-outline hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider" role="tab">
<span className="material-symbols-outlined text-[20px]">list_alt</span>
                    Official Syllabus
                </button>
</div>
</div>
{/* Content Area: Active Tab Content (Study Notes & PYQs preview) */}
<div className="flex flex-col lg:flex-row gap-xl mt-md">
{/* Left Column: Study Notes (Bento Grid) */}
<div className="flex-grow flex flex-col gap-lg w-full lg:w-2/3">
<div className="flex justify-between items-center mb-sm">
<h2 className="font-headline-md text-headline-md text-on-background">Curated Study Notes</h2>
<button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:underline">
                        View All
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
{/* Note Card 1 (Faculty) */}
<div className="bg-surface-container flex flex-col border border-outline-variant rounded-xl p-lg hover:border-outline transition-colors group cursor-pointer h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none -z-10 group-hover:bg-primary/10 transition-colors"></div>
<div className="flex justify-between items-start mb-md">
<span className="px-sm py-xs rounded bg-surface-variant border border-outline text-on-surface-variant font-label-md text-label-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">school</span>
                                Faculty Notes
                            </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">picture_as_pdf</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-background mb-xs group-hover:text-primary transition-colors">Complete DSA Module 1 &amp; 2</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-grow">
                            Detailed coverage of Arrays, Linked Lists, Stacks, and Queues with pseudo-code implementations. Prof. Sharma.
                        </p>
<div className="flex items-center justify-between mt-auto pt-md border-t border-outline-variant">
<div className="flex items-center gap-xs text-outline font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">visibility</span> 1.2k
                            </div>
<button className="text-on-background font-label-md text-label-md border border-outline rounded px-md py-xs hover:bg-surface-variant transition-colors">
                                Download
                            </button>
</div>
</div>
{/* Note Card 2 (Student) */}
<div className="bg-surface-container flex flex-col border border-outline-variant rounded-xl p-lg hover:border-outline transition-colors group cursor-pointer h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-bl-full pointer-events-none -z-10 group-hover:bg-tertiary/10 transition-colors"></div>
<div className="flex justify-between items-start mb-md">
<span className="px-sm py-xs rounded bg-surface-variant border border-outline text-on-surface-variant font-label-md text-label-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">person</span>
                                Student Notes
                            </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">picture_as_pdf</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-background mb-xs group-hover:text-primary transition-colors">Trees &amp; Graphs Quick Revision</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-grow">
                            Handwritten concise notes focusing on binary search trees, AVL rotations, and graph traversal algorithms (BFS/DFS).
                        </p>
<div className="flex items-center justify-between mt-auto pt-md border-t border-outline-variant">
<div className="flex items-center gap-xs text-outline font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">visibility</span> 850
                            </div>
<button className="text-on-background font-label-md text-label-md border border-outline rounded px-md py-xs hover:bg-surface-variant transition-colors">
                                Download
                            </button>
</div>
</div>
{/* Note Card 3 (Student) */}
<div className="bg-surface-container flex flex-col border border-outline-variant rounded-xl p-lg hover:border-outline transition-colors group cursor-pointer h-full relative overflow-hidden sm:col-span-2 lg:col-span-1">
<div className="flex justify-between items-start mb-md">
<span className="px-sm py-xs rounded bg-surface-variant border border-outline text-on-surface-variant font-label-md text-label-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">star</span>
                                Top Rated
                            </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">article</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-background mb-xs group-hover:text-primary transition-colors">Sorting Algorithms Cheat Sheet</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-grow">
                            Time and space complexity tables for all major sorting algorithms with key characteristics and use-cases.
                        </p>
<div className="flex items-center justify-between mt-auto pt-md border-t border-outline-variant">
<div className="flex items-center gap-xs text-outline font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">visibility</span> 2.4k
                            </div>
<button className="text-on-background font-label-md text-label-md border border-outline rounded px-md py-xs hover:bg-surface-variant transition-colors">
                                View Online
                            </button>
</div>
</div>
</div>
</div>
{/* Right Column: Recent PYQs List */}
<div className="w-full lg:w-1/3 flex flex-col gap-md">
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col h-full">
<div className="flex justify-between items-center mb-lg">
<h2 className="font-headline-md text-headline-md text-on-background flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">assignment</span>
                            Recent PYQs
                        </h2>
</div>
<div className="flex flex-col gap-sm">
{/* PYQ Item 1 */}
<div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-surface hover:border-outline transition-colors group">
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-background">Dec 2023</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">End Semester</span>
</div>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline group-hover:text-primary group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
{/* PYQ Item 2 */}
<div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-surface hover:border-outline transition-colors group">
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-background">May 2023</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">End Semester</span>
</div>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline group-hover:text-primary group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
{/* PYQ Item 3 */}
<div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-surface hover:border-outline transition-colors group">
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-background">Dec 2022</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">End Semester</span>
</div>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline group-hover:text-primary group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
<button className="mt-auto pt-lg w-full text-center font-label-md text-label-md text-primary uppercase tracking-wider hover:underline flex justify-center items-center gap-xs">
                        Browse All Years
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
{/* Footer Shared Component */}
<footer className="bg-background dark:bg-background text-outline dark:text-outline font-body-sm text-body-sm w-full py-xl border-t border-outline-variant flat no shadows mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full gap-lg">
<div className="flex flex-col items-center md:items-start gap-sm">
<span className="font-headline-md text-headline-md text-on-background">RGPV Exam Hub</span>
<span>© 2024 RGPV Exam Hub. All rights reserved.</span>
</div>
<nav className="flex flex-wrap justify-center gap-lg">
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">About Us</a>
</nav>
</div>
</footer>
{/* Removed inline script */}

    </>
  );
};

export default SubjectPortal;
