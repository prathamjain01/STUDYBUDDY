import React from 'react';
import { Link } from 'react-router-dom';

const Upload = () => {
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
            <Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/community">Community</Link>
            <Link className="text-outline hover:text-on-surface transition-colors pb-2 font-body-md text-body-md h-full flex items-center border-b-2 border-transparent" to="/dashboard">My Dashboard</Link>
          </nav>
          <div className="flex items-center gap-md">
            <button className="md:hidden text-on-background p-xs">
              <span className="material-symbols-outlined" data-icon="menu">menu</span>
            </button>
            <Link to="/upload" className="hidden md:flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-lg hover:opacity-90 transition-opacity">
              Upload
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow relative py-xl px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto w-full flex flex-col items-center">
        <h1 className="font-display-lg text-display-lg mb-md text-center">
          Upload <span className="text-primary">Materials</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl text-center">
          Share your notes and resources with the RGPV student community.
        </p>
        <div className="surface-card p-xl border border-outline bg-surface-container rounded-xl w-full max-w-2xl flex flex-col items-center py-16">
            <span className="material-symbols-outlined text-[64px] text-outline mb-md">cloud_upload</span>
            <p className="text-on-surface-variant mb-lg text-center">Drag and drop your PDF files here, or click to browse.</p>
            <button className="bg-primary text-on-primary px-xl py-md rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Select Files
            </button>
        </div>
      </main>
    </>
  );
};

export default Upload;
