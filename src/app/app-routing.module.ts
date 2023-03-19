import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizacionRegistrosComponent } from './visualizacion-registros/visualizacion-registros.component';
import { HeaderComponent } from './header/header.component';
import { CargaArchivoComponent } from './carga-archivo/carga-archivo.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: CargaArchivoComponent },
  { path: 'sucursal', component: VisualizacionRegistrosComponent },
  { path: 'cargar', component: CargaArchivoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
