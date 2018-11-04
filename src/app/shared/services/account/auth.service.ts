import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';

import { ApiService } from '../../api.service';
import { TokenService } from '../token.service';
import { AccountService } from './account.service';


@Injectable()
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private currentBoardSubject = new BehaviorSubject<any>({});
  public currentBoard = this.currentBoardSubject.asObservable();

  private authObjectKey = 'AuthObject';
  private userObjectKey = 'UserObject';
  // private boardObjectKey = 'BoardObject';

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService,
    private accountService: AccountService,
    // private boardService: BoardService,
  ) { }

  login(data): Observable<any> {
    return this.apiService.post('/account/user/login/', data)
      .pipe(
        map(res => {
          this.setAuth(res, data);
          return res;
        })
      );
  }

  logout() {
    return this.apiService.get('/account/user/logout/')
      .pipe(
        map((res) => {
          this.removeAuth();
          return res;
        })
      );
  }

  populateAuth() {
    if (this.tokenService.getToken('AuthObject')) {
      if (!this.tokenService.getToken('UserObject')) {
        this.accountService.getCurrentUser()
          .subscribe(res => {
            this.setAuth(res);
          }, err => {
            this.removeAuth();
          });
      } else {
        // Set current user data into observable
        this.currentUserSubject.next(this.getAuthenticatedUser());
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
      }
    } else {
      // Remove any potential remnants of previous auth states
      this.removeAuth();
    }
  }

  setAuth(res, data?) {
    const user = res.user;
    delete res.user;

    if (data.rememberMe) {
      this.tokenService.useLocalStorage();
    } else {
    }

    // Save auth object and user object sent from server in localstorage
    this.setAuthToken(res);
    this.setAuthenticatedUser(user);
    // clear cookies on login since they are not needed
    this.deleteAllCookies();

    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  removeAuth() {
    // Remove JWT from localstorage
    // this.removeAuthToken();
    // this.removeAuthenticatedUser();
    this.tokenService.clearStorage();

    // Set current user to an empty object
    this.currentUserSubject.next({});
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  setAuthToken(res) {
    this.tokenService.setToken(res, this.authObjectKey);
  }

  getAuthToken() {
    return this.tokenService.getToken(this.authObjectKey);
  }

  removeAuthToken() {
    this.tokenService.removeToken(this.authObjectKey);
  }

  setAuthenticatedUser(user) {
    if (!user) {
      user = {};
    }
    this.tokenService.setToken(user, this.userObjectKey);
  }

  getAuthenticatedUser() {
    return this.tokenService.getToken(this.userObjectKey);
  }

  removeAuthenticatedUser() {
    this.tokenService.removeToken(this.userObjectKey);
  }

  deleteAllCookies() {
    const cookies = document.cookie.split(';');

    cookies.forEach(value => {
      const eqPos = value.indexOf('=');
      const name = eqPos > -1 ? value.substr(0, eqPos) : value;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
  }

}
