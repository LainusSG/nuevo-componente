import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneradorQRComponent } from './generador-qr/generador-qr.component';

const routes: Routes = [
  { path: '1', component: GeneradorQRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
