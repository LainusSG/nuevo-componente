import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogCustomComponent } from './componentes/dialog-custom/dialog-custom.component';
import { Emergente1Component } from './componentes/emergente1/emergente1.component';
import { GraficasComponent } from './graficas/graficas.component';
const routes: Routes = [
{ path: '1', component: DialogCustomComponent},
{ path: '2', component: Emergente1Component},
{ path: '3', component: GraficasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
