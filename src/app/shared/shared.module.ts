import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppBootstrapModule } from '../app-bootstrap.module';
import { AppMaterialModule } from '../app-material.module';
import { AppHttpService } from "./app-http.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,

    AppBootstrapModule,
    AppMaterialModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,

    AppBootstrapModule,
    AppMaterialModule,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AppHttpService,
      ]
    };
}
