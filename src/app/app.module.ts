import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { UserComponent } from './componentes/userbar/userbar.component';
import { AuthInterceptorService } from './servicio/auth-interceptor.service';
import { LocalizarMapComponent } from './componentes/localizar-map/localizar-map.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AvatarModule } from 'ngx-avatar';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { DepartamentoComponent } from './componentes/departamento/departamento.component';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    LocalizarMapComponent,
    NavbarComponent,
    PerfilComponent,
    EmpleadoComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AvatarModule
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