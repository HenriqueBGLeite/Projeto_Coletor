import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './login.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { MensagemUtil } from 'src/Util/mensagem-util';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: Usuario;
  urlApi = environment.urlApi.concat('/Login/');
  usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>(false);

  constructor(private router: Router, private messageService: MessageService, private httpClient: HttpClient) { }

  fazerLogin(usuario: Usuario){
      this.httpClient.get(`${this.urlApi}getUsuario/${usuario.codigo}`).subscribe((usu: Usuario) => {
        this.usuario = usu;
      }, (erro) => {}
      );    
      return this.httpClient.post(`${this.urlApi}AutenticaUsuario/`, usuario);
  }

  getUsuarioLogado(): Usuario{
    if (this.usuario != null)
      return this.usuario;
    else 
      this.router.navigate(['/login']);
      this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.USUARIO_NAO_ENCONTRADO));
  }

  sair(){    
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
    this.mostrarMenu.emit(false);
  }

}
