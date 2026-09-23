import React from 'react';
import {
  ShieldAlert,
  Trees,
  Volume2,
  Cpu,
  Mic,
  Activity,
  UserCheck,
  Radio,
  Binary,
  Layers,
} from 'lucide-react';
import { CATEGORY_METADATA } from '../data/datasets';
import { DatasetCategory, DatasetItem } from '../types/dataset';

interface DatasetCategoriesProps {
  datasets: DatasetItem[];
  selectedCategory: DatasetCategory;
  onSelectCategory: (category: DatasetCategory) => void;
}

export const DatasetCategories: React.FC<DatasetCategoriesProps> = ({
  datasets,
  selectedCategory,
  onSelectCategory,
}) => {
  // Dynamically calculate dataset counts from actual dataset data
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    datasets.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, [datasets]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'MILITARY / DEFENCE':
        return ShieldAlert;
      case 'ENVIRONMENTAL NOISE':
        return Trees;
      case 'SOUND EVENTS':
        return Volume2;
      case 'MACHINERY / INDUSTRIAL':
        return Cpu;
      case 'SPEECH ENHANCEMENT':
        return Mic;
      case 'NOISY SPEECH':
        return Activity;
      case 'CLEAN SPEECH':
        return UserCheck;
      case 'ACOUSTIC / RIR':
        return Radio;
      case 'DCASE / BENCHMARKS':
        return Binary;
      case 'GENERAL AUDIO':
        return Layers;
      default:
        return Layers;
    }
  };

  return (
    <section id="categories" className="py-20 bg-tac-base border-b border-tac-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-surface border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-mint" />
              <span>SECTION 05 // CATEGORY TAXONOMY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
              10 RESEARCH CATEGORIES
            </h2>
            <p className="mt-3 text-emerald-100/70 text-base leading-relaxed font-sans">
              Explore the 10 acoustic partitions comprising the NOISELESS-X6 research foundation.
              Click any category card to instantly filter the dataset explorer below.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-emerald-400/70 flex items-center space-x-2">
            <span>TOTAL INDEXED:</span>
            <span className="px-2 py-0.5 rounded bg-tac-surface border border-tac-border-subtle text-signal-cyan font-bold">
              {datasets.length} DATASETS
            </span>
          </div>
        </div>

        {/* 10 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORY_METADATA.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`p-5 rounded cursor-pointer transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-tac-elevated border-2 border-signal-cyan shadow-lg shadow-signal-cyan/10'
                    : 'bg-tac-surface border border-tac-border-subtle hover:border-emerald-500/50 hover:bg-tac-elevated/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-emerald-400/60 font-semibold">
                      #{cat.number}
                    </span>
                    <div
                      className={`p-2 rounded border ${
                        isSelected
                          ? 'bg-cyan-950/80 text-signal-cyan border-signal-cyan'
                          : 'bg-tac-base text-emerald-400 border-tac-border-subtle group-hover:border-signal-cyan/50 group-hover:text-signal-cyan transition-colors'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-tight group-hover:text-signal-cyan transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-[11px] font-sans text-emerald-300/65 mt-2 line-clamp-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-tac-border-subtle/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400/60 uppercase">
                    DATASETS
                  </span>
                  <span className="font-mono text-xs font-bold text-signal-mint bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    {count}
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
