import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../../api.service';


@Injectable()
export class AccountService {
  constructor(private apiService: ApiService) {
  }

  query(filters): Observable<any> {
    let params: HttpParams = new HttpParams();

    Object.keys(filters)
      .forEach((key) => {
        params = params.append(key, filters[key]);
      });

    return this.apiService
      .get('/account/user/', params);
  }

  get(id): Observable<any> {
    return this.apiService.get('/account/user/' + id + '/');
  }

  remove(id) {
    return this.apiService.remove('/account/user/' + id + '/');
  }

  save(user): Observable<any> {
    // If we're updating an existing user
    if (user.id) {
      return this.apiService.put('/account/user/' + user.id + '/', user);
      // If we're creating a new user
    } else {
      return this.apiService.post('/account/user/', user);
    }
  }

  getCurrentUser() {
    return this.apiService.get('/account/user/me');
  }

  resetPassword(data) {
    return this.apiService.post('/account/user/resetpassword/', data);
  }

  setPassword(data) {
    return this.apiService.post('/account/user/setpassword/', data);
  }

}
