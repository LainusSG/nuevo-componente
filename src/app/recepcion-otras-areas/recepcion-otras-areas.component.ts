import { Component } from '@angular/core';
import { DialogService } from '../Service/dialog.service';


const Instrumental_quirugico_sencillo = [
  {Id: 3829	, Instrumental: 'Mango de Bisturi', Cantidad: 2, Marca_Comercial: 'N/A', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: 9034, Instrumental: 'Tijeras', Cantidad: 1, Marca_Comercial: 'LISTER', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: 3984, Instrumental: 'Pinzas', Cantidad: 3, Marca_Comercial: 'GUTTEK', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
 
];


const Instrumental_quirugico = [
  {Id:' 0001'	, Instrumental: 'Pinza Halsted', Cantidad: 1, Marca_Comercial: 'N/A', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: '0002', Instrumental: 'Tijeras rectas', Cantidad: 2, Marca_Comercial: 'LISTER', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: '0003', Instrumental: 'Pinzas Kelly', Cantidad: 4, Marca_Comercial: 'GUTTEK', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: '0004', Instrumental: 'Succión', Cantidad:8, Marca_Comercial: 'LISTER', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
 
];

@Component({
  selector: 'app-recepcion-otras-areas',
  templateUrl: './recepcion-otras-areas.component.html',
  styleUrl: './recepcion-otras-areas.component.css'
})
export class RecepcionOtrasAreasComponent {


  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }

ticket =100;
fecha='17/05/2023';
turno=2;
hora='13:11';



displayedColumns1: string[] = ['Id', 'Instrumental', 'Cantidad', 'Marca_Comercial', 'Prelavado', 'Completo', 'Funcional', 'Cantidad_Recibida','insidencia'];
dataSource1 = Instrumental_quirugico_sencillo;


displayedColumns2: string[] = ['Id', 'Instrumental', 'Cantidad', 'Marca_Comercial', 'Prelavado', 'Completo', 'Funcional', 'Cantidad_Recibida','insidencia'];
dataSource2 = Instrumental_quirugico;

disabledInput1: boolean = true;

btnActivate(ionicButton:any) {
  if(ionicButton._color === 'accent')
    ionicButton.color =  'warn';
  else
    ionicButton.color = 'accent';
}


selectedValue: string='';

foods = [
  {value: 'Urgencias', viewValue: 'Urgencias'},
  {value: 'UCI', viewValue: 'UCI'},
  {value: 'Pediatría', viewValue: 'Pediatría'},
];


}