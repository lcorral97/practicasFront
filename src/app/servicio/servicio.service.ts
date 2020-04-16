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
    return this.http.get("http://localhost:8080/login", {
      headers: {
        Authorization: auth
      },
      responseType: 'text'
    }).toPromise();
  }

  getEmpleados() {
    return this.http.get("http://localhost:8080/empleados");
  }

  getEmpleado(id: string){
    return this.http.get("http://localhost:8080/empleado?id=" + id);
  }

  getDepartamentos(){
    return this.http.get("http://localhost:8080/departamentos");
  }
}
