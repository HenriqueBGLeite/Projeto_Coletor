import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './login.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  urlApi = environment.urlApi.concat('/Login/');
  
  private mostrarMenu = new BehaviorSubject<boolean>(false);
  MenuEnabled = this.mostrarMenu.asObservable();
  
  usuarioAutenticado: boolean = false;

  constructor(private router: Router, private messageService: MessageService, private httpClient: HttpClient) { }

  fazerLogin(usuario: Usuario) {
    return this.httpClient.post(`${this.urlApi}getUsuario/`, usuario);
  }

  criaTokenLocalStorage(token: string) {
    if(token.length > 0) {
      localStorage.setItem('token', token);
    }
  }

  usuarioEstaAutenticado() {
    if(this.getToken() != null) {
      this.updateMostrarMenu(true);
      return true;
    } else {
      this.updateMostrarMenu(false);
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeTokenLocalStorage() {
    localStorage.removeItem('token');
  }

  getDecodedToken() {
    try{
      return jwt_decode(this.getToken());
    } catch(err) {
      this.sair();
    }
  }

  /*getUsuarioLogado(): Usuario {   
    if (this.usuario != null)
      return this.usuario;
    else 
      console.log(this.getDecodedToken()); 
  }*/

  sair(){    
    this.usuarioAutenticado = false;
    localStorage.clear();
    this.removeTokenLocalStorage();
    this.updateMostrarMenu(false);
    this.router.navigate(['/login']);
  }

  public updateMostrarMenu(MenuEnabled: boolean) {
    this.mostrarMenu.next(MenuEnabled);
}

  /*atualizaUsuarioLogado(usuario: Usuario){
    this.usuario = usuario;
  }*/

}
