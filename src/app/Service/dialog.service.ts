import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmergenteImprimirQrComponent } from '../emergente-imprimir-qr/emergente-imprimir-qr.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor( private matDialog: MatDialog) { }


  emergente1(){
    this.matDialog.open(EmergenteImprimirQrComponent)
  }
}
