import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/shared/clase/departamento';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/shared/clase/empleado';
import { DepartamentoService } from 'src/app/core/service/departamento.service';
import { EmpleadoService } from 'src/app/core/service/empleado.service';

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
    private deptoService: DepartamentoService,
    private empService: EmpleadoService,
    private router: Router) {
      this.depto = new Departamento();
      this.trabajadores = new Array<Empleado>();

  }

  
  redirigir(id:string) {
    this.router.navigate(['/empleado', id]);
  }

  ngOnInit() {
    
    this.deptoService.getDepartamento(this.ruta.snapshot.params.id).subscribe(
      (datos:Departamento) => {
        this.depto = datos;
      }
    );

    
    this.empService.getEmpleados().subscribe((datos: Empleado[]) => {
      datos.forEach((e) => {
        if (e.codDepto == this.depto.codDepto) {
          this.trabajadores.push(e);
        }
      });
    });
 
  }
}
