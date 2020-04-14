import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

declare var H:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ],
})
export class MainComponent implements OnInit {

  title = 'HereMapDemo';

  @ViewChild("map", {static: false}) public mapElement: ElementRef;

  public lat:any;
  public long:any;

  private platform:any;
  private map:any;

  form:FormGroup;
  empleados: any;
  emp:any;

  constructor(private servicio:ServicioService) { 
    this.servicio.getEmpleados().subscribe(
      (datos:any) => {
        this.empleados = datos;
    });
    this.form = new FormGroup({
      'select': new FormControl('AA0001')
    });
    this.platform = new H.service.Platform({
      "apikey": "T-diC99kT3DTPmxZj8-o6_a8XiOY_dDYlQZeT99FU-Y",
      useHTTPS: true
    })
    
  
}

  ngOnInit(): void {
  }

  localizar(){
    this.mapElement.nativeElement.innerHTML = "";
    this.servicio.getEmpleado(this.form.value.select).subscribe(
      (datos:any) => {this.emp = datos;
      this.lat = datos.coord.split(",")[0]
      this.long = datos.coord.split(",")[1]
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(this.mapElement.nativeElement,  
        defaultLayers.vector.normal.map, { 
          center: {lat: 0 + +this.lat,
                   lng: 0 + +this.long}, 
          zoom: 12
      });
      let marker = new H.map.Marker({lat: 0 + +this.lat,
        lng: 0 + +this.long});
      this.map.addObject(marker);
      }
    );
  }

  ngAfterViewInit(): void {
  }
}