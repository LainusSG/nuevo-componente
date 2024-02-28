import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LecturaQRHistoricoComponent } from './lectura-qr-historico/lectura-qr-historico.component';

const routes: Routes = [
  {path:'1', component: LecturaQRHistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
