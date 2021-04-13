import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Articulo } from '../../../src/models/articulo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {
  @Input() articulo: Articulo;
  @Output() enviarDatos: EventEmitter<Articulo>;
  fg: FormGroup = new FormGroup({});
  minLongitud = 3;

  constructor(private fb: FormBuilder) { 
    this.enviarDatos = new EventEmitter();
  }

  public ngOnInit() {
    this.buildForm();
    console.log(this.articulo)
  }
  private buildForm(){
    this.fg = this.fb.group({
      id: '',
      creacion: '',
      modificado: '',
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidatorParametrizable(this.minLongitud)
      ])],
      descripcion: '',
      imagen: '',
    });
  }



  guardar(nombre: string): boolean {
    const modificado = new Date().toISOString();
    const a = new Articulo(this.articulo.id, this.articulo.creacion, modificado, nombre, this.articulo.descripcion, this.articulo.imagen);
    this.enviarDatos.emit(a);
    return false;
  }
  
  nombreValidatorParametrizable(minLong: number): ValidatorFn {
    return (control: FormControl): {[s: string]: boolean} | null => {
      const l =  control.value.toString().trim().length;
      if (l > 0 && l < minLong) {
        return {minLongNombre: true};
      }
      return null;
    }
  }

}
