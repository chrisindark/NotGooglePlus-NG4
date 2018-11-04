import {
  Component, OnInit, OnDestroy, AfterViewInit
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {AuthService} from '../services/account/auth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  currentUser = {};
  isAuthenticated: boolean;

  userType = ['admin'];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        const routesArray = event.url.split('/');
        // routes array first element will be containing string of a certain user type

        this.authService.currentUser
          .subscribe((user) => {
          });
      }
    });
  }

  ngOnInit() {
    console.log('Main component activated.');

    this.authService.isAuthenticated
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });

  }

  ngOnDestroy() {}

  ngAfterViewInit() {}

}
