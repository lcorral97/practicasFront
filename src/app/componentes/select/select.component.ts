import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: [
  ],
})
export class SelectComponent implements OnInit {
  emp:any;
  empleados : any;
  form: FormGroup;
  constructor(private servicio: ServicioService,
    private router:Router) {
    this.servicio.getEmpleados().subscribe(
      (datos:any) => {
        this.empleados = datos;
    });
    this.form = new FormGroup({
      'select': new FormControl('AA0001')
    });
  }

  ngOnInit(): void {
  }

  localizar(){
    /*let value = this.form.value;
    console.log(value);
    console.log(value.select);
    this.router.navigate(['/main',value.select]);*/
    this.servicio.getEmpleado(this.form.value.select).subscribe(
      (datos:any) => {this.emp = datos;
      console.log(this.emp)}
    )
  }

}
