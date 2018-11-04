import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './shared/services/account/auth.service';
import { TokenService } from './shared/services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    console.log('App component activated.');

    // This runs once on application startup.
    this.tokenService.checkStorageType();
    this.authService.populateAuth();

    this.router.events.subscribe((val) => {
      // console.log(val);
    });
  }

}
