import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.component').then((m) => m.InicioComponent),
  },
  {
    path: 'goty',
    loadComponent: () =>
      import('./pages/goty/goty.component').then((m) => m.GotyComponent),
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
