import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/shared/clase/empleado';
import { env } from 'src/environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private dataService:DataService) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.dataService.get(env.urlBase + "empleados");
  }

  getEmpleado(id: string): Observable<Empleado>{
    return this.dataService.get(env.urlBase + "empleado?id=" + id);
  }

  modificarEmpleado(id: string, emp: Empleado): Observable<Empleado> {
    return this.dataService.put(env.urlBase + "empleado?id=" + id, emp);
  }
}
