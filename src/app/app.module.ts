import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/home/componentes/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/home/componentes/login/login.component';
import { UserComponent } from './modules/home/componentes/userbar/userbar.component';
import { AuthInterceptorService } from './core/interceptor/auth-interceptor.service';
import { LocalizarMapComponent } from './modules/home/componentes/localizar-map/localizar-map.component';
import { NavbarComponent } from './modules/home/componentes/navbar/navbar.component';
import { AvatarModule } from 'ngx-avatar';
import { PerfilComponent } from './modules/home/componentes/perfil/perfil.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EmpleadoComponent } from './modules/home/componentes/empleado/empleado.component';
import { DepartamentoComponent } from './modules/home/componentes/departamento/departamento.component';

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