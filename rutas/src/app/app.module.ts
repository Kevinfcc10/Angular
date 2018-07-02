import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqComponent } from './rutas/faq/faq.component';
import { HomeComponent } from './rutas/home/home.component';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import {CredencialesService} from "./servicios/credenciales.service";
import {AutorizacionService} from "./servicios/autorizacion.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    NoEncontradoComponent,
    RutaPerfilComponent,
    RutaUsuarioComponent,
    RutaLoginComponent
  ],
  imports: [
    BrowserModule, //ngIf
    FormsModule, //ngModel y formularios
    HttpClientModule,
    RouterModule.forRoot(
      RUTAS_APP,{
        useHash: true
      }
    )
  ],
  providers: [CredencialesService,AutorizacionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
