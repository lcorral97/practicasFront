import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LocalizarMapComponent } from './localizar-map/localizar-map.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'localizarMap', component:LocalizarMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
