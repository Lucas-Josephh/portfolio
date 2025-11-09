import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./component/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'skill',
    loadComponent: () =>
      import('./component/skill/skill.component').then(m => m.SkillComponent)
  },
  {
    path: 'project',
    loadComponent: () =>
      import('./component/project/project.component').then(m => m.ProjectComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./component/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./component/admin/admin.component').then(m => m.AdminComponent)
  }
]