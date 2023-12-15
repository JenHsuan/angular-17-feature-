import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component'),
    title: 'Angular 16'
  },
  {
    path: 'notes',
    loadComponent: () => import('../app/notes/notes.component'),
    title: 'Angular 16 - notes'
  },
  {
    path: 'breaking-changes',
    loadComponent: () => import('../app/breaking-changes/breaking-changes.component'),
    title: 'Angular 16 - breaking changes'
  },
  {
    path: 'deprecations',
    loadComponent: () => import('../app/deprecations/deprecations.component'),
    title: 'Angular 16 - deprecations'
  },
  {
    path: 'documents',
    loadComponent: () => import('../app/documents/documents.component'),
    title: 'Angular 16 - documents'
  }
];