import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArticuloService } from '../../src/services/articulo.service';
import { ArticulosComponent } from './articulos/articulos.component';
import { AppRoutingModule } from './app-routing.module';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { EditarNombreComponent } from './editar-nombre/editar-nombre.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ArticulosComponent, EjercicioComponent, EditarNombreComponent, FormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ArticuloService]
})
export class AppModule { }
