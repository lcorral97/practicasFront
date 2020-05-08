import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/shared/clase/departamento';
import { env } from 'src/environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private dataService:DataService) { }

  getDepartamentos(): Observable<Departamento[]>{
    return this.dataService.get(env.urlBase + "departamentos");
  }

  getDepartamento(id: string): Observable<Departamento> {
    return this.dataService.get(env.urlBase + "departamento?id=" + id);
  }
}
