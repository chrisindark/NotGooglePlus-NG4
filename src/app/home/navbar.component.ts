import { Component, OnInit, ViewChild } from '@angular/core';

import {
  LoginComponent, RegisterComponent
} from '../home';


@Component({
    selector: 'app-navbar',
    template: `
      <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed"
              (click)="isCollapsed = !isCollapsed"
              data-target="#not-google-plus-nav">
              <span class="sr-only">Toggle Navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" routerLink="/">Not Google Plus</a>
          </div>

          <div class="collapse navbar-collapse" id="not-google-plus-nav">
            <ul class="nav navbar-nav pull-right" *ngIf="isAuthenticated && user">
              <li><a href="javascript:void(0)">+Chris</a></li>
              <li><a href="javascript:void(0)">Settings</a></li>
              <li><a href="javascript:void(0)">Logout</a></li>
            </ul>
            <ul class="nav navbar-nav pull-right" *ngIf="!isAuthenticated">
              <li><a href="javascript:void(0)" (click)="openLoginModal()">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <app-register #register (openModalEvent)="openModal($event)"></app-register>
      <app-login #login (openModalEvent)="openModal($event)"></app-login>
    `,
  providers: []
})

export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  isAuthenticated: boolean;
  user: Object;

  @ViewChild('login') login: LoginComponent;
  @ViewChild('register') register: RegisterComponent;

  constructor() {}

  ngOnInit(): void {
    this.isAuthenticated = false;
  }

  openModal(modalName: string): void {
    if (modalName === 'login') {
      this.openLoginModal();
    } else if (modalName === 'register') {
      this.openRegisterModal();
    }
  }

  openLoginModal(): void {
    this.login.openModal();
  }

  openRegisterModal(): void {
    this.register.openModal();
  }
}
