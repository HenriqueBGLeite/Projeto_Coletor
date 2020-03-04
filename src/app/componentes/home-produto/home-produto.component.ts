import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login/shared/login.model';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-home-produto',
  templateUrl: './home-produto.component.html',
  styleUrls: ['./home-produto.component.css']
})
export class HomeProdutoComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  usuarioLogado: Usuario;
  
  ngOnInit() {
    this.buscaUsuarioLogado(); 
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getUsuarioLogado();
    return this.usuarioLogado;
  }

  navegar(param: string){
    if (param == 'AD'){
      this.router.navigate(['/consultar-produto']);
    }else if (param == 'LE'){
      this.router.navigate(['/lista-produto']);
    }else
      this.router.navigate(['/home-produto']);
  }

}
