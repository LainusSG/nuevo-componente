import { Component } from '@angular/core';


const Tabla1= [
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 
];

const Tabla2= [
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 
];

const Tabla3= [
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
  {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 {Nombre:'Pinza 20 CM', Caducidad:'12/03/23'},
 
];


@Component({
  selector: 'app-lavado-modulo',
  templateUrl: './lavado-modulo.component.html',
  styleUrl: './lavado-modulo.component.css'
})
export class LavadoModuloComponent {

  displayedColumns1: string[] = ['Nombre','Caducidad', 'icon'];
  dataSource1 = Tabla1;

  displayedColumns2: string[] = ['Nombre','Caducidad', 'icon'];
  dataSource2 = Tabla2;

  displayedColumns3: string[] = ['Nombre','Caducidad', 'icon'];
  dataSource3 = Tabla3;
  Tiempo= 10;




  numciclo=10;
  value1=10;

  value2=10;

  value3=10;
  
  interval:any;



  bloquear1: boolean = false;
  
  hacerSubmit1() {

    this.bloquear1 = true;

    setTimeout( () => {
      // despues de 2 segundos se volverá a habilitar
      this.bloquear1 = false;
    }, 10000);

  }



  bloquear2: boolean = false;
  
  hacerSubmit2() {

    this.bloquear2 = true;

    setTimeout( () => {
      // despues de 2 segundos se volverá a habilitar
      this.bloquear2 = false;
    }, 10000);

  }


  bloquear3: boolean = false;
  
  hacerSubmit3() {

    this.bloquear3 = true;

    setTimeout( () => {
      // despues de 2 segundos se volverá a habilitar
      this.bloquear3 = false;
    }, 10000);

  }


//-----------------------------------------------------------------------------------------------

  display: any =10;
  public timerInterval: any;

  constructor() {
    // this.timer(2);
  }

  start() {
    this.timer(this.display);
  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer(minute: number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }


//-------------------------------------------------------------------------------------------------



display2: any =10;
public timerInterval2: any;



start2() {
  this.timer2(this.display2);
}
stop2() {
  clearInterval(this.timerInterval2);
}

timer2(minute: number) {
  // let minute = 1;
  let seconds: number = minute * 60;
  let textSec: any = '0';
  let statSec: number = 60;

  const prefix = minute < 10 ? '0' : '';

  this.timerInterval2 = setInterval(() => {
    seconds--;
    if (statSec != 0) statSec--;
    else statSec = 59;

    if (statSec < 10) {
      textSec = '0' + statSec;
    } else textSec = statSec;

    this.display2 = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

    if (seconds == 0) {
      console.log('finished');
      clearInterval(this.timerInterval2);
    }
  }, 1000);
}


//-------------------------------------------------------------------------------------------------


display3: any =10;
public timerInterval3: any;



start3() {
  this.timer3(this.display3);
}
stop3() {
  clearInterval(this.timerInterval3);
}

timer3(minute: number) {
  // let minute = 1;
  let seconds: number = minute * 60;
  let textSec: any = '0';
  let statSec: number = 60;

  const prefix = minute < 10 ? '0' : '';

  this.timerInterval3 = setInterval(() => {
    seconds--;
    if (statSec != 0) statSec--;
    else statSec = 59;

    if (statSec < 10) {
      textSec = '0' + statSec;
    } else textSec = statSec;

    this.display3 = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

    if (seconds == 0) {
      console.log('finished');
      clearInterval(this.timerInterval3);
    }
  }, 1000);
}


//-------------------------------------------------------------------------------------------------
}
