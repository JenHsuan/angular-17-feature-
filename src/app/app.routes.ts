import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component'),
    title: 'Angular 17'
  },
  {
    path: 'control-flow',
    loadComponent: () => import('../app/control-flow/control-flow.component'),
    title: 'Angular 17 - control flow'
  },
  {
    path: 'deferrable-views',
    loadComponent: () => import('../app/deferrable-views/deferrable-views.component'),
    title: 'Angular 17 - deferrable views'
  },
  {
    path: 'hydration',
    loadComponent: () => import('../app/hydration/hydration.component'),
    title: 'Angular 17 - hydration'
  },
  {
    path: 'esbuild',
    loadComponent: () => import('../app/esbuild/esbuild.component'),
    title: 'Angular 17 - esbuild'
  },
  {
    path: 'devtool',
    loadComponent: () => import('../app/dev-tools/dev-tools.component'),
    title: 'Angular 17 - Dev tools enhancements'
  },
  {
    path: 'standalone',
    loadComponent: () => import('../app/standalone/standalone.component'),
    title: 'Angular 17 - standalone'
  },
  {
    path: 'view-transition',
    loadComponent: () => import('../app/view-transition/view-transition.component'),
    title: 'Angular 17 - view transition'
  },
  {
    path: 'view-transition/:count',
    loadComponent: () => import('../app/view-transition/view-transition.component'),
    title: 'Angular 17 - view transition'
  },
  {
    path: 'notes',
    loadComponent: () => import('../app/notes/notes.component'),
    title: 'Angular 17 - notes'
  },
  {
    path: 'breaking-changes',
    loadComponent: () => import('../app/breaking-changes/breaking-changes.component'),
    title: 'Angular 17 - breaking changes'
  },
  {
    path: 'deprecations',
    loadComponent: () => import('../app/deprecations/deprecations.component'),
    title: 'Angular 17 - deprecations'
  },
  {
    path: 'documents',
    loadComponent: () => import('../app/documents/documents.component'),
    title: 'Angular 17 - documents'
  }
];