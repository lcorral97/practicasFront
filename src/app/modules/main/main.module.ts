import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { LocalizarMapComponent } from './localizar-map/localizar-map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from '../perfil/userbar/userbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  entryComponents: [MainComponent, LocalizarMapComponent, NavbarComponent],
  declarations: [MainComponent, LocalizarMapComponent, NavbarComponent, UserComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [UserComponent]
})
export class MainModule { }
