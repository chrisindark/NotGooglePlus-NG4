import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  imports: [CollapseModule, ModalModule.forRoot()],
  exports: [CollapseModule, ModalModule]
})

export class AppBootstrapModule {}
