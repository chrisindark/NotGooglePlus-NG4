import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {
  appStorage = window.sessionStorage;

  constructor () {}

  useLocalStorage() {
    this.appStorage = window.localStorage;
    this.setToken(true, 'rememberMe');
  }

  checkStorageType() {
    if (window.localStorage['rememberMe'] && JSON.parse(window.localStorage['rememberMe'])) {
      this.appStorage = window.localStorage;
    }
  }

  clearStorage() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  getToken(tokenKeyName): String {
    return !!this.appStorage[tokenKeyName]
      ? JSON.parse(this.appStorage[tokenKeyName])
      : undefined;
  }

  setToken(token, tokenKeyName) {
    this.appStorage[tokenKeyName] = JSON.stringify(token);
  }

  removeToken(tokenKeyName) {
    this.appStorage.removeItem(tokenKeyName);
  }

}
