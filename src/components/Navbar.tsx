import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick, totalCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'PIPELINE', href: '#pipeline' },
    { label: 'CATEGORIES', href: '#categories' },
    { label: 'CORE SOURCES', href: '#core' },
    { label: 'DATASETS (118)', href: '#datasets' },
    { label: 'LICENSING', href: '#license' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-tac-base/95 backdrop-blur-md border-b border-tac-border-subtle py-3 shadow-lg shadow-black/40'
          : 'bg-tac-base/80 backdrop-blur-sm border-b border-tac-border-subtle/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo - All Text in Single Line */}
        <a href="#" className="flex items-center space-x-3 group flex-shrink-0 whitespace-nowrap">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-tac-surface border border-emerald-500/40 group-hover:border-signal-cyan/60 transition-all p-0.5 overflow-hidden shadow-sm shadow-emerald-500/20 flex-shrink-0">
            <img
              src="/noiseless-x6-logo.png"
              alt="NOISELESS-X6 Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex items-center space-x-2.5 whitespace-nowrap">
            <span className="font-display font-extrabold text-white text-base tracking-wider whitespace-nowrap">
              NOISELESS-X6
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider bg-emerald-950/80 text-signal-mint border border-emerald-500/30 rounded whitespace-nowrap">
              RESEARCH CORPUS
            </span>
            <span className="hidden xl:inline-block text-[11px] font-mono text-emerald-300/60 tracking-widest uppercase whitespace-nowrap">
              // ACOUSTIC DATASET LIBRARY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-emerald-100/70 hover:text-signal-cyan hover:border-b hover:border-signal-cyan/60 transition-all py-1 tracking-wider whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Telemetry */}
        <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
          {/* Quick Search Shortcut */}
          <button
            onClick={onSearchClick}
            className="flex items-center space-x-2 px-3 py-1.5 rounded bg-tac-surface hover:bg-tac-elevated border border-tac-border-subtle hover:border-emerald-500/40 text-xs font-mono text-emerald-200/80 transition-all group whitespace-nowrap"
            aria-label="Search all 118 datasets"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400 group-hover:text-signal-cyan transition-colors" />
            <span className="hidden md:inline">Search 118 Datasets...</span>
            <span className="md:hidden">Search...</span>
            <kbd className="text-[10px] font-mono bg-tac-base px-1.5 py-0.5 rounded border border-tac-border-subtle text-emerald-400/60">
              /
            </kbd>
          </button>

          {/* Telemetry pill */}
          <div className="hidden md:flex items-center space-x-2 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-mint animate-pulse" />
            <span className="tracking-wider">{totalCount} INDEXED</span>
          </div>

          <a
            href="https://github.com/kaen2891/military_audio_dataset"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-1.5 rounded bg-emerald-900/30 hover:bg-emerald-800/40 border border-emerald-500/40 hover:border-signal-cyan text-xs font-mono text-emerald-200 transition-all group whitespace-nowrap"
          >
            <span>CORE SPEC</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-400 group-hover:text-signal-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onSearchClick}
            className="p-2 text-emerald-400 hover:text-white"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-emerald-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-tac-base/98 border-b border-tac-border-subtle px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-tac-border-subtle">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono text-emerald-200 hover:bg-tac-surface rounded border border-transparent hover:border-emerald-500/30 transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400/80 pt-2">
            <span className="flex items-center space-x-1.5 whitespace-nowrap">
              <Terminal className="w-3.5 h-3.5 text-signal-mint" />
              <span>DEFENCE ACOUSTICS CORPUS</span>
            </span>
            <span className="px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-500/30 whitespace-nowrap">
              {totalCount} DATASETS
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
