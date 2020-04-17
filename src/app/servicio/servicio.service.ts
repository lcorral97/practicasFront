import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //token: any = "";

  constructor(private http:HttpClient) { 
    
  }

  async login(auth: string) {
    return this.http.get("https://springbootlcorral.cfapps.io/login", {
      headers: {
        Authorization: auth
      },
      responseType: 'text'
    }).toPromise();
  }

  getEmpleados() {
    return this.http.get("https://springbootlcorral.cfapps.io/empleados");
  }

  getEmpleado(id: string){
    return this.http.get("https://springbootlcorral.cfapps.io/empleado?id=" + id);
  }

  getDepartamentos(){
    return this.http.get("https://springbootlcorral.cfapps.io/departamentos");
  }

  getDepartamento(id: string) {
    return this.http.get("https://springbootlcorral.cfapps.io/departamento?id=" + id);
  }
}
