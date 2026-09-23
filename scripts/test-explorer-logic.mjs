import { DATASETS_LIST, DATASET_CATEGORIES, USE_CASES } from '../src/data/datasets.ts';
import { filterDatasets } from '../src/utils/datasetFilters.ts';

console.log('=== RUNNING COMPREHENSIVE EXPLORER FUNCTIONAL TESTS ===');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✓ PASS: ${message}`);
    passed++;
  } else {
    console.error(`✗ FAIL: ${message}`);
    failed++;
  }
}

// Test 1: Total datasets
assert(DATASETS_LIST.length === 118, 'Total datasets is exactly 118');

// Test 2: Unfiltered Explorer state
const allDatasets = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(allDatasets.length === 118, 'Default unfiltered state returns all 118 datasets');
assert(allDatasets[0].id === 1 && allDatasets[0].name.includes('Military Audio Dataset'), 'First dataset is MAD (#1)');
assert(allDatasets[117].id === 118 && allDatasets[117].name.includes('AudioSetCaps'), 'Last dataset is AudioSetCaps (#118)');

// Test 3: Category filtering
const military = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'MILITARY / DEFENCE',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(military.length === 2, `MILITARY / DEFENCE returns exactly 2 datasets (got ${military.length})`);
assert(military[0].id === 1 && military[1].id === 2, 'Military datasets are #1 and #2');

const rir = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ACOUSTIC / RIR',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(rir.length === 11, `ACOUSTIC / RIR returns exactly 11 datasets (got ${rir.length})`);

// Test 4: Keyword search - 'helicopter'
const helicopter = filterDatasets(DATASETS_LIST, {
  search: 'helicopter',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(helicopter.length >= 1 && helicopter.some(d => d.id === 1), 'Search "helicopter" matches Military Audio Dataset (#1)');

// Test 5: Keyword search - 'DNS'
const dns = filterDatasets(DATASETS_LIST, {
  search: 'DNS',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(dns.length >= 5 && dns.some(d => d.name.includes('DNS Challenge')), 'Search "DNS" matches DNS Challenge datasets');

// Test 6: Keyword search - 'speech'
const speech = filterDatasets(DATASETS_LIST, {
  search: 'speech',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(speech.length >= 20, `Search "speech" matches speech corpora (found ${speech.length})`);

// Test 7: Keyword search - 'RIR'
const rirSearch = filterDatasets(DATASETS_LIST, {
  search: 'RIR',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(rirSearch.length >= 10, `Search "RIR" matches RIR corpora (found ${rirSearch.length})`);

// Test 8: Keyword search - 'machinery'
const machinery = filterDatasets(DATASETS_LIST, {
  search: 'machinery',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(machinery.length >= 10, `Search "machinery" matches industrial corpora (found ${machinery.length})`);

// Test 9: Use case filtering
const machineAudio = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ALL',
  useCase: 'MACHINE AUDIO',
  sortBy: 'id-asc'
});
assert(machineAudio.length === 24, `Use case "MACHINE AUDIO" returns exactly 24 datasets (got ${machineAudio.length})`);

const speechProtection = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ALL',
  useCase: 'SPEECH PROTECTION',
  sortBy: 'id-asc'
});
assert(speechProtection.length === 18, `Use case "SPEECH PROTECTION" returns exactly 18 datasets (got ${speechProtection.length})`);

const acousticSim = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ALL',
  useCase: 'ACOUSTIC SIMULATION',
  sortBy: 'id-asc'
});
assert(acousticSim.length === 13, `Use case "ACOUSTIC SIMULATION" returns exactly 13 datasets (got ${acousticSim.length})`);

// Test 10: Sorting - A-Z
const sortedAlpha = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'name-asc'
});
assert(sortedAlpha[0].name.localeCompare(sortedAlpha[1].name) <= 0, 'Sorting A-Z orders names alphabetically');

// Test 11: Sorting - ID desc
const sortedDesc = filterDatasets(DATASETS_LIST, {
  search: '',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-desc'
});
assert(sortedDesc[0].id === 118 && sortedDesc[117].id === 1, 'Sorting ID desc starts with #118 and ends with #1');

// Test 12: Empty state
const nonExistent = filterDatasets(DATASETS_LIST, {
  search: 'xyznonexistentterm123',
  category: 'ALL',
  useCase: 'ALL',
  sortBy: 'id-asc'
});
assert(nonExistent.length === 0, 'Search for non-existent keyword returns 0 items (triggers Empty State)');

console.log(`\nTEST RESULTS: ${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL EXPLORER FUNCTIONAL TESTS PASSED!');
  process.exit(0);
}
