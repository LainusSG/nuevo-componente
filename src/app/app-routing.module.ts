import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Recepcion1Component } from './recepcion-1/recepcion-1.component';
import { RecepcionOtrasAreasComponent } from './recepcion-otras-areas/recepcion-otras-areas.component';
import { RecepcionProvedorExternoComponent } from './recepcion-provedor-externo/recepcion-provedor-externo.component';

const routes: Routes = [
  { path:'1', component:Recepcion1Component},
  { path:'2', component:RecepcionOtrasAreasComponent},
  { path:'3', component:RecepcionProvedorExternoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
