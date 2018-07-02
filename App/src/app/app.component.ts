import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './estilos.css']
})
export class AppComponent {
  mostrarComponente = false;
  contadorDesdePapa = 0;

  arregloUsuarios = [
    {
      id:1,
      imagen:'/assets/perfil.png',
      texto:'tatis1909'
    },
    {
      id:2,
      imagen:'/assets/perfil2.png',
      texto:'pedro'
    },
    {
      id:3,
      imagen:'/assets/perfil3.png',
      texto:'Jeff'
    },
    {
      id:4,
      imagen:'/assets/perfil4.png',
      texto:'Edd'
    },
    {
      id:5,
      imagen:'/assets/perfil5.png',
      texto:'Nancy'
    }
  ];

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

  actualizarContador(contadorHijo) {
    console.log('Se ejecuto', contadorHijo);

    this.contadorDesdePapa = contadorHijo;
  }



}
