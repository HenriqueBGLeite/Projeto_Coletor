import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/shared/login.model';
import { AuthService } from '../login/shared/auth.service';
import { Router } from '@angular/router';
import { InventarioService } from './inventario/compartilhado/inventario.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-home-inventario',
  templateUrl: './home-inventario.component.html',
  styleUrls: ['./home-inventario.component.css']
})
export class HomeInventarioComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private inventarioService: InventarioService) { }
  @BlockUI() blockUI: NgBlockUI;
  usuarioLogado: Usuario;
  limpar: string;

  ngOnInit() {
    this.buscaUsuarioLogado();
    this.focoBusca(); 
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getDecodedToken();
    return this.usuarioLogado;
  }

  focoBusca(){
    var element = document.getElementById("codigo");
    element.focus();    
  }

  buscaEndereco(codigo: string){
    this.inventarioService.proxEndereco = codigo;
    this.router.navigate(['/endereco-inventario']);   
    this.limpar = ''; 
  }

}
