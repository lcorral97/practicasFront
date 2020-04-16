import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/clase/departamento';
import { Empleado } from 'src/app/clase/empleado';
import { ServicioService } from 'src/app/servicio/servicio.service';


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
    this.servicio.getDepartamentos().subscribe(
      (datos:any) => {
        datos.forEach((d) => {
          let dpto = new Departamento();
          dpto.setCiudad(d.ciudad);
          dpto.setCodDepto(d.codDepto);
          dpto.setCodDirector(d.codDirector);
          dpto.setNombreDepto(d.nombreDepto);
          this.deptos.push(dpto);
        })
      }
    );
    this.servicio.getEmpleados().subscribe((datos: any) => {
      datos.forEach((d) => {
        let e = new Empleado();
        e.setCargoE(d.cargoE);
        e.setCiudad(d.ciudad);
        e.setCodDepto(d.codDepto);
        e.setComisionE(d.comisionE);
        e.setCoord(d.coord);
        e.setFecIncorporacion(d.fecIncorporacion);
        e.setFecNac(d.fecNac);
        e.setJefeId(d.jefeId);
        e.setNDIEmp(d.ndiemp);
        e.setNomEmp(d.nomEmp);
        e.setPassword(d.password);
        e.setSalEmp(d.salEmp);
        e.setSexEmp(d.sexEmp);
        this.emps.push(e);
      });
    });
  }

  ngOnInit(): void {}

}
