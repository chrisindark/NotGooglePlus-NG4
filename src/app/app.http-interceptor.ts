import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor, HttpRequest,
  HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

import {TokenService} from './shared/services/token.service';
import {AuthService} from './shared/services/account/auth.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.tokenService.getToken('AuthObject')) {
      return next.handle(req);
    }

    const headers = {};
    if (req.headers.get('RemoveAuthorization')) {
      req.headers.delete('RemoveAuthorization');
    } else {
      if (this.getAuthHeader()) {
        headers['Authorization'] = this.getAuthHeader();
      }
      if (this.getProviderAuthHeader()) {
        headers['ProviderAuthorization'] = this.getProviderAuthHeader();
      }
    }

    const modified = req.clone({
      setHeaders: headers
    });
    return next.handle(modified);
  }

  getAuthHeader() {
    const authObject = this.tokenService.getToken('AuthObject');
    if (authObject) {
      return `ApiKey ${authObject['username']}:${authObject['ApiKey']}`;
    } else {
      return undefined;
    }
  }

  getProviderAuthHeader() {
    const authObject = this.tokenService.getToken('AuthObject');
    if (authObject && authObject['ProviderApiKey']) {
      return `ProviderApiKey ${authObject['username']}:${authObject['ProviderApiKey']}`;
    } else {
      return undefined;
    }
  }

}


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private injector: Injector,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map(resp => {
          if (resp instanceof HttpResponse) {} // do nothing
          return resp;
        }),
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            const authService = this.injector.get(AuthService);

            if (err.status === 401 || err.status === 403) {
              authService.removeAuth();
              this.router.navigate(['auth', 'login']);
            }
          }

          return throwError(err);
        })
      )
  }
}
