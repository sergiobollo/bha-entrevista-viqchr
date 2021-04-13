import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { EditarNombreComponent } from './editar-nombre/editar-nombre.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';


const routes: Routes = [
  {path: '', component: EjercicioComponent},
  { path: 'articulos', component: ArticulosComponent },
  { path: 'editarNombre/:id', component: EditarNombreComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }