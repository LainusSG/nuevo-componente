import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaDeInstrumentalComponent } from './alta-de-instrumental/alta-de-instrumental.component';

const routes: Routes = [
  { path: '1', component:AltaDeInstrumentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
