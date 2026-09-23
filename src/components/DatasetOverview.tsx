import React from 'react';
import { Database, Cpu, Layers, Activity, ShieldCheck, Zap } from 'lucide-react';

export const DatasetOverview: React.FC = () => {
  const pipelineSteps = [
    {
      title: 'DATA SOURCES',
      subtitle: '118 Audio Datasets',
      desc: 'Military, environmental, speech & mechanical acoustic corpora',
      icon: Database,
      tag: '01 INPUT',
    },
    {
      title: 'AUDIO PROCESSING',
      subtitle: 'STFT & Windowing',
      desc: 'High-frequency framing, spectral analysis & normalisation',
      icon: Layers,
      tag: '02 DSP',
    },
    {
      title: 'FEATURE EXTRACTION',
      subtitle: 'YAMNet Embeddings',
      desc: '1024-dimensional latent acoustic signature vectors',
      icon: Cpu,
      tag: '03 EMBEDDING',
    },
    {
      title: 'CLASSIFICATION',
      subtitle: 'Task-Specific Models',
      desc: 'Stationary, non-stationary & impulsive noise detection',
      icon: Activity,
      tag: '04 DECISION',
    },
    {
      title: 'SPEECH PROTECTION',
      subtitle: 'Voice Activity Detection',
      desc: 'Preservation of operator speech & harmonic integrity',
      icon: ShieldCheck,
      tag: '05 SAFEGUARD',
    },
    {
      title: 'ADAPTIVE ANC',
      subtitle: 'FxLMS / NLMS Filter',
      desc: 'Secondary path S(z) synthesis and real-time anti-noise',
      icon: Zap,
      tag: '06 EXECUTION',
    },
  ];

  return (
    <section id="overview" className="py-20 bg-tac-base border-b border-tac-border-subtle relative overflow-hidden">
      {/* Background coordinate grid */}
      <div className="absolute inset-0 bg-grid-tactical opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-surface border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-mint" />
            <span>SECTION 02 // ARCHITECTURE OVERVIEW</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            THE DATA LIBRARY
          </h2>
          <p className="mt-3 text-emerald-100/70 text-base sm:text-lg leading-relaxed font-sans">
            NOISELESS-X6 draws from multiple acoustic domains rather than depending on a single source.
            The library spans defence audio, environmental noise, noisy speech, clean speech, machinery,
            sound-event detection and acoustic/RIR resources.
          </p>
        </div>

        {/* 2D Engineering Visual: Animated Signal Path (ZERO 3D) */}
        <div className="bg-tac-surface rounded border border-tac-border-subtle p-6 lg:p-8 relative">
          <div className="flex items-center justify-between border-b border-tac-border-subtle/80 pb-4 mb-8">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-signal-cyan animate-pulse" />
              <span className="tracking-wider uppercase">2D SIGNAL PROCESSING & RESEARCH FLOW</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400/50 uppercase">
              END-TO-END DATA UTILISATION
            </span>
          </div>

          {/* SVG Diagram with animated signal pulse for Desktop */}
          <div className="hidden lg:block relative py-6">
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {pipelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded bg-tac-base/80 border border-tac-border-subtle hover:border-signal-cyan/50 transition-all group relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400/60 mb-2">
                        <span>{step.tag}</span>
                        <span className="text-signal-cyan font-semibold">0{index + 1}</span>
                      </div>
                      <div className="w-8 h-8 rounded bg-tac-surface flex items-center justify-center border border-tac-border-subtle mb-3 text-signal-cyan group-hover:text-white group-hover:border-signal-cyan transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-display font-bold text-sm text-white uppercase tracking-tight">
                        {step.title}
                      </div>
                      <div className="text-xs font-mono text-signal-mint mt-0.5">
                        {step.subtitle}
                      </div>
                    </div>
                    <div className="text-[11px] font-sans text-emerald-300/60 mt-3 pt-3 border-t border-tac-border-subtle/50 leading-relaxed">
                      {step.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connecting 2D animated pulse line below boxes */}
            <div className="relative mt-8 px-8">
              <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="16"
                  x2="100%"
                  y2="16"
                  stroke="#1c2821"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <line
                  x1="0"
                  y1="16"
                  x2="100%"
                  y2="16"
                  stroke="#00e5ff"
                  strokeWidth="2"
                  strokeDasharray="16 120"
                  className="animate-signal-flow"
                />
              </svg>
            </div>
          </div>

          {/* Vertical Stacked Flow for Tablet & Mobile */}
          <div className="lg:hidden space-y-4">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="p-4 rounded bg-tac-base/80 border border-tac-border-subtle flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-tac-surface border border-tac-border-subtle flex items-center justify-center text-signal-cyan flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400/60">
                        <span>{step.tag}</span>
                        <span className="text-signal-cyan">0{index + 1}</span>
                      </div>
                      <div className="font-display font-bold text-base text-white uppercase">
                        {step.title}
                      </div>
                      <div className="text-xs font-mono text-signal-mint">
                        {step.subtitle}
                      </div>
                      <p className="text-xs font-sans text-emerald-300/70 mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="w-0.5 h-4 bg-signal-cyan/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
