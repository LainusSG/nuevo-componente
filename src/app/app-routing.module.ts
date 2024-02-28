import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistribucionEntregarComponent } from './distribucion-entregar/distribucion-entregar.component';

const routes: Routes = [
  { path:'1', component:DistribucionEntregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
