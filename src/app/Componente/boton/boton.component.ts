import { Component } from '@angular/core';
import { DialogService } from '../../Service/dialog.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }
}
