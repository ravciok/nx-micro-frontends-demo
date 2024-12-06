import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent
  },
  {
    path: 'shop',
    loadChildren: () => loadRemoteModule('shop', './Routes')
      .then((m) => m.appRoutes)
  },
  {
    path: 'cart',
    loadChildren: () => loadRemoteModule('cart', './Routes')
      .then((m) => m.appRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
