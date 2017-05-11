import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';


@Injectable()
export class HttpService extends Http {
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions
  ) {
      super(backend, defaultOptions);
    }

  private _getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    console.log(typeof options.headers, options.headers);

    return options;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, this._getRequestOptionArgs(options))
      .catch(error => {
        return this.onError(error);
      })
      .do(res => {
        return this.onSuccess(res);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  private onSuccess(res: Response): Response {
    console.log(this.constructor.name + '.onSuccess ' + res);
    return res;
  }

  private onError(error: any): Observable<any> {
    const statusText = this._formatErrorMessage(error.status);
    console.log('error: ', statusText);
    return Observable.throw(error);
  }

  private onFinally(): void {}

  private _formatErrorMessage(status: any): any {
    const errorMessages = {
      400: 'Problem occurred while serving last request.',
      401: 'Either you have been logged out or your session has expired. Please login again to continue.',
      403: 'Access is not allowed, please try again with right credentials.',
      404: 'We could not find what you were looking for.',
      500: 'Oops, something went wrong. Please try again.',
      503: 'Service unavailable at the moment. Please try after some time.'
    };

    if (errorMessages[status]) {
      return errorMessages[status];
    }

    switch (status) {
      case -1:
        return 'The Internet connection appears to be offline.';
      case 0:
        return 'Could not connect to server.';
      default:
        return 'An unexpected error occurred.';
    }
  }

  private _errorHandlerEvents(error: any): void {
    if (error.status === '401') {
      // do something
    } else if (error.status === '400' || error.status === '403' ||
      error.status === '500' || error.status === '503') {
      // do something
    } else if (error.status === '404') {
      // do something
    }
  }

}
