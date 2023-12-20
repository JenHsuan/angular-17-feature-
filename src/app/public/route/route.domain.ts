export enum ROUTE_TYPE {
  HOME = 'HOME', 
  FLOW_CONTROL = 'FLOW_CONTROL',
  DEFERRABLE_VIEWS = 'DEFERRABLE_VIEWS',
  NOTES = 'NOTES',
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS'
};

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/control-flow', ROUTE_TYPE.FLOW_CONTROL],
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
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents']
]);