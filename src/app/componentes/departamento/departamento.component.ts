import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/clase/departamento';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Empleado } from 'src/app/clase/empleado';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styles: [
  ],
})
export class DepartamentoComponent implements OnInit {

  depto: Departamento;
  trabajadores: Array<Empleado>;
  jefe: Empleado;
  constructor(private ruta:ActivatedRoute,
    private servicio: ServicioService,
    private router: Router) {
      this.depto = new Departamento();
      this.trabajadores = new Array<Empleado>();
      this.jefe = new Empleado();

      this.servicio.getDepartamento(this.ruta.snapshot.params.id).subscribe(
        (datos:any) => {
          this.depto.setCiudad(datos.ciudad);
          this.depto.setCodDepto(datos.codDepto);
          this.depto.setCodDirector(datos.codDirector);
          this.depto.setNombreDepto(datos.nombreDepto);

          this.servicio.getEmpleados().subscribe((datos: any) => {
            datos.forEach((d) => {
              if (d.codDepto == this.depto.getCodDepto()) {
                let tr = new Empleado();
                tr = this.cargarEmpleado(d, tr);
                this.trabajadores.push(tr);
              }
            });
          });
          
          
          this.servicio.getEmpleado(this.depto.getCodDirector()).subscribe(
              (datos:any) => {
                this.jefe = this.cargarEmpleado(datos, this.jefe);
              }
          );
        }
      )
  }

  private cargarEmpleado(datos, emp) {
    emp.setCargoE(datos.cargoE);
    emp.setCiudad(datos.ciudad);
    emp.setCodDepto(datos.codDepto);
    emp.setComisionE(datos.comisionE);
    emp.setCoord(datos.coord);
    emp.setFecIncorporacion(datos.fecIncorporacion);
    emp.setFecNac(datos.fecNac);
    emp.setJefeId(datos.jefeId);
    emp.setNDIEmp(datos.ndiemp);
    emp.setNomEmp(datos.nomEmp);
    emp.setPassword(datos.password);
    emp.setSalEmp(datos.salEmp);
    emp.setSexEmp(datos.sexEmp);
    return emp;
  }

  
  redirigir(id:string) {
    this.router.navigate(['/empleado', id]);
  }

  ngOnInit(): void {
  }

}
