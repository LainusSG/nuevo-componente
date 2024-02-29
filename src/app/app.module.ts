import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { DialogCustomComponent } from './componentes/dialog-custom/dialog-custom.component';
import { Emergente1Component } from './componentes/emergente1/emergente1.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

import { NgxChartsModule }from '@swimlane/ngx-charts';
import { Emergente2Component } from './componentes/emergente2/emergente2.component';
import { Emergente3Component } from './componentes/emergente3/emergente3.component';
import { Emergente4Component } from './componentes/emergente4/emergente4.component';
import { Emergente5Component } from './componentes/emergente5/emergente5.component';
import { Emergente6Component } from './componentes/emergente6/emergente6.component';
import { Emergente7Component } from './componentes/emergente7/emergente7.component';
import { Emergente8Component } from './componentes/emergente8/emergente8.component';
import { Emergente9Component } from './componentes/emergente9/emergente9.component';
import { Emergente10Component } from './componentes/emergente10/emergente10.component';
import { Emergente11Component } from './componentes/emergente11/emergente11.component';
import { Emergente12Component } from './componentes/emergente12/emergente12.component';
import { Emergente13Component } from './componentes/emergente13/emergente13.component';
import { GraficasComponent } from './graficas/graficas.component';  // added


@NgModule({
  declarations: [
    AppComponent,
    DialogCustomComponent,
    Emergente1Component,
    Emergente2Component,
    Emergente3Component,
    Emergente4Component,
    Emergente5Component,
    Emergente6Component,
    Emergente7Component,
    Emergente8Component,
    Emergente9Component,
    Emergente10Component,
    Emergente11Component,
    Emergente12Component,
    Emergente13Component,
    GraficasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    NgxChartsModule,
    
  ],
   
  providers: [
    provideClientHydration(),
    provideNativeDateAdapter()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
