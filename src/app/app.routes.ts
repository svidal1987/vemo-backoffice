import { Routes } from '@angular/router';

export const routes: Routes = [
    
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', loadChildren: () => import('./pages/public/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
    { path: 'error', loadChildren: () => import('./pages/public/error/error.routes').then(m => m.ERROR_ROUTES) },
    { path: 'example', loadChildren: () => import('./pages/private/example/example.routes').then(m => m.EXAMPLE_ROUTES) },
];
