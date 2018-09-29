import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      // console.log(val);
    });
  }

  ngOnInit() {
    // console.log('App component activated.');
  }

}
