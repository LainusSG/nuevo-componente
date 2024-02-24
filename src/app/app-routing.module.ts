import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BotonComponent } from './Componente/boton/boton.component';

const routes: Routes = [
 { path:'1', component:BotonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
