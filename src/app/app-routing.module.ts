import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergenteBotonComponent } from './emergente-boton/emergente-boton.component';
const routes: Routes = [
  { path:'1', component:EmergenteBotonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
