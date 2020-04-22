import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/core/service/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/shared/clase/empleado';
import { Departamento } from 'src/app/shared/clase/departamento';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: [],
})
export class EmpleadoComponent implements OnInit {
  jefe: Empleado;
  subord: Array<Empleado>;
  emp: Empleado;
  depto: Departamento;
  constructor(
    private servicio: ServicioService,
    private ruta: ActivatedRoute,
    private router: Router
  ) {
    //Reutilizar la ruta. En este caso, con otro parámetro.
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    //Inicializar
    this.emp = new Empleado();
    this.jefe = new Empleado();
    this.subord = new Array<Empleado>();
    this.depto = new Departamento();
  }

  redirigir(id: string) {
    this.router.navigate(['/empleado', id]);
  }

  async ngOnInit() {
    await this.servicio.getEmpleado(this.ruta.snapshot.params.id).forEach((v) => {
      this.emp = v;
    });

    //Cargar jefe
    if (this.emp.jefeId != null) {
      this.servicio
        .getEmpleado(this.emp.jefeId)
        .subscribe((datos: Empleado) => {
          this.jefe = datos;
        });
    }

    //Cargar subordinados
    this.servicio.getEmpleados().subscribe((datos: Empleado[]) => {
      datos.forEach((d) => {
        if (d.jefeId == this.emp.ndiemp) {
          this.subord.push(d);
        }
      });
    });

    //Cargar departamento
    this.servicio
      .getDepartamento(this.emp.codDepto)
      .subscribe((datos: Departamento) => {
        this.depto = datos;
      });
  }
}
