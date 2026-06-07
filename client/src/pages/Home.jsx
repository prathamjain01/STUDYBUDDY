import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      
{/* TopNavBar */}
<header className="bg-background dark:bg-background border-b border-outline-variant w-full h-16 sticky top-0 z-50">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full h-full">
{/* Logo */}
<Link className="font-headline-md text-headline-md font-bold text-on-background tracking-tight" to="/">
                RGPV Exam Hub
            </Link>
{/* Navigation Links (Desktop) */}
<nav className="hidden md:flex gap-lg h-full items-end">
<Link className="text-primary border-b-2 border-primary pb-2 font-body-md text-body-md h-full flex items-center mt-[2px]" to="/">Home</Link>
<Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/branches">Branches</Link>
<Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/community">Community</Link>
<Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/dashboard">My Dashboard</Link>
</nav>
{/* Trailing Action */}
<div className="flex items-center gap-md">
{/* Mobile Menu Icon (Placeholder) */}
<button className="md:hidden text-on-background p-xs">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<Link to="/upload" className="hidden md:flex items-center justify-center bg-on-background text-background font-label-md text-label-md px-md py-sm rounded-lg hover:opacity-90 transition-opacity">
                    Upload
                </Link>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-grow relative">
{/* Hero Section with subtle grid */}
<section className="relative pt-24 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-sm px-sm py-xs border border-outline-variant rounded-full mb-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="auto_awesome">auto_awesome</span>
<span className="font-label-md text-label-md text-on-surface-variant">Updated for 2024 Curriculum</span>
</div>
<h1 className="font-display-lg text-display-lg max-w-3xl mb-md">
                Ace Your RGPV Exams with <span className="text-primary">Confidence</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
                Access syllabus-aligned PYQs, handwritten notes, and revision sheets. Built for clarity, speed, and focus.
            </p>
{/* Search & Filter Bar */}
<div className="w-full max-w-4xl bg-surface-container border border-outline-variant rounded-xl p-sm md:p-md shadow-sm mt-md">
<form className="flex flex-col md:flex-row gap-sm items-stretch">
{/* Search Input */}
<div className="flex-grow relative flex items-center bg-background border border-outline-variant rounded-lg focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<span className="material-symbols-outlined absolute left-md text-outline" data-icon="search">search</span>
<input className="w-full bg-transparent border-none text-on-background font-body-md text-body-md pl-[48px] pr-md py-md focus:ring-0 placeholder:text-outline" placeholder="Search subjects, codes, or topics..." type="text"/>
</div>
{/* Filters */}
<div className="flex gap-sm">
<div className="relative w-1/2 md:w-auto">
<select className="w-full appearance-none bg-background border border-outline-variant rounded-lg text-on-background font-body-md text-body-md pl-md pr-xl py-md focus:border-primary focus:ring-1 focus:ring-primary">
<option disabled="" selected="" value="">Branch</option>
<option value="cse">CSE</option>
<option value="it">IT</option>
<option value="ece">ECE</option>
<option value="me">ME</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
<div className="relative w-1/2 md:w-auto">
<select className="w-full appearance-none bg-background border border-outline-variant rounded-lg text-on-background font-body-md text-body-md pl-md pr-xl py-md focus:border-primary focus:ring-1 focus:ring-primary">
<option disabled="" selected="" value="">Semester</option>
<option value="1">Sem 1</option>
<option value="2">Sem 2</option>
<option value="3">Sem 3</option>
<option value="4">Sem 4</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
</div>
{/* Search Action */}
<button className="bg-primary text-on-primary font-body-md text-body-md px-xl py-md rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-xs" type="submit">
<span>Explore</span>
<span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</form>
</div>
</section>
{/* Popular Subjects (Bento Grid) */}
<section className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full">
<div className="flex justify-between items-end mb-lg border-b border-outline-variant pb-sm">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Popular Subjects</h2>
<a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-xs" href="#">
                    View All <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Large Card */}
<a className="md:col-span-8 group block relative overflow-hidden rounded-xl border border-outline bg-surface-container hover:border-primary transition-colors p-lg flex flex-col justify-between min-h-[240px]" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<span className="font-label-md text-label-md bg-surface border border-outline-variant px-sm py-xs rounded-full text-on-surface-variant mb-sm inline-block">CS-601</span>
<h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">Machine Learning</h3>
<p className="font-body-sm text-body-sm text-outline mt-xs">CSE • Semester 6</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<div className="relative z-10 flex gap-sm mt-lg">
<span className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant border border-outline-variant rounded-md px-sm py-xs bg-surface-container-low"><span className="material-symbols-outlined text-[14px]" data-icon="description">description</span> 12 Notes</span>
<span className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant border border-outline-variant rounded-md px-sm py-xs bg-surface-container-low"><span className="material-symbols-outlined text-[14px]" data-icon="history">history</span> 5 PYQs</span>
</div>
</a>
{/* Tall Card */}
<a className="md:col-span-4 group block relative overflow-hidden rounded-xl border border-outline bg-surface-container hover:border-primary transition-colors p-lg flex flex-col justify-between min-h-[240px]" href="#">
<div className="relative z-10">
<span className="font-label-md text-label-md bg-surface border border-outline-variant px-sm py-xs rounded-full text-on-surface-variant mb-sm inline-block">CS-403</span>
<h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">Software Engineering</h3>
<p className="font-body-sm text-body-sm text-outline mt-xs">CSE • Semester 4</p>
</div>
<div className="relative z-10 flex justify-between items-end mt-lg">
<div className="flex gap-sm">
<span className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant border border-outline-variant rounded-md px-sm py-xs bg-surface-container-low"><span className="material-symbols-outlined text-[14px]" data-icon="layers">layers</span> Materials</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
</a>
{/* Standard Cards */}
<a className="md:col-span-4 group block relative overflow-hidden rounded-xl border border-outline bg-surface-container hover:border-primary transition-colors p-lg" href="#">
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-label-md bg-surface border border-outline-variant px-sm py-xs rounded-full text-on-surface-variant inline-block">IT-501</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<h3 className="font-body-lg text-body-lg font-semibold text-on-background group-hover:text-primary transition-colors">Data Communication</h3>
<p className="font-body-sm text-body-sm text-outline mt-xs mb-md">IT • Semester 5</p>
<div className="flex gap-xs text-outline">
<span className="material-symbols-outlined text-[16px]" data-icon="folder_open">folder_open</span>
<span className="font-label-md text-label-md">8 Resources</span>
</div>
</a>
<a className="md:col-span-4 group block relative overflow-hidden rounded-xl border border-outline bg-surface-container hover:border-primary transition-colors p-lg" href="#">
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-label-md bg-surface border border-outline-variant px-sm py-xs rounded-full text-on-surface-variant inline-block">EC-304</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<h3 className="font-body-lg text-body-lg font-semibold text-on-background group-hover:text-primary transition-colors">Digital Electronics</h3>
<p className="font-body-sm text-body-sm text-outline mt-xs mb-md">ECE • Semester 3</p>
<div className="flex gap-xs text-outline">
<span className="material-symbols-outlined text-[16px]" data-icon="folder_open">folder_open</span>
<span className="font-label-md text-label-md">15 Resources</span>
</div>
</a>
<a className="md:col-span-4 group block relative overflow-hidden rounded-xl border border-outline bg-surface-container hover:border-primary transition-colors p-lg" href="#">
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-label-md bg-surface border border-outline-variant px-sm py-xs rounded-full text-on-surface-variant inline-block">ME-405</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<h3 className="font-body-lg text-body-lg font-semibold text-on-background group-hover:text-primary transition-colors">Fluid Mechanics</h3>
<p className="font-body-sm text-body-sm text-outline mt-xs mb-md">ME • Semester 4</p>
<div className="flex gap-xs text-outline">
<span className="material-symbols-outlined text-[16px]" data-icon="folder_open">folder_open</span>
<span className="font-label-md text-label-md">9 Resources</span>
</div>
</a>
</div>
</section>
{/* Call to Action Section (Minimalist) */}
<section className="py-xl px-margin-mobile md:px-margin-desktop w-full border-t border-outline-variant mt-lg bg-surface-container-lowest">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-lg">
<div>
<h2 className="font-headline-md text-headline-md text-on-background mb-xs">Contribute to the Hub</h2>
<p className="font-body-md text-body-md text-outline">Upload your notes and help fellow students succeed.</p>
</div>
<button className="bg-transparent border border-outline text-on-surface font-body-md text-body-md px-lg py-md rounded-lg hover:border-on-surface transition-colors flex items-center gap-xs whitespace-nowrap">
<span className="material-symbols-outlined" data-icon="upload">upload</span>
                    Submit Materials
                </button>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-background dark:bg-background text-outline dark:text-outline font-body-sm text-body-sm w-full py-xl border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-[1200px] mx-auto w-full gap-md md:gap-0">
{/* Brand & Copyright */}
<div className="flex flex-col items-center md:items-start gap-xs">
<span className="font-headline-md text-headline-md text-on-background font-bold tracking-tight">RGPV Exam Hub</span>
<span>© 2024 RGPV Exam Hub. All rights reserved.</span>
</div>
{/* Links */}
<nav className="flex flex-wrap justify-center gap-md md:gap-lg">
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
<a className="text-outline hover:text-on-background transition-colors opacity-80 hover:opacity-100" href="#">About Us</a>
</nav>
</div>
</footer>

    </>
  );
};

export default Home;
