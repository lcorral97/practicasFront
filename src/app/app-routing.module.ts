import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { LocalizarMapComponent } from './componentes/localizar-map/localizar-map.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'localizarMap', component:LocalizarMapComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
