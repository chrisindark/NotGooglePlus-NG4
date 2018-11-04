import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/account/auth.service';
// import {LoginComponent, RegisterComponent} from '../../../modules/home/index';


@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  currentUser: any = {};
  isAuthenticated: boolean;
  currentAuth: any = {};

  // @ViewChild('login') login: LoginComponent;
  // @ViewChild('register') register: RegisterComponent;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = false;

    this.authService.currentUser
      .subscribe((user) => {
        this.currentUser = user;
        this.currentAuth = this.authService.getAuthToken();
      });

    this.authService.isAuthenticated
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {}

  logout() {
    this.authService.logout().subscribe((res) => {
      console.log(res);

      this.router.navigate(['auth/login']);
    }, err => {
      console.log(err);
    });
  }

  openModal(modalName: string): void {
    if (modalName === 'login') {
      this.openLoginModal();
    } else if (modalName === 'register') {
      this.openRegisterModal();
    }
  }

  openLoginModal(): void {
    // this.login.openModal();
  }

  openRegisterModal(): void {
    // this.register.openModal();
  }
}
