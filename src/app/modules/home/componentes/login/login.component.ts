import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/shared/clase/empleado';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/core/service/empleado.service';

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

  constructor(private empService: EmpleadoService,
    private router: Router) {
      if (this.router.url=="/login/error"){
        this.correcto = false;
      } else {
        this.correcto = true;
      }
      this.registroForm = new FormGroup({
          'id': new FormControl(),
          'password': new FormControl()
      });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    localStorage.setItem("token", await this.empService.login("Basic " + btoa(this.registroForm.controls['id'].value + ":" + this.registroForm.controls['password'].value)));
    let e = new Empleado();
    this.empService.getEmpleado(this.registroForm.controls['id'].value).toPromise().then(
      (datos:Empleado) => {
        e = datos;
        localStorage.setItem("emp", JSON.stringify(e));
        if (localStorage.getItem("emp") != null) {
          this.router.navigate(['/main']);
        }
      }
    );
  }
}
