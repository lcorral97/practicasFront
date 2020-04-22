import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/shared/clase/departamento';
import { Empleado } from 'src/app/shared/clase/empleado';
import { ServicioService } from 'src/app/core/service/servicio.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {

  deptos: Array<Departamento>;
  emps: Array<Empleado>;
  constructor(private servicio: ServicioService) {
    this.deptos = new Array<Departamento>();
    this.emps = new Array<Empleado>();
  }

  ngOnInit(): void {
    
    this.servicio.getDepartamentos().subscribe(
      (datos:Departamento[]) => {
        datos.forEach((d) => {
          this.deptos.push(d);
        })
      }
    );
    this.servicio.getEmpleados().subscribe((datos: Empleado[]) => {
      datos.forEach((d) => {
        this.emps.push(d);
      });
    });
  }

}
