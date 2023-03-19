import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-carga-archivo',
  templateUrl: './carga-archivo.component.html',
  styleUrls: ['./carga-archivo.component.css']
})
export class CargaArchivoComponent {
  archivoSeleccionado!: File;

  constructor(private http: HttpClient, private dataService: DatabaseService) {}


  guardar() {
    console.log('GUARDAR ' , this.archivoSeleccionado);
    this.dataService.cargarDatosDesdeArchivo(this.archivoSeleccionado)
      .subscribe(
        respuesta => console.log('Datos cargados:', respuesta),
        error => console.error('Error al cargar los datos:', error)
      );
  }

  seleccionarArchivo(evento: any): void {
   this.archivoSeleccionado = evento.target.files[0];
  const reader = new FileReader();
  reader.readAsText(this.archivoSeleccionado);

  reader.onload = () => {
    const jsonData = JSON.parse(reader.result as string);
     console.log('DATA ', jsonData);
     this.archivoSeleccionado = jsonData;
  };
  }
}
