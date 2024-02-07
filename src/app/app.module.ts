import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprimirpdfComponent } from './imprimirpdf/imprimirpdf.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ImprimirpdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
