import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from "./modules/material/material.module";

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/auth/login/login.component';
import { UserComponent } from './modules/perfil/userbar/userbar.component';
import { AuthInterceptorService } from './core/interceptor/auth-interceptor.service';
import { LocalizarMapComponent } from './modules/main/localizar-map/localizar-map.component';
import { NavbarComponent } from './modules/main/navbar/navbar.component';
import { AvatarModule } from 'ngx-avatar';
import { PerfilComponent } from './modules/perfil/perfil/perfil.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EmpleadoComponent } from './modules/empleado/empleado/empleado.component';
import { DepartamentoComponent } from './modules/departamento/departamento/departamento.component';
import { ModificarPerfilComponent } from './modules/perfil/modificar-perfil/modificar-perfil.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/compiler';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    LocalizarMapComponent,
    NavbarComponent,
    PerfilComponent,
    EmpleadoComponent,
    DepartamentoComponent,
    ModificarPerfilComponent,
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
    routing
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