import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TablaComponent } from './tabla/tabla.component'; 

const routes: Routes = [
  { path:'1', component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
