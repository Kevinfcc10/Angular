import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {

  estadoLogeado = false;

  constructor() {
  }

  login(password:string){
    if (password === 'mashi'){
      this.estadoLogeado = false
    }
    else{
      this.estadoLogeado = true;
    }
  }
}
