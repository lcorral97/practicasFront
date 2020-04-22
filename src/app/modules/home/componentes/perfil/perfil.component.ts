import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/core/service/servicio.service';
import { Empleado } from 'src/app/shared/clase/empleado';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/shared/clase/departamento';

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
      this.emp = empJSON;
      
      //Cargar jefe
      if (this.emp.jefeId != null) {
        this.servicio.getEmpleado(this.emp.jefeId).subscribe(
          (datos:Empleado) => {
            this.jefe = datos;
          }
        );
      }

      //Cargar subordinados
      this.servicio.getEmpleados().subscribe(
        (datos:Empleado[]) => {
          datos.forEach((d) => {
            if (d.jefeId == this.emp.ndiemp) {
              this.subord.push(d);
            }
          });
        }
      )

      //Cargar departamento
      this.servicio.getDepartamento(this.emp.codDepto).subscribe(
        (datos:Departamento) => {
          this.depto = datos
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
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
