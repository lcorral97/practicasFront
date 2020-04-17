import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Empleado } from 'src/app/clase/empleado';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/clase/departamento';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ],
})
export class PerfilComponent implements OnInit {

  jefe: Empleado;
  subord: Array<Empleado>;
  emp: Empleado;
  depto: Departamento;
  constructor(private servicio:ServicioService,
    private router: Router) {
    if (localStorage.getItem("token") != null){
      //Inicializar
      this.emp = new Empleado();
      this.jefe = new Empleado();
      this.subord = new Array<Empleado>();
      this.depto = new Departamento();

      //Cargar emp
      let empJSON = JSON.parse(localStorage.getItem('emp'));
      this.emp = this.cargarEmpleado(empJSON, this.emp);
      //Debido a que el emp del localStorage tiene mayúsculas, añadimos el nDIEmp aquí.
      this.emp.setNDIEmp(empJSON.nDIEmp);
      
      //Cargar jefe
      if (this.emp.getJefeId() != null) {
        this.servicio.getEmpleado(this.emp.getJefeId()).subscribe(
          (datos:any) => {
            this.jefe = this.cargarEmpleado(datos, this.jefe);
          }
        )
      }

      //Cargar subordinados
      this.servicio.getEmpleados().subscribe(
        (datos:any) => {
          datos.forEach((d) => {
            if (d.jefeId == this.emp.getNDIEmp()) {
              let sub = new Empleado();
              sub = this.cargarEmpleado(d, sub);
              this.subord.push(sub);
            }
          })
        }
      )

      //Cargar departamento
      this.servicio.getDepartamento(this.emp.getCodDepto()).subscribe(
        (datos:any) => {
          this.depto.setCiudad(datos.ciudad);
          this.depto.setCodDepto(datos.codDepto);
          this.depto.setCodDirector(datos.codDirector);
          this.depto.setNombreDepto(datos.nombreDepto);
        }
      )
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
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

  destaparSpoiler(id: string) {
    let elem = document.getElementById(id);
    elem.classList.remove("bg-dark");
  }

  taparSpoiler(id: string) {
    let elem = document.getElementById(id);
    elem.classList.add("bg-dark");
  }

  logout() {
    localStorage.removeItem("emp");
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
