import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/shared/clase/empleado';
import { ServicioService } from 'src/app/core/service/servicio.service';
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

  async onSubmit() {
    localStorage.setItem("token", await this.service.login("Basic " + btoa(this.registroForm.controls['id'].value + ":" + this.registroForm.controls['password'].value)));
    let e = new Empleado();
    this.service.getEmpleado(this.registroForm.controls['id'].value).toPromise().then(
      (datos:Empleado) => {
        e = datos;
        localStorage.setItem("emp", JSON.stringify(e));
        if (localStorage.getItem("emp") != null) {
          this.router.navigate(['/main']);
        }
      }
    )
  }
}
