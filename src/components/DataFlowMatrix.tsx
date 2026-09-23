import React from 'react';
import { Shield, Trees, Cpu, UserCheck, Activity, Radio, ArrowRight, ArrowDown } from 'lucide-react';

interface DomainMapping {
  domain: string;
  arrow: string;
  objective: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

export const DataFlowMatrix: React.FC = () => {
  const mappings: DomainMapping[] = [
    {
      domain: 'MILITARY / DEFENCE',
      arrow: '↓',
      objective: 'DEFENCE NOISE',
      desc: 'Ground combat vehicles, rotor blades, turbofans, and heavy weapons fire under extreme negative SNR.',
      icon: Shield,
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30',
    },
    {
      domain: 'ENVIRONMENTAL NOISE',
      arrow: '↓',
      objective: 'REAL-WORLD ROBUSTNESS',
      desc: 'Broad-band urban acoustic scenes, road transit, weather, and ambient pressure fluctuations.',
      icon: Trees,
      accent: 'border-signal-cyan/40 text-signal-cyan bg-cyan-950/30',
    },
    {
      domain: 'MACHINERY / INDUSTRIAL',
      arrow: '↓',
      objective: 'NON-STATIONARY AUDIO',
      desc: 'RPM-modulated rotating pumps, bearings, fans, and mechanical friction shifts across operating regimes.',
      icon: Cpu,
      accent: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/30',
    },
    {
      domain: 'CLEAN SPEECH',
      arrow: '↓',
      objective: 'VAD / SPEECH PROTECTION',
      desc: 'Voice activity detection boundary calibration to prevent operator speech from being treated as cancelable noise.',
      icon: UserCheck,
      accent: 'border-signal-mint/40 text-signal-mint bg-emerald-950/30',
    },
    {
      domain: 'NOISY SPEECH',
      arrow: '↓',
      objective: 'SPEECH ENHANCEMENT',
      desc: 'Evaluating conversational intelligibility preservation (STOI/PESQ) and speaker separation under interference.',
      icon: Activity,
      accent: 'border-sky-500/40 text-sky-400 bg-sky-950/30',
    },
    {
      domain: 'ACOUSTIC / RIR',
      arrow: '↓',
      objective: 'ACOUSTIC PATH SIMULATION',
      desc: 'Room impulse response modeling of secondary transfer function S(z) from headset speaker to tympanic membrane.',
      icon: Radio,
      accent: 'border-teal-500/40 text-teal-400 bg-teal-950/30',
    },
  ];

  return (
    <section id="dataflow" className="py-20 bg-tac-base border-b border-tac-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-surface border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-mint" />
            <span>SECTION 06 // ACOUSTIC DOMAIN MAPPING</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            WHY MULTIPLE DATASETS EXIST
          </h2>
          <p className="mt-3 text-emerald-100/70 text-base leading-relaxed font-sans">
            NOISELESS-X6 requires multiple acoustic domains rather than relying on a single noise corpus.
            Each acoustic collection fulfills a distinct operational role in the real-time ANC and DSP pipeline.
          </p>
        </div>

        {/* 2D Visual Domain Mapping Cards (ZERO 3D) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mappings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded bg-tac-surface border border-tac-border-subtle hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest">
                      DOMAIN // 0{idx + 1}
                    </span>
                    <div className={`p-2 rounded border ${item.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Domain Title */}
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                    {item.domain}
                  </h3>

                  {/* Flow Arrow */}
                  <div className="py-3 flex items-center space-x-2 text-xs font-mono text-signal-cyan">
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    <span className="tracking-widest uppercase text-[10px] text-emerald-400/60">
                      TARGET APPLICATION
                    </span>
                  </div>

                  {/* Objective Target */}
                  <div className="p-2.5 rounded bg-tac-base border border-tac-border-subtle">
                    <div className="font-mono font-bold text-xs tracking-wider text-signal-mint uppercase">
                      {item.objective}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-emerald-200/70 font-sans mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-tac-border-subtle/60 flex items-center justify-between text-[10px] font-mono text-emerald-400/50">
                  <span>ACOUSTIC INTELLIGENCE</span>
                  <span className="group-hover:text-signal-cyan transition-colors flex items-center space-x-1">
                    <span>EXPLORE DOMAIN</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
