import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {SharedModule} from '../../shared';

import {HOME_ROUTES} from './home.routes';
import {HomeComponent} from './home.component';


@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(HOME_ROUTES),
    ],
    declarations: [
      HomeComponent,
    ],
})

export class HomeModule {}
