export type DatasetCategory =
  | 'ALL'
  | 'MILITARY / DEFENCE'
  | 'ENVIRONMENTAL NOISE'
  | 'SOUND EVENTS'
  | 'MACHINERY / INDUSTRIAL'
  | 'SPEECH ENHANCEMENT'
  | 'NOISY SPEECH'
  | 'CLEAN SPEECH'
  | 'ACOUSTIC / RIR'
  | 'DCASE / BENCHMARKS'
  | 'GENERAL AUDIO';

export type UseCaseCategory =
  | 'ALL'
  | 'NOISE CLASSIFICATION'
  | 'SPEECH PROTECTION'
  | 'SPEECH ENHANCEMENT'
  | 'SOUND EVENT DETECTION'
  | 'MACHINE AUDIO'
  | 'ACOUSTIC SIMULATION'
  | 'GENERAL AUDIO';

export type SortOption = 'id-asc' | 'id-desc' | 'name-asc' | 'name-desc' | 'category';

export interface DatasetItem {
  id: number;
  name: string;
  category: Exclude<DatasetCategory, 'ALL'>;
  use: string;
  url: string;
  domain: string;
  isRepository: boolean;
  priority?: boolean;
  useCase?: Exclude<UseCaseCategory, 'ALL'>;
  notes?: string;
}

export interface CategoryMetadata {
  id: Exclude<DatasetCategory, 'ALL'>;
  number: string;
  title: string;
  description: string;
  acousticRole: string;
  pipelineStage: string;
  iconName: string;
}
