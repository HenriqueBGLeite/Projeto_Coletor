import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './login.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';



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
      console.log(`${this.urlApi}AutenticaUsuario/`, usuario);
      return this.httpClient.post(`${this.urlApi}AutenticaUsuario/`, usuario);
  }

  getUsuarioLogado(): Usuario{
    return this.usuario;
  }

  sair(){    
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
    this.mostrarMenu.emit(false);
  }

}
