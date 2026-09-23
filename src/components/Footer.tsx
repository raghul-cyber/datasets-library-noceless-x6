import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tac-base border-t border-tac-border-subtle py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-tac-border-subtle">
          {/* Official Branding */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-tac-surface border border-emerald-500/40 p-0.5 overflow-hidden shadow-sm shadow-emerald-500/20 flex-shrink-0">
              <img
                src="/noiseless-x6-logo.png"
                alt="NOISELESS-X6 Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-lg tracking-wider">
                NOISELESS-X6
              </div>
              <div className="text-xs font-mono text-signal-cyan tracking-widest uppercase">
                DATASET LIBRARY
              </div>
              <p className="text-xs font-sans text-emerald-300/60 mt-0.5">
                Research resources for adaptive acoustic intelligence.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-emerald-300/70">
            <a href="#datasets" className="hover:text-signal-cyan transition-colors">
              DATASETS
            </a>
            <a href="#pipeline" className="hover:text-signal-cyan transition-colors">
              PIPELINE
            </a>
            <a href="#categories" className="hover:text-signal-cyan transition-colors">
              CATEGORIES
            </a>
            <a href="#core" className="hover:text-signal-cyan transition-colors">
              CORE SOURCES
            </a>
            <a href="#license" className="hover:text-signal-cyan transition-colors">
              LICENSE
            </a>
            <a
              href="https://github.com/kaen2891/military_audio_dataset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal-mint hover:underline flex items-center space-x-1"
            >
              <span>NOISELESS-X6 SPEC</span>
            </a>
          </div>

          {/* Telemetry & Scroll to top */}
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1.5 rounded bg-tac-surface border border-emerald-500/30 text-xs font-mono text-signal-mint flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-mint animate-pulse" />
              <span>118 DATASETS INDEXED</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded bg-tac-surface hover:bg-tac-elevated border border-tac-border-subtle text-emerald-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-emerald-400/50">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-signal-cyan" />
            <span className="tracking-widest uppercase">RESEARCH RESOURCE PORTAL // SIH 2026</span>
          </div>

          <div>
            OFFICIAL TECHNICAL DATASET ARCHIVE • STRICT 2D VECTOR SPECIFICATION
          </div>
        </div>
      </div>
    </footer>
  );
};
