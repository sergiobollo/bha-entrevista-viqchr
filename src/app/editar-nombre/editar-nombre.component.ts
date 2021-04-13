import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../../../src/models/articulo';


@Component({
  selector: 'app-editar-nombre',
  templateUrl: './editar-nombre.component.html',
  styleUrls: ['./editar-nombre.component.css']
})
export class EditarNombreComponent implements OnInit {
  id: string;
  articulos: Articulo[];
  articulo: Articulo;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('articulosActualizados')) {
      this.articulos = JSON.parse(localStorage.getItem('articulosActualizados'));
    }
    else {
      this.articulos = JSON.parse(localStorage.getItem('articulos'));
    }

    this.id = this.route.snapshot.paramMap.get('id');
    this.articulo = this.articulos.filter(a => a.id.toString() === this.id)[0];
    console.log("posicion: " + this.articulos.indexOf(this.articulo));
  }

  actualizar(a:Articulo) {
    this.articulos.splice(this.articulos.indexOf(this.articulo), 1, a)
    localStorage.setItem('articulosActualizados', JSON.stringify(this.articulos));
    this.router.navigate(['articulos'])
  }

}
