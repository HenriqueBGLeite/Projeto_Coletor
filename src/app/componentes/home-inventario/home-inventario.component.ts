import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/shared/login.model';
import { AuthService } from '../login/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-inventario',
  templateUrl: './home-inventario.component.html',
  styleUrls: ['./home-inventario.component.css']
})
export class HomeInventarioComponent implements OnInit {

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

  buscaEndereco(codigo: number){
    console.log(codigo);
    this.router.navigate(['/inventario']);   
    this.limpar = ''; 
  }

}
