import { NgModule } from '@angular/core';
import { BsDatepickerModule, TooltipModule, ModalModule, CollapseModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    BsDatepickerModule,
    TooltipModule,
    ModalModule,
    CollapseModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    BsDatepickerModule,
    TooltipModule,
    ModalModule,
    CollapseModule,
  ]
})

export class AppBootstrapModule {}
