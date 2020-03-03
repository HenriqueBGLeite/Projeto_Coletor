import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../login/shared/auth.service';
import { Usuario } from '../login/shared/login.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  display: boolean = false;
  items: MenuItem[] = [];
  usuarioLogado: Usuario;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    setTimeout(() => {
      this.buscaUsuarioLogado(); 
    });
  }

  clickItemMenu() {
    this.display = false;
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getUsuarioLogado();
    this.carregaMenu();
    return this.usuarioLogado;
  }

  sair(){
    this.authService.sair();
  }

  carregaMenu() {
    this.items = [
      {
        label: 'Menu Coletor', items: [
          { label: `${this.usuarioLogado.codigo} - ${this.usuarioLogado.nome}`},
          { separator: true },
          { label: 'INÍCIO', icon: 'pi pi-home', routerLink: '/home' },
          { separator: true },
          { label: 'CONF. ENTRADA', icon: 'pi pi-inbox', routerLink: '#', disabled: true },
          { separator: true },
          { label: 'CONF. OS', icon: 'pi pi-check', routerLink: '#', disabled: true },
          { separator: true },
          { label: 'DADOS PRODUTO', icon: 'pi pi-search', routerLink: '/home-produto' },
          { separator: true },
          { label: 'INVENTÁRIO', icon: 'fa fa-dropbox', routerLink: '/inventario' },
          { separator: true },
          { label: 'SAIR', icon: 'pi pi-sign-out', routerLink: '/login' },
        ]
      }
    ];
  }

}
