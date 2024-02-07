import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprimirpdfComponent } from './imprimirpdf/imprimirpdf.component'; 

const routes: Routes = [

{path:'4', component:ImprimirpdfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
