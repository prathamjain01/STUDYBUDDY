import { useState, useEffect, useRef } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { 
  BRANCHES, 
  SUBJECTS, 
  IMPORTANT_QUESTIONS 
} from './data/subjectData';
import type { Note, PYQ } from './data/subjectData';
import { 
  BookOpen, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Search, 
  FileText, 
  Award, 
  ShieldAlert, 
  PlusCircle, 
  User as UserIcon, 
  LogOut, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  BookmarkCheck, 
  ChevronRight, 
  ArrowLeft,
  GraduationCap,
  Layers,
  Info,
  Filter,
  Eye,
  Download,
  Bookmark,
  CheckSquare,
  Zap,
  Video,
  Play,
  RotateCcw,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Trophy,
  ThumbsUp,
  Clock,
  ExternalLink,
  Save,
  BellRing,
  Trash2,
  Calendar,
  AlertTriangle,
  HelpCircle,
  BarChart2,
  Users,
  Settings,
  XCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Helper custom types
type TabType = 'overview' | 'notes' | 'pyqs' | 'questions' | 'weightage' | 'repeated' | 'revision' | 'videos';
type SubSection = 'bookmarks' | 'downloads' | 'uploads' | 'settings';

// Custom Route Parser Type
interface AppRoute {
  page: 'home' | 'branch' | 'semester' | 'subject' | 'community' | 'dashboard' | 'admin';
  params: Record<string, string>;
}


// ----------------------------------------------------
// MAIN APP COMPONENT
// ----------------------------------------------------
function AppContent() {
  const { 
    user, 
    theme, 
    toggleTheme, 
    googleLogin, 
    logout,
    toast
  } = useApp();

  const [route, setRoute] = useState<AppRoute>({ page: 'home', params: {} });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  // Hash Router implementation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // e.g. #/branch/cs or #/subject/ml?tab=notes
      
      if (!hash || hash === '#/' || hash === '#') {
        setRoute({ page: 'home', params: {} });
        return;
      }

      const cleanHash = hash.replace(/^#\//, ''); // e.g. branch/cs or subject/ml?tab=notes
      const [pathPart, queryPart] = cleanHash.split('?');
      const parts = pathPart.split('/'); // e.g. ['branch', 'cs'] or ['subject', 'ml']
      
      const queryParams: Record<string, string> = {};
      if (queryPart) {
        queryPart.split('&').forEach(param => {
          const [key, value] = param.split('=');
          queryParams[key] = decodeURIComponent(value || '');
        });
      }

      if (parts[0] === 'branch' && parts[1]) {
        if (parts[2] === 'semester' && parts[3]) {
          setRoute({ 
            page: 'semester', 
            params: { branchId: parts[1], semId: parts[3], ...queryParams } 
          });
        } else {
          setRoute({ 
            page: 'branch', 
            params: { branchId: parts[1], ...queryParams } 
          });
        }
      } else if (parts[0] === 'subject' && parts[1]) {
        setRoute({ 
          page: 'subject', 
          params: { subjectId: parts[1], ...queryParams } 
        });
      } else if (parts[0] === 'community') {
        setRoute({ page: 'community', params: queryParams });
      } else if (parts[0] === 'dashboard') {
        setRoute({ page: 'dashboard', params: queryParams });
      } else if (parts[0] === 'admin') {
        setRoute({ page: 'admin', params: queryParams });
      } else {
        setRoute({ page: 'home', params: {} });
      }

      // Scroll to top on navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Parse route on initial mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Helper to change routes programmatically
  const navigateTo = (hashUrl: string) => {
    window.location.hash = hashUrl;
    setMobileMenuOpen(false);
    setLoginDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', hash: '#/' },
    { name: 'Branches', hash: '#/#branches' },
    { name: 'Community Uploads', hash: '#/community' },
    { name: 'My Dashboard', hash: '#/dashboard' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs py-2 px-4 text-center font-semibold tracking-wide shadow-sm z-50">
        🚀 Ace your upcoming RGPV Exams! Explore our Premium Redesigned Hub, One-Night Revision module & repeated question analyzer.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/40 dark:border-slate-800/30 glass-panel backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={() => navigateTo('#/')} className="flex items-center gap-2.5 text-left cursor-pointer">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-lg tracking-tight sm:text-xl text-slate-800 dark:text-white">
              RGPV <span className="text-secondary-500">Exam Hub</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => navigateTo(link.hash)}
                className="text-sm font-semibold transition-colors hover:text-primary-500 text-slate-600 dark:text-slate-350 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            {user?.role === 'admin' && (
              <button 
                onClick={() => navigateTo('#/admin')}
                className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 hover:text-secondary-600 flex items-center gap-1.5 bg-secondary-100/50 dark:bg-secondary-950/20 px-3 py-1.5 rounded-lg border border-secondary-500/10 cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4" />
                Admin Panel
              </button>
            )}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Upload Button */}
            <button 
              onClick={() => navigateTo('#/community')}
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-primary-500 hover:bg-primary-600 px-4 py-2.5 rounded-xl transition-all shadow-md shadow-primary-500/20 hover:scale-102 btn-premium cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              Upload
            </button>

            {/* Auth Menu */}
            {user?.loggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none cursor-pointer"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-9 h-9 rounded-full border border-primary-200 dark:border-slate-700 bg-white"
                  />
                </button>

                {loginDropdownOpen && (
                  <div className="absolute right-0 mt-2.5 w-56 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-[var(--card-bg)] backdrop-blur-lg shadow-xl p-2 z-55 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3.5 py-2.5 border-b border-slate-200/50 dark:border-slate-800/40 mb-1.5">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Signed in as</p>
                      <p className="text-sm font-bold truncate text-slate-700 dark:text-slate-200 mt-0.5">{user.name}</p>
                      <span className="inline-block mt-1.5 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-300">
                        {user.role === 'admin' ? 'Administrator' : 'Student'}
                      </span>
                    </div>
                    <button 
                      onClick={() => navigateTo('#/dashboard')}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer text-left font-semibold"
                    >
                      <UserIcon className="w-4 h-4" />
                      My Dashboard
                    </button>
                    {user.role === 'admin' && (
                      <button 
                        onClick={() => navigateTo('#/admin')}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer text-left font-semibold"
                      >
                        <ShieldAlert className="w-4 h-4" />
                        Admin Panel
                      </button>
                    )}
                    <button 
                      onClick={logout}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors cursor-pointer text-left font-semibold"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Sign In
                </button>

                {loginDropdownOpen && (
                  <div className="absolute right-0 mt-2.5 w-64 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-[var(--card-bg)] backdrop-blur-lg shadow-xl p-4.5 z-55 animate-in fade-in slide-in-from-top-2 duration-150">
                    <h3 className="font-display font-bold text-sm mb-3">Sign in to RGPV Exam Hub</h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => { googleLogin('student'); setLoginDropdownOpen(false); }}
                        className="w-full flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" width="24" height="24">
                          <path d="M21.35,11.1H12v2.7h5.38c-0.24,1.28 -0.96,2.37 -2.05,3.1v2.58h3.31C20.58,17.79 21.8,14.67 21.35,11.1z" fill="#4285F4" />
                          <path d="M12,20.7c2.35,0 4.32,-0.78 5.76,-2.12l-3.31,-2.58c-0.92,0.62 -2.1,0.98 -3.45,0.98 -2.66,0 -4.91,-1.8 -5.72,-4.22H1.85v2.66C3.3,18.3 7.37,20.7 12,20.7z" fill="#34A853" />
                          <path d="M6.28,12.76c-0.21,-0.62 -0.33,-1.28 -0.33,-1.96s0.12,-1.34 0.33,-1.96V6.18H1.85C1.19,7.5 0.8,9.01 0.8,10.8c0,1.79 0.39,3.3 1.05,4.62l4.43,-3.66z" fill="#FBBC05" />
                          <path d="M12,5.12c1.28,0 2.43,0.44 3.34,1.31l2.5,-2.5C16.32,2.44 14.35,1.5 12,1.5 7.37,1.5 3.3,3.9 1.85,6.18l4.43,3.66C7.09,7.42 9.34,5.12 12,5.12z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                      </button>
                      
                      <div className="relative my-3 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800"></div></div>
                        <span className="relative bg-transparent text-[9px] text-slate-400 uppercase tracking-wider font-bold">or simulate admin</span>
                      </div>

                      <button 
                        onClick={() => { googleLogin('admin'); setLoginDropdownOpen(false); }}
                        className="w-full bg-secondary-500 hover:bg-secondary-600 text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer"
                      >
                        Login as Admin Console
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Nav toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/40 bg-[var(--card-bg)] backdrop-blur-lg p-4 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => navigateTo(link.hash)}
                className="block text-left text-base font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-slate-650 dark:text-slate-300 w-full cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            {user?.role === 'admin' && (
              <button 
                onClick={() => navigateTo('#/admin')}
                className="block text-left text-base font-bold py-2 px-3 rounded-lg text-secondary-500 hover:bg-secondary-50 dark:hover:bg-secondary-950/20 transition-all w-full cursor-pointer"
              >
                🛡 Admin Panel
              </button>
            )}
            <button 
              onClick={() => navigateTo('#/community')}
              className="flex items-center justify-center gap-2 text-white bg-primary-500 hover:bg-primary-600 text-sm font-bold py-3 rounded-xl w-full transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              Upload A Resource
            </button>
          </div>
        )}
      </header>

      {/* Main Content Render Area */}
      <main className="flex-1 flex flex-col relative">
        {route.page === 'home' && <HomeSection navigate={navigateTo} />}
        {route.page === 'branch' && <BranchSection params={route.params} navigate={navigateTo} />}
        {route.page === 'semester' && <SemesterSection params={route.params} navigate={navigateTo} />}
        {route.page === 'subject' && <SubjectSection params={route.params} navigate={navigateTo} />}
        {route.page === 'community' && <CommunitySection />}
        {route.page === 'dashboard' && <DashboardSection navigate={navigateTo} />}
        {route.page === 'admin' && <AdminSection navigate={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/40 dark:border-slate-800/30 glass-panel mt-auto transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-1.5">
              <span className="font-display font-black text-lg text-primary-500 dark:text-white">
                RGPV <span className="text-secondary-500">Exam Hub</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                The ultimate exam preparation platform for Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) students. Access syllabus-aligned notes, PYQs, important questions, and revision cheat sheets.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-550 mb-4">Quick Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <li><button onClick={() => navigateTo('#/')} className="hover:text-primary-500 transition-colors cursor-pointer">Home Dashboard</button></li>
                <li><button onClick={() => navigateTo('#/community')} className="hover:text-primary-500 transition-colors cursor-pointer">Community Uploads</button></li>
                <li><button onClick={() => navigateTo('#/dashboard')} className="hover:text-primary-500 transition-colors cursor-pointer">My Study Bookmarks</button></li>
                <li><button onClick={() => navigateTo('#/admin')} className="hover:text-primary-500 transition-colors cursor-pointer">Moderation Deck</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-550 mb-4">Major Branches</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <li><button onClick={() => navigateTo('#/branch/cs')} className="hover:text-primary-500 transition-colors cursor-pointer">Computer Science</button></li>
                <li><button onClick={() => navigateTo('#/branch/aiml')} className="hover:text-primary-500 transition-colors cursor-pointer">AI & Machine Learning</button></li>
                <li><button onClick={() => navigateTo('#/branch/it')} className="hover:text-primary-500 transition-colors cursor-pointer">Information Technology</button></li>
                <li><button onClick={() => navigateTo('#/branch/ec')} className="hover:text-primary-500 transition-colors cursor-pointer">Electronics & Comm.</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-550 mb-4">Disclaimer</h4>
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-semibold">
                ⚠️ <strong>Independent Portal:</strong> RGPV Exam Hub is a student-driven community project and is not affiliated with, sponsored by, or endorsed by Rajiv Gandhi Proudyogiki Vishwavidyalaya.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-200/50 dark:border-slate-800/40 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-500 font-semibold">
            <p>© {new Date().getFullYear()} RGPV Exam Hub. Made with ❤️ for RGPV Students.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-55 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${
            toast.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
              : toast.type === 'error'
              ? 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400'
              : 'bg-primary-500/10 border-primary-500/20 text-primary-600 dark:text-primary-400'
          }`}>
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-primary-500 flex-shrink-0" />}
            <span className="text-xs font-bold">{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// 1. HOME COMPONENT
// ----------------------------------------------------
function HomeSection({ navigate }: { navigate: (hash: string) => void }) {
  const { notes, pyqs } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    subjects: typeof SUBJECTS;
    notes: Note[];
    pyqs: PYQ[];
  }>({ subjects: [], notes: [], pyqs: [] });
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const autocompleteRef = useRef<HTMLDivElement>(null);

  // Search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ subjects: [], notes: [], pyqs: [] });
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredSubjects = SUBJECTS.filter(sub => 
      sub.name.toLowerCase().includes(query) || 
      sub.code.toLowerCase().includes(query) ||
      sub.description.toLowerCase().includes(query)
    );

    const filteredNotes = notes.filter(note => 
      note.title.toLowerCase().includes(query) && note.approved
    ).slice(0, 4);

    const filteredPyqs = pyqs.filter(pyq => 
      pyq.year.toString().includes(query) && pyq.approved
    ).slice(0, 4);

    setSearchResults({
      subjects: filteredSubjects,
      notes: filteredNotes,
      pyqs: filteredPyqs
    });
  }, [searchQuery, notes, pyqs]);

  // Click outside to close suggestion popup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setShowAutocomplete(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBranch && selectedSemester) {
      navigate(`#/branch/${selectedBranch}/semester/${selectedSemester}`);
    } else if (selectedBranch) {
      navigate(`#/branch/${selectedBranch}`);
    }
  };

  const getSubjectName = (id: string) => {
    return SUBJECTS.find(s => s.id === id)?.name || 'Subject';
  };

  return (
    <div className="space-y-20 pb-20 animate-in fade-in duration-300">
      
      {/* HERO SECTION WITH GLOW BLOB */}
      <section className="relative overflow-hidden py-16 md:py-24 text-center">
        {/* Glow circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-secondary-500/10 dark:bg-secondary-500/5 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-100/60 dark:bg-primary-950/40 text-primary-600 dark:text-primary-300 text-xs font-bold tracking-wide border border-primary-200/50 dark:border-primary-900/50 shadow-sm animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Ultimate RGPV Exam Resource V1
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6.5xl font-black tracking-tight max-w-4xl mx-auto leading-[1.12] text-slate-800 dark:text-white">
            Ace Your <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-indigo-500 bg-clip-text text-transparent">RGPV Exams</span> with Confidence
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Access PYQs, Notes, Important Questions, Weightage Analysis, and One-Night Revision Material in one single dashboard.
          </p>

          {/* Autocomplete Search Bar */}
          <div className="max-w-2xl mx-auto relative z-30" ref={autocompleteRef}>
            <div className="relative shadow-xl shadow-primary-500/5 rounded-2xl">
              <input 
                type="text" 
                placeholder="Search subjects (e.g. Machine Learning), topics, or codes..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowAutocomplete(true);
                }}
                onFocus={() => setShowAutocomplete(true)}
                className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 pl-12 pr-4 py-4.5 rounded-2.5xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-semibold text-slate-700 dark:text-slate-200"
              />
              <Search className="absolute left-4.5 top-5 w-5 h-5 text-slate-400" />
            </div>

            {/* Autocomplete Suggestions */}
            {showAutocomplete && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-2xl z-50 text-left p-2 max-h-[400px] overflow-y-auto">
                {searchResults.subjects.length === 0 && searchResults.notes.length === 0 && searchResults.pyqs.length === 0 ? (
                  <p className="p-4 text-xs text-slate-400 text-center font-bold">No results found for "{searchQuery}"</p>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                    {/* Subjects */}
                    {searchResults.subjects.length > 0 && (
                      <div className="p-2 space-y-1">
                        <h4 className="text-[9px] uppercase font-black text-slate-400 px-2 tracking-wider">Subjects</h4>
                        {searchResults.subjects.map(sub => (
                          <button 
                            key={sub.id}
                            onClick={() => navigate(`#/subject/${sub.id}`)}
                            className="flex items-center justify-between w-full p-2.5 hover:bg-primary-50 dark:hover:bg-primary-950/20 rounded-xl transition-colors group cursor-pointer text-left"
                          >
                            <div>
                              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-500 transition-colors">{sub.name}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{sub.code} • Sem {sub.semester}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Notes */}
                    {searchResults.notes.length > 0 && (
                      <div className="p-2 space-y-1">
                        <h4 className="text-[9px] uppercase font-black text-slate-400 px-2 tracking-wider">Notes</h4>
                        {searchResults.notes.map(note => (
                          <button 
                            key={note.id}
                            onClick={() => navigate(`#/subject/${note.subjectId}?tab=notes`)}
                            className="flex items-center justify-between w-full p-2.5 hover:bg-primary-50 dark:hover:bg-primary-950/20 rounded-xl transition-colors group cursor-pointer text-left"
                          >
                            <div>
                              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-500 transition-colors">{note.title}</p>
                              <p className="text-[10px] text-slate-400 font-bold mt-0.5">{getSubjectName(note.subjectId)} • {note.category}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* PYQs */}
                    {searchResults.pyqs.length > 0 && (
                      <div className="p-2 space-y-1">
                        <h4 className="text-[9px] uppercase font-black text-slate-400 px-2 tracking-wider">Exam Papers</h4>
                        {searchResults.pyqs.map(pyq => (
                          <button 
                            key={pyq.id}
                            onClick={() => navigate(`#/subject/${pyq.subjectId}?tab=pyqs`)}
                            className="flex items-center justify-between w-full p-2.5 hover:bg-primary-50 dark:hover:bg-primary-950/20 rounded-xl transition-colors group cursor-pointer text-left"
                          >
                            <div>
                              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-500 transition-colors">{pyq.year} {pyq.examType} Exam</p>
                              <p className="text-[10px] text-slate-400 font-bold mt-0.5">{getSubjectName(pyq.subjectId)} • {pyq.fileSize}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Selectors Card */}
          <form onSubmit={handleGo} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 glass-panel p-3.5 rounded-2.5xl shadow-xl shadow-black/5">
            <select 
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="flex-1 bg-transparent text-xs sm:text-sm p-2 text-slate-650 dark:text-slate-300 border-none outline-none font-bold cursor-pointer"
              required
            >
              <option value="" className="text-slate-800 dark:text-slate-200">Choose Branch</option>
              {BRANCHES.map(b => (
                <option key={b.id} value={b.id} className="text-slate-850 dark:text-slate-200">{b.name} ({b.code})</option>
              ))}
            </select>
            <div className="hidden sm:block w-px bg-slate-200/60 dark:bg-slate-800/50 self-stretch"></div>
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="flex-1 bg-transparent text-xs sm:text-sm p-2 text-slate-650 dark:text-slate-300 border-none outline-none font-bold cursor-pointer"
              required
            >
              <option value="" className="text-slate-800 dark:text-slate-200">Choose Semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                <option key={sem} value={sem} className="text-slate-850 dark:text-slate-200">Semester {sem}</option>
              ))}
            </select>
            <button 
              type="submit"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-2xl transition-all hover:scale-102 flex items-center justify-center gap-1.5 shadow-md shadow-primary-500/20 cursor-pointer"
            >
              Search Hub <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* QUICK ACCESS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-lg sm:text-xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
          <BookmarkCheck className="w-5 h-5 text-primary-500" />
          Quick Access Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {[
            { title: 'Previous Year Papers', icon: FileText, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30', hash: '#/branch/cs/semester/6' },
            { title: 'Lecture Notes', icon: BookOpen, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30', hash: '#/subject/ml?tab=notes' },
            { title: 'Important Questions', icon: HelpCircle, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30', hash: '#/subject/ml?tab=questions' },
            { title: 'Weightage Analysis', icon: BarChart2, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-100 dark:border-yellow-900/30', hash: '#/subject/ml?tab=weightage' },
            { title: 'One Night Revision', icon: Zap, color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/30', hash: '#/subject/ml?tab=revision' },
            { title: 'Community Resources', icon: Users, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/30', hash: '#/community' }
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => navigate(item.hash)}
              className="glass-panel hover:scale-[1.03] rounded-2.5xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer w-full group border-slate-200/50 dark:border-slate-800/40"
            >
              <div className={`p-4 rounded-2xl border ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                <item.icon className="w-5.5 h-5.5" />
              </div>
              <p className="text-xs font-black text-slate-700 dark:text-slate-200 tracking-tight leading-tight">{item.title}</p>
            </button>
          ))}
        </div>
      </section>

      {/* TRENDING SUBJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary-500" />
            Trending Academic Subjects
          </h2>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Most Searched</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((sub) => (
            <button 
              key={sub.id} 
              onClick={() => navigate(`#/subject/${sub.id}`)}
              className="glass-panel text-left rounded-2.5xl p-6 block cursor-pointer group border-slate-200/50 dark:border-slate-800/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] uppercase font-black text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    {sub.code}
                  </span>
                  <h3 className="font-display text-base font-black text-slate-700 dark:text-slate-100 mt-3 group-hover:text-primary-500 transition-colors">
                    {sub.name}
                  </h3>
                </div>
                <div className="bg-primary-50 dark:bg-primary-950/20 text-primary-500 text-[10px] font-black px-2.5 py-1 rounded-lg border border-primary-500/10">
                  Semester {sub.semester}
                </div>
              </div>
              <p className="text-xs text-slate-450 dark:text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                {sub.description}
              </p>
              <div className="border-t border-slate-200/45 dark:border-slate-800/30 mt-5 pt-3.5 flex items-center justify-between text-xs text-slate-450 dark:text-slate-400 font-bold">
                <span>📚 {sub.resourceCount} Files</span>
                <span className="text-primary-500 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-all">
                  Open Hub <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* BRANCHES LIST */}
      <section id="branches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/40 dark:border-slate-800/30 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
            Academic Branches
          </h2>
          <p className="text-sm text-slate-400 font-semibold">
            Choose your branch to explore semesters, syllabus sheets, and PYQs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((branch) => (
            <button 
              key={branch.id} 
              onClick={() => navigate(`#/branch/${branch.id}`)}
              className="glass-panel text-left rounded-2.5xl p-6.5 flex flex-col justify-between cursor-pointer w-full group border-slate-200/50 dark:border-slate-800/40"
            >
              <div className="space-y-3.5">
                <div className="inline-flex p-3 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800/30 text-primary-500 rounded-xl">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-700 dark:text-white group-hover:text-primary-500 transition-colors">
                  {branch.name} ({branch.code})
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-450 leading-relaxed line-clamp-2">
                  {branch.description}
                </p>
              </div>

              <div className="border-t border-slate-200/45 dark:border-slate-800/30 mt-6 pt-4 grid grid-cols-3 gap-2 text-center text-slate-400 font-bold">
                <div>
                  <p className="text-sm font-black text-slate-750 dark:text-slate-200">{branch.semestersCount}</p>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">Semesters</p>
                </div>
                <div className="border-x border-slate-200/45 dark:border-slate-800/30">
                  <p className="text-sm font-black text-slate-750 dark:text-slate-200">{branch.subjectsCount}</p>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">Subjects</p>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-750 dark:text-slate-200">{branch.resourcesCount}</p>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">Active Files</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 2. BRANCH COMPONENT
// ----------------------------------------------------
function BranchSection({ params, navigate }: { params: Record<string, string>; navigate: (hash: string) => void }) {
  const { notes, pyqs } = useApp();
  const branchId = params.branchId;
  const branch = BRANCHES.find(b => b.id === branchId);

  if (!branch) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Branch not found</h2>
        <button onClick={() => navigate('#/')} className="text-primary-500 hover:underline mt-4 cursor-pointer font-bold">Return to home</button>
      </div>
    );
  }

  const branchSubjects = SUBJECTS.filter(s => s.branchId === branchId);
  const branchSubjectIds = branchSubjects.map(s => s.id);
  const totalResources = notes.filter(n => branchSubjectIds.includes(n.subjectId) && n.approved).length +
                         pyqs.filter(p => branchSubjectIds.includes(p.subjectId) && p.approved).length;

  const semesters = Array.from({ length: 8 }, (_, i) => {
    const semNumber = i + 1;
    const semSubjects = branchSubjects.filter(s => s.semester === semNumber);
    const semSubjectIds = semSubjects.map(s => s.id);
    const semFiles = notes.filter(n => semSubjectIds.includes(n.subjectId) && n.approved).length +
                      pyqs.filter(p => semSubjectIds.includes(p.subjectId) && p.approved).length;

    return { semester: semNumber, subjectCount: semSubjects.length, resourceCount: semFiles };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in duration-300">
      <div>
        <button onClick={() => navigate('#/')} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary-500 transition-colors uppercase tracking-wider cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
      </div>

      <section className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        {/* light decor overlay */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="space-y-3 relative z-10">
          <span className="bg-white/15 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
            🎓 {branch.code} Department
          </span>
          <h1 className="font-display text-2xl sm:text-3.5xl font-black">{branch.name}</h1>
          <p className="text-xs sm:text-sm text-slate-100 max-w-xl leading-relaxed font-medium">{branch.description}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex gap-8 text-center min-w-full sm:min-w-[280px] justify-around relative z-10">
          <div>
            <p className="text-2xl font-black text-white">{branch.semestersCount}</p>
            <p className="text-[9px] uppercase font-bold tracking-wider text-slate-200">Semesters</p>
          </div>
          <div className="border-x border-white/10 px-6">
            <p className="text-2xl font-black text-white">{branchSubjects.length}</p>
            <p className="text-[9px] uppercase font-bold tracking-wider text-slate-200">Subjects</p>
          </div>
          <div>
            <p className="text-2xl font-black text-white">{totalResources}</p>
            <p className="text-[9px] uppercase font-bold tracking-wider text-slate-200">Active Files</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-slate-200/40 dark:border-slate-800/30 pb-4">
          <h2 className="font-display text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary-500" />
            Syllabus Semesters
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((sem) => (
            <button 
              key={sem.semester} 
              onClick={() => navigate(`#/branch/${branchId}/semester/${sem.semester}`)}
              className="glass-panel text-left rounded-2.5xl p-5.5 block cursor-pointer group border-slate-200/50 dark:border-slate-800/40 w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary-50 dark:bg-primary-950/20 text-primary-600 dark:text-primary-400 text-xs font-black w-10 h-10 rounded-xl flex items-center justify-center border border-primary-500/10">
                  S{sem.semester}
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-display text-base font-black text-slate-750 dark:text-slate-100">
                Semester {sem.semester}
              </h3>
              
              <div className="mt-4 pt-4 border-t border-slate-200/45 dark:border-slate-800/30 grid grid-cols-2 gap-2 text-slate-400 text-xs font-bold">
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-slate-400" /> {sem.subjectCount} Subjects</span>
                <span className="flex items-center gap-1 justify-end"><FileText className="w-3.5 h-3.5 text-slate-400" /> {sem.resourceCount} Files</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 3. SEMESTER COMPONENT
// ----------------------------------------------------
function SemesterSection({ params, navigate }: { params: Record<string, string>; navigate: (hash: string) => void }) {
  const { notes, pyqs } = useApp();
  const { branchId, semId } = params;
  const branch = BRANCHES.find(b => b.id === branchId);
  const semesterNum = Number(semId);

  if (!branch || isNaN(semesterNum) || semesterNum < 1 || semesterNum > 8) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Semester or Branch not found</h2>
        <button onClick={() => navigate('#/')} className="text-primary-500 hover:underline mt-4 cursor-pointer font-bold">Return to home</button>
      </div>
    );
  }

  const semesterSubjects = SUBJECTS.filter(s => s.branchId === branchId && s.semester === semesterNum);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in duration-300">
      
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider">
        <button onClick={() => navigate('#/')} className="hover:text-primary-500 transition-colors cursor-pointer">Home</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <button onClick={() => navigate(`#/branch/${branchId}`)} className="hover:text-primary-500 transition-colors cursor-pointer">{branch.code}</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-slate-400">Semester {semesterNum}</span>
      </nav>

      {/* Hero */}
      <section className="glass-panel p-6 sm:p-7 rounded-2.5xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-slate-200/50 dark:border-slate-800/40">
        <div className="space-y-1">
          <h1 className="font-display text-xl sm:text-2xl font-black text-slate-800 dark:text-white">Semester {semesterNum} Syllabus</h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold">{branch.name} • Preparation files deck</p>
        </div>
        <button 
          onClick={() => navigate(`#/branch/${branchId}`)}
          className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-2.5 px-4.5 rounded-xl transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Change Semester
        </button>
      </section>

      {/* Subjects deck */}
      <section className="space-y-6">
        <h2 className="font-display text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-secondary-500" />
          Active Courses ({semesterSubjects.length})
        </h2>

        {semesterSubjects.length === 0 ? (
          <div className="glass-panel p-12 text-center rounded-2.5xl border-dashed border-slate-300 dark:border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-350 mx-auto mb-3" />
            <h3 className="font-bold text-slate-700 dark:text-slate-300">No subjects compiled yet</h3>
            <button onClick={() => navigate('#/community')} className="mt-4 text-xs font-bold text-white bg-primary-500 hover:bg-primary-600 py-2.5 px-5 rounded-xl cursor-pointer">Upload notes first</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesterSubjects.map((sub) => {
              const semFilesCount = notes.filter(n => n.subjectId === sub.id && n.approved).length +
                                    pyqs.filter(p => p.subjectId === sub.id && p.approved).length;

              return (
                <button 
                  key={sub.id} 
                  onClick={() => navigate(`#/subject/${sub.id}`)}
                  className="glass-panel text-left rounded-2.5xl p-6.5 flex flex-col justify-between cursor-pointer w-full group border-slate-200/50 dark:border-slate-800/40"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase font-black text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                        {sub.code}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="font-display text-lg font-black text-slate-700 dark:text-white group-hover:text-primary-500 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-450 leading-relaxed line-clamp-2">
                      {sub.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-200/45 dark:border-slate-800/30 mt-6 pt-4 flex items-center justify-between text-slate-450 dark:text-slate-400 text-xs font-bold">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-400" /> {semFilesCount} Resource Files</span>
                    <span className="text-primary-500">Open Hub</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 4. SUBJECT HUB COMPONENT
// ----------------------------------------------------
function SubjectSection({ params, navigate }: { params: Record<string, string>; navigate: (hash: string) => void }) {
  const { subjectId } = params;
  const initialTab = (params.tab as TabType) || 'overview';
  
  const { 
    notes, 
    pyqs, 
    bookmarks, 
    studied, 
    toggleBookmark, 
    toggleStudied, 
    registerDownload, 
    recordSubjectView,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [notesSearch, setNotesSearch] = useState('');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState('All');
  
  const [previewFile, setPreviewFile] = useState<{ id?: string; title: string; type: 'note' | 'pyq'; pdfUrl?: string } | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const subject = SUBJECTS.find(s => s.id === subjectId);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (subject) {
      recordSubjectView(subject.id);
    }
  }, [subjectId, subject]);

  if (!subject) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Subject not found</h2>
        <button onClick={() => navigate('#/')} className="text-primary-500 hover:underline mt-4 cursor-pointer font-bold">Return to home</button>
      </div>
    );
  }

  const subjectNotes = notes.filter(n => n.subjectId === subjectId && n.approved);
  const subjectPyqs = pyqs.filter(p => p.subjectId === subjectId && p.approved);
  const subjectQuestions = IMPORTANT_QUESTIONS.filter(q => q.subjectId === subjectId);

  const studiedInSubject = subjectQuestions.filter(q => studied.includes(q.id)).length;
  const progressPercent = subjectQuestions.length > 0 
    ? Math.round((studiedInSubject / subjectQuestions.length) * 100) 
    : 0;

  const filteredNotes = subjectNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(notesSearch.toLowerCase()) || 
                          note.author.toLowerCase().includes(notesSearch.toLowerCase());
    const matchesUnit = selectedUnitFilter === 'All' || note.unit.toLowerCase() === selectedUnitFilter.toLowerCase();
    return matchesSearch && matchesUnit;
  });

  const handleDownload = (id: string, title: string, type: 'note' | 'pyq') => {
    registerDownload(id, type);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });

    const resource = type === 'note' 
      ? notes.find(n => n.id === id) 
      : pyqs.find(p => p.id === id);

    if (resource && resource.pdfUrl) {
      window.open(resource.pdfUrl, '_blank');
      showToast(`"${title}" PDF opened in a new tab for download!`, 'success');
      return;
    }

    let fileText = '';
    if (type === 'pyq') {
      const year = title.match(/\d+/)?.[0] || '2025';
      const qList = subjectQuestions.map((q, idx) => `Q${idx + 1}. [${q.type}] ${q.question}`).join('\n\n');
      fileText = `RAJIV GANDHI PROUDYOGIKI VISHWAVIDYALAYA, BHOPAL
==================================================
B.Tech. Sixth Semester (Choice Based Credit System)
Subject Code: ${subject.code} | Subject Name: ${subject.name}
Examination Year: ${year} | Regular/Ex Question Paper
Time Allowed: 3 Hours | Maximum Marks: 70
==================================================

Note: Attempt any FIVE questions. All questions carry equal marks.
------------------------------------------------------------------

${qList || 'No questions mapped for this exam paper.'}

------------------------------------------------------------------
Generated by RGPV Exam Hub Portal. Practice and excel!`;
    } else {
      const selectedNote = notes.find(n => n.id === id);
      const noteAuthor = selectedNote?.author || 'RGPV Exam Hub Faculty';
      const defs = subject.oneNightRevision.definitions.map(d => `- ${d.term}: ${d.definition}`).join('\n');
      const formulas = subject.oneNightRevision.formulas.map(f => `- ${f.name}: ${f.formula}\n  Explanation: ${f.explanation}`).join('\n\n');
      fileText = `🎓 RGPV EXAM HUB PREPARATION NOTES
=============================================
Subject: ${subject.name} (${subject.code})
Topic Note: ${title}
Author/Contributor: ${noteAuthor}
Date Generated: ${new Date().toLocaleDateString()}
=============================================

Syllabus Reference Summary:
---------------------------
${subject.overview.syllabus.join('\n')}

Important Term Definitions:
---------------------------
${defs || 'Definitions compilation in progress.'}

Key Reference Formulas:
-----------------------
${formulas || 'Formula compilation in progress.'}

---------------------------------------------
Good luck with your examinations!
RGPV Exam Hub.`;
    }

    const blob = new Blob([fileText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`"${title}" downloaded successfully!`, 'success');
  };

  const handleToggleStudied = (id: string) => {
    const isAdding = !studied.includes(id);
    toggleStudied(id);

    if (isAdding) {
      confetti({
        particleCount: 30,
        spread: 40,
        origin: { y: 0.8 }
      });
    }
  };

  const tabs: { id: TabType; name: string; icon: any }[] = [
    { id: 'overview', name: 'Overview', icon: Info },
    { id: 'notes', name: 'Notes', icon: FileText },
    { id: 'pyqs', name: 'PYQs', icon: Calendar },
    { id: 'questions', name: 'Important Qs', icon: HelpCircle },
    { id: 'weightage', name: 'Weightage', icon: BarChart2 },
    { id: 'repeated', name: 'Repeated Qs', icon: RotateCcw },
    { id: 'revision', name: 'Revision', icon: Zap },
    { id: 'videos', name: 'Videos', icon: Video },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Subject Header Card */}
      <section className="glass-panel rounded-2.5xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-slate-200/50 dark:border-slate-800/40">
        <div className="space-y-3.5 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider">
            <button onClick={() => navigate('#/')} className="hover:text-primary-500 transition-colors cursor-pointer">Home</button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <button onClick={() => navigate('#/branch/cs')} className="hover:text-primary-500 transition-colors cursor-pointer">Computer Science</button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400">Subject Prep Hub</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] uppercase font-black text-white bg-primary-500 px-3.5 py-1 rounded-full shadow-sm shadow-primary-500/10">
              {subject.code}
            </span>
            <span className="text-[10px] uppercase font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              Semester {subject.semester}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3.5xl font-black text-slate-800 dark:text-white tracking-tight">
            {subject.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-400 leading-relaxed max-w-2xl font-semibold">
            {subject.description}
          </p>
        </div>

        {/* Prep gauge */}
        {subjectQuestions.length > 0 && (
          <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-250/50 dark:border-slate-800/40 rounded-2xl p-5 w-full md:w-72 shadow-inner">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-secondary-500" /> Study Progress</span>
              <span className="text-primary-500">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-wider">
              Revised {studiedInSubject} of {subjectQuestions.length} important Qs
            </p>
          </div>
        )}
      </section>

      {/* Tabs Selector Bar */}
      <div className="flex border-b border-slate-200/45 dark:border-slate-800/30 overflow-x-auto no-scrollbar scroll-smooth gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(`#/subject/${subjectId}?tab=${tab.id}`);
              }}
              className={`flex items-center gap-2 py-4 px-4.5 text-xs font-bold border-b-2 tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="glass-panel rounded-2.5xl p-6 sm:p-8 min-h-[400px] border-slate-200/50 dark:border-slate-800/40">
        
        {/* OVERVIEW PANEL */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="space-y-4">
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-800 dark:text-white">Unit-wise Syllabus Details</h3>
              <ul className="space-y-4">
                {subject.overview.syllabus.map((item, index) => {
                  const colonIndex = item.indexOf(':');
                  const unitLabel = colonIndex !== -1 ? item.substring(0, colonIndex).trim() : `Unit ${index + 1}`;
                  const unitText = colonIndex !== -1 ? item.substring(colonIndex + 1).trim() : item;
                  return (
                    <li key={index} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                      <span className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary-500/10 text-primary-600 dark:text-primary-350 text-[10px] font-black rounded-lg px-2.5 py-1 whitespace-nowrap">
                        {unitLabel}
                      </span>
                      <span>{unitText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-secondary-50/50 dark:bg-secondary-950/10 border border-secondary-500/10 rounded-2xl p-5 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-secondary-650 dark:text-secondary-400 uppercase tracking-wider">Exam weightage guide</h4>
                <p className="text-xs text-slate-450 dark:text-slate-400 mt-1.5 leading-relaxed font-semibold">
                  {subject.overview.weightageSummary}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* NOTES PANEL */}
        {activeTab === 'notes' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-900/30 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
              <div className="relative w-full sm:w-72">
                <input 
                  type="text" 
                  placeholder="Search notes..."
                  value={notesSearch}
                  onChange={(e) => setNotesSearch(e.target.value)}
                  className="w-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 pl-9 pr-4 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary-500 text-slate-700 dark:text-slate-200 font-semibold"
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Filter className="w-4 h-4 text-slate-400" />
                <select 
                  value={selectedUnitFilter}
                  onChange={(e) => setSelectedUnitFilter(e.target.value)}
                  className="bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-2.5 focus:ring-0 text-slate-600 dark:text-slate-350 font-bold cursor-pointer"
                >
                  <option value="All">All Units</option>
                  <option value="Unit 1">Unit 1</option>
                  <option value="Unit 2">Unit 2</option>
                  <option value="Unit 3">Unit 3</option>
                  <option value="Unit 4">Unit 4</option>
                  <option value="Unit 5">Unit 5</option>
                </select>
              </div>
            </div>

            {filteredNotes.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-bold">No notes match your filters.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredNotes.map((note) => (
                  <div 
                    key={note.id}
                    className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/65 dark:border-slate-800/50 rounded-2.5xl p-5 flex flex-col justify-between hover:border-primary-500/30 transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[9px] uppercase font-black text-primary-500 bg-primary-50 dark:bg-primary-950/20 px-2.5 py-0.5 rounded-lg border border-primary-500/10">
                          {note.category}
                        </span>
                        <span className="text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider">{note.unit}</span>
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-black text-slate-700 dark:text-white leading-snug">
                        {note.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 font-bold uppercase">Author: {note.author}</p>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800/40 mt-5 pt-4 flex items-center justify-between text-xs text-slate-450 dark:text-slate-400 font-bold">
                      <span>{note.fileSize} • {note.downloads} Downloads</span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setPreviewFile({ id: note.id, title: note.title, type: 'note', pdfUrl: note.pdfUrl })}
                          className="flex items-center gap-1 hover:text-primary-500 transition-colors bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/40 py-1.5 px-3 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                        <button 
                          onClick={() => handleDownload(note.id, note.title, 'note')}
                          className="flex items-center gap-1 text-white bg-primary-500 hover:bg-primary-600 py-1.5 px-3 rounded-lg transition-colors cursor-pointer font-bold shadow-md shadow-primary-500/10"
                        >
                          <Download className="w-3.5 h-3.5" /> Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PYQS PANEL */}
        {activeTab === 'pyqs' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {subjectPyqs.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-bold">No PYQ Papers uploaded yet.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {subjectPyqs.map((pyq) => (
                  <div 
                    key={pyq.id}
                    className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/65 dark:border-slate-800/50 rounded-2.5xl p-5 flex flex-col justify-between hover:border-primary-500/30 transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[9px] uppercase font-black text-secondary-500 bg-secondary-50 dark:bg-secondary-950/20 px-2.5 py-0.5 rounded-lg border border-secondary-500/10">
                          Year {pyq.year}
                        </span>
                        <span className="text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider">{pyq.examType} Exam</span>
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-black text-slate-700 dark:text-white leading-snug">
                        RGPV Official {subject.name} Examination Question Paper
                      </h4>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800/40 mt-5 pt-4 flex items-center justify-between text-xs text-slate-450 dark:text-slate-400 font-bold">
                      <span>{pyq.fileSize} • {pyq.downloads} Downloads</span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setPreviewFile({ id: pyq.id, title: `RGPV ${pyq.year} PYQ Paper`, type: 'pyq', pdfUrl: pyq.pdfUrl })}
                          className="flex items-center gap-1 hover:text-primary-500 transition-colors bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/40 py-1.5 px-3 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                        <button 
                          onClick={() => handleDownload(pyq.id, `${pyq.year} PYQ Paper`, 'pyq')}
                          className="flex items-center gap-1 text-white bg-primary-500 hover:bg-primary-600 py-1.5 px-3 rounded-lg transition-colors cursor-pointer font-bold shadow-md shadow-primary-500/10"
                        >
                          <Download className="w-3.5 h-3.5" /> Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* IMPORTANT QUESTIONS PANEL */}
        {activeTab === 'questions' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {subjectQuestions.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-bold">No important questions mapped yet.</div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/30 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Unit-Wise Important Questions Registry</h4>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Mark Revised / Studied</span>
                </div>

                {[1, 2, 3, 4, 5].map((unitNum) => {
                  const unitQs = subjectQuestions.filter(q => q.unit === unitNum);
                  if (unitQs.length === 0) return null;
                  
                  return (
                    <div key={unitNum} className="space-y-3.5">
                      <h4 className="text-xs font-black uppercase text-primary-500 dark:text-primary-400 border-b border-slate-200/45 dark:border-slate-800/30 pb-2.5 mt-5 tracking-wider">
                        Unit {unitNum} Questions
                      </h4>
                      <div className="space-y-3">
                        {unitQs.map((q) => {
                          const isBookmarked = bookmarks.includes(q.id);
                          const isStudied = studied.includes(q.id);
                          
                          return (
                            <div 
                              key={q.id}
                              className={`border rounded-2.5xl p-5 flex gap-4 transition-all duration-300 ${
                                isStudied 
                                  ? 'bg-slate-50/30 dark:bg-slate-900/20 border-slate-200/50 dark:border-slate-800/30 opacity-70' 
                                  : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800/50 shadow-sm'
                              }`}
                            >
                              <button 
                                onClick={() => handleToggleStudied(q.id)}
                                className="mt-0.5 text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer"
                              >
                                <CheckSquare className={`w-5 h-5 ${isStudied ? 'text-emerald-500 fill-emerald-50 dark:fill-emerald-950/20' : ''}`} />
                              </button>

                              <div className="flex-1 space-y-2">
                                <p className={`text-xs sm:text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-200 ${isStudied ? 'line-through text-slate-400' : ''}`}>
                                  {q.question}
                                </p>
                                <div className="flex">
                                  <span className="text-[9px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-lg bg-primary-100/60 dark:bg-primary-950/40 text-primary-600 dark:text-primary-300 border border-primary-500/5">
                                    {q.type}
                                  </span>
                                </div>
                              </div>

                              <button 
                                onClick={() => {
                                  toggleBookmark(q.id);
                                  if (!isBookmarked) {
                                    confetti({ particleCount: 20, spread: 30, origin: { y: 0.8 } });
                                  }
                                }}
                                className="mt-0.5 text-slate-400 hover:text-secondary-500 transition-colors cursor-pointer"
                              >
                                <Bookmark className={`w-5.5 h-5.5 ${isBookmarked ? 'text-secondary-500 fill-secondary-500' : ''}`} />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* WEIGHTAGE PANEL */}
        {activeTab === 'weightage' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <h3 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-4">Unit Expected Exam Marks (Weightage)</h3>
              <div className="space-y-5">
                {subject.weightage.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                      <span>{item.unit}</span>
                      <span className="text-primary-500">{item.expectedMarks} Marks</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-indigo-500 h-full rounded-full"
                        style={{ width: `${(item.expectedMarks / 25) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-4">Topic Frequency Index</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200/60 dark:border-slate-800/40 rounded-2xl overflow-hidden">
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/40 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5">Topic / Concept Name</th>
                      <th className="p-3.5 text-right">Appeared in Last 5 Years</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/45 dark:divide-slate-800/30">
                    {subject.weightage.flatMap(w => w.topics).map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10">
                        <td className="p-3.5 font-bold text-slate-700 dark:text-slate-350">{t.name}</td>
                        <td className="p-3.5 text-right font-black text-slate-550">{t.frequency} Times</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* REPEATED QUESTIONS PANEL */}
        {activeTab === 'repeated' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-4">
              Historical Probability Analyzer
            </h3>
            
            <div className="space-y-4">
              {subject.repeatedQuestions.map((rq) => {
                const colorMap = {
                  'Very High Probability': 'bg-red-50 dark:bg-red-950/20 text-red-500 border-red-500/20',
                  'High Probability': 'bg-orange-50 dark:bg-orange-950/20 text-orange-500 border-orange-500/20',
                  'Medium Probability': 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-500 border-yellow-500/20'
                };
                
                return (
                  <div 
                    key={rq.id}
                    className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 rounded-2.5xl p-5 flex flex-col sm:flex-row justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-2 flex-1">
                      <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-200">
                        {rq.question}
                      </p>
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Years appeared:</span>
                        {rq.years.map(y => (
                          <span key={y} className="text-[10px] bg-slate-100 dark:bg-slate-850 font-bold px-2 py-0.5 rounded-lg text-slate-500">
                            {y}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/40 pt-3.5 sm:pt-0">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-3 py-1 border rounded-full ${colorMap[rq.importance]}`}>
                        {rq.importance}
                      </span>
                      <span className="text-xs text-slate-400 font-black">
                        Appeared {rq.frequency} Times
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* REVISION PANEL */}
        {activeTab === 'revision' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {subject.oneNightRevision.topQuestions.length === 0 ? (
              <div className="text-center py-10 text-slate-450 font-bold">One Night Revision content is being compiled for this subject.</div>
            ) : (
              <>
                {/* Top Questions */}
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-1.5">⚡ Top 20 Revision Qs</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subject.oneNightRevision.topQuestions.map((q, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-primary-500/5 to-secondary-500/5 border border-slate-200/50 dark:border-slate-800/35 rounded-2xl p-4 flex gap-3 shadow-sm">
                        <span className="text-secondary-500 font-black text-sm">#{idx+1}</span>
                        <p className="text-xs font-bold leading-relaxed text-slate-700 dark:text-slate-350">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Definitions */}
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-3">📝 Important Definitions</h4>
                  <div className="space-y-3">
                    {subject.oneNightRevision.definitions.map((def, idx) => (
                      <div key={idx} className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-4.5 shadow-sm">
                        <p className="text-[10px] font-black text-primary-500 uppercase tracking-wider">{def.term}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-semibold">{def.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formulas */}
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-3">🧮 Formula Sheet</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subject.oneNightRevision.formulas.map((form, idx) => (
                      <div key={idx} className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-4.5 space-y-2 shadow-sm">
                        <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300">{form.name}</h5>
                        <p className="text-sm font-black bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/60 dark:border-slate-850/50 p-3 rounded-xl font-mono text-center text-primary-600 dark:text-primary-400 overflow-x-auto">
                          {form.formula}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-snug font-semibold">{form.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-3">💡 Last-Minute Bullets</h4>
                  <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 p-5 rounded-2xl space-y-3">
                    {subject.oneNightRevision.lastMinuteNotes.map((note, idx) => (
                      <p key={idx} className="text-xs leading-relaxed text-slate-650 dark:text-slate-400 font-semibold flex items-start gap-2">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* VIDEOS PANEL */}
        {activeTab === 'videos' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {subject.videos.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-bold">No lecture videos loaded.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {subject.videos.map((vid) => (
                  <button 
                    key={vid.id}
                    className="border border-slate-200/60 dark:border-slate-800/50 rounded-2.5xl overflow-hidden bg-slate-50/30 dark:bg-slate-900/10 cursor-pointer text-left w-full group transition-all"
                    onClick={() => setVideoUrl(vid.youtubeId)}
                  >
                    <div className="aspect-video bg-slate-900 text-white flex flex-col justify-between p-4 relative">
                      <div className="self-end bg-black/60 text-[9px] font-black px-2 py-0.5 rounded-lg border border-white/5">
                        {vid.duration}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary-500 hover:bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>

                      <div className="text-[9px] uppercase font-black text-slate-300 tracking-wider">
                        Unit {vid.unit} Video Lecture
                      </div>
                    </div>

                    <div className="p-4 space-y-1">
                      <h4 className="font-display text-sm font-bold text-slate-700 dark:text-white group-hover:text-primary-500 transition-colors line-clamp-1">
                        {vid.title}
                      </h4>
                      <p className="text-[10px] text-slate-450 dark:text-slate-450 font-bold uppercase tracking-wider">YouTube Playlist • RGPV Exam Hub</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* PDF PREVIEWER MODAL */}
      {previewFile && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/50 w-full max-w-4xl h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="border-b border-slate-200/50 dark:border-slate-800/40 p-4.5 flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase font-black bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-300 px-2.5 py-0.5 rounded-lg border border-primary-500/5">
                  {previewFile.type.toUpperCase()} PDF PREVIEW
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-700 dark:text-white truncate max-w-lg mt-1">{previewFile.title}</h4>
              </div>
              <div className="flex items-center gap-2">
                {previewFile.pdfUrl && (
                  <button 
                    onClick={() => window.open(previewFile.pdfUrl, '_blank')}
                    title="Open PDF in new tab"
                    className="p-2 rounded-xl text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                )}
                <button 
                  onClick={() => setPreviewFile(null)}
                  className="p-2 rounded-xl text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-100/60 dark:bg-slate-900/60 p-4 overflow-hidden flex justify-center items-center">
              {previewFile.pdfUrl ? (
                <iframe
                  src={previewFile.pdfUrl}
                  className="w-full h-full rounded-2xl border-none shadow-lg bg-white"
                  title={previewFile.title}
                />
              ) : (
                <div className="bg-white text-slate-800 max-w-2xl w-full p-8 sm:p-12 shadow-xl rounded-2xl flex flex-col justify-between aspect-[1/1.4] select-none h-fit border border-slate-200/50">
                  <div className="space-y-6">
                    {previewFile.type === 'pyq' ? (
                      <>
                        <div className="border-b-2 border-secondary-500 pb-4 text-center">
                          <p className="text-[10px] uppercase font-black text-slate-450 tracking-wider">🎓 RGPV OFFICIAL QUESTION PAPER</p>
                          <h2 className="font-display text-base sm:text-lg font-black text-slate-800 mt-1">
                            {subject.name} ({subject.code})
                          </h2>
                          <p className="text-[9px] text-slate-400 mt-0.5">
                            B.Tech. VI Sem Exam • Year {previewFile.title.match(/\d+/)?.[0] || '2025'}
                          </p>
                        </div>

                        <div className="space-y-4 text-xs leading-relaxed text-slate-650 font-semibold">
                          <div className="flex justify-between text-[10px] border-b pb-2 text-slate-450 font-bold">
                            <span>TIME: 3 HOURS</span>
                            <span>MAX MARKS: 70</span>
                          </div>
                          <p className="italic text-slate-450 text-[11px] font-bold">
                            Note: Attempt any FIVE questions. All questions carry equal marks.
                          </p>
                          
                          <div className="space-y-3.5 pt-2">
                            {subjectQuestions.slice(0, 5).map((q, idx) => (
                              <div key={q.id} className="flex gap-2">
                                <span className="font-bold text-slate-800">Q.{idx + 1}</span>
                                <div>
                                  <p className="font-bold text-slate-805">{q.question}</p>
                                  <span className="text-[9px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-black uppercase mt-1 inline-block">
                                    [{q.type}]
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="border-b-2 border-primary-500 pb-4 text-center">
                          <p className="text-[10px] uppercase font-black text-slate-450 tracking-wider">📚 LECTURE STUDY NOTE</p>
                          <h2 className="font-display text-base sm:text-lg font-black text-slate-800 mt-1">
                            {previewFile.title}
                          </h2>
                          <p className="text-[9px] text-slate-400 mt-0.5">
                            Subject: {subject.name} ({subject.code})
                          </p>
                        </div>

                        <div className="space-y-4 text-xs leading-relaxed text-slate-650 font-semibold max-h-[360px] overflow-y-auto pr-1">
                          <p className="font-black text-slate-800 text-[13px] border-b pb-1">1. Subject Syllabus Core</p>
                          <ul className="list-disc pl-4 space-y-1.5 text-slate-600">
                            {subject.overview.syllabus.map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ul>

                          <p className="font-black text-slate-855 text-[13px] border-b pb-1 pt-2">2. Important Term definitions</p>
                          <div className="space-y-2">
                            {subject.oneNightRevision.definitions.slice(0, 2).map((def, i) => (
                              <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                                <p className="font-bold text-primary-600 uppercase text-[10px]">{def.term}</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">{def.definition}</p>
                              </div>
                            ))}
                          </div>

                          {subject.oneNightRevision.formulas.length > 0 && (
                            <>
                              <p className="font-black text-slate-805 text-[13px] border-b pb-1 pt-2">3. Reference Formulas</p>
                              <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl text-center font-mono text-[10px] text-slate-600 leading-relaxed font-bold">
                                {subject.oneNightRevision.formulas[0].name}:<br />
                                <span className="text-primary-600 font-black text-xs block my-1">
                                  {subject.oneNightRevision.formulas[0].formula}
                                </span>
                                <span className="text-[9px] text-slate-450 block">
                                  {subject.oneNightRevision.formulas[0].explanation}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-[10px] text-slate-400 font-black uppercase tracking-wider mt-4">
                    <span>Page 1 of {previewFile.type === 'pyq' ? '1' : '3'} (Interactive Preview)</span>
                    <span>RGPV Exam Hub</span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200/50 dark:border-slate-800/40 p-4.5 flex justify-end gap-2.5">
              <button 
                onClick={() => setPreviewFile(null)}
                className="text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-750 dark:text-slate-200 py-2.5 px-5 rounded-xl cursor-pointer"
              >
                Close Preview
              </button>
              <button 
                onClick={() => {
                  if (previewFile.id) {
                    handleDownload(previewFile.id, previewFile.title, previewFile.type);
                  } else {
                    handleDownload(`pre-${Date.now()}`, previewFile.title, previewFile.type);
                  }
                  setPreviewFile(null);
                }}
                className="text-xs font-bold text-white bg-primary-500 hover:bg-primary-600 py-2.5 px-5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-primary-500/20"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      {videoUrl && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative border border-white/5">
            <button 
              onClick={() => setVideoUrl(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
}

// ----------------------------------------------------
// 5. COMMUNITY COMPONENT
// ----------------------------------------------------
function CommunitySection() {
  const { notes, pyqs, uploadResource, upvoteResource, upvotes, showToast } = useApp();

  const [title, setTitle] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [resourceType, setResourceType] = useState<'note' | 'pyq'>('note');
  
  const [noteCategory, setNoteCategory] = useState<Note['category']>('Student Notes');
  const [pyqYear, setPyqYear] = useState(new Date().getFullYear());
  const [pyqType, setPyqType] = useState<PYQ['examType']>('Regular');
  
  const [authorName, setAuthorName] = useState('');
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedThumbnailFile, setSelectedThumbnailFile] = useState<File | null>(null);

  const availableSubjects = SUBJECTS.filter(
    s => s.branchId === selectedBranch && s.semester === Number(selectedSemester)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !selectedSubject || !authorName || !selectedFile) {
      showToast('Please fill out all fields, including the PDF file!', 'error');
      return;
    }

    const sizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(1);
    const fileSize = `${sizeInMB} MB`;

    const wasSuccess = await uploadResource(
      {
        title,
        subjectId: selectedSubject,
        semester: Number(selectedSemester),
        branch: selectedBranch,
        unit: resourceType === 'note' ? 'All Units' : undefined,
        category: resourceType === 'note' ? noteCategory : undefined,
        year: resourceType === 'pyq' ? pyqYear : undefined,
        examType: resourceType === 'pyq' ? pyqType : undefined,
        type: resourceType,
        author: authorName,
        fileSize
      },
      selectedFile,
      selectedThumbnailFile || undefined
    );

    if (wasSuccess) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setSuccess(true);
      
      setTitle('');
      setSelectedBranch('');
      setSelectedSemester('');
      setSelectedSubject('');
      setAuthorName('');
      setSelectedFile(null);
      setSelectedThumbnailFile(null);
    }
  };

  const getSubjectName = (id: string) => {
    return SUBJECTS.find(s => s.id === id)?.name || 'General';
  };

  const communityNotes = notes.filter(n => n.isCommunity);
  const communityPyqs = pyqs.filter(p => p.isCommunity);
  const totalSubmissions = [
    ...communityNotes.map(n => ({ ...n, type: 'Note' as const })),
    ...communityPyqs.map(p => ({ ...p, type: 'PYQ' as const, title: `RGPV ${p.year} ${p.examType} Exam Paper`, author: p.author || 'Anonymous Contributor' }))
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-in fade-in duration-300">
      
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 text-emerald-500 font-bold px-3.5 py-1.5 rounded-full text-xs">
          <Users className="w-4 h-4" /> Community Contribution Portal
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight">RGPV Community Submissions</h1>
        <p className="text-sm text-slate-450 dark:text-slate-400 font-semibold leading-relaxed">
          Upload notes, assignments, or official exam question sheets. All uploads are moderated by administrators before they appear on subject hubs.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form */}
        <div className="lg:col-span-2 bg-[var(--card-bg)] border border-slate-200/50 dark:border-slate-800/40 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
          <h2 className="font-display text-lg font-bold text-slate-850 dark:text-white flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-primary-500" />
            Upload Study Material
          </h2>

          {success ? (
            <div className="border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/10 p-6 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <div>
                <h3 className="font-bold text-slate-700 dark:text-slate-200">File Sent to Moderation Queue!</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  Your resource is now in the <strong>Admin Moderation Deck</strong>. Once verified, it will be published to the subject hub.
                </p>
              </div>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-xs font-bold text-slate-650 dark:text-slate-350 border border-slate-200/50 dark:border-slate-800/40 py-2.5 px-4.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Upload Another
                </button>
                <button 
                  onClick={() => window.location.hash = '#/admin'}
                  className="text-xs font-bold text-white bg-primary-500 hover:bg-primary-600 py-2.5 px-4.5 rounded-xl transition-all cursor-pointer flex items-center gap-1"
                >
                  Go to Moderation Queue <ShieldAlert className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
                <button 
                  type="button" 
                  onClick={() => setResourceType('note')}
                  className={`py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    resourceType === 'note' 
                      ? 'bg-white dark:bg-slate-800 text-primary-500 shadow-sm border border-slate-200/50 dark:border-slate-800/30' 
                      : 'text-slate-400 hover:text-slate-650'
                  }`}
                >
                  📚 Upload Notes
                </button>
                <button 
                  type="button" 
                  onClick={() => setResourceType('pyq')}
                  className={`py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    resourceType === 'pyq' 
                      ? 'bg-white dark:bg-slate-800 text-primary-500 shadow-sm border border-slate-200/50 dark:border-slate-800/30' 
                      : 'text-slate-400 hover:text-slate-650'
                  }`}
                >
                  📄 Upload PYQ Paper
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Resource Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Unit 3 Support Vector Machine Notes"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-700 dark:text-slate-200 font-semibold"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Author Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Priyanshu Sharma"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-700 dark:text-slate-200 font-semibold"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Branch</label>
                  <select 
                    value={selectedBranch}
                    onChange={(e) => { setSelectedBranch(e.target.value); setSelectedSubject(''); }}
                    className="w-full bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-600 dark:text-slate-350 font-bold cursor-pointer"
                    required
                  >
                    <option value="">Choose Branch</option>
                    {BRANCHES.map(b => (
                      <option key={b.id} value={b.id}>{b.code}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Semester</label>
                  <select 
                    value={selectedSemester}
                    onChange={(e) => { setSelectedSemester(e.target.value); setSelectedSubject(''); }}
                    className="w-full bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-600 dark:text-slate-350 font-bold cursor-pointer"
                    required
                  >
                    <option value="">Choose Semester</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <option key={sem} value={sem}>Sem {sem}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    disabled={!selectedBranch || !selectedSemester}
                    className="w-full bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-650 dark:text-slate-350 font-bold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    required
                  >
                    <option value="">Select Subject</option>
                    {availableSubjects.map(sub => (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {resourceType === 'note' ? (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category</label>
                  <select 
                    value={noteCategory}
                    onChange={(e) => setNoteCategory(e.target.value as Note['category'])}
                    className="w-full bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-600 dark:text-slate-350 font-bold cursor-pointer"
                  >
                    <option value="Faculty Notes">Faculty Notes</option>
                    <option value="Student Notes">Student Notes</option>
                    <option value="Short Notes">Short Notes</option>
                    <option value="Handwritten Notes">Handwritten Notes</option>
                  </select>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exam Year</label>
                    <input 
                      type="number" 
                      min="2020" 
                      max="2026"
                      value={pyqYear}
                      onChange={(e) => setPyqYear(Number(e.target.value))}
                      className="w-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-750 dark:text-slate-200 font-semibold"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Paper Type</label>
                    <select 
                      value={pyqType}
                      onChange={(e) => setPyqType(e.target.value as PYQ['examType'])}
                      className="w-full bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-600 dark:text-slate-350 font-bold cursor-pointer"
                    >
                      <option value="Regular">Regular Paper</option>
                      <option value="Ex">Ex Paper (Backlog)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Real PDF File Upload Box */}
              <div className="space-y-1.5">
                <label className="border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary-500/50 rounded-2.5xl p-6.5 text-center space-y-2.5 transition-colors cursor-pointer flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setSelectedFile(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                    required
                  />
                  <UploadCloud className={`w-10 h-10 ${selectedFile ? 'text-primary-500' : 'text-slate-300'} mx-auto`} />
                  <p className="text-xs font-bold text-slate-650 dark:text-slate-350">
                    {selectedFile ? `Selected: ${selectedFile.name}` : "Click to browse and upload notes PDF"}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold">Max file size: 10MB (PDF format only)</p>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-2xl transition-all shadow-md shadow-primary-500/20 hover:scale-[1.01] btn-premium cursor-pointer"
              >
                Submit File for Admin Review
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <div className="space-y-6">
          <div className="glass-panel p-6.5 rounded-2.5xl shadow-sm space-y-4 border-slate-200/50 dark:border-slate-800/40">
            <h3 className="font-display text-sm sm:text-base font-bold text-slate-700 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              Upload Guidelines
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary-500 font-black">1.</span>
                <span><strong>No Plagiarism:</strong> Only upload notes created by you, your professors, or standard reference publications.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-black">2.</span>
                <span><strong>Accuracy:</strong> Make sure the semester, branch, and subject code align exactly with RGPV criteria.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-black">3.</span>
                <span><strong>Review:</strong> Submissions are usually reviewed by admin panel monitors within 24 hours.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6.5 rounded-2.5xl shadow-sm space-y-4 border-slate-200/50 dark:border-slate-800/40">
            <h3 className="font-display text-sm sm:text-base font-bold text-slate-700 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Weekly Top Contributors
            </h3>
            <div className="space-y-3.5">
              {[
                { name: 'Dr. R. K. Gupta', uploads: 28, score: 980, color: 'border-yellow-500' },
                { name: 'Saurabh Kumar', uploads: 18, score: 620, color: 'border-slate-350' },
                { name: 'Anjali Sharma', uploads: 12, score: 410, color: 'border-amber-600' }
              ].map((cont, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/30 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-8.5 h-8.5 rounded-full border-2 ${cont.color} flex items-center justify-center font-black text-xs bg-slate-50 dark:bg-slate-900`}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-705 dark:text-slate-200">{cont.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold">{cont.uploads} Resource Files</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-black text-primary-500 uppercase">{cont.score} Pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Archive */}
      <section className="space-y-6">
        <h2 className="font-display text-lg sm:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-secondary-500" />
          Community Contribution Deck
        </h2>

        {totalSubmissions.filter(item => item.approved).length === 0 ? (
          <div className="text-center py-10 text-slate-400 glass-panel rounded-2.5xl border-dashed">
            No community uploads have been approved yet. Be the first to share notes!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {totalSubmissions.filter(item => item.approved).map((item) => {
              const isNote = 'category' in item;
              const badgeText = isNote ? item.category : 'Official PYQ Paper';

              return (
                <div 
                  key={item.id}
                  className="glass-panel rounded-2.5xl p-5.5 flex flex-col justify-between hover:border-primary-500/20 border-slate-200/50 dark:border-slate-800/40"
                >
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-lg bg-secondary-50 dark:bg-secondary-950/20 text-secondary-600 dark:text-secondary-350 border border-secondary-500/10">
                        {badgeText}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">{getSubjectName(item.subjectId)}</span>
                    </div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-slate-700 dark:text-white line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Shared by: {item.author}</p>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800/40 mt-5 pt-3.5 flex items-center justify-between text-xs text-slate-450 dark:text-slate-400 font-bold">
                    <span>{item.fileSize} • {item.downloads} Downloads</span>
                    <button 
                      onClick={() => upvoteResource(item.id)}
                      className="flex items-center gap-1 text-primary-500 bg-primary-50/50 dark:bg-primary-950/10 border border-primary-500/10 hover:bg-primary-500/10 py-1.5 px-3 rounded-lg cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 fill-primary-500" />
                      <span>{upvotes[item.id] || 0}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

    </div>
  );
}

// ----------------------------------------------------
// 6. STUDENT DASHBOARD COMPONENT
// ----------------------------------------------------
function DashboardSection({ navigate }: { navigate: (hash: string) => void }) {
  const { 
    user, 
    googleLogin, 
    notes, 
    pyqs, 
    bookmarks, 
    downloads, 
    toggleBookmark, 
    upvotes,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<SubSection>('bookmarks');
  const [prefBranch, setPrefBranch] = useState('cs');
  const [prefSem, setPrefSem] = useState('6');
  const [notifications, setNotifications] = useState(true);

  if (!user || !user.loggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="glass-panel p-10 rounded-3xl max-w-md mx-auto shadow-xl border-slate-200/50 dark:border-slate-800/40 space-y-5">
          <UserIcon className="w-12 h-12 text-slate-350 mx-auto" />
          <h2 className="font-display text-xl font-bold text-slate-700 dark:text-slate-200">Portal Login Required</h2>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Please log in with Google to view your bookmarked definitions, downloaded notes history, and contributions.
          </p>
          <button 
            onClick={() => {
              googleLogin('student');
              confetti({ particleCount: 50, spread: 30, origin: { y: 0.7 } });
            }}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md shadow-primary-500/20 cursor-pointer"
          >
            Log In with Google
          </button>
        </div>
      </div>
    );
  }

  const bookmarkedQuestions = IMPORTANT_QUESTIONS.filter(q => bookmarks.includes(q.id));
  const downloadedFiles = [
    ...notes.filter(n => downloads.includes(n.id)),
    ...pyqs.filter(p => downloads.includes(p.id))
  ];

  const mySubmissions = [
    ...notes.filter(n => n.isCommunity && n.author.toLowerCase() === user.name.toLowerCase()),
    ...pyqs.filter(p => p.isCommunity && p.author && p.author.toLowerCase() === user.name.toLowerCase())
  ].length > 0 ? [
    ...notes.filter(n => n.isCommunity && n.author.toLowerCase() === user.name.toLowerCase()),
    ...pyqs.filter(p => p.isCommunity && p.author && p.author.toLowerCase() === user.name.toLowerCase())
  ] : [...notes.filter(n => n.isCommunity), ...pyqs.filter(p => p.isCommunity)];

  const getSubjectName = (id: string) => {
    return SUBJECTS.find(s => s.id === id)?.name || 'Subject';
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 50, spread: 50 });
    showToast('Preferences updated successfully!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in duration-300">
      
      {/* Profile Header */}
      <section className="glass-panel rounded-2.5xl p-6.5 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 border-slate-200/50 dark:border-slate-800/40">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-20 h-20 rounded-full border border-primary-200 dark:border-slate-700 bg-white"
        />
        <div className="space-y-1.5 text-center sm:text-left flex-1">
          <span className="inline-block text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-350">
            {user.role === 'admin' ? 'Faculty Admin' : 'Active Student'}
          </span>
          <h1 className="font-display text-xl sm:text-2.5xl font-black text-slate-800 dark:text-white">
            Welcome, {user.name}!
          </h1>
          <p className="text-xs text-slate-400 font-semibold">{user.email}</p>
        </div>

        <div className="grid grid-cols-3 gap-5 border-t sm:border-t-0 sm:border-l border-slate-200/50 dark:border-slate-800/30 pt-4 sm:pt-0 sm:pl-8 text-center">
          <div>
            <p className="text-xl font-black text-primary-500">{bookmarks.length}</p>
            <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">Bookmarks</p>
          </div>
          <div className="border-x border-slate-200/45 dark:border-slate-800/30 px-5">
            <p className="text-xl font-black text-secondary-500">{downloads.length}</p>
            <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">Downloads</p>
          </div>
          <div>
            <p className="text-xl font-black text-emerald-500">{mySubmissions.length}</p>
            <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">Uploads</p>
          </div>
        </div>
      </section>

      {/* Grid tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Navigation */}
        <div className="glass-panel p-4 rounded-2.5xl h-fit shadow-sm space-y-1.5 border-slate-200/50 dark:border-slate-800/40">
          {[
            { id: 'bookmarks', name: 'Saved Questions', icon: Bookmark },
            { id: 'downloads', name: 'Download History', icon: Download },
            { id: 'uploads', name: 'My Uploads', icon: UploadCloud },
            { id: 'settings', name: 'Portal Settings', icon: Settings }
          ].map((sec) => {
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id as SubSection)}
                className={`w-full flex items-center gap-3 py-3 px-4 text-xs font-bold rounded-xl transition-all text-left cursor-pointer ${
                  activeTab === sec.id
                    ? 'bg-primary-50 dark:bg-primary-950/20 text-primary-500'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                {sec.name}
              </button>
            );
          })}
        </div>

        {/* Panel content */}
        <div className="md:col-span-3 glass-panel p-6 sm:p-8 rounded-2.5xl shadow-sm min-h-[350px] border-slate-200/50 dark:border-slate-800/40">
          
          {activeTab === 'bookmarks' && (
            <div className="space-y-6">
              <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-850 pb-3">
                <Bookmark className="w-5 h-5 text-primary-500" />
                Saved Study Questions ({bookmarkedQuestions.length})
              </h3>
              
              {bookmarkedQuestions.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
                  <p>You haven't bookmarked any question cards yet.</p>
                  <button onClick={() => navigate('#/subject/ml?tab=questions')} className="text-xs text-primary-500 hover:underline font-bold cursor-pointer">Browse Important Questions</button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {bookmarkedQuestions.map((q) => (
                    <div 
                      key={q.id}
                      className="border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-4.5 flex gap-4 items-start bg-white/60 dark:bg-slate-900/40 shadow-sm"
                    >
                      <div className="bg-primary-50 dark:bg-primary-950/30 text-primary-500 p-2.5 rounded-xl">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-200">
                          {q.question}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] uppercase font-black tracking-wider px-2 py-0.5 rounded bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-300">
                            {q.type}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">{getSubjectName(q.subjectId)}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleBookmark(q.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'downloads' && (
            <div className="space-y-6">
              <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-850 pb-3">
                <Download className="w-5 h-5 text-secondary-500" />
                Syllabus Downloads Log ({downloadedFiles.length})
              </h3>

              {downloadedFiles.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Download className="w-10 h-10 text-slate-300 mx-auto" />
                  <p>No downloads recorded in this session.</p>
                  <button onClick={() => navigate('#/subject/ml?tab=notes')} className="text-xs text-primary-500 hover:underline font-bold cursor-pointer">Browse notes hub</button>
                </div>
              ) : (
                <div className="space-y-3">
                  {downloadedFiles.map((file) => {
                    const isNote = 'category' in file;
                    const name = isNote ? file.title : `RGPV ${file.year} Exam Paper`;
                    const typeText = isNote ? file.category : 'Official PYQ Paper';

                    return (
                      <div 
                        key={file.id}
                        className="border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-4 flex justify-between items-center bg-white/60 dark:bg-slate-900/40 shadow-sm animate-in fade-in"
                      >
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">
                            {typeText}
                          </span>
                          <h4 className="font-display text-sm font-bold text-slate-750 dark:text-slate-200">
                            {name}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-bold">{getSubjectName(file.subjectId)} • {file.fileSize}</p>
                        </div>
                        <button 
                          onClick={() => navigate(`#/subject/${file.subjectId}`)}
                          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 rounded-xl text-slate-450 hover:text-primary-500 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'uploads' && (
            <div className="space-y-6">
              <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-850 pb-3">
                <UploadCloud className="w-5 h-5 text-emerald-500" />
                Submitted Files Archive ({mySubmissions.length})
              </h3>

              {mySubmissions.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <UploadCloud className="w-10 h-10 text-slate-300 mx-auto" />
                  <p>You haven't uploaded any study materials yet.</p>
                  <button onClick={() => navigate('#/community')} className="text-xs text-primary-500 hover:underline font-bold cursor-pointer">Go share notes now</button>
                </div>
              ) : (
                <div className="space-y-3">
                  {mySubmissions.map((file) => {
                    const isNote = 'category' in file;
                    const name = isNote ? file.title : `RGPV ${file.year} Exam Paper`;

                    return (
                      <div 
                        key={file.id}
                        className="border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white/60 dark:bg-slate-900/40 shadow-sm"
                      >
                        <div className="space-y-1">
                          <h4 className="font-display text-sm font-bold text-slate-750 dark:text-slate-200">
                            {name}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-bold">Subject: {getSubjectName(file.subjectId)} • {file.fileSize}</p>
                        </div>

                        <div className="flex items-center gap-3.5">
                          {file.approved ? (
                            <span className="text-[9px] uppercase font-black tracking-wider px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 border border-emerald-500/10 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Live
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase font-black tracking-wider px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/20 text-red-500 border border-red-500/10 flex items-center gap-1">
                              <Clock className="w-3 h-3 animate-pulse" /> Pending Approval
                            </span>
                          )}
                          
                          {file.approved && (
                            <span className="text-xs font-bold text-slate-450">
                              👍 {upvotes[file.id] || 0} Upvotes
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-850 pb-3">
                <Settings className="w-5 h-5 text-slate-500" />
                Academic Settings
              </h3>

              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Branch</label>
                    <select 
                      value={prefBranch}
                      onChange={(e) => setPrefBranch(e.target.value)}
                      className="w-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-650 dark:text-slate-350 cursor-pointer font-bold"
                    >
                      <option value="cs">CSE</option>
                      <option value="aiml">AIML</option>
                      <option value="it">IT</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Semester</label>
                    <select 
                      value={prefSem}
                      onChange={(e) => setPrefSem(e.target.value)}
                      className="w-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-xs rounded-xl p-3 text-slate-650 dark:text-slate-355 cursor-pointer font-bold"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                        <option key={sem} value={sem}>Semester {sem}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-850 pt-4">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                      <BellRing className="w-4 h-4 text-primary-500" />
                      Email Exam Alerts
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Receive notifications when new PYQs go live</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-350 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer shadow-md shadow-primary-500/10"
                >
                  <Save className="w-4 h-4" /> Save Settings
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 7. ADMINISTRATIVE CONSOLE COMPONENT
// ----------------------------------------------------
function AdminSection({ navigate }: { navigate: (hash: string) => void }) {
  const { 
    user, 
    googleLogin, 
    notes, 
    pyqs, 
    approveResource, 
    rejectResource, 
    analytics,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'moderation' | 'analytics' | 'registry'>('moderation');
  const [rejectId, setRejectId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');

  if (!user || user.role !== 'admin') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="glass-panel p-10 rounded-3xl max-w-md mx-auto shadow-xl border-slate-200/50 dark:border-slate-800/40 space-y-5">
          <ShieldAlert className="w-12 h-12 text-secondary-500 mx-auto animate-bounce" />
          <h2 className="font-display text-xl font-bold text-slate-700 dark:text-slate-200">Admin Panel Locked</h2>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            This module houses moderation pipelines. Please authenticate as a Portal Monitor/Admin to access details.
          </p>
          <button 
            onClick={() => {
              googleLogin('admin');
              confetti({ particleCount: 50, spread: 35, origin: { y: 0.7 } });
            }}
            className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md shadow-secondary-500/20 cursor-pointer"
          >
            Authenticate Admin Console
          </button>
        </div>
      </div>
    );
  }

  const pendingNotes = notes.filter(n => n.isCommunity && !n.approved);
  const pendingPyqs = pyqs.filter(p => p.isCommunity && !p.approved);
  const pendingItems = [
    ...pendingNotes.map(n => ({ ...n, type: 'Note' as const })),
    ...pendingPyqs.map(p => ({ ...p, type: 'PYQ' as const, title: `RGPV ${p.year} Exam Paper`, author: p.author || 'Anonymous Contributor' }))
  ];

  const getSubjectName = (id: string) => {
    return SUBJECTS.find(s => s.id === id)?.name || 'General';
  };

  const handleApprove = (id: string, title: string) => {
    approveResource(id);
    confetti({
      particleCount: 80,
      spread: 50,
      colors: ['#10B981', '#7C3AED'],
      origin: { y: 0.8 }
    });
    showToast(`"${title}" published live!`, 'success');
  };

  const handleRejectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectId) return;

    rejectResource(rejectId);
    showToast('Rejected submission and sent feedback.', 'info');
    setRejectId(null);
    setRejectReason('');
  };

  const totalNotes = notes.filter(n => n.approved).length;
  const totalPyqs = pyqs.filter(p => p.approved).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in duration-300">
      
      {/* Admin Title Card */}
      <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
        {/* decor glowing sphere */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-2xl"></div>

        <div className="space-y-1.5 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-secondary-900 border border-secondary-500/20 text-secondary-400 font-bold px-3 py-1 rounded-full text-xs">
            <ShieldAlert className="w-3.5 h-3.5" /> Administrative Monitor
          </div>
          <h1 className="font-display text-xl sm:text-2xl font-black">Moderation & Platform Telemetry</h1>
          <p className="text-xs text-slate-450 font-bold">Admin console: {user.name} ({user.email})</p>
        </div>

        <div className="flex gap-2 relative z-10">
          {[
            { id: 'moderation', name: 'Review Queue', icon: Clock },
            { id: 'analytics', name: 'Analytics', icon: BarChart2 },
            { id: 'registry', name: 'Files Registry', icon: Settings }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-secondary-500 text-white shadow-lg shadow-secondary-500/25 border border-secondary-600'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* review queue panel */}
      {activeTab === 'moderation' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-slate-200/45 dark:border-slate-800/30 pb-4">
            <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary-500" />
              Incoming Review Pipeline ({pendingItems.length})
            </h3>
            <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider">Awaiting Verification</span>
          </div>

          {pendingItems.length === 0 ? (
            <div className="glass-panel rounded-3xl p-16 text-center text-slate-400 space-y-3 border-slate-200/50 dark:border-slate-800/40 shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="font-bold text-slate-700 dark:text-slate-200">Inbox Cleaned!</h4>
              <p className="text-xs">All contributor uploads have been verified and processed.</p>
              <button onClick={() => navigate('#/community')} className="text-xs text-primary-500 hover:underline inline-block font-bold cursor-pointer">Simulate community upload</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingItems.map((item) => {
                const title = item.type === 'Note' ? item.title : `RGPV ${item.year} Exam Paper`;
                const detail = item.type === 'Note' 
                  ? `Category: ${item.category} • ${item.unit}`
                  : `Type: ${item.examType} Exam`;

                return (
                  <div 
                    key={item.id}
                    className="glass-panel rounded-2.5xl p-5 flex flex-col justify-between hover:border-slate-350 dark:hover:border-slate-800 transition-colors border-slate-200/50 dark:border-slate-800/40"
                  >
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] uppercase font-black px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-500 border border-amber-500/10">
                          {item.type} Submission
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">{getSubjectName(item.subjectId)}</span>
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-slate-700 dark:text-white leading-snug">
                        {title}
                      </h4>
                      <p className="text-[10px] text-slate-405 dark:text-slate-400 font-bold uppercase">{detail}</p>
                      <p className="text-[10px] text-slate-405 dark:text-slate-400 font-bold uppercase">Uploader: {item.author} • {item.fileSize}</p>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800/30 mt-5 pt-3.5 flex justify-end gap-2 text-xs font-bold">
                      {item.pdfUrl && (
                        <button 
                          onClick={() => window.open(item.pdfUrl, '_blank')}
                          className="flex items-center gap-1.5 hover:text-primary-500 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/40 py-1.5 px-3.5 rounded-lg cursor-pointer mr-auto animate-pulse"
                        >
                          <Eye className="w-3.5 h-3.5" /> View PDF
                        </button>
                      )}
                      <button 
                        onClick={() => setRejectId(item.id)}
                        className="flex items-center gap-1.5 hover:text-red-500 bg-red-50 dark:bg-red-950/25 border border-red-500/10 py-1.5 px-3.5 rounded-lg cursor-pointer"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </button>
                      <button 
                        onClick={() => handleApprove(item.id, title)}
                        className="flex items-center gap-1.5 text-white bg-emerald-500 hover:bg-emerald-600 py-1.5 px-3.5 rounded-lg cursor-pointer shadow-md shadow-emerald-500/10"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve & Publish
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b border-slate-200/45 dark:border-slate-800/30 pb-4">
            <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-secondary-500" />
              Platform Analytics
            </h3>
            <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider">Live Telemetry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2.5xl flex items-center gap-4.5 border-slate-200/50 dark:border-slate-800/40">
              <div className="bg-primary-50 dark:bg-primary-950/20 text-primary-500 p-4 rounded-2xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-700 dark:text-white">{analytics.dailyUsers}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400">Daily Active Users</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2.5xl flex items-center gap-4.5 border-slate-200/50 dark:border-slate-800/40">
              <div className="bg-secondary-50 dark:bg-secondary-950/20 text-secondary-500 p-4 rounded-2xl">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-700 dark:text-white">{analytics.downloads}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400">Total Downloads</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2.5xl flex items-center gap-4.5 border-slate-200/50 dark:border-slate-800/40">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 p-4 rounded-2xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-700 dark:text-white">{totalNotes + totalPyqs}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400">Published Resources</p>
              </div>
            </div>
          </div>

          {/* subject hits bar chart mockup */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl space-y-6 border-slate-200/50 dark:border-slate-800/40 shadow-sm">
            <h4 className="font-display text-sm font-bold text-slate-750 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary-500" /> Subject Visitor Traffic Index
            </h4>
            <div className="space-y-4">
              {SUBJECTS.map((sub) => {
                const viewsCount = analytics.views[sub.id] || 0;
                const maxViews = Math.max(...Object.values(analytics.views), 1);
                const percent = Math.round((viewsCount / maxViews) * 100);

                return (
                  <div key={sub.id} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                      <span>{sub.name} ({sub.code})</span>
                      <span>{viewsCount} Hits</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-secondary-500 to-indigo-500 h-full rounded-full" style={{ width: `${percent}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Database registry */}
      {activeTab === 'registry' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b border-slate-200/45 dark:border-slate-800/30 pb-4">
            <h3 className="font-display text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-slate-500" />
              Active System Files Registry
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-5 rounded-2.5xl space-y-4 border-slate-200/50 dark:border-slate-800/40">
              <h4 className="font-display text-sm font-black text-slate-700 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-850">Notes Index ({notes.length})</h4>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {notes.map(n => (
                  <div key={n.id} className="text-xs p-3 rounded-xl border border-slate-150/50 dark:border-slate-850/50 bg-white/40 dark:bg-slate-900/20">
                    <p className="font-bold text-slate-700 dark:text-slate-200 truncate">{n.title}</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">{n.category} • Downloads: {n.downloads}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2.5xl space-y-4 border-slate-200/50 dark:border-slate-800/40">
              <h4 className="font-display text-sm font-black text-slate-700 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-850">PYQ Index ({pyqs.length})</h4>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {pyqs.map(p => (
                  <div key={p.id} className="text-xs p-3 rounded-xl border border-slate-150/50 dark:border-slate-850/50 bg-white/40 dark:bg-slate-900/20">
                    <p className="font-bold text-slate-700 dark:text-slate-200">Year {p.year} {p.examType} Exam</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Downloads: {p.downloads}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2.5xl space-y-4 border-slate-200/50 dark:border-slate-800/40">
              <h4 className="font-display text-sm font-black text-slate-700 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-850">System Logs</h4>
              <div className="space-y-3.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <div className="flex gap-2 text-amber-500"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> <p>Rate limiting: Active. 100 req/min/IP.</p></div>
                <div className="flex gap-2 text-emerald-500"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <p>Sanitization: OK. XSS protection enabled.</p></div>
                <div className="flex gap-2 text-primary-500"><Award className="w-4 h-4 mt-0.5 flex-shrink-0" /> <p>Security protocols: Active JWT validation.</p></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {rejectId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/50 w-full max-w-md rounded-3xl overflow-hidden p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h4 className="font-display text-base font-bold text-slate-750 dark:text-white flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-red-500" /> Provide Rejection Reason
            </h4>

            <form onSubmit={handleRejectSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Feedback for Contributor</label>
                <textarea 
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="e.g. Stray text, pages missing, out of syllabus details..."
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs min-h-[100px] text-slate-700 dark:text-slate-200 font-semibold"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end gap-2.5 text-xs font-bold">
                <button 
                  type="button" 
                  onClick={() => setRejectId(null)}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-2.5 px-4.5 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-600 text-white py-2.5 px-4.5 rounded-xl cursor-pointer"
                >
                  Confirm Reject
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// ----------------------------------------------------
// EXPORT MOUNT POINT
// ----------------------------------------------------
export default function App() {
  return (
    <AppProvider>
      <div className="mesh-bg"></div>
      <AppContent />
    </AppProvider>
  );
}
