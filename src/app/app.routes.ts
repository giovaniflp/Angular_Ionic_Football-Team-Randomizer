import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'randomize',
    loadComponent: () => import('./randomize-logic/randomize-logic.component').then((m) => m.RandomizeLogicComponent),
  }
];
