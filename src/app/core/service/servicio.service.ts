import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../../shared/clase/empleado';
import { Observable } from 'rxjs';
import { Departamento } from '../../shared/clase/departamento';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { 
    
  }

  async login(auth: string): Promise<string> {
    return this.http.get("https://springbootlcorral.cfapps.io/login", {
      headers: {
        Authorization: auth
      },
      responseType: 'text'
    }).toPromise();
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>("https://springbootlcorral.cfapps.io/empleados");
  }

  getEmpleado(id: string): Observable<Empleado>{
    return this.http.get<Empleado>("https://springbootlcorral.cfapps.io/empleado?id=" + id);
  }

  getDepartamentos(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>("https://springbootlcorral.cfapps.io/departamentos");
  }

  getDepartamento(id: string): Observable<Departamento> {
    return this.http.get<Departamento>("https://springbootlcorral.cfapps.io/departamento?id=" + id);
  }
}
