import React from 'react';
import { Database, FolderTree, Activity, ShieldCheck, Waves } from 'lucide-react';

interface HeroStatsProps {
  totalDatasets: number;
}

export const HeroStats: React.FC<HeroStatsProps> = ({ totalDatasets }) => {
  const stats = [
    {
      metric: `${totalDatasets}`,
      label: 'DATASETS',
      sublabel: 'Verified Corpora Indexed',
      icon: Database,
      accent: 'text-signal-cyan',
    },
    {
      metric: '10+',
      label: 'RESEARCH CATEGORIES',
      sublabel: 'Defence to RIR Impulse',
      icon: FolderTree,
      accent: 'text-signal-mint',
    },
    {
      metric: 'NOISE',
      label: 'CLASSIFICATION',
      sublabel: 'Stationary / Non-Stationary / Impulsive',
      icon: Activity,
      accent: 'text-emerald-400',
    },
    {
      metric: 'SPEECH',
      label: 'PROTECTION',
      sublabel: 'VAD & Voice Harmonic Pass',
      icon: ShieldCheck,
      accent: 'text-signal-ai',
    },
    {
      metric: 'ACOUSTIC',
      label: 'SIMULATION',
      sublabel: 'RIR & Secondary Path S(z)',
      icon: Waves,
      accent: 'text-signal-cyan',
    },
  ];

  return (
    <div className="bg-tac-surface border-b border-tac-border-subtle py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded bg-tac-base/60 border border-tac-border-subtle/80 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest">
                    METRIC // 0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${stat.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline space-x-1">
                  <span className={stat.accent}>{stat.metric}</span>
                </div>
                <div className="text-xs font-mono font-medium text-emerald-200 tracking-wider uppercase mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] font-sans text-emerald-400/50 mt-1 leading-snug">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
