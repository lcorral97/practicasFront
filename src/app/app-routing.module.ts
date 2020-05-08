import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main/main.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { LocalizarMapComponent } from './modules/main/localizar-map/localizar-map.component';
import { PerfilComponent } from './modules/perfil/perfil/perfil.component';
import { EmpleadoComponent } from './modules/empleado/empleado/empleado.component';
import { DepartamentoComponent } from './modules/departamento/departamento/departamento.component';
import { ModificarPerfilComponent } from './modules/perfil/modificar-perfil/modificar-perfil.component';


const routes: Routes = [
  {path:'login', loadChildren:() => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)},
  {path:'main', component:MainComponent},
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

export const routing: ModuleWithProviders = 
RouterModule.forRoot(routes);