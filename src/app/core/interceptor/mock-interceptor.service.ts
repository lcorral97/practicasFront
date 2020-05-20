import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { env } from 'src/environments/environment';
import * as empleados from '../../../assets/mocks/empleados.json';
import * as departamentos from '../../../assets/mocks/departamentos.json';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError, of, Observable } from 'rxjs';
import { Departamento } from 'src/app/shared/clase/departamento';
import { Empleado } from 'src/app/shared/clase/empleado';

const urls = [
  {
    url: env.urlBase + 'empleados',
    json: empleados,
  },
  {
    url: env.urlBase + 'empleado?id={id}',
    json: empleados,
  },
  {
    url: env.urlBase + 'departamentos',
    json: departamentos,
  },
  {
    url: env.urlBase + 'departamento?id={id}',
    json: departamentos,
  },
  {
    url: env.urlBase + 'login',
    json: empleados,
  },
];

@Injectable({
  providedIn: 'root',
})
export class MockInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.includes('/login')) {
      let token: string = localStorage.getItem('token');
      let request = req;
      request = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      for (const el of urls) {
        if (req.url.includes('?') && el.url.includes("?")) {
          if (req.url.includes('empleado') && el.url.includes("empleado")) {
            let e: any;
            let queryParams = req.url.split('=')[1];
            (el.json as any).default.forEach((empleado) => {
              if (queryParams == empleado.ndiemp) {
                e = empleado;
              }
            });
            if (e!=null) {
              return of(new HttpResponse({ status: 200, body: e as Empleado }));
            } else {
              this.loginError(next, request);
            }
          } else if (req.url.includes('departamento') && el.url.includes("departamento")){
            let d: any;
            let queryParams = req.url.split('=')[1];
            (el.json as any).default.forEach((depto) => {
              if (queryParams === depto.codDepto) {
                d = depto;
              }
            });
            return of(
              new HttpResponse({ status: 200, body: d as Departamento })
            );
          }
        } else if (req.url === el.url) {
          return of(
            new HttpResponse({ status: 200, body: (el.json as any).default })
          );
        }
      }
    } else {
      let empCorrecto: any = null;
      for (const el of urls) {
        if (req.url === el.url) {
          // Cogemos el authorization del header, como tiene formato "Basic btoa(id:pass)" dividimos en dos
          // el string {"Basic", "btoa(id:pass)"}. Seleccionamos el segundo elemento del array y, para tener el
          // id y la password por separado, los volvemos a separar y queda así: {"id", "pass"}
          let idPass: Array<String> = atob(
            req.headers.get('Authorization').split(' ')[1]
          ).split(':');
          (el.json as any).default.forEach((e) => {
            if (e.ndiemp === idPass[0] && e.password === idPass[1]) {
              console.log(e);
              empCorrecto = e;
            }
          });
        }
      }
      if (empCorrecto != null) {
        return of(
          new HttpResponse({ status: 200, body: empCorrecto as Empleado })
        );
      } else {
        return this.loginError(next, req);
      }
    }
  }

  loginError(next: HttpHandler, req: HttpRequest<any>) {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        this.router.navigate(['login/error']);
      }
      const error = err.error.message || err.statusText;
      return throwError(err);
    }));
  }
}
