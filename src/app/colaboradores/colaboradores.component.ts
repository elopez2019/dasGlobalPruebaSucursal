import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores: any;
  sucursales: any;
  message: any;

  constructor( private dataService: DatabaseService) {
    this.getColaboradores();
    this.getSucursales();
  }
  
  ngOnInit() {
    this.getColaboradores();
  }

  getColaboradores() {
    console.log(this.sucursales); 
      this.dataService.getColaboradores(this.sucursales.sucursalId).subscribe(data => {
        this.colaboradores = data;
      })
  }

  
  getSucursales() {
    this.dataService.getSucursales().subscribe(data => {
      this.sucursales.push(data);
      for(const suc of this.sucursales){
        console.log(suc);
      }
    })
  }

  editColaboradores(cola: any) {
    this.dataService.actualizarColaborador(cola.id, cola).subscribe(res => {
      console.log(res);
    });
  }

  deleteColaborador(cola: any) {
    this.dataService.eliminarColaborador(cola.id).subscribe(res => {
      console.log(res);
      this.message = "Colaborador eliminada con éxito";
      this.getSucursales();
    });
  }
  
}
