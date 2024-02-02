import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Componente1Component } from './componente1/componente1.component';

const routes: Routes = [
  { path: '3', component: Componente1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
