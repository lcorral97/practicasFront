import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/clase/empleado';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  registroForm: FormGroup;
  token: string;
  emp: Empleado;
  correcto: boolean;

  constructor(private service: ServicioService,
    private router: Router) {
      this.correcto = true;
      this.registroForm = new FormGroup({
          'id': new FormControl(),
          'password': new FormControl()
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem("id", this.registroForm.controls['id'].value);
    localStorage.setItem("password", this.registroForm.controls['password'].value);
    let e = new Empleado();
    this.service.getEmpleado(this.registroForm.controls['id'].value).toPromise().then(
      (datos:any) => {
        e.setCargoE(datos.cargoE);
        e.setCiudad(datos.ciudad);
        e.setCodDepto(datos.codDepto);
        e.setComisionE(datos.comisionE);
        e.setCoord(datos.coord);
        e.setFecIncorporacion(datos.fecIncorporacion);
        e.setFecNac(datos.fecNac);
        e.setJefeId(datos.jefeId);
        e.setNDIEmp(datos.ndiemp);
        e.setNomEmp(datos.nomEmp);
        e.setPassword(datos.password);
        e.setSalEmp(datos.salEmp);
        e.setSexEmp(datos.sexEmp);
        localStorage.setItem("emp", JSON.stringify(e));
        if (localStorage.getItem("emp") != null) {
          this.router.navigate(['/main']);
        } else {
          this.correcto = false;
        }
      }
    )
  }
}
