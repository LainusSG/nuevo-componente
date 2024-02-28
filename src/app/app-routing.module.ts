import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistribucionQuirofanoComponent } from './distribucion-quirofano/distribucion-quirofano.component';

const routes: Routes = [
  { path:'1', component:DistribucionQuirofanoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
