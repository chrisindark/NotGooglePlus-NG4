import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})

export class HomeComponent {}
