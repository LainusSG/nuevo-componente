import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Recepcion1Component } from './recepcion-1/recepcion-1.component';

const routes: Routes = [
  { path:'1', component:Recepcion1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
