import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'works',
    loadComponent: () =>
      import('./pages/works/works')
        .then(m => m.Works)
  },
  {
    path: 'studies',
    loadComponent: () =>
      import('./pages/studies/studies')
        .then(m => m.Studies)
  }
];
