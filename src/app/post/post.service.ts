import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PostService {
  private SERVER_URL = 'http://127.0.0.1:8000';
  private postsUrl = '/api/v1/posts/';

  private headers = new Headers({
  });

  constructor (private http: Http) {}

  handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  all() {
    return this.http.get(this.SERVER_URL + this.postsUrl);
  }

  get(id: number) {
    const url = `${this.SERVER_URL}/${this.postsUrl}/${id}`;
    return this.http.get(url);
  }

  create(data) {
    const url = `${this.SERVER_URL}/${this.postsUrl}`;
    return this.http.post(url, data)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  update(id: number, data) {
    const url = `${this.SERVER_URL}/${this.postsUrl}/${id}`;

    return this.http.put(url, data)
      .toPromise()
      .then((response => response.json().data))
      .catch(this.handleError);
  }

  delete(id: number) {
    const url = `${this.SERVER_URL}/${this.postsUrl}/${id}`;

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
