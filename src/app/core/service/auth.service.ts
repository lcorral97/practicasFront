import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  
  login(auth: string): Observable<string> {
    return this.http.get(env.urlBase + "login", {
      headers: {
        Authorization: auth
      },
      responseType: 'text'
    });//.toPromise();
  }
}
