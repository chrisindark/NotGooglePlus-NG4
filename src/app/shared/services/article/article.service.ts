import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ApiService} from '../../api.service';


@Injectable()
export class ArticleService {
  constructor (private apiService: ApiService) {}

  query(filters): Observable<any> {
    let params: HttpParams = new HttpParams();

    Object.keys(filters)
      .forEach((key) => {
        params = params.append(key, filters[key]);
      });

    return this.apiService
      .get('/articles/', params);
  }

  get(id): Observable<any> {
    return this.apiService.get(`/articles/${id}/`);
  }

  remove(id) {
    return this.apiService.remove(`/articles/${id}/`);
  }

  save(article): Observable<any> {
    // If we're updating an existing article
    if (article.id) {
      return this.apiService.put(`/articles/${article.id}/`, article);
      // If we're creating a new article
    } else {
      return this.apiService.post('/articles/', article);
    }
  }

}
