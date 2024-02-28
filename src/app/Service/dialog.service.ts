import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { EmergenteComponent } from '../emergente/emergente.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor( private matDialog: MatDialog) { }


  emergente1(){
    this.matDialog.open(EmergenteComponent)
  }
}
