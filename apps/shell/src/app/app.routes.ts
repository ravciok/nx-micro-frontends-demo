import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent
  },
  {
    path: 'shop',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'shop',
      exposedModule: './Routes'
    })
      .then(m => m.appRoutes)
  },
  {
    path: 'cart',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'cart',
      exposedModule: './Routes'
    })
      .then(m => m.appRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
