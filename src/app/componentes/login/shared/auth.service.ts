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
  urlApi = environment.urlApi.concat('/Login/');
  usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>(false);

  constructor(private router: Router, private messageService: MessageService, private httpClient: HttpClient) { }

  fazerLogin(usuario: Usuario){    
      return this.httpClient.post(`${this.urlApi}AutenticaUsuario/`, usuario);
  }

  sair(){    
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
    this.mostrarMenu.emit(false);
  }

}
