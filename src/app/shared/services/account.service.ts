import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import ApiUrls from '../notgoogleplus.urls';


@Injectable()
export class AccountService {
//   private ApiUrls = ApiUrls;
//   private accountsUrl = '/api/v1/accounts/';

//   private headers = new Headers({
//   });

//   constructor (private http: Http) {}

//   handleError(error: any): Promise<any> {
//     console.log('An error occurred', error);
//     return Promise.reject(error.message || error);
//   }

//   all() {
//     return this.http.get(this.ApiUrls + this.accountsUrl);
//   }

//   get(id: number) {
//     const url = `${this.ApiUrls}/${this.accountsUrl}/${id}`;
//     return this.http.get(url);
//   }

//   create(data) {
//     const url = `${this.ApiUrls}/${this.accountsUrl}`;
//     return this.http.post(url, data)
//       .toPromise()
//       .then(response => response.json().data)
//       .catch(this.handleError);
//   }

//   update(id: number, data) {
//     const url = `${this.ApiUrls}/${this.accountsUrl}/${id}`;

//     return this.http.put(url, data)
//       .toPromise()
//       .then((response => response.json().data))
//       .catch(this.handleError);
//   }

//   delete(id: number) {
//     const url = `${this.ApiUrls}/${this.accountsUrl}/${id}`;

//     return this.http.delete(url)
//       .toPromise()
//       .then(() => null)
//       .catch(this.handleError);
//   }
}
