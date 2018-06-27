import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SeleccionComponent } from './netflix/seleccion/seleccion.component';

@NgModule({
  declarations: [ //Componente
    AppComponent,
    SeleccionComponent
  ],
  imports: [ //Modulos
    BrowserModule, //ngIf ngFor
    FormsModule //ng model
  ],
  providers: [ //Servicios

  ],
  bootstrap: [//Componente Principal
   AppComponent]
})
export class AppModule { }
