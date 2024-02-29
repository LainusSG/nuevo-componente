import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LavadoModuloComponent } from './lavado-modulo/lavado-modulo.component';

const routes: Routes = [

  {path:'1', component:LavadoModuloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
