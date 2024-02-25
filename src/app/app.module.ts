import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepcionMaterialQuirofanoComponent } from './recepcion-material-quirofano/recepcion-material-quirofano.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepcionMaterialQuirofanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
