import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizacionRegistrosComponent } from './visualizacion-registros/visualizacion-registros.component';

import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CargaArchivoComponent } from './carga-archivo/carga-archivo.component';
import { HeaderComponent } from './header/header.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizacionRegistrosComponent,
    CargaArchivoComponent,
    HeaderComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
