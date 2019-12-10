import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './login.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlApi = environment.urlApi.concat('/Login/');
  usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if ( usuario.nome === '1219' && usuario.base === 'EPOCA' ) {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/home']);
    } 
    else {
      this.mostrarMenu.emit(false);
      this.usuarioAutenticado = false;
    }
  }

  sair(){    
    this.mostrarMenu.emit(false);
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
  }

}
