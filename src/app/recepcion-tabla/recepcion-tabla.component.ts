import { Component } from '@angular/core';



export interface datostabla{
  nombre_entrega: string;
  nombre_recepcion: string;
  nombre_devolucion: string;
  id_entrega:number;
  id_recepcion:number;
  id_devolucion:number;
  No_qx:number;
  dx_pre_operatorio: string;
  fecha_cirugia:string;
}

const tablasg: datostabla[] = [
  {nombre_entrega:'Casimiro Gómez', id_entrega:1232, nombre_recepcion: 'José Lino Santos García', id_recepcion:332,  nombre_devolucion: 'Yazmin Huerta', id_devolucion:3323,  No_qx:1,  dx_pre_operatorio:'hernia',  fecha_cirugia:'10/03/2024' }
];



@Component({
  selector: 'app-recepcion-tabla',
  templateUrl: './recepcion-tabla.component.html',
  styleUrl: './recepcion-tabla.component.css'
})
export class RecepcionTablaComponent {
  today: number = Date.now();

  dataSource= tablasg;
 
}
