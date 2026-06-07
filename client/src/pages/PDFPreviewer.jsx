import React from 'react';

const PDFPreviewer = () => {
  return (
    <>
      
{/* Top Navigation Placeholder (Suppressed as per rules for transactional/modal intent) */}
{/* Main Content Area: PDF Modal Overlay */}
<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-lg" role="dialog">
{/* Modal Container */}
<div className="bg-level-1 border-level-1 rounded-xl w-full max-w-[1000px] h-[921px] sm:h-[870px] flex flex-col overflow-hidden shadow-none">
{/* Modal Header */}
<div className="flex items-center justify-between px-lg py-md border-b border-level-1 shrink-0">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-high-contrast" style={{fontVariationSettings: '\'FILL\' 0'}}>description</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface truncate max-w-[200px] sm:max-w-md" id="modal-title">CS-403_Computer_Networks_2023.pdf</h2>
<p className="font-body-sm text-body-sm text-level-1">RGPV B.Tech Semester 4</p>
</div>
</div>
<div className="flex items-center gap-sm">
<button aria-label="Print" className="btn-icon">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>print</span>
</button>
<button aria-label="More options" className="btn-icon">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>more_vert</span>
</button>
</div>
</div>
{/* PDF Viewport Area */}
<div className="flex-grow bg-black relative overflow-hidden flex items-center justify-center p-md">
{/* PDF Toolbar (Zoom/Page controls) */}
<div className="absolute bottom-md left-1/2 -translate-x-1/2 bg-level-1 border-level-1 rounded-full px-lg py-sm flex items-center gap-lg z-10">
<div className="flex items-center gap-sm">
<button aria-label="Zoom Out" className="btn-icon"><span className="material-symbols-outlined text-[20px]">remove</span></button>
<span className="font-label-md text-label-md text-on-surface w-12 text-center">100%</span>
<button aria-label="Zoom In" className="btn-icon"><span className="material-symbols-outlined text-[20px]">add</span></button>
</div>
<div className="w-px h-6 bg-[#888888]"></div>
<div className="flex items-center gap-sm">
<button aria-label="Previous Page" className="btn-icon"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
<span className="font-label-md text-label-md text-on-surface">1 / 4</span>
<button aria-label="Next Page" className="btn-icon"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</div>
</div>
{/* PDF Document Mock */}
<div className="w-full max-w-[750px] h-full bg-surface-container-high border-level-1 overflow-y-auto relative">
{/* Faux PDF Content for context */}
<div className="p-xl min-h-[1200px] bg-white text-black font-serif">
<div className="text-center border-b-2 border-black pb-md mb-lg">
<h1 className="text-2xl font-bold uppercase tracking-wide">Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</h1>
<h2 className="text-xl mt-sm">B.Tech. IV Semester Examination, June 2023</h2>
<h3 className="text-lg font-bold mt-md underline">Computer Networks</h3>
</div>
<div className="flex justify-between font-bold mb-xl">
<span>Time: 3 Hours</span>
<span>Maximum Marks: 70</span>
</div>
<div className="space-y-lg text-base">
<p className="font-bold">Note: Attempt any five questions. All questions carry equal marks.</p>
<div className="flex gap-md">
<span className="font-bold">1. a)</span>
<p>Explain the OSI reference model with a neat diagram. Discuss the functions of each layer.</p>
</div>
<div className="flex gap-md">
<span className="font-bold ml-6">b)</span>
<p>Differentiate between TCP/IP and OSI reference models.</p>
</div>
<div className="flex gap-md mt-lg">
<span className="font-bold">2. a)</span>
<p>What is switching? Explain circuit switching, packet switching, and message switching in detail.</p>
</div>
<div className="flex gap-md">
<span className="font-bold ml-6">b)</span>
<p>Explain the functioning of CSMA/CD protocol. How does it detect collisions?</p>
</div>
{/* Blurred continuation to signify scrollable content */}
<div className="mt-xl pt-xl border-t border-gray-300 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
<div className="flex gap-md blur-[2px] opacity-60">
<span className="font-bold">3. a)</span>
<p>Discuss the various routing algorithms. Explain the shortest path routing algorithm with an example.</p>
</div>
<div className="flex gap-md mt-md blur-[3px] opacity-40">
<span className="font-bold ml-6">b)</span>
<p>What is congestion control? Explain the token bucket algorithm.</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Modal Footer */}
<div className="px-lg py-md border-t border-level-1 shrink-0 flex justify-end items-center gap-md bg-level-1">
<button className="btn-secondary font-label-md text-label-md flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 0'}}>close</span>
                    Close
                </button>
<button className="btn-primary font-label-md text-label-md flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '\'FILL\' 1'}}>download</span>
                    Download PDF
                </button>
</div>
</div>
</div>

    </>
  );
};

export default PDFPreviewer;
