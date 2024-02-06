import { Component } from '@angular/core';


export interface PeriodicElement {
  Elemento: string;
  Cantidad: number;
  Descripcion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Elemento: 'Set 1', Cantidad:1, Descripcion: 'Set 1 para quirófano'},
  {Elemento: 'Set 2', Cantidad:1, Descripcion: 'Set 2 para quirófano'},
  {Elemento: 'Set 3', Cantidad:1, Descripcion: 'Set 3 para quirófano'},
  {Elemento: 'Set 4', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
];


@Component({
  selector: 'app-datos-de-programacion',
  templateUrl: './datos-de-programacion.component.html',
  styleUrl: './datos-de-programacion.component.css'
})

export class DatosDeProgramacionComponent {
  labelPosition: 'media' | 'alta' = 'alta';
  value = 'Clear me';


  displayedColumns: string[] = ['Elemento', 'Cantidad', 'Descripcion'];
  dataSource = ELEMENT_DATA;

}
