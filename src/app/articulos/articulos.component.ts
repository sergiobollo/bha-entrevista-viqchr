import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../../src/models/articulo';
import { ArticuloService } from '../../../src/services/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  apiUrl = "https://6050ad9e53460900176703c6.mockapi.io/api/entrevista/articulos";
  articulos: Articulo[];
  @Input() articulosActualizados: Articulo[];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {

    if(localStorage.getItem('articulosActualizados')) {
      this.articulos = JSON.parse(localStorage.getItem('articulosActualizados'));
    }
    else {
      this.articuloService.getArticulos(this.apiUrl).subscribe((data: Articulo[]) => {
        this.articulos = data;
        localStorage.setItem('articulos', JSON.stringify(this.articulos));
      })
      ;
    }
    console.log(this.articulos);
  }
}
