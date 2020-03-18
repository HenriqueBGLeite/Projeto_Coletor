import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../login/shared/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../login/shared/auth.service';

@Component({
  selector: 'app-endereco-inventario',
  templateUrl: './endereco-inventario.component.html',
  styleUrls: ['./endereco-inventario.component.css']
})
export class EnderecoInventarioComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  usuarioLogado: Usuario;
  limpar: string;

  ngOnInit() {
    this.buscaUsuarioLogado();
    this.focoBusca();
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getUsuarioLogado();
    return this.usuarioLogado;
  }

  focoBusca(){
    var element = document.getElementById("codigo");
    element.focus();    
  }

}
