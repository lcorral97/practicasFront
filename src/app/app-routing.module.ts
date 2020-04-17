import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { LocalizarMapComponent } from './componentes/localizar-map/localizar-map.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { DepartamentoComponent } from './componentes/departamento/departamento.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'localizarMap', component:LocalizarMapComponent},
  {path:'miPerfil', component: PerfilComponent},
  {path:'empleado/:id', component: EmpleadoComponent},
  {path:'departamento/:id', component: DepartamentoComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
