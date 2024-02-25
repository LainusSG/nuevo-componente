import { Component } from '@angular/core';

const ELEMENT_DATA = [
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},
  {Ticket:1, Fecha:'23/1/2023', Cirugia:'laparotomia exploradora', Sala:1, Turno:1, Estatus:'Pendiente'},

];

@Component({
  selector: 'app-recepcion-material-quirofano',
  templateUrl: './recepcion-material-quirofano.component.html',
  styleUrl: './recepcion-material-quirofano.component.css'
})
export class RecepcionMaterialQuirofanoComponent {
  displayedColumns: string[] = ['Ticket', 'Fecha', 'Cirugia','Sala', 'Turno', 'Estatus', 'Accion'];
  dataSource = ELEMENT_DATA;
}