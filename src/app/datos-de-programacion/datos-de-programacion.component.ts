import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-de-programacion',
  templateUrl: './datos-de-programacion.component.html',
  styleUrl: './datos-de-programacion.component.css'
})
export class DatosDeProgramacionComponent {
  labelPosition: 'media' | 'alta' = 'alta';
  value = 'Clear me';


}
