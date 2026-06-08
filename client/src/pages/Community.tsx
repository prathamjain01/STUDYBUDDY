import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <>
      <header className="bg-background dark:bg-background border-b border-outline-variant w-full h-16 sticky top-0 z-50">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full h-full">
          <Link className="font-headline-md text-headline-md font-bold text-on-background tracking-tight" to="/">
            RGPV Exam Hub
          </Link>
          <nav className="hidden md:flex gap-lg h-full items-end">
            <Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/">Home</Link>
            <Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/branches">Branches</Link>
            <Link className="text-primary border-b-2 border-primary pb-2 font-body-md text-body-md h-full flex items-center mt-[2px]" to="/community">Community</Link>
            <Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/dashboard">My Dashboard</Link>
          </nav>
          <div className="flex items-center gap-md">
            <button className="md:hidden text-on-background p-xs">
              <span className="material-symbols-outlined" data-icon="menu">menu</span>
            </button>
            <Link to="/upload" className="hidden md:flex items-center justify-center bg-on-background text-background font-label-md text-label-md px-md py-sm rounded-lg hover:opacity-90 transition-opacity">
              Upload
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow relative py-xl px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
        <h1 className="font-display-lg text-display-lg max-w-3xl mb-md">
          Student <span className="text-primary">Community</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
          Connect with peers, share notes, and discuss subjects.
        </p>
        <div className="surface-card p-lg border border-outline bg-surface-container rounded-xl w-full max-w-2xl">
            <p className="text-outline">Community discussion forum coming soon...</p>
        </div>
      </main>
    </>
  );
};

export default Community;
