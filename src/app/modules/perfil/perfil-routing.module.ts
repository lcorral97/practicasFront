import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';


const routes: Routes = [
  {path:'', component:PerfilComponent},
  {path:'modificar', component:ModificarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
