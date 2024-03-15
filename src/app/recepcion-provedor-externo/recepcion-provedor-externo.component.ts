import { Component } from '@angular/core';
import { DialogService } from '../Service/dialog.service';


const Instrumental_quirugico_sencillo = [
  {Id: 3829	, Instrumental: 'Mango de Bisturi', Cantidad: 2, Marca_Comercial: 'N/A', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: 9034, Instrumental: 'Tijeras', Cantidad: 1, Marca_Comercial: 'LISTER', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
  {Id: 3984, Instrumental: 'Pinzas', Cantidad: 3, Marca_Comercial: 'GUTTEK', Prelavado:'', Completo:'', Funcional:'', Cantidad_Recibida:''},
 
];



@Component({
  selector: 'app-recepcion-provedor-externo',
  templateUrl: './recepcion-provedor-externo.component.html',
  styleUrl: './recepcion-provedor-externo.component.css'
})
export class RecepcionProvedorExternoComponent {

  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }

ticket =36485;
fecha='17/05/2023';
turno='Matutino';
hora='13:11';



displayedColumns1: string[] = ['Id', 'Instrumental', 'Cantidad', 'Marca_Comercial', 'Prelavado',  'Funcional', 'insidencia'];
dataSource1 = Instrumental_quirugico_sencillo;



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