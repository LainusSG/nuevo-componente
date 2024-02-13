import { Component } from '@angular/core';

import { CargarScriptsService } from '../cargar-scripts.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 32, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 35, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 41, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 42, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 43, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 44, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 45, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 46, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 47, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 48, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 49, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 50, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  


  {position: 51, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 52, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 53, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 54, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 55, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 56, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 57, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 58, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 59, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 60, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 61, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 62, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 63, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 64, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 65, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 66, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 67, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 68, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 69, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 70, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 71, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 72, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 73, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 74, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 75, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 76, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 77, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 78, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 79, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 80, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 81, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 82, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 83, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 84, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 85, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 86, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 87, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 88, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 89, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 90, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 91, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 92, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 93, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 94, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 95, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 96, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 97, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 98, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 99, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 100, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 101, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 102, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 103, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 104, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 105, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 106, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 107, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 108, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 109, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 110, name: 'Fluorine', weight: 18.9984, symbol: 'F'},

];


@Component({
  selector: 'app-imprimirpdf',
  templateUrl: './imprimirpdf.component.html',
  styleUrl: './imprimirpdf.component.css',
})
export class ImprimirpdfComponent {

constructor ( private _CargarScripts:CargarScriptsService)
{
  _CargarScripts.carga (["impresionreporte"])
}


  nombre='María Dolores Rodríguez Ramírez';


   today: number = Date.now();



   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
