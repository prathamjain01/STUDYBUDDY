import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_NOTES, INITIAL_PYQS } from '../data/subjectData';
import type { Note, PYQ } from '../data/subjectData';


export interface User {
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'admin';
  loggedIn: boolean;
}

export interface AppState {
  user: User | null;
  notes: Note[];
  pyqs: PYQ[];
  bookmarks: string[]; // ImportantQuestion IDs
  studied: string[]; // ImportantQuestion IDs
  downloads: string[]; // Note/PYQ IDs
  theme: 'light' | 'dark';
  upvotes: Record<string, number>; // Resource ID -> count
  analytics: {
    dailyUsers: number;
    downloads: number;
    views: Record<string, number>; // Subject ID -> view count
  };
  login: (email: string, role: 'student' | 'admin') => void;
  googleLogin: (role: 'student' | 'admin') => void;
  logout: () => void;
  toggleBookmark: (id: string) => void;
  toggleStudied: (id: string) => void;
  registerDownload: (id: string, type: 'note' | 'pyq') => void;
  toggleTheme: () => void;
  uploadResource: (resource: {
    title: string;
    subjectId: string;
    unit?: string;
    category?: Note['category'];
    year?: number;
    examType?: PYQ['examType'];
    type: 'note' | 'pyq';
    author: string;
    fileSize: string;
  }) => void;
  approveResource: (id: string) => void;
  rejectResource: (id: string) => void;
  upvoteResource: (id: string) => void;
  recordSubjectView: (subjectId: string) => void;
  toast: { message: string; type: 'success' | 'error' | 'info' } | null;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [pyqs, setPyqs] = useState<PYQ[]>(INITIAL_PYQS);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [studied, setStudied] = useState<string[]>([]);
  const [downloads, setDownloads] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [analytics, setAnalytics] = useState({
    dailyUsers: 142,
    downloads: 489,
    views: { ml: 340, se: 215, dbms: 290, coa: 110, os: 154, cn: 180 } as Record<string, number>
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Hydrate state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('rgpv_user');
    const storedNotes = localStorage.getItem('rgpv_notes');
    const storedPyqs = localStorage.getItem('rgpv_pyqs');
    const storedBookmarks = localStorage.getItem('rgpv_bookmarks');
    const storedStudied = localStorage.getItem('rgpv_studied');
    const storedDownloads = localStorage.getItem('rgpv_downloads');
    const storedTheme = localStorage.getItem('rgpv_theme') as 'light' | 'dark' | null;
    const storedUpvotes = localStorage.getItem('rgpv_upvotes');
    const storedAnalytics = localStorage.getItem('rgpv_analytics');

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedNotes) setNotes(JSON.parse(storedNotes));
    if (storedPyqs) setPyqs(JSON.parse(storedPyqs));
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
    if (storedStudied) setStudied(JSON.parse(storedStudied));
    if (storedDownloads) setDownloads(JSON.parse(storedDownloads));
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
    if (storedUpvotes) setUpvotes(JSON.parse(storedUpvotes));
    if (storedAnalytics) setAnalytics(JSON.parse(storedAnalytics));
  }, []);

  const save = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const login = (email: string, role: 'student' | 'admin' = 'student') => {
    const name = email.split('@')[0];
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    const newUser: User = {
      name: nameFormatted,
      email,
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`,
      role,
      loggedIn: true
    };
    setUser(newUser);
    save('rgpv_user', newUser);
    
    const nextAnalytics = { ...analytics, dailyUsers: analytics.dailyUsers + 1 };
    setAnalytics(nextAnalytics);
    save('rgpv_analytics', nextAnalytics);
  };

  const googleLogin = (role: 'student' | 'admin' = 'student') => {
    const newUser: User = {
      name: role === 'admin' ? 'Admin Controller' : 'Aditya Sharma',
      email: role === 'admin' ? 'admin@rgpvhub.ac.in' : 'aditya.sharma.cse26@gmail.com',
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${role === 'admin' ? 'admin' : 'aditya'}`,
      role,
      loggedIn: true
    };
    setUser(newUser);
    save('rgpv_user', newUser);

    const nextAnalytics = { ...analytics, dailyUsers: analytics.dailyUsers + 1 };
    setAnalytics(nextAnalytics);
    save('rgpv_analytics', nextAnalytics);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rgpv_user');
  };

  const toggleBookmark = (id: string) => {
    const nextBookmarks = bookmarks.includes(id)
      ? bookmarks.filter(b => b !== id)
      : [...bookmarks, id];
    setBookmarks(nextBookmarks);
    save('rgpv_bookmarks', nextBookmarks);
  };

  const toggleStudied = (id: string) => {
    const nextStudied = studied.includes(id)
      ? studied.filter(s => s !== id)
      : [...studied, id];
    setStudied(nextStudied);
    save('rgpv_studied', nextStudied);
  };

  const registerDownload = (id: string, type: 'note' | 'pyq') => {
    const nextDownloads = downloads.includes(id) ? downloads : [...downloads, id];
    setDownloads(nextDownloads);
    save('rgpv_downloads', nextDownloads);

    if (type === 'note') {
      const nextNotes = notes.map(n => n.id === id ? { ...n, downloads: n.downloads + 1 } : n);
      setNotes(nextNotes);
      save('rgpv_notes', nextNotes);
    } else {
      const nextPyqs = pyqs.map(p => p.id === id ? { ...p, downloads: p.downloads + 1 } : p);
      setPyqs(nextPyqs);
      save('rgpv_pyqs', nextPyqs);
    }

    const nextAnalytics = { ...analytics, downloads: analytics.downloads + 1 };
    setAnalytics(nextAnalytics);
    save('rgpv_analytics', nextAnalytics);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('rgpv_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const uploadResource = (resource: {
    title: string;
    subjectId: string;
    unit?: string;
    category?: Note['category'];
    year?: number;
    examType?: PYQ['examType'];
    type: 'note' | 'pyq';
    author: string;
    fileSize: string;
  }) => {
    const uniqueId = `comp-${Date.now()}`;
    if (resource.type === 'note') {
      const newNote: Note = {
        id: uniqueId,
        subjectId: resource.subjectId,
        title: resource.title,
        unit: resource.unit || 'All Units',
        category: resource.category || 'Student Notes',
        author: resource.author,
        uploadDate: new Date().toISOString().split('T')[0],
        fileSize: resource.fileSize,
        downloads: 0,
        isCommunity: true,
        approved: false
      };
      const nextNotes = [newNote, ...notes];
      setNotes(nextNotes);
      save('rgpv_notes', nextNotes);
    } else {
      const newPyq: PYQ = {
        id: uniqueId,
        subjectId: resource.subjectId,
        year: resource.year || new Date().getFullYear(),
        examType: resource.examType || 'Regular',
        fileSize: resource.fileSize,
        downloads: 0,
        isCommunity: true,
        approved: false,
        author: resource.author
      };
      const nextPyqs = [newPyq, ...pyqs];
      setPyqs(nextPyqs);
      save('rgpv_pyqs', nextPyqs);
    }
  };

  const approveResource = (id: string) => {
    const updatedNotes = notes.map(n => n.id === id ? { ...n, approved: true } : n);
    setNotes(updatedNotes);
    save('rgpv_notes', updatedNotes);

    const updatedPyqs = pyqs.map(p => p.id === id ? { ...p, approved: true } : p);
    setPyqs(updatedPyqs);
    save('rgpv_pyqs', updatedPyqs);
  };

  const rejectResource = (id: string) => {
    const updatedNotes = notes.filter(n => n.id !== id);
    setNotes(updatedNotes);
    save('rgpv_notes', updatedNotes);

    const updatedPyqs = pyqs.filter(p => p.id !== id);
    setPyqs(updatedPyqs);
    save('rgpv_pyqs', updatedPyqs);
  };

  const upvoteResource = (id: string) => {
    const nextUpvotes = { ...upvotes, [id]: (upvotes[id] || 0) + 1 };
    setUpvotes(nextUpvotes);
    save('rgpv_upvotes', nextUpvotes);
  };

  const recordSubjectView = (subjectId: string) => {
    const currentViews = analytics.views[subjectId] || 0;
    const nextAnalytics = {
      ...analytics,
      views: {
        ...analytics.views,
        [subjectId]: currentViews + 1
      }
    };
    setAnalytics(nextAnalytics);
    save('rgpv_analytics', nextAnalytics);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        notes,
        pyqs,
        bookmarks,
        studied,
        downloads,
        theme,
        upvotes,
        analytics,
        login,
        googleLogin,
        logout,
        toggleBookmark,
        toggleStudied,
        registerDownload,
        toggleTheme,
        uploadResource,
        approveResource,
        rejectResource,
        upvoteResource,
        recordSubjectView,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
