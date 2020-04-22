import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ServicioService } from 'src/app/core/service/servicio.service';

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

  constructor(private service: ServicioService) {}

  async interceptor(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Promise<HttpEvent<any>> {
    if (!req.url.includes('login')) {
      let token: string = localStorage.getItem('token');
      let request = req;
      localStorage.setItem("token", token);
      request = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      localStorage.removeItem("id");
      localStorage.removeItem("password");
      return next.handle(request).toPromise();
    } else {
      return next.handle(req).toPromise();
    }
  }
}
