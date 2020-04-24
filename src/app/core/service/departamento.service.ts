import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/shared/clase/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  getDepartamentos(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>("https://springbootlcorral.cfapps.io/departamentos");
  }

  getDepartamento(id: string): Observable<Departamento> {
    return this.http.get<Departamento>("https://springbootlcorral.cfapps.io/departamento?id=" + id);
  }
}
