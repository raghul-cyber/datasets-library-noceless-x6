import React from 'react';
import { ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { HIGH_PRIORITY_DATASETS } from '../data/datasets';
import { DatasetItem } from '../types/dataset';

interface CoreSourcesProps {
  onSelectDataset: (item: DatasetItem) => void;
}

export const CoreSources: React.FC<CoreSourcesProps> = ({ onSelectDataset }) => {
  return (
    <section id="core" className="py-20 bg-tac-surface border-b border-tac-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-base border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-signal-mint" />
            <span>SECTION 07 // HIGH-RELEVANCE CORPORA</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            CORE NOISELESS-X6 SOURCES
          </h2>
          <p className="mt-3 text-emerald-100/70 text-base leading-relaxed font-sans">
            The master specification explicitly designates these high-relevance sources as foundational
            pillars before downloading broad archives. They provide the core acoustic material for defence noise,
            speech protection, machine anomalies, and room response simulation.
          </p>
        </div>

        {/* 2D Synthetic Data Construction Flow Box */}
        <div className="mb-14 p-6 rounded bg-tac-base border border-emerald-500/30">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-tac-border-subtle pb-4 mb-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-signal-mint">
              <ShieldAlert className="w-4 h-4" />
              <span className="uppercase font-bold tracking-wider">
                RECOMMENDED NOISELESS-X6 DATA CONSTRUCTION PIPELINE
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400/60">
              ZERO LEAKAGE DATA INTEGRITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center items-center">
            {/* Input Triad */}
            <div className="p-3 rounded bg-tac-surface border border-tac-border-subtle text-left">
              <div className="text-[10px] font-mono text-emerald-400 uppercase">SYNTHESIS INPUTS</div>
              <div className="text-xs font-mono text-emerald-200 mt-1 space-y-1">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Military / Field Noise</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
                  <span>Clean Voice Speech</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-ai" />
                  <span>RIR Acoustic Path</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-signal-cyan hidden md:block">
              <div className="text-base font-bold">→</div>
              <span className="text-[10px] text-emerald-400/70">CONVOLUTION</span>
            </div>

            {/* Synthetic Product */}
            <div className="p-3 rounded bg-tac-surface border border-signal-cyan/40 text-left">
              <div className="text-[10px] font-mono text-signal-cyan uppercase">INTERMEDIATE</div>
              <div className="font-display font-bold text-sm text-white mt-1">
                SYNTHETIC NOISY SPEECH
              </div>
              <div className="text-[11px] font-sans text-emerald-400/70 mt-1">
                YAMNet 1024-dim Feature Extraction & Classification
              </div>
            </div>

            {/* Control & Mitigation */}
            <div className="p-3 rounded bg-tac-surface border border-signal-mint/40 text-left">
              <div className="text-[10px] font-mono text-signal-mint uppercase">EXECUTION</div>
              <div className="font-display font-bold text-sm text-white mt-1">
                VAD + FxLMS / NLMS
              </div>
              <div className="text-[11px] font-sans text-emerald-400/70 mt-1">
                Anti-Noise Cancellation with Vocal Formant Protection
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-tac-border-subtle/60 flex items-center justify-between text-[11px] font-mono text-emerald-400/60">
            <span>METHODOLOGY NOTE:</span>
            <span>Keep independent source recordings separated between train/val/test to reduce leakage.</span>
          </div>
        </div>

        {/* High-Relevance Dataset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIGH_PRIORITY_DATASETS.slice(0, 15).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDataset(item)}
              className="p-4 rounded bg-tac-base/80 border border-tac-border-subtle hover:border-emerald-500/50 cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-signal-mint font-semibold bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                    CORE #{item.id.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400/60 uppercase">
                    {item.domain}
                  </span>
                </div>

                <h4 className="font-display font-bold text-sm text-white group-hover:text-signal-cyan transition-colors line-clamp-1">
                  {item.name}
                </h4>

                <div className="text-xs font-mono text-emerald-300/80 mt-1">
                  {item.category}
                </div>

                <p className="text-xs font-sans text-emerald-400/70 mt-2 line-clamp-2">
                  {item.use}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-tac-border-subtle/50 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400/50">
                  {item.useCase}
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 text-xs font-mono text-signal-cyan hover:underline"
                >
                  <span>SOURCE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
