import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.interceptor(req, next));
  }

  constructor(private router:Router) {}

  interceptor(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('login')) {
      let token: string = localStorage.getItem('token');
      let request = req;
      localStorage.setItem("token", token);
      request = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      //localStorage.removeItem("id");
      //localStorage.removeItem("password");
      return next.handle(request);
    } else {
      return next.handle(req).pipe(catchError(err => {
        if (err.status === 401) {
          this.router.navigate(['login/error']);
        }
        const error = err.error.message || err.statusText;
        return throwError(err);
      }));
    }
  }
}
