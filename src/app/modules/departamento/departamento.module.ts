import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { PerfilModule } from '../perfil/perfil.module';
import { DepartamentoComponent } from './departamento/departamento.component';


@NgModule({
  entryComponents: [DepartamentoComponent],
  declarations: [DepartamentoComponent],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarModule,
    PerfilModule
  ]
})
export class DepartamentoModule { }
