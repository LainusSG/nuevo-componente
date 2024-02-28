import { Component } from '@angular/core';
import { DialogService } from '../Service/dialog.service';


const Tabla = [
  {Elemento: 'SET lamparoscopia', Marca:'GUTTEK', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Marca:'GUTTEK', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Marca:'GUTTEK', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Marca:'GUTTEK', Cantidad:2},
  {Elemento: 'SET lamparoscopia', Marca:'GUTTEK', Cantidad:2},
  
];



@Component({
  selector: 'app-distribucion-entregar',
  templateUrl: './distribucion-entregar.component.html',
  styleUrl: './distribucion-entregar.component.css'
})
export class DistribucionEntregarComponent {

  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }

  today: number = Date.now();
  Ticket=1213;
  displayedColumns: string[] = ['Elemento','Marca', 'Cantidad','Asignacion'];
  dataSource = Tabla;


}
