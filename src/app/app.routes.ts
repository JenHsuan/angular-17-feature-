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