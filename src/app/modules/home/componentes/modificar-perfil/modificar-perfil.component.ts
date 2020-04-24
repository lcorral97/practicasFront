import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/shared/clase/empleado';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/core/service/empleado.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styles: [
  ],
})
export class ModificarPerfilComponent implements OnInit {

  emp: Empleado;
  lat: string;
  long: string;
  modificarForm: FormGroup;
  constructor(private empService: EmpleadoService,
    private router: Router) {
    this.emp = JSON.parse(localStorage.getItem("emp"));
    this.lat = this.emp.coord.split(",")[0];
    this.long = this.emp.coord.split(",")[1];
    this.modificarForm = new FormGroup({
      'nombre': new FormControl(this.emp.nomEmp),
      'sexo': new FormControl(this.emp.sexEmp),
      'fecNac': new FormControl(this.emp.fecNac),
      'ciudad': new FormControl(this.emp.ciudad),
      'lat': new FormControl(this.lat),
      'long': new FormControl(this.long)
    });
  }

  ngOnInit(): void {
  }

  modificar() {
    this.emp.nomEmp = this.modificarForm.controls["nombre"].value;
    this.emp.sexEmp = this.modificarForm.controls["sexo"].value;
    this.emp.fecNac = this.modificarForm.controls["fecNac"].value;
    this.emp.ciudad = this.modificarForm.controls["ciudad"].value;
    this.emp.coord = this.modificarForm.controls["lat"].value + "," + this.modificarForm.controls["long"].value;
    this.empService.modificarEmpleado(this.emp.ndiemp, this.emp).subscribe();
    localStorage.setItem("emp", JSON.stringify(this.emp));
    this.router.navigate(['/miPerfil']);
  }

}
