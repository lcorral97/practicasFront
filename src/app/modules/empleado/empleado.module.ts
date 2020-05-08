import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { PerfilModule } from '../perfil/perfil.module';
import { EmpleadoComponent } from './empleado/empleado.component';


@NgModule({
  entryComponents: [EmpleadoComponent],
  declarations: [EmpleadoComponent],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarModule,
    PerfilModule
  ]
})
export class EmpleadoModule { }
