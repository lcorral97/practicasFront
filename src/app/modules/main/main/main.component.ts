import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/shared/clase/departamento';
import { Empleado } from 'src/app/shared/clase/empleado';
import { EmpleadoService } from 'src/app/core/service/empleado.service';
import { DepartamentoService } from 'src/app/core/service/departamento.service';
import { Sort } from '@angular/material/sort';


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
      this.sortedData = this.emps.slice();
    });
  }

  sortedData: Empleado[];

  sortData(sort: Sort) {
    const data = this.emps.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'ndiemp': return compare(a.ndiemp, b.ndiemp, isAsc);
        case 'nomEmp': return compare(a.nomEmp, b.nomEmp, isAsc);
        case 'cargoE': return compare(a.cargoE, b.cargoE, isAsc);
        case 'ciudad': return compare(a.ciudad, b.ciudad, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}