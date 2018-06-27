import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './estilos.css']
})
export class AppComponent {
  mostrarComponente = false;
  contadorDesdePapa = 0;
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

  html = `
  <h1>HOLA</h1>
  <p>Hola mundo</p>
  <img src="${this.imagenUrl}" alt="">
`;

  aumentarWidth(evento) {
    console.log('evento', evento);
    this.imagenWidth += 10;
  }

  restarWidth() {
    this.imagenWidth -= 10;
  }
}
