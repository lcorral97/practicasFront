import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/clase/empleado';

declare var H: any;

@Component({
  selector: 'app-localizar-map',
  templateUrl: './localizar-map.component.html',
  styles: [
  ],
})
export class LocalizarMapComponent implements OnInit {
  title = 'HereMapDemo';

  @ViewChild('map', { static: false }) public mapElement: ElementRef;

  public lat: any;
  public long: any;

  private platform: any;
  private map: any;

  form: FormGroup;
  empleados: Array<Empleado>;
  emp: Empleado;

  constructor(private servicio: ServicioService) { 
    this.empleados = new Array<Empleado>();
    //Lista de Empleados
    this.servicio.getEmpleados().subscribe((datos: any) => {
      datos.forEach((d) => {
        let e = new Empleado();
        e.setCargoE(d.cargoE);
        e.setCiudad(d.ciudad);
        e.setCodDepto(d.codDepto);
        e.setComisionE(d.comisionE);
        e.setCoord(d.coord);
        e.setFecIncorporacion(d.fecIncorporacion);
        e.setFecNac(d.fecNac);
        e.setJefeId(d.jefeId);
        e.setNDIEmp(d.ndiemp);
        e.setNomEmp(d.nomEmp);
        e.setPassword(d.password);
        e.setSalEmp(d.salEmp);
        e.setSexEmp(d.sexEmp);
        this.empleados.push(e);
      });
    });
    this.form = new FormGroup({
      select: new FormControl('AA0001'),
    });

    //HERE Map
    this.platform = new H.service.Platform({
      apikey: 'T-diC99kT3DTPmxZj8-o6_a8XiOY_dDYlQZeT99FU-Y',
      useHTTPS: true,
    });}

  ngOnInit(): void {
  }
  
  localizar() {
    this.mapElement.nativeElement.innerHTML = '';
    this.servicio
      .getEmpleado(this.form.value.select)
      .subscribe((datos: any) => {
        //this.emp = datos;
        this.lat = datos.coord.split(',')[0];
        this.long = datos.coord.split(',')[1];
        let defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.vector.normal.map,
          {
            center: { lat: 0 + +this.lat, lng: 0 + +this.long },
            zoom: 12,
          }
        );
        let marker = new H.map.Marker({
          lat: 0 + +this.lat,
          lng: 0 + +this.long,
        });
        this.map.addObject(marker);
      });
  }
}
