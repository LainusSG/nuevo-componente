import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';

export interface PeriodicElement {
  id: number;
  Nombre: string;
  Descripcion: string;
  Marca: string;
  Cantidad:number;
  Caducidad: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza Halsted',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'14/11/2023'},
  {id: 2, Nombre: 'Pinza de Pean',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:3, Caducidad:'16/11/2023'},
  {id: 3, Nombre: 'Pinza Judo-Allis',     Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:4, Caducidad:'19/11/2023'},
  {id: 4, Nombre: 'Pinzas Kocher curvas', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza de Kocher',      Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:5, Caducidad:'20/11/2023'},
  {id: 2, Nombre: 'Pinza Mosquito',       Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'13/11/2023'},
  {id: 3, Nombre: 'Pinza para campo ',    Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'13/11/2023'},
  {id: 4, Nombre: 'Pinza para tubo',      Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:5, Caducidad:'18/11/2023'},
  {id: 5, Nombre: 'Grosmayer',            Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'24/11/2023'},
];

const ELEMENT_DATA3: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza de Tubo',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:3, Caducidad:'23/11/2023'},
  {id: 2, Nombre: 'Pinza clamp',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:5, Caducidad:'30/11/2023'},
  {id: 3, Nombre: 'Grosmayer',            Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'24/11/2023'},
  {id: 4, Nombre: 'Pinza Mosquito',       Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'13/11/2023'},
  {id: 5, Nombre: 'Atraumático',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'14/11/2023'},
  {id: 6, Nombre: 'Pinza Judo-Allis',     Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:4, Caducidad:'19/11/2023'},
  {id: 7, Nombre: 'Pinzas Kocher curvas', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
];


const ELEMENT_DATA4: PeriodicElement[] = [
  {id: 1, Nombre: 'Pinza Halsted',        Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:3, Caducidad:'23/11/2023'},
  {id: 2, Nombre: 'Pinza de Pean',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:5, Caducidad:'30/11/2023'},
  {id: 3, Nombre: 'Pinza Judo-Allis',            Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'24/11/2023'},
  {id: 4, Nombre: 'Pinzas Kocher curvas',       Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:2, Caducidad:'13/11/2023'},
  {id: 5, Nombre: 'Pinzas de Kocher',          Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:7, Caducidad:'14/11/2023'},
  {id: 6, Nombre: 'Pinza Mosquito',     Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM SILVERY', Cantidad:4, Caducidad:'19/11/2023'},
  {id: 7, Nombre: 'Pinza para campo', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
  {id: 8, Nombre: 'Pinza para tubo', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
  {id: 9, Nombre: 'Grosmayer', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
  {id: 10, Nombre: 'Pinza clamp', Descripcion: 'pinzas quirúrgicas', Marca: 'HERGOM PREMIUM', Cantidad:1, Caducidad:'18/11/2023'},
];

export interface User {
  name: string;
}


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrl:'./componente1.component.css'
})
export class Componente1Component implements OnInit{
  myControl = new FormControl<string | User>('');
  options: User[] = [
    {name: 'Pinza Halsted'}, 
    {name: 'Pinza de Pean'}, 
    {name: 'Pinza Judo-Allis'},
    {name: 'Pinzas Kocher curvas'},
    {name: 'Pinzas Kocher rectas'},
    {name: 'Pinza de Koche'},
    {name: 'Pinza Mosquito'},
    {name: 'Pinza para campo'},
    {name: 'Pinza para tubo'},
    {name: 'Grosmayer'},
    {name: 'Pinza clamp'},
    
    
    
  
  
  
  
  ];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }




  value = 'Set 1';
  value2= this.value;

  value3 = '0';
  value3_1= this.value3;
  
  value4 = '1';
  value4_1= this.value4;
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'Nombre', 'Descripcion', 'Marca', 'Cantidad', 'Caducidad'];
  
  
  dataSource = ELEMENT_DATA;

  dataSource2 = ELEMENT_DATA2;

  dataSource3 = ELEMENT_DATA3;

  dataSource4: any;

  

  
}