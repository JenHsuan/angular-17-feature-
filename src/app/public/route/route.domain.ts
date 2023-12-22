export enum ROUTE_TYPE {
  HOME = 'HOME', 
  FLOW_CONTROL = 'FLOW_CONTROL',
  DEFERRABLE_VIEWS = 'DEFERRABLE_VIEWS',
  HYDRATION = 'HYDRATION',
  ESBUILD = 'ESBUILD',
  DEV_TOOL = 'DEV_TOOL',
  STANDALONE = 'STANDALONE',
  VIEW_TRANSITION = 'VIEW_TRANSITION',
  INUT_TRANSFORM = 'INUT_TRANSFORM',
  LEARNING_RESOURCE = 'LEARNING_RESOURCE',
  NOTES = 'NOTES',
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS'
};

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/control-flow', ROUTE_TYPE.FLOW_CONTROL],
  ['/hydration', ROUTE_TYPE.HYDRATION],
  ['/esbuild', ROUTE_TYPE.ESBUILD],
  ['/devtool', ROUTE_TYPE.DEV_TOOL],
  ['/view-transition', ROUTE_TYPE.VIEW_TRANSITION],
  ['/standalone', ROUTE_TYPE.STANDALONE],
  ['/input-transform', ROUTE_TYPE.INUT_TRANSFORM],
  ['/learning-resource', ROUTE_TYPE.LEARNING_RESOURCE],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/documents', ROUTE_TYPE.DOCUMENTS],
  ['/deferrable-views', ROUTE_TYPE.DEFERRABLE_VIEWS]
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.HOME, 'Notes of Angular v17'],
  [ROUTE_TYPE.FLOW_CONTROL, 'Built-in Control Flow (Developer Preview)'],
  [ROUTE_TYPE.DEFERRABLE_VIEWS, 'Deferrable Views'],
  [ROUTE_TYPE.HYDRATION, 'Non-destructive Hydration'],
  [ROUTE_TYPE.ESBUILD, 'esbuild Supported + Vite'],
  [ROUTE_TYPE.DEV_TOOL, 'Angular DevTools Enhancements'],
  [ROUTE_TYPE.INUT_TRANSFORM, 'Input Transform'],
  [ROUTE_TYPE.STANDALONE, 'Enhancements for Standalone API'],
  [ROUTE_TYPE.VIEW_TRANSITION, 'View Transition API'],
  [ROUTE_TYPE.LEARNING_RESOURCE, 'Official New Learning Resources'],
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents']
]);