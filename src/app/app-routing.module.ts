import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepcionMaterialQuirofanoComponent } from './recepcion-material-quirofano/recepcion-material-quirofano.component';

const routes: Routes = [
  { path:'1', component:RecepcionMaterialQuirofanoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
