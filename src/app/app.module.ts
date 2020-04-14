import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './componentes/select/select.component';

//import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from 'angular-maps';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //MapModule.forRoot()
    ReactiveFormsModule
  ],
  providers: [
    /*{
      provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*export function MapServiceProviderFactory(){
  let bc:BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "AkIad5UaQcWQ1mXKvHO8gpsaHK51WzzKbJv8mVVbmSs5ZxfF17btpgiztkmU3gIq";
  bc.branch = "experimental";
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}*/