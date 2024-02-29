import { Component } from '@angular/core';


const ELEMENT_DATA = [
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  {Id: 198939, Paquete: 'Set de Angiocardio',},
  
];


@Component({
  selector: 'app-esterilizador-componente',
  templateUrl: './esterilizador-componente.component.html',
  styleUrl: './esterilizador-componente.component.css'
})
export class EsterilizadorComponenteComponent {
  numciclo=10;
  value1=10;
  value=10;
  displayedColumns: string[] = ['Id', 'Paquete', 'Icon'];
  dataSource = ELEMENT_DATA;

  interval:any;



  bloquear: boolean = false;
  
  hacerSubmit() {

    this.bloquear = true;

    setTimeout( () => {
      // despues de 2 segundos se volverá a habilitar
      this.bloquear = false;
    }, 10000);

  }

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



}
