import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Menu } from './menu/menu';

export const routes: Routes = [
        {path:'', redirectTo:'home', pathMatch:'full'},

    {path:'home', component:Dashboard},
    
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About)
  },
  {
    path: 'freedemo',
    loadComponent: () =>
      import('./freedemo/freedemo').then(m => m.Freedemo)
  },

   {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact/contact').then(m => m.Contact)
  },
     {
    path: 'services',
    loadComponent: () =>
      import('./services/services').then(m => m.Services)
  },
   {
    path: 'thankyou',
    loadComponent: () =>
      import('./thankyou/thankyou').then(m => m.Thankyou)
  },
];
