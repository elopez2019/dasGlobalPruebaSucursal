import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class DatabaseService {

 // private url = 'http://localhost:3000'; // URL del servidor MySQL
  private url = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  // metodo para cargar los archivos desde un JSON
  cargarDatosDesdeArchivo(jsonData: any): Observable<any> {
    console.log('JASON' , jsonData);
    return this.http.post(`${this.url}/cargar-archivo`, jsonData);
  }
  
  getEmpresas() {
    return this.http.get(`${this.url}/empresas`);
  }

  getSucursales() {
    return this.http.get(`${this.url}/sucursales`);
  }

  getColaboradores(sucursalId: number) {
    return this.http.get(`${this.url}/colaboradores/${sucursalId}`);
  }

  agregarEmpresa(empresa: any) {
    return this.http.post(`${this.url}/empresas`, empresa);
  }

  agregarSucursal(sucursal: any) {
    return this.http.post(`${this.url}/sucursales`, sucursal);
  }

  agregarColaborador(colaborador: any) {
    return this.http.post(`${this.url}/colaboradores`, colaborador);
  }

  actualizarSucursal(sucursalId: number, sucursal: any) {
    return this.http.put(`${this.url}/sucursales/${sucursalId}`, sucursal);
  }

  actualizarColaborador(colaboradorId: number, colaborador: any) {
    return this.http.put(`${this.url}/colaboradores/${colaboradorId}`, colaborador);
  }

  eliminarSucursal(sucursalId: number) {
    return this.http.delete(`${this.url}/sucursales/${sucursalId}`);
  }

  eliminarColaborador(colaboradorId: number) {
    return this.http.delete(`${this.url}/colaboradores/${colaboradorId}`);
  }
}
