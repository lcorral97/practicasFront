import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from "./modules/material/material.module";

import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './core/interceptor/auth-interceptor.service';
import { AvatarModule } from 'ngx-avatar';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/compiler';
import { MainModule } from './modules/main/main.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { DepartamentoModule } from './modules/departamento/departamento.module';
import { EmpleadoModule } from './modules/empleado/empleado.module';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AvatarModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    MainModule,
    PerfilModule,
    DepartamentoModule,
    EmpleadoModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }