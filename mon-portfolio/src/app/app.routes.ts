import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./component/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./component/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./component/about/about.component').then(m => m.AboutComponent)
  }
]