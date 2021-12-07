import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Ironman','Hulk', 'Thor'];

  heroeborrado: string = '';

  BorrarHeroe(): string{
    this.heroeborrado = this.heroes.shift() || '';
    return this.heroeborrado;
  }

}
