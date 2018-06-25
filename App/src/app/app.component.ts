import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './estilos.css']
})
export class AppComponent {
  //Interpolacion
  titulo= 'Web';
  usuario = {
    nombre:'Kevin',
    apellido:'Carate'
  };
  arregloNumeros = [5,4,3,2,1];
  mostrarTitulo = true;
  imagenUrl = "https://cdn.oem.com.mx/laprensa/2017/08/futbol-soccer-mundial.png";
  imagenWidth = 200;
}
