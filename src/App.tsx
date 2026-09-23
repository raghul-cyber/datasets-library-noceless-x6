import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { DATASETS_LIST } from './data/datasets';
import { DatasetCategory, DatasetItem } from './types/dataset';
import { FilterState, filterDatasets, parseUrlFilters, syncUrlFilters } from './utils/datasetFilters';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroStats } from './components/HeroStats';
import { DatasetOverview } from './components/DatasetOverview';
import { ResearchPipeline } from './components/ResearchPipeline';
import { DataFlowMatrix } from './components/DataFlowMatrix';
import { CoreSources } from './components/CoreSources';
import { DatasetCategories } from './components/DatasetCategories';
import { DatasetExplorer } from './components/DatasetExplorer';
import { DatasetDetailPanel } from './components/DatasetDetailPanel';
import { DatasetLicense } from './components/DatasetLicense';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Initialize filter state from URL if present
  const initialUrlState = useMemo(() => parseUrlFilters(), []);

  const [filters, setFilters] = useState<FilterState>({
    search: initialUrlState.search,
    category: initialUrlState.category,
    useCase: initialUrlState.useCase,
    sortBy: initialUrlState.sortBy,
  });

  const [selectedDataset, setSelectedDataset] = useState<DatasetItem | null>(() => {
    if (initialUrlState.selectedId) {
      return DATASETS_LIST.find((d) => d.id === initialUrlState.selectedId) || null;
    }
    return null;
  });

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync state to URL query parameters
  useEffect(() => {
    syncUrlFilters(filters, selectedDataset?.id);
  }, [filters, selectedDataset]);

  // Listen to popstate (browser back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const urlState = parseUrlFilters();
      setFilters({
        search: urlState.search,
        category: urlState.category,
        useCase: urlState.useCase,
        sortBy: urlState.sortBy,
      });
      if (urlState.selectedId) {
        const found = DATASETS_LIST.find((d) => d.id === urlState.selectedId) || null;
        setSelectedDataset(found);
      } else {
        setSelectedDataset(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global hotkeys (Search `/` or `Ctrl+K`)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        const element = document.getElementById('datasets');
        element?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 300);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Memoized filtered dataset results
  const filteredDatasets = useMemo(() => {
    return filterDatasets(DATASETS_LIST, filters);
  }, [filters]);

  const handleFilterChange = useCallback((updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({
      search: '',
      category: 'ALL',
      useCase: 'ALL',
      sortBy: 'id-asc',
    });
  }, []);

  const handleCategorySelectFromGrid = useCallback((cat: DatasetCategory) => {
    setFilters((prev) => ({ ...prev, category: cat }));
    const element = document.getElementById('datasets');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleFocusSearch = useCallback(() => {
    const element = document.getElementById('datasets');
    element?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 300);
  }, []);

  const handleScrollToPipeline = useCallback(() => {
    const element = document.getElementById('pipeline');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-tac-base text-emerald-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Fixed Navigation */}
      <Navbar onSearchClick={handleFocusSearch} totalCount={DATASETS_LIST.length} />

      <main className="flex-1">
        {/* 01 Hero Section */}
        <Hero
          onExploreClick={handleFocusSearch}
          onPipelineClick={handleScrollToPipeline}
        />

        {/* 02 Hero Statistics */}
        <HeroStats totalDatasets={DATASETS_LIST.length} />

        {/* 03 Dataset Overview */}
        <DatasetOverview />

        {/* 04 Research Pipeline Schematic */}
        <ResearchPipeline />

        {/* 05 Acoustic Domain Flow Matrix */}
        <DataFlowMatrix />

        {/* 06 Core NOISELESS-X6 Sources */}
        <CoreSources onSelectDataset={(d) => setSelectedDataset(d)} />

        {/* 07 Category Taxonomy Cards */}
        <DatasetCategories
          datasets={DATASETS_LIST}
          selectedCategory={filters.category}
          onSelectCategory={handleCategorySelectFromGrid}
        />

        {/* 08 Main Interactive Dataset Explorer */}
        <DatasetExplorer
          filteredDatasets={filteredDatasets}
          totalCount={DATASETS_LIST.length}
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          selectedDataset={selectedDataset}
          onSelectDataset={(d) => setSelectedDataset(d)}
          searchInputRef={searchInputRef}
        />

        {/* 09 Licensing and Attribution Notice */}
        <DatasetLicense />
      </main>

      {/* 10 Footer */}
      <Footer />

      {/* Flyout Dataset Detail Panel */}
      <DatasetDetailPanel
        dataset={selectedDataset}
        onClose={() => setSelectedDataset(null)}
      />
    </div>
  );
};

export default App;
