import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { HOME_ROUTES } from './home.routes';

import {
  HomeComponent,
  NavbarComponent,
  LoginComponent,
  RegisterComponent
} from '../home';


@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(HOME_ROUTES),
    ],
    declarations: [
      HomeComponent,
      NavbarComponent,
      RegisterComponent,
      LoginComponent
    ],
    providers: [],
    exports: []
})

export class HomeModule {}
