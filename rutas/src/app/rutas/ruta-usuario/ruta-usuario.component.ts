import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {error} from "util";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const observableParamtetros$ = this._activatedRoute.params;
    // con suscribe se ejecuta la funcion
    observableParamtetros$.subscribe(
      (parametros) =>{
        console.log(parametros);
      },
      (error) =>{

      },
      () =>{

      }
    )

  }

}
