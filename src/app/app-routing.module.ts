import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistribucionOtrasAreasPrestamoComponent } from './distribucion-otras-areas-prestamo/distribucion-otras-areas-prestamo.component';

const routes: Routes = [
  { path:'1', component: DistribucionOtrasAreasPrestamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
