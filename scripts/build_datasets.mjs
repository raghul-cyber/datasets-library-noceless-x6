import fs from 'fs';
import path from 'path';

const sourceContent = fs.readFileSync('datasets_source.ts', 'utf8');
const match = sourceContent.match(/export const DATASETS_LIST: DatasetItem\[\] = (\[[\s\S]*?\]);\s*export const/);

if (!match) {
  console.error('Could not find dataset array in datasets_source.ts');
  process.exit(1);
}

const rawList = JSON.parse(match[1]);

function determineUseCase(d) {
  const use = d.use.toLowerCase();
  const cat = d.category.toLowerCase();
  if (cat.includes('acoustic') || cat.includes('rir') || use.includes('impulse response') || use.includes('rir')) {
    return 'ACOUSTIC SIMULATION';
  }
  if (cat.includes('machinery') || cat.includes('industrial') || use.includes('machine anomaly') || use.includes('anomalous sound')) {
    return 'MACHINE AUDIO';
  }
  if (cat.includes('clean speech') || use.includes('clean speech') || use.includes('speech corpus') || use.includes('voice') || use.includes('keyword') || use.includes('pitch tracking') || use.includes('active speaker') || use.includes('emotion')) {
    return 'SPEECH PROTECTION';
  }
  if (cat.includes('speech enhancement') || cat.includes('noisy speech') || use.includes('enhancement') || use.includes('noisy speech') || use.includes('noise suppression') || use.includes('mixture') || use.includes('speech separation')) {
    return 'SPEECH ENHANCEMENT';
  }
  if (cat.includes('sound events') || cat.includes('dcase') || use.includes('sound event') || use.includes('caption') || use.includes('tagging')) {
    return 'SOUND EVENT DETECTION';
  }
  if (cat.includes('military') || cat.includes('environmental') || use.includes('noise') || use.includes('scene')) {
    return 'NOISE CLASSIFICATION';
  }
  return 'GENERAL AUDIO';
}

function generateResearchNotes(d) {
  if (d.name.includes('Military Audio Dataset') || d.name.includes('Reduced Military Audio')) {
    return 'High-priority defence noise benchmark. Essential for training YAMNet feature classifiers on rotor, tracked vehicle, turbine, and small arms acoustic signatures under harsh SNR.';
  }
  if (d.category === 'ACOUSTIC / RIR') {
    return 'Provides room impulse response (RIR) spatial models for secondary path S(z) modeling and synthetic reverberant speech/noise generation.';
  }
  if (d.category === 'MACHINERY / INDUSTRIAL') {
    return 'Supplies mechanical operating sounds and domain-shifted anomalies for training adaptive controllers on non-stationary, periodic, and friction-based acoustic signatures.';
  }
  if (d.category === 'CLEAN SPEECH') {
    return 'Ground-truth human voice corpus used to calibrate Voice Activity Detection (VAD) boundaries and evaluate voice preservation during active attenuation.';
  }
  if (d.category === 'NOISY SPEECH' || d.category === 'SPEECH ENHANCEMENT') {
    return 'Benchmark dataset for evaluating speech intelligibility (PESQ/STOI) and residual noise suppression across varied signal-to-noise ratios.';
  }
  if (d.category === 'ENVIRONMENTAL NOISE' || d.category === 'SOUND EVENTS') {
    return 'Broad-spectrum ambient acoustic library enabling cross-domain generalizability and robust latent feature representations across urban and field environments.';
  }
  return 'Multi-purpose acoustic research resource providing diverse audio samples for model validation and acoustic pre-training.';
}

const enrichedList = rawList.map(d => ({
  id: d.id,
  name: d.name,
  category: d.category,
  use: d.use,
  url: d.url,
  domain: d.domain,
  isRepository: d.isRepository,
  priority: Boolean(d.priority),
  useCase: determineUseCase(d),
  notes: generateResearchNotes(d)
}));

const outputContent = `import { DatasetItem, CategoryMetadata, DatasetCategory, UseCaseCategory } from '../types/dataset';

/**
 * NOISELESS-X6 MASTER AUDIO RESEARCH DATASET CORPUS
 * 118 Audio Datasets & Research Corpora for Defence Acoustic Intelligence
 *
 * Source: NOISELESS-X Master Audio Research Specification
 * Validated: IDs 1 to 118 inclusive
 */

export const DATASET_CATEGORIES: DatasetCategory[] = [
  'ALL',
  'MILITARY / DEFENCE',
  'ENVIRONMENTAL NOISE',
  'SOUND EVENTS',
  'MACHINERY / INDUSTRIAL',
  'SPEECH ENHANCEMENT',
  'NOISY SPEECH',
  'CLEAN SPEECH',
  'ACOUSTIC / RIR',
  'DCASE / BENCHMARKS',
  'GENERAL AUDIO'
];

export const USE_CASES: UseCaseCategory[] = [
  'ALL',
  'NOISE CLASSIFICATION',
  'SPEECH PROTECTION',
  'SPEECH ENHANCEMENT',
  'SOUND EVENT DETECTION',
  'MACHINE AUDIO',
  'ACOUSTIC SIMULATION',
  'GENERAL AUDIO'
];

export const CATEGORY_METADATA: CategoryMetadata[] = [
  {
    id: 'MILITARY / DEFENCE',
    number: '01',
    title: 'Military / Defence',
    description: 'Ground vehicle, rotorcraft, jet turbine, and weapon blast acoustic signatures under extreme noise environments.',
    acousticRole: 'Defence Noise Classification',
    pipelineStage: 'Reference Mic → YAMNet Classifier',
    iconName: 'ShieldAlert'
  },
  {
    id: 'ENVIRONMENTAL NOISE',
    number: '02',
    title: 'Environmental Noise',
    description: 'Real-world ambient acoustic fields spanning urban transit, industrial facilities, and adverse weather conditions.',
    acousticRole: 'Real-World Robustness',
    pipelineStage: 'Audio Acquisition → Preprocessing',
    iconName: 'Trees'
  },
  {
    id: 'SOUND EVENTS',
    number: '03',
    title: 'Sound Events',
    description: 'Large-scale annotated sound event detection and urban acoustic scene tagging datasets.',
    acousticRole: 'Sound Event Detection',
    pipelineStage: 'STFT → Feature Representation',
    iconName: 'Volume2'
  },
  {
    id: 'MACHINERY / INDUSTRIAL',
    number: '04',
    title: 'Machinery / Industrial',
    description: 'Acoustic emissions from rotating components, fans, gearboxes, pumps, and anomalous friction points.',
    acousticRole: 'Non-Stationary Noise Classification',
    pipelineStage: 'YAMNet → Task-Specific Classifier',
    iconName: 'Cpu'
  },
  {
    id: 'SPEECH ENHANCEMENT',
    number: '05',
    title: 'Speech Enhancement',
    description: 'Benchmark corpora for deep noise suppression, headset/speakerphone communication, and intelligibility preservation.',
    acousticRole: 'Intelligibility Restoration',
    pipelineStage: 'VAD → Intelligent Controller',
    iconName: 'Mic'
  },
  {
    id: 'NOISY SPEECH',
    number: '06',
    title: 'Noisy Speech',
    description: 'Multi-speaker mixtures, reverberant speech, and real/simulated challenging communicative scenarios.',
    acousticRole: 'Speech-in-Noise Separation',
    pipelineStage: 'Intelligent Controller → FxLMS',
    iconName: 'Activity'
  },
  {
    id: 'CLEAN SPEECH',
    number: '07',
    title: 'Clean Speech',
    description: 'Anechoic and studio-quality vocal corpora across multiple speakers, dialects, and emotional states.',
    acousticRole: 'Voice Preservation & VAD Calibration',
    pipelineStage: 'VAD (Voice Activity Detector)',
    iconName: 'UserCheck'
  },
  {
    id: 'ACOUSTIC / RIR',
    number: '08',
    title: 'Acoustic / RIR',
    description: 'Spatial and binaural room impulse responses (RIR) modeling primary and secondary acoustic transfer functions.',
    acousticRole: 'Secondary Path S(z) Simulation',
    pipelineStage: 'Secondary Path Modeling & Simulation',
    iconName: 'Radio'
  },
  {
    id: 'DCASE / BENCHMARKS',
    number: '09',
    title: 'DCASE / Benchmarks',
    description: 'Standardized IEEE AASP Challenge datasets for anomalous sound detection and acoustic scene evaluation.',
    acousticRole: 'Standardized Evaluation Benchmarks',
    pipelineStage: 'Task-Specific Classifier Validation',
    iconName: 'Binary'
  },
  {
    id: 'GENERAL AUDIO',
    number: '10',
    title: 'General Audio',
    description: 'Comprehensive acoustic effects libraries and weakly-labelled environmental sound archives.',
    acousticRole: 'General Audio Pretraining',
    pipelineStage: 'Feature Representation Pretraining',
    iconName: 'Layers'
  }
];

export const DATASETS_LIST: DatasetItem[] = ${JSON.stringify(enrichedList, null, 2)};

export const HIGH_PRIORITY_DATASETS = DATASETS_LIST.filter(d => d.priority);
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/datasets.ts', outputContent, 'utf8');
console.log('Successfully generated src/data/datasets.ts with', enrichedList.length, 'records.');
