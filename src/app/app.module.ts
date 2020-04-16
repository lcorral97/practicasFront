import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    LocalizarMapComponent,
    NavbarComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }