import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppBootstrapModule } from '../app-bootstrap.module';
import { AppMaterialModule } from '../app-material.module';

import {ApiService} from './api.service';
import {TokenService} from './services/token.service';
import {AccountService} from './services/account/account.service';
import {AuthService} from './services/account/auth.service';
import {AuthGuardService} from './services/route-guards/auth-guard.service';
import {NoAuthGuardService} from './services/route-guards/no-auth-guard.service';
import {PostService} from './services/post/post.service';

import {MainComponent} from './main/main.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ArticleService} from './services/article/article.service';


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
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,

    AppBootstrapModule,
    AppMaterialModule,

    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiService,
        TokenService,
        AccountService,
        AuthService,
        AuthGuardService,
        NoAuthGuardService,
        PostService,
        ArticleService,
      ]
    };
  }
}
