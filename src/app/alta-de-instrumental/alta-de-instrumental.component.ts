import { Component } from '@angular/core';


const Tabla1 = [
  {id:15611651 , Nombre: 'Pinzas Pequeñas', Clasificacion: 'Instrumental', Marca: 'URREA' , Lote: '541512L', Caducidad:'12/05/2023' },
  {id:15445645 , Nombre: 'Pinzas Grandes', Clasificacion: 'Instrumental', Marca: 'URREA' ,  Lote: '845454L', Caducidad:'12/05/2023' },
  {id:72745227 , Nombre: 'Pinzas medianas', Clasificacion: 'Instrumental', Marca: 'URREA' , Lote: '256255A', Caducidad:'12/05/2023' },
  {id:65452444 , Nombre: 'Pinzas Pequeñas', Clasificacion: 'Instrumental', Marca: 'URREA' , Lote: '541512L', Caducidad:'12/05/2023' },

];


@Component({
  selector: 'app-alta-de-instrumental',
  templateUrl: './alta-de-instrumental.component.html',
  styleUrl: './alta-de-instrumental.component.css'
})
export class AltaDeInstrumentalComponent {

  displayedColumns: string[] = ['id' , 'Nombre', 'Clasificacion', 'Marca' , 'Lote', 'Caducidad'];
  dataSource = Tabla1;

  value1 = '';
  value2 = '';
  value3 = '';
  value4 = '';
  value5 = '';
  value6 = '';
  value7 = '';
}
