import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/home/componentes/main/main.component';
import { LoginComponent } from './modules/home/componentes/login/login.component';
import { LocalizarMapComponent } from './modules/home/componentes/localizar-map/localizar-map.component';
import { PerfilComponent } from './modules/home/componentes/perfil/perfil.component';
import { EmpleadoComponent } from './modules/home/componentes/empleado/empleado.component';
import { DepartamentoComponent } from './modules/home/componentes/departamento/departamento.component';
import { ModificarPerfilComponent } from './modules/home/componentes/modificar-perfil/modificar-perfil.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'login/error', component:LoginComponent},
  {path:'localizarMap', component:LocalizarMapComponent},
  {path:'miPerfil', component: PerfilComponent},
  {path:'empleado/:id', component: EmpleadoComponent},
  {path:'departamento/:id', component: DepartamentoComponent},
  {path:'modificar', component:ModificarPerfilComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
