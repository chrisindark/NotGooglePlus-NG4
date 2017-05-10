import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';


@Component({
  moduleId: module.id,
  selector: 'app-hero-search',
  template: `
    <div id="search-component">
      <h4>Hero Search</h4>
      <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
      <div>
        <div *ngFor="let hero of heroes | async"
             (click)="goToDetail(hero)" class="search-result" >
          {{hero.name}}
        </div>
      </div>
    </div>

  `,
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // wait 300ms after each keystroke before considering the term
    // ignore if next search term is same as previous
    // switch to new observable each time the term changes
    // return the http search observable
    // or the observable of empty heroes if no search term
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
          term => term
              ? this.heroSearchService.search(term)
              : Observable.of<Hero[]>([])
      )
      .catch(error => {
          // TODO: add real error handling
          console.log(error);
          return Observable.of<Hero[]>([]);
      });
  }

  goToDetail(hero: Hero): void {
    const link = ['/heroes', hero.id];
    this.router.navigate(link);
  }
}
