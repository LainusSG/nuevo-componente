import { Component } from '@angular/core';
import { DialogService } from '../Service/dialog.service';


const Tabla1 = [
  {Elemento: 'SET lamparoscopia', Cantidad:2, Entregados:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2, Entregados:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2, Entregados:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2, Entregados:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2, Entregados:2},
  {Elemento: 'SET lamparoscopia', Cantidad:2, Entregados:2},
  
];

const Tabla2 = [
  {Elemento: 'SET lamparoscopia', Entregados:2},
  {Elemento: 'SET lamparoscopia', Entregados:2},
  {Elemento: 'SET lamparoscopia', Entregados:2},
  {Elemento: 'SET lamparoscopia', Entregados:2},
  {Elemento: 'SET lamparoscopia', Entregados:2},
  
];



@Component({
  selector: 'app-distribucion-quirofano',
  templateUrl: './distribucion-quirofano.component.html',
  styleUrl: './distribucion-quirofano.component.css'
})
export class DistribucionQuirofanoComponent {
  today: number = Date.now();
  Ticket=1213;
  displayedColumns1: string[] = ['Elemento', 'Cantidad', 'Entregados', 'Asignacion'];
  dataSource1 = Tabla1;

  displayedColumns2: string[] = ['Elemento', 'Entregados', 'Accion'];
  dataSource2 = Tabla2;

  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }

}
