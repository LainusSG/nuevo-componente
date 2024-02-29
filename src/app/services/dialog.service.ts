import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Emergente1Component } from '../componentes/emergente1/emergente1.component';
import { Emergente2Component } from '../componentes/emergente2/emergente2.component';
import { Emergente3Component } from '../componentes/emergente3/emergente3.component';
import { Emergente4Component } from '../componentes/emergente4/emergente4.component';
import { Emergente5Component } from '../componentes/emergente5/emergente5.component';
import { Emergente6Component } from '../componentes/emergente6/emergente6.component';
import { Emergente7Component } from '../componentes/emergente7/emergente7.component';
import { Emergente8Component } from '../componentes/emergente8/emergente8.component';
import { Emergente9Component } from '../componentes/emergente9/emergente9.component';
import { Emergente10Component } from '../componentes/emergente10/emergente10.component';
import { Emergente11Component } from '../componentes/emergente11/emergente11.component';
import { Emergente12Component } from '../componentes/emergente12/emergente12.component';
import { Emergente13Component } from '../componentes/emergente13/emergente13.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor( private matDialog: MatDialog) { }


  emergente1(){
    this.matDialog.open(Emergente1Component)
  }

  emergente2(){
    this.matDialog.open(Emergente2Component)
  }

  emergente3(){
    this.matDialog.open(Emergente3Component)
  }

  emergente4(){
    this.matDialog.open(Emergente4Component)
  }

  emergente5(){
    this.matDialog.open(Emergente5Component)
  }

  emergente6(){
    this.matDialog.open(Emergente6Component)
  }

  emergente7(){
    this.matDialog.open(Emergente7Component)
  }

  emergente8(){
    this.matDialog.open(Emergente8Component)
  }

  emergente9(){
    this.matDialog.open(Emergente9Component)
  }

  emergente10(){
    this.matDialog.open(Emergente10Component)
  }

  emergente11(){
    this.matDialog.open(Emergente11Component)
  }

  emergente12(){
    this.matDialog.open(Emergente12Component)
  }

  emergente13(){
    this.matDialog.open(Emergente13Component)
  }

}
