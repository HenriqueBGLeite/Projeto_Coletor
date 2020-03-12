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

  fazerLogin(usuario: Usuario){
    /*console.log("Buscar Usuario");
    console.log(usuario.codigo);*/    
    
      this.httpClient.get(`${this.urlApi}getUsuario/${usuario.codigo}`).subscribe((usu: Usuario) => {

        /*console.log("Atualizou Usuario");
        console.log("Usuario retornado do backend");        
        console.log(usu);*/       

        this.usuario = usu;
      }, (erro) => {});    

      console.log("Autentica o usuario");
      return this.httpClient.post(`${this.urlApi}AutenticaUsuario/`, usuario);

  }

  getUsuarioLogado(): Usuario {
    console.log("Usuario que esta salvo no localstorage");
    console.log(this.usuario);
    
    if (this.usuario != null)
      return this.usuario;
    else 
      this.router.navigate(['/login']);
      this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.USUARIO_NAO_ENCONTRADO));
  }

  sair(){    
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
    this.updateMostrarMenu(false);
  }

  public updateMostrarMenu(MenuEnabled: boolean) {
    this.mostrarMenu.next(MenuEnabled);
}

}
