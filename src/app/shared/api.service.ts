import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaderResponse, HttpErrorResponse,
  HttpHeaders, HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }

  get(path: string, params: HttpParams = new HttpParams(), headers?, responseType?): Observable<any> {
    const timestamp = new Date().getTime();

    return this.http.get(
      `${environment.apiUrl}${path}?${timestamp}`, {
        headers: this.setHeaders(headers),
        params: params,
        responseType: responseType
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.formatErrors)
      );
  }

  put(path: string, data: Object = {}): Observable<any> {
    const timestamp = new Date().getTime();

    return this.http.put(
      `${environment.apiUrl}${path}?${timestamp}`, data, {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  patch(path: string, data: Object = {}): Observable<any> {
    const timestamp = new Date().getTime();

    return this.http.patch(
      `${environment.apiUrl}${path}?${timestamp}`, data, {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, data: Object = {}, headers?): Observable<any> {
    const timestamp = new Date().getTime();

    return this.http.post(
      `${environment.apiUrl}${path}?${timestamp}`, data, {
        headers: this.setHeaders(headers)
      })
      .pipe(catchError(this.formatErrors));
  }

  remove(path): Observable<any> {
    const timestamp = new Date().getTime();

    return this.http.delete(
      `${environment.apiUrl}${path}?${timestamp}`, {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  private setHeaders(headers?): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (headers) {
      Object.keys(headers).forEach((value, index) => {
        headersConfig[value] = headers[value];
      });
    }

    Object.keys(headersConfig).forEach((value, index) => {
      if (headersConfig[value] === null || headersConfig[value] === undefined) {
        delete headersConfig[value];
      }
    });

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: HttpErrorResponse) {
    console.log('ApiService Error ==>', error);
    return throwError(error);
  }

  // private onSuccess(res: Response): Response {
  //   // console.log('success: ' + res);
  //   return res;
  // }

  // private onError(error: any, url: any): Observable<any> {
  //   const statusText = this._formatErrorMessage(error.status);
  //   // console.log('error: ', statusText);
  //   return throwError(error);
  // }

  // private _formatErrorMessage(status: any): any {
  //   const errorMessages = {
  //     400: 'Problem occurred while serving last request.',
  //     401: 'Either you have been logged out or your session has expired. Please login again to continue.',
  //     403: 'Access is not allowed, please try again with right credentials.',
  //     404: 'We could not find what you were looking for.',
  //     500: 'Oops, something went wrong. Please try again.',
  //     503: 'Service unavailable at the moment. Please try after some time.'
  //   };
  //
  //   if (errorMessages[status]) {
  //     return errorMessages[status];
  //   }
  //
  //   switch (status) {
  //     case -1:
  //       return 'The Internet connection appears to be offline.';
  //     case 0:
  //       return 'Could not connect to server.';
  //     default:
  //       return 'An unexpected error occurred.';
  //   }
  // }
}
