import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './login.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mostrarMenu = new BehaviorSubject<boolean>(false);
  MenuEnabled = this.mostrarMenu.asObservable();

  private usuario: Usuario;
  urlApi = environment.urlApi.concat('/Login/');
  usuarioAutenticado: boolean = false;

  constructor(private router: Router, private messageService: MessageService, private httpClient: HttpClient) { }

  fazerLogin(usuario: Usuario) {
    return this.httpClient.get(`${this.urlApi}getUsuario/${usuario.codigo}`);
  }

  getUsuarioLogado(): Usuario {    
    if (this.usuario != null)
      return this.usuario;
    else 
      this.router.navigate(['/login']);
      this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.USUARIO_NAO_ENCONTRADO));
  }

  sair(){    
    this.usuarioAutenticado = false;
    this.usuario = new Usuario();
    this.router.navigate(['/login']);
    this.updateMostrarMenu(false);
  }

  public updateMostrarMenu(MenuEnabled: boolean) {
    this.mostrarMenu.next(MenuEnabled);
}

  atualizaUsuarioLogado(usuario: Usuario){
    this.usuario = usuario;
  }

}
