import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { DatasetItem } from '../types/dataset';

interface DatasetRowProps {
  dataset: DatasetItem;
  index: number;
  isSelected: boolean;
  onSelect: (dataset: DatasetItem) => void;
}

export const DatasetRow: React.FC<DatasetRowProps> = ({
  dataset,
  index,
  isSelected,
  onSelect,
}) => {
  const isEven = index % 2 === 0;

  const handleExternalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(dataset);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${dataset.name}, Dataset #${dataset.id}`}
      aria-pressed={isSelected}
      onClick={() => onSelect(dataset)}
      onKeyDown={handleKeyDown}
      className={`group relative flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 rounded transition-all duration-150 cursor-pointer border ${
        isSelected
          ? 'bg-tac-elevated border-signal-cyan shadow-md shadow-signal-cyan/10'
          : isEven
          ? 'bg-tac-surface/90 border-tac-border-subtle/80 hover:bg-tac-elevated hover:border-emerald-500/40 hover:translate-x-0.5'
          : 'bg-tac-base/90 border-tac-border-subtle/80 hover:bg-tac-elevated hover:border-emerald-500/40 hover:translate-x-0.5'
      }`}
    >
      {/* Left side: ID, Priority star, Title & Metadata */}
      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
        {/* Numerical ID */}
        <div className="flex flex-col items-center justify-center w-10 h-10 rounded bg-tac-base border border-tac-border-subtle group-hover:border-signal-cyan/40 transition-colors flex-shrink-0">
          <span className="font-mono text-xs font-bold text-signal-cyan">
            {dataset.id.toString().padStart(2, '0')}
          </span>
          {dataset.priority && (
            <span className="w-1.5 h-1.5 rounded-full bg-signal-mint mt-0.5" title="Core High-Relevance Source" />
          )}
        </div>

        {/* Content information */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-signal-cyan transition-colors truncate">
              {dataset.name}
            </h3>

            {dataset.priority && (
              <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium tracking-wider bg-emerald-950/80 text-signal-mint border border-emerald-500/30">
                <Star className="w-2.5 h-2.5 fill-signal-mint" />
                <span>CORE</span>
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-mono text-emerald-300/80 group-hover:text-emerald-200 transition-colors">
              {dataset.category}
            </span>
            <span className="text-emerald-500/40 hidden sm:inline">•</span>
            <span className="font-sans text-emerald-400/70 truncate">
              {dataset.use}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Domain pill, Use-Case badge & External Open Button */}
      <div className="flex items-center justify-between md:justify-end space-x-3 mt-3 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-tac-border-subtle/50 flex-shrink-0">
        <span className="hidden lg:inline-block px-2 py-0.5 rounded bg-tac-base text-[10px] font-mono text-emerald-400/60 border border-tac-border-subtle">
          {dataset.domain}
        </span>

        <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/40 text-[10px] font-mono text-emerald-300 border border-emerald-500/20">
          {dataset.useCase}
        </span>

        <a
          href={dataset.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleExternalClick}
          aria-label={`Open ${dataset.name} repository in new tab`}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-signal-cyan text-xs font-mono text-signal-mint hover:text-white transition-all group/btn"
        >
          <span>OPEN DATASET</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-signal-cyan" />
        </a>
      </div>
    </div>
  );
};
