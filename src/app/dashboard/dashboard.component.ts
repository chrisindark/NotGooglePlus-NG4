import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';


@Component({
  selector: 'app-dashboard',
  template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <div class="col-1-4" *ngFor="let hero of heroes" (click)="goToDetail(hero)">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </div>
    </div>
    <app-hero-search></app-hero-search>

  `,
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes.slice(1, 5)
    );
  }

  goToDetail(hero: Hero): void {
    const link = ['/heroes', hero.id];
    this.router.navigate(link);
  }
}
