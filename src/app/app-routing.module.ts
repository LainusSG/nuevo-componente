import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepcionTablaComponent } from './recepcion-tabla/recepcion-tabla.component';

const routes: Routes = [
  {path:'1', component:RecepcionTablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
