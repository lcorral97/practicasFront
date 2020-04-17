import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/clase/empleado';
import { Departamento } from 'src/app/clase/departamento';

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
  constructor(private servicio: ServicioService, 
    private ruta: ActivatedRoute,
    private router:Router) {
      
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    //Inicializar
    this.emp = new Empleado();
    this.jefe = new Empleado();
    this.subord = new Array<Empleado>();
    this.depto = new Departamento();

    this.servicio
      .getEmpleado(this.ruta.snapshot.params.id)
      .subscribe((datos: any) => {
        this.emp = this.cargarEmpleado(datos, this.emp);

        //Cargar jefe
        if (this.emp.getJefeId() != null) {
          this.servicio
            .getEmpleado(this.emp.getJefeId())
            .subscribe((datos: any) => {
              this.jefe = this.cargarEmpleado(datos, this.jefe);
            });
        }
        //Cargar subordinados
        this.servicio.getEmpleados().subscribe((datos: any) => {
          datos.forEach((d) => {
            if (d.jefeId == this.emp.getNDIEmp()) {
              let sub = new Empleado();
              sub = this.cargarEmpleado(d, sub);
              this.subord.push(sub);
            }
          });
        });
        //Cargar departamento
        this.servicio
          .getDepartamento(this.emp.getCodDepto())
          .subscribe((datos: any) => {
            this.depto.setCiudad(datos.ciudad);
            this.depto.setCodDepto(datos.codDepto);
            this.depto.setCodDirector(datos.codDirector);
            this.depto.setNombreDepto(datos.nombreDepto);
          });
      });
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

  ngOnInit(): void {}
}
