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
  {path:'main', loadChildren:() => import('src/app/modules/main/main.module').then(m => m.MainModule)},
  {path:'perfil', loadChildren:() => import('src/app/modules/perfil/perfil.module').then(m => m.PerfilModule)},
  {path:'empleado', loadChildren:() => import('src/app/modules/empleado/empleado.module').then(m => m.EmpleadoModule)},
  {path:'departamento', loadChildren:() => import('src/app/modules/departamento/departamento.module').then(m => m.DepartamentoModule)},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = 
RouterModule.forRoot(routes);