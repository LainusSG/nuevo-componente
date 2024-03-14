import { Component } from '@angular/core';
import { DialogService } from '../Service/dialog.service';
@Component({
  selector: 'app-emergente-boton',
  templateUrl: './emergente-boton.component.html',
  styleUrl: './emergente-boton.component.css'
})
export class EmergenteBotonComponent {
  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }
}
