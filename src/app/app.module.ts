import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './Componente/boton/boton.component';
import { EmergenteComponent } from './Componente/emergente/emergente.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    EmergenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
