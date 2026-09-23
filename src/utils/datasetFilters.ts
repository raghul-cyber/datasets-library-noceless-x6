import { DatasetItem, DatasetCategory, UseCaseCategory, SortOption } from '../types/dataset';

export interface FilterState {
  search: string;
  category: DatasetCategory;
  useCase: UseCaseCategory;
  sortBy: SortOption;
}

export function filterDatasets(
  datasets: DatasetItem[],
  filters: FilterState
): DatasetItem[] {
  const { search, category, useCase, sortBy } = filters;
  const q = search.trim().toLowerCase();

  return datasets
    .filter((item) => {
      // 1. Category Filter
      if (category !== 'ALL' && item.category !== category) {
        return false;
      }

      // 2. Use-Case Filter
      if (useCase !== 'ALL' && item.useCase !== useCase) {
        return false;
      }

      // 3. Search Query Filter
      if (q) {
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesUse = item.use.toLowerCase().includes(q);
        const matchesDomain = item.domain.toLowerCase().includes(q);
        const matchesNotes = item.notes ? item.notes.toLowerCase().includes(q) : false;
        const matchesId = item.id.toString() === q || `#${item.id}` === q;

        // Semantic keyword expansions
        let matchesSemantic = false;
        if (q === 'helicopter' || q === 'rotor') {
          matchesSemantic = item.name.toLowerCase().includes('military') || item.use.toLowerCase().includes('military') || item.category === 'MILITARY / DEFENCE';
        } else if (q === 'speech') {
          matchesSemantic = item.category.toLowerCase().includes('speech') || item.use.toLowerCase().includes('speech');
        } else if (q === 'noise') {
          matchesSemantic = item.use.toLowerCase().includes('noise') || item.category.toLowerCase().includes('noise');
        } else if (q === 'machinery' || q === 'machine') {
          matchesSemantic = item.category.toLowerCase().includes('machinery') || item.use.toLowerCase().includes('machine');
        } else if (q === 'rir' || q === 'impulse') {
          matchesSemantic = item.category.toLowerCase().includes('rir') || item.use.toLowerCase().includes('impulse') || item.name.toLowerCase().includes('rir');
        } else if (q === 'dns') {
          matchesSemantic = item.name.toLowerCase().includes('dns') || item.use.toLowerCase().includes('dns');
        } else if (q === 'chime') {
          matchesSemantic = item.name.toLowerCase().includes('chime');
        } else if (q === 'mad') {
          matchesSemantic = item.name.toLowerCase().includes('military audio');
        } else if (q === 'impulsive') {
          matchesSemantic = item.category === 'MILITARY / DEFENCE' || item.name.toLowerCase().includes('sound');
        }

        if (!matchesName && !matchesCat && !matchesUse && !matchesDomain && !matchesNotes && !matchesId && !matchesSemantic) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'id-asc':
          return a.id - b.id;
        case 'id-desc':
          return b.id - a.id;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'category':
          return a.category.localeCompare(b.category) || a.id - b.id;
        default:
          return a.id - b.id;
      }
    });
}

export function parseUrlFilters(): FilterState & { selectedId?: number } {
  if (typeof window === 'undefined') {
    return { search: '', category: 'ALL', useCase: 'ALL', sortBy: 'id-asc' };
  }

  const params = new URLSearchParams(window.location.search);
  const search = params.get('search') || '';
  const categoryParam = params.get('category');
  const useCaseParam = params.get('use');
  const sortParam = params.get('sort') as SortOption | null;
  const idParam = params.get('id');

  let category: DatasetCategory = 'ALL';
  if (categoryParam) {
    const normalized = categoryParam.toUpperCase().replace('-', ' / ').replace('_', ' / ');
    if (normalized.includes('MILITARY')) category = 'MILITARY / DEFENCE';
    else if (normalized.includes('ENVIRON')) category = 'ENVIRONMENTAL NOISE';
    else if (normalized.includes('EVENT')) category = 'SOUND EVENTS';
    else if (normalized.includes('MACHINE')) category = 'MACHINERY / INDUSTRIAL';
    else if (normalized.includes('NOISY')) category = 'NOISY SPEECH';
    else if (normalized.includes('CLEAN')) category = 'CLEAN SPEECH';
    else if (normalized.includes('ENHANCE')) category = 'SPEECH ENHANCEMENT';
    else if (normalized.includes('RIR')) category = 'ACOUSTIC / RIR';
    else if (normalized.includes('DCASE')) category = 'DCASE / BENCHMARKS';
    else if (normalized.includes('GENERAL')) category = 'GENERAL AUDIO';
  }

  let useCase: UseCaseCategory = 'ALL';
  if (useCaseParam) {
    const normalized = useCaseParam.toUpperCase();
    if (normalized.includes('CLASSIF')) useCase = 'NOISE CLASSIFICATION';
    else if (normalized.includes('PROTECT')) useCase = 'SPEECH PROTECTION';
    else if (normalized.includes('ENHANCE')) useCase = 'SPEECH ENHANCEMENT';
    else if (normalized.includes('EVENT')) useCase = 'SOUND EVENT DETECTION';
    else if (normalized.includes('MACHINE')) useCase = 'MACHINE AUDIO';
    else if (normalized.includes('SIMULAT') || normalized.includes('RIR')) useCase = 'ACOUSTIC SIMULATION';
    else if (normalized.includes('GENERAL')) useCase = 'GENERAL AUDIO';
  }

  let sortBy: SortOption = 'id-asc';
  if (sortParam && ['id-asc', 'id-desc', 'name-asc', 'name-desc', 'category'].includes(sortParam)) {
    sortBy = sortParam;
  }

  const selectedId = idParam ? parseInt(idParam, 10) : undefined;

  return { search, category, useCase, sortBy, selectedId };
}

export function syncUrlFilters(filters: FilterState, selectedId?: number | null) {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams();
  if (filters.search) params.set('search', filters.search);
  if (filters.category !== 'ALL') {
    params.set('category', filters.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  }
  if (filters.useCase !== 'ALL') {
    params.set('use', filters.useCase.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  }
  if (filters.sortBy !== 'id-asc') {
    params.set('sort', filters.sortBy);
  }
  if (selectedId) {
    params.set('id', selectedId.toString());
  }

  const queryString = params.toString();
  const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
  window.history.replaceState({}, '', newUrl);
}
