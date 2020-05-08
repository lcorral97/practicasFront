import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/shared/clase/empleado';
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
      this.emp = empJSON;
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
