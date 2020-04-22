import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/shared/clase/departamento';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/core/service/servicio.service';
import { Empleado } from 'src/app/shared/clase/empleado';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styles: [
  ],
})
export class DepartamentoComponent implements OnInit {

  depto: Departamento;
  trabajadores: Array<Empleado>;
  constructor(private ruta:ActivatedRoute,
    private servicio: ServicioService,
    private router: Router) {
      this.depto = new Departamento();
      this.trabajadores = new Array<Empleado>();

  }

  
  redirigir(id:string) {
    this.router.navigate(['/empleado', id]);
  }

  async ngOnInit() {
    
    await this.servicio.getDepartamento(this.ruta.snapshot.params.id).subscribe(
      (datos:Departamento) => {
        this.depto = datos;

      }
    );

    
    await this.servicio.getEmpleados().subscribe((datos: Empleado[]) => {
      datos.forEach((e) => {
        if (e.codDepto == this.depto.codDepto) {
          this.trabajadores.push(e);
        }
      });
    });
    
  }

}
