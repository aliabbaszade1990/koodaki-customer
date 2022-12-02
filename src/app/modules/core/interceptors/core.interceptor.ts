import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Environment } from 'src/app/shared/interfaces/environment.interface';
import { sessionExpired } from '../+state/core.actions';
import { StorageService } from '../services/storage.service';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  constructor(
    @Inject('environment') private environment: Environment,
    private store: Store,
    private storage: StorageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.isAServerRequest(request, this.environment)) {
      request = request.clone({
        url: request.url.startsWith('http')
          ? request.url
          : `${this.environment.api}/${request.url}`,
        headers: request.headers
          .set(
            'Authorization',
            this.storage.token ? `Bearer ${this.storage.token}` : ''
          )
          .set('Access-Control-Allow-Origin', '*'),
      });

      return next.handle(request).pipe(
        retry(1),
        map((response) => {
          if (response instanceof HttpResponse) {
            if (response.body.success === true) {
              return response.clone({ body: response.body.payload });
            } else {
              const { error } = response.body;
              throw new Error(error.name + ' => ' + error.message);
            }
          } else {
            return response;
          }
        }),
        catchError((error) => {
          this.handleErrors(error);
          return throwError(() => Error(error.name));
        })
      );
    } else {
      return next.handle(request);
    }
  }

  private isAServerRequest(
    request: HttpRequest<unknown>,
    environment: any
  ): boolean {
    return !(
      request.url.includes('./') || request.url.includes(environment.api)
    );
  }

  private handleErrors(error: any): void {
    switch (error.name) {
      case '':
        this.store.dispatch(sessionExpired());
        break;
      default:
        break;
    }
  }
}
