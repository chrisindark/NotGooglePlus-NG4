import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-heroes',
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <button class="delete"
                (click)="delete(hero);$event.stopPropagation()">x</button>
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      <button (click)="goToDetail(selectedHero)">View Details</button>
    </div>
    <div>
      <label>Hero name:</label>
      <input #heroName />
      <button (click)="add(heroName.value);heroName.value=''">Add</button>
    </div>
  `,
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: String): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name).then(
      hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      }
    );
  }

  delete(hero) {
    this.heroService.delete(hero.id).then(
      () => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      }
    );
  }

  goToDetail() {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }
}
