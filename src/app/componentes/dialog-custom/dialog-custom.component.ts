import { Component } from '@angular/core';
import { DialogService } from '../../services/dialog.service';



@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrl: './dialog-custom.component.css'
})
export class DialogCustomComponent {
  panelOpenState = false;
  constructor ( private dialogService: DialogService){}

  emergente1(){
    this.dialogService.emergente1()
  }

  emergente2(){
    this.dialogService.emergente2()
  }

  emergente3(){
    this.dialogService.emergente3()
  }

  emergente4(){
    this.dialogService.emergente4()
  }

  emergente5(){
    this.dialogService.emergente5()
  }

  emergente6(){
    this.dialogService.emergente6()
  }

  emergente7(){
    this.dialogService.emergente7()
  }

  emergente8(){
    this.dialogService.emergente8()
}

emergente9(){
  this.dialogService.emergente9()
}

emergente10(){
  this.dialogService.emergente10()
}

emergente11(){
  this.dialogService.emergente11()
}

emergente12(){
  this.dialogService.emergente12()
}

emergente13(){
  this.dialogService.emergente13()
}
}
