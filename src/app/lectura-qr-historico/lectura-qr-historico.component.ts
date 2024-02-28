import { Component } from '@angular/core';
import { DialogService } from '../Service/dialog.service';


const tabla1 = [
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  {Nombre:'Set de Laparoscopia', Fecha:'22/10/2023', Hora: '13:00', Evento:'Empaque', Turno: 2, Operador:'José Lino'},
  
];




@Component({
  selector: 'app-lectura-qr-historico',
  templateUrl: './lectura-qr-historico.component.html',
  styleUrl: './lectura-qr-historico.component.css'
})
export class LecturaQRHistoricoComponent {

  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }

  QRnumber=52235;
  today: number = Date.now();
  fecha= this.today 
  displayedColumns: string[] = ['Nombre', 'Fecha', 'Hora', 'Evento', 'Turno', 'Operador'];
  dataSource = tabla1;
}
