import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/shared/clase/departamento';
import { Empleado } from 'src/app/shared/clase/empleado';
import { EmpleadoService } from 'src/app/core/service/empleado.service';
import { DepartamentoService } from 'src/app/core/service/departamento.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {

  deptos: Array<Departamento>;
  emps: Array<Empleado>;
  constructor(private empService: EmpleadoService,
    private deptoService: DepartamentoService) {
    this.deptos = new Array<Departamento>();
    this.emps = new Array<Empleado>();
  }

  ngOnInit(): void {
    
    this.deptoService.getDepartamentos().subscribe(
      (datos:Departamento[]) => {
        datos.forEach((d) => {
          this.deptos.push(d);
        })
      }
    );
    this.empService.getEmpleados().subscribe((datos: Empleado[]) => {
      datos.forEach((d) => {
        this.emps.push(d);
      });
    });
  }

}
