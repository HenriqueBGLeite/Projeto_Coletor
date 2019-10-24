import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  display: boolean = false;

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Menu Coletor', items: [
          { label: 'Inicio', icon: 'pi pi-home', routerLink: '/' },
          { separator: true },
          { label: 'Pesquisar Produto', icon: 'pi pi-search', routerLink: '/pesquisa-produto' },
          { separator: true },
          { label: 'Inventario', icon: 'fa fa-dropbox', routerLink: '/inventario' },
          { separator: true },
          { label: 'Listar Produtos', icon: 'pi pi-list', routerLink: '/' },
        ]
      }
    ];
  }

  clickItemMenu() {
    this.display = false;
  }

}
