import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  template: `
    <app-navbar></app-navbar>
    <h2>HOME</h2>
    <div class="container-fluid">
      <!--<a routerLink="/home/posts" routerLinkActive="active">Posts</a>-->
      <router-outlet></router-outlet>
    </div>
  `
})

export class HomeComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Home component activated.');

    this.router.navigate(['/home/posts']);
  }
}
