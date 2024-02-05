import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosDeProgramacionComponent } from './datos-de-programacion/datos-de-programacion.component';

const routes: Routes = [
  {path: '3', component:DatosDeProgramacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
