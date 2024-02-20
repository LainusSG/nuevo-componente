import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LavadoraComponent } from './lavadora/lavadora.component';
import { EsterilizadorComponent } from './esterilizador/esterilizador.component';

const routes: Routes = [
  {path: '1', component: LavadoraComponent},
  {path: '2', component:EsterilizadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
