import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  token: any = "";

  constructor(private http:HttpClient) { 
    
  }

  /*login(){
    
    this.http.get("http://localhost:8080/login", {
      headers: {
        Authorization: "Basic QUEwMDAxOkpHQUE="
      },
      responseType: 'text'
    }).subscribe(
      (datos:any) => {
        console.log(datos);
        this.token = datos;
        console.log(this.token);
      }
    );
  }*/

  getEmpleados() {
    return this.http.get("http://localhost:8080/empleados", {
      headers: {
        Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODY4NDk3MDAsImlzcyI6IkFBMDAwMSIsImV4cCI6MTU4NzcxMjcwMH0.U99E0Uln8PggUIzpvHFEB74YcPCqUmUne-EOR2yQvuQ"
      }
    });
  }

  getEmpleado(id){
    return this.http.get("http://localhost:8080/empleado?id=" + id, {
      headers: {
        Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODY4NDk3MDAsImlzcyI6IkFBMDAwMSIsImV4cCI6MTU4NzcxMjcwMH0.U99E0Uln8PggUIzpvHFEB74YcPCqUmUne-EOR2yQvuQ"
      }
    });
  }
}
