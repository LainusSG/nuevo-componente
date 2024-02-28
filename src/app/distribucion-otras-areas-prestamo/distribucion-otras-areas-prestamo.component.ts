import { Component } from '@angular/core';

const Tabla= [
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2},
  
];




@Component({
  selector: 'app-distribucion-otras-areas-prestamo',
  templateUrl: './distribucion-otras-areas-prestamo.component.html',
  styleUrl: './distribucion-otras-areas-prestamo.component.css'
})
export class DistribucionOtrasAreasPrestamoComponent {
  labelPosition: 'media' | 'alta' = 'alta';
  displayedColumns: string[] = ['Elemento', 'Cantidad', 'Accion'];
  dataSource = Tabla;
}
