import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Usuario } from './shared/login.model';
import { SelectItem } from 'primeng/api';
import { Constantes } from 'src/Util/constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  base: SelectItem[] = Constantes.baseUsuario;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.sair();
  }


  login(){
    this.authService.fazerLogin(this.usuario);
  }
}
