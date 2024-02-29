import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsterilizadorComponenteComponent } from './esterilizador-componente/esterilizador-componente.component';
import { EsterilizadorDatosDashboardComponent } from './esterilizador-datos-dashboard/esterilizador-datos-dashboard.component';
import { EsterilizadorPantalla1Component } from './esterilizador-pantalla-1/esterilizador-pantalla-1.component';

const routes: Routes = [
  { path:'1', component:EsterilizadorComponenteComponent},
  { path:'2', component: EsterilizadorDatosDashboardComponent},
  { path:'3', component: EsterilizadorPantalla1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
