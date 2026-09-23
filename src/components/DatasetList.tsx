import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { DatasetItem } from '../types/dataset';
import { DatasetRow } from './DatasetRow';

interface DatasetListProps {
  datasets: DatasetItem[];
  selectedDataset: DatasetItem | null;
  onSelectDataset: (dataset: DatasetItem) => void;
  onResetFilters: () => void;
}

export const DatasetList: React.FC<DatasetListProps> = ({
  datasets,
  selectedDataset,
  onSelectDataset,
  onResetFilters,
}) => {
  if (datasets.length === 0) {
    return (
      <div className="bg-tac-surface/60 rounded border border-tac-border-subtle p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-tac-base border border-tac-border-subtle flex items-center justify-center mx-auto text-emerald-400/50 mb-4">
          <SearchX className="w-6 h-6" />
        </div>
        <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
          NO DATASETS FOUND
        </h3>
        <p className="text-xs font-sans text-emerald-400/70 mt-1 max-w-sm mx-auto">
          Try another keyword or reset the filters to browse the complete 118-record library.
        </p>
        <button
          onClick={onResetFilters}
          className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-xs font-mono text-signal-mint hover:text-white transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RESET FILTERS</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {datasets.map((item, index) => (
        <DatasetRow
          key={item.id}
          dataset={item}
          index={index}
          isSelected={selectedDataset?.id === item.id}
          onSelect={onSelectDataset}
        />
      ))}
    </div>
  );
};
