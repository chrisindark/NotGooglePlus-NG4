import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';


@Injectable()
export class HeroSearchService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ) {}

    search(term: string): Observable<Hero[]> {
        const url = `app/heroes/?name=${term}`;

        return this.http.get(url, {headers: this.headers})
          .map(response => response.json().data as Hero[]);
    }
}
