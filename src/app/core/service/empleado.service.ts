import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/shared/clase/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }
  
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

  modificarEmpleado(id: string, emp: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>("https://springbootlcorral.cfapps.io/empleado?id=" + id, emp);
  }
}
