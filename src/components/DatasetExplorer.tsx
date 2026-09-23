import React from 'react';
import { Search, X, ArrowUpDown, RotateCcw, Filter, Database } from 'lucide-react';
import { DATASET_CATEGORIES, USE_CASES } from '../data/datasets';
import { DatasetItem, SortOption, UseCaseCategory } from '../types/dataset';
import { FilterState } from '../utils/datasetFilters';
import { DatasetList } from './DatasetList';

interface DatasetExplorerProps {
  filteredDatasets: DatasetItem[];
  totalCount: number;
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onResetFilters: () => void;
  selectedDataset: DatasetItem | null;
  onSelectDataset: (dataset: DatasetItem) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

export const DatasetExplorer: React.FC<DatasetExplorerProps> = ({
  filteredDatasets,
  totalCount,
  filters,
  onFilterChange,
  onResetFilters,
  selectedDataset,
  onSelectDataset,
  searchInputRef,
}) => {
  const isFiltered =
    filters.search !== '' ||
    filters.category !== 'ALL' ||
    filters.useCase !== 'ALL' ||
    filters.sortBy !== 'id-asc';

  return (
    <section id="datasets" className="py-20 bg-tac-surface border-b border-tac-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-base border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
              <span>SECTION 04 // INTERACTIVE RESEARCH EXPLORER</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
              EXPLORE THE 118 DATASETS
            </h2>
            <p className="mt-3 text-emerald-100/70 text-base leading-relaxed font-sans">
              Search, filter and open the research resources used across the NOISELESS-X6 development pipeline.
            </p>
          </div>

          {/* Dynamic Result Counter (Section 12) */}
          <div className="mt-4 md:mt-0 font-mono text-sm flex items-center space-x-2">
            <div className="px-3.5 py-1.5 rounded bg-tac-base border border-tac-border-subtle text-emerald-300 flex items-center space-x-2">
              <Database className="w-3.5 h-3.5 text-signal-cyan" />
              {isFiltered ? (
                <span>
                  SHOWING <strong className="text-signal-cyan font-bold">{filteredDatasets.length}</strong> OF {totalCount}
                </span>
              ) : (
                <span>
                  <strong className="text-signal-mint font-bold">{totalCount}</strong> DATASETS INDEXED
                </span>
              )}
            </div>

            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="px-2.5 py-1.5 rounded bg-tac-base hover:bg-tac-elevated border border-tac-border-subtle text-xs text-signal-amber hover:text-white transition-all flex items-center space-x-1"
                title="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>RESET ALL</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar (Section 11) */}
        <div className="bg-tac-base rounded border border-tac-border-subtle p-4 sm:p-5 mb-8 space-y-4">
          {/* Top row: Search input + Use Case + Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input (6 cols) */}
            <div className="md:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400/60">
                <Search className="w-4 h-4" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={filters.search}
                onChange={(e) => onFilterChange({ search: e.target.value })}
                placeholder="Search datasets (e.g., helicopter, RIR, speech, DNS, machinery, MAD)..."
                className="w-full pl-10 pr-10 py-2.5 bg-tac-surface rounded border border-tac-border-subtle hover:border-emerald-500/40 focus:border-signal-cyan focus:outline-none focus:ring-1 focus:ring-signal-cyan text-sm text-white placeholder-emerald-400/40 font-mono transition-all"
              />
              {filters.search && (
                <button
                  onClick={() => onFilterChange({ search: '' })}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-400/50 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Use Case Dropdown (3 cols) */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={filters.useCase}
                  onChange={(e) => onFilterChange({ useCase: e.target.value as UseCaseCategory })}
                  aria-label="Filter by research use case"
                  className="w-full py-2.5 px-3 bg-tac-surface rounded border border-tac-border-subtle hover:border-emerald-500/40 focus:border-signal-cyan focus:outline-none text-xs font-mono text-emerald-200 transition-all cursor-pointer appearance-none"
                >
                  {USE_CASES.map((uc) => (
                    <option key={uc} value={uc} className="bg-tac-base text-white">
                      USE CASE: {uc}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-emerald-400/60">
                  <Filter className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Sort Dropdown (3 cols) */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={(e) => onFilterChange({ sortBy: e.target.value as SortOption })}
                  aria-label="Sort dataset items"
                  className="w-full py-2.5 px-3 bg-tac-surface rounded border border-tac-border-subtle hover:border-emerald-500/40 focus:border-signal-cyan focus:outline-none text-xs font-mono text-emerald-200 transition-all cursor-pointer appearance-none"
                >
                  <option value="id-asc" className="bg-tac-base text-white">
                    SORT: Dataset Number (#01 → #118)
                  </option>
                  <option value="id-desc" className="bg-tac-base text-white">
                    SORT: Dataset Number (#118 → #01)
                  </option>
                  <option value="name-asc" className="bg-tac-base text-white">
                    SORT: Name (A-Z)
                  </option>
                  <option value="name-desc" className="bg-tac-base text-white">
                    SORT: Name (Z-A)
                  </option>
                  <option value="category" className="bg-tac-base text-white">
                    SORT: Category
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-emerald-400/60">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: Category filter chips */}
          <div className="pt-2 border-t border-tac-border-subtle/60 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest mr-1 flex-shrink-0">
              CATEGORY:
            </span>
            {DATASET_CATEGORIES.map((cat) => {
              const isSelected = filters.category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onFilterChange({ category: cat })}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-all flex-shrink-0 ${
                    isSelected
                      ? 'bg-signal-cyan text-tac-base font-bold shadow-sm shadow-signal-cyan/20'
                      : 'bg-tac-surface text-emerald-300/80 hover:bg-tac-elevated hover:text-white border border-tac-border-subtle'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dataset List */}
        <DatasetList
          datasets={filteredDatasets}
          selectedDataset={selectedDataset}
          onSelectDataset={onSelectDataset}
          onResetFilters={onResetFilters}
        />
      </div>
    </section>
  );
};
