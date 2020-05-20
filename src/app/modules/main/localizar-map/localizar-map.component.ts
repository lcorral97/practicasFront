import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/shared/clase/empleado';
import { EmpleadoService } from 'src/app/core/service/empleado.service';

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

  constructor(private empService: EmpleadoService) { 
    this.empleados = new Array<Empleado>();

    //HERE Map
    this.platform = new H.service.Platform({
      apikey: 'T-diC99kT3DTPmxZj8-o6_a8XiOY_dDYlQZeT99FU-Y',
      useHTTPS: true,
    });}

  ngOnInit(): void {
    
    //Lista de Empleados
    this.empService.getEmpleados().subscribe((datos: Empleado[]) => {
      datos.forEach((d) => {
        this.empleados.push(d);
      });
    });
    
    this.form = new FormGroup({
      select: new FormControl(this.empleados[0].ndiemp),
    });
  }
  
  localizar() {
    this.mapElement.nativeElement.innerHTML = '';
    this.empService
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
