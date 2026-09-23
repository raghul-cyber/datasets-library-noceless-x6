import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Star, Cpu } from 'lucide-react';
import { DatasetItem } from '../types/dataset';

interface DatasetDetailPanelProps {
  dataset: DatasetItem | null;
  onClose: () => void;
}

export const DatasetDetailPanel: React.FC<DatasetDetailPanelProps> = ({ dataset, onClose }) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key press & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (dataset) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus the panel
      panelRef.current?.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [dataset, onClose]);

  if (!dataset) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dataset-panel-title"
      className="fixed inset-0 z-50 overflow-hidden flex justify-end"
    >
      {/* Backdrop scrim */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-200"
      />

      {/* Flyout Side Drawer */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-lg bg-tac-surface border-l border-tac-border-medium shadow-2xl shadow-black p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 transition-transform duration-200 animate-in slide-in-from-right"
      >
        <div>
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-tac-border-subtle/80 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-signal-cyan bg-tac-base px-2 py-1 rounded border border-tac-border-subtle">
                ID #{dataset.id.toString().padStart(2, '0')}
              </span>
              {dataset.priority && (
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono text-signal-mint bg-emerald-950/80 border border-emerald-500/30">
                  <Star className="w-2.5 h-2.5 fill-signal-mint" />
                  <span>CORE SOURCE</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close dataset detail panel"
              className="p-1.5 rounded bg-tac-base text-emerald-400/80 hover:text-white hover:bg-tac-elevated border border-tac-border-subtle transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dataset Title */}
          <h2
            id="dataset-panel-title"
            className="font-display font-extrabold text-2xl text-white tracking-tight uppercase leading-tight mb-6"
          >
            {dataset.name}
          </h2>

          {/* Technical Metadata Matrix */}
          <div className="space-y-4 bg-tac-base/70 rounded p-4 border border-tac-border-subtle mb-6">
            <div>
              <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest block">
                CATEGORY
              </span>
              <div className="font-mono text-sm font-semibold text-signal-cyan mt-0.5">
                {dataset.category}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest block">
                PRIMARY USE / RESEARCH FUNCTION
              </span>
              <div className="font-sans text-sm text-emerald-100 mt-0.5">
                {dataset.use}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-tac-border-subtle/60">
              <div>
                <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest block">
                  RESOURCE TYPE
                </span>
                <span className="font-mono text-xs text-emerald-300">
                  {dataset.isRepository ? 'Code / Data Repository' : 'Dataset Official Portal'}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest block">
                  HOST DOMAIN
                </span>
                <span className="font-mono text-xs text-emerald-300">
                  {dataset.domain}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest block">
                PIPELINE USE CASE
              </span>
              <span className="inline-block mt-1 px-2.5 py-1 rounded bg-emerald-950 text-xs font-mono text-signal-mint border border-emerald-500/30">
                {dataset.useCase}
              </span>
            </div>
          </div>

          {/* Research Notes & Pipeline Integration */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400/80 uppercase">
              <Cpu className="w-3.5 h-3.5 text-signal-cyan" />
              <span>NOISELESS-X6 RESEARCH ROLE</span>
            </div>
            <p className="text-xs font-sans text-emerald-200/80 leading-relaxed bg-tac-elevated/60 p-3.5 rounded border border-tac-border-subtle">
              {dataset.notes}
            </p>
          </div>

          {/* Licensing and Access Reminder */}
          <div className="p-3 rounded bg-amber-950/20 border border-amber-500/20 text-[11px] font-sans text-amber-200/70 leading-relaxed">
            <strong className="font-mono text-amber-300 uppercase block mb-1">
              DATA ACCESS NOTICE
            </strong>
            Provider registration, terms, or source media licensing may apply. NOISELESS-X6 provides
            this link as a direct technical research reference.
          </div>
        </div>

        {/* Footer Action Buttons */}
        <div className="pt-6 border-t border-tac-border-subtle mt-6 space-y-3">
          <a
            href={dataset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-tac-base font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 group"
          >
            <span>OPEN OFFICIAL DATASET</span>
            <ExternalLink className="w-4 h-4 text-tac-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded bg-tac-base hover:bg-tac-elevated border border-tac-border-subtle text-xs font-mono text-emerald-400/70 hover:text-emerald-200 transition-colors"
          >
            CLOSE PANEL (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
