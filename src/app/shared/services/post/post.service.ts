import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ApiService} from '../../api.service';


@Injectable()
export class PostService {
  constructor (private apiService: ApiService) {}

  query(filters): Observable<any> {
    let params: HttpParams = new HttpParams();

    Object.keys(filters)
      .forEach((key) => {
        params = params.append(key, filters[key]);
      });

    return this.apiService
      .get('/posts/', params);
  }

  get(id): Observable<any> {
    return this.apiService.get(`/posts/${id}/`);
  }

  remove(id) {
    return this.apiService.remove(`/posts/${id}/`);
  }

  save(post): Observable<any> {
    // If we're updating an existing post
    if (post.id) {
      return this.apiService.put(`/posts/${post.id}/`, post);
      // If we're creating a new post
    } else {
      return this.apiService.post('/posts/', post);
    }
  }

}
