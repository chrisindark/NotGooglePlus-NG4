import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { NoAuthGuardService } from '../../shared/services/route-guards/no-auth-guard.service';
// import { LoginComponent } from '.login/login.component';
// import { SetPasswordComponent } from './set-password/set-password.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';


export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      // {
        // path: 'login',
        // component: LoginComponent,
        // canActivate: [ NoAuthGuardService ]
      // },
      // {
      //   path: 'register',
        // component: RegisterComponent,
        // canActivate: [ NoAuthGuardService ]
      // },
      // {
      //   path: 'set-password/:uid/:token',
      //   component: SetPasswordComponent,
      //   canActivate: [ NoAuthGuardService ]
      // },
      // {
      //   path: 'reset',
      //   component: ResetPasswordComponent,
      //   canActivate: [ NoAuthGuardService ]
      // }
    ]
  },
];
