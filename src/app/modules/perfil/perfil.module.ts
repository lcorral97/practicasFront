import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UserComponent } from './userbar/userbar.component';


@NgModule({
  entryComponents: [ModificarPerfilComponent, PerfilComponent, UserComponent],
  declarations: [ModificarPerfilComponent, PerfilComponent, UserComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarModule
  ],
  exports: [UserComponent]
})
export class PerfilModule { }
