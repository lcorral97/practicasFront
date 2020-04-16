import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/clase/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './userbar.component.html',
  styles: [
  ],
})
export class UserComponent implements OnInit {

  emp:Empleado;
  constructor(private router: Router) {
    //Usuario Actual
    if (localStorage.getItem("token") != null){
      this.emp = new Empleado();
      let empJSON = JSON.parse(localStorage.getItem('emp'));
      this.emp.setCargoE(empJSON.cargoE);
      this.emp.setCiudad(empJSON.ciudad);
      this.emp.setCodDepto(empJSON.codDepto);
      this.emp.setComisionE(empJSON.comisionE);
      this.emp.setCoord(empJSON.coord);
      this.emp.setFecIncorporacion(empJSON.fecIncorporacion);
      this.emp.setFecNac(empJSON.fecNac);
      this.emp.setJefeId(empJSON.jefeId);
      this.emp.setNDIEmp(empJSON.ndiemp);
      this.emp.setNomEmp(empJSON.nomEmp);
      this.emp.setPassword(empJSON.password);
      this.emp.setSalEmp(empJSON.salEmp);
      this.emp.setSexEmp(empJSON.sexEmp);
    } else {
      this.router.navigate(['/login']);
    }
 }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("emp");
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
