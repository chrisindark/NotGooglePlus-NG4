import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../../shared';
import {AUTH_ROUTES} from './auth.routes';
import {AuthComponent} from './auth.component';
// import {LoginComponent} from './login/login.component';
// import {RegisterComponent} from './register/register.component';
// import {SetPasswordComponent} from './set-password/set-password.component';
// import {ResetPasswordComponent} from './reset-password/reset-password.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(AUTH_ROUTES),
  ],
  declarations: [
    AuthComponent,
    // LoginComponent,
    // RegisterComponent
    // SetPasswordComponent,
    // ResetPasswordComponent,
  ],
  providers: [],
})

export class AuthModule {}
