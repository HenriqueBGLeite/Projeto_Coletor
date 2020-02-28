import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { Usuario } from '../login/shared/login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: Usuario;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.buscaUsuarioLogado();
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getUsuarioLogado();
    return this.usuarioLogado;
  }
}
