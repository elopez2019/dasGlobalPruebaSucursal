import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-visualizacion-registros',
  templateUrl: './visualizacion-registros.component.html',
  styleUrls: ['./visualizacion-registros.component.css']
})
export class VisualizacionRegistrosComponent implements OnInit {

  sucursales: any;
  message: any;

  constructor( private dataService: DatabaseService) {
    this.getSucursales();
  }
  
  ngOnInit() {
    this.dataService.getSucursales().subscribe(data => {
      console.log('data ', data);
    })
  }

  getSucursales() {
    this.dataService.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  editSucursal(sucursal: any) {
    this.dataService.actualizarSucursal(sucursal.id, sucursal).subscribe(res => {
      console.log(res);
    });
  }

  deleteSucursal(sucursal: any) {
    this.dataService.eliminarSucursal(sucursal.id).subscribe(res => {
      console.log(res);
      this.message = "Sucursal eliminada con éxito";
      this.getSucursales();
    });
  }
  
}
