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
          { label: 'Pesquisar por EAN', icon: 'pi pi-search', routerLink: '/pesquisa-produto' },
          { separator: true },
          { label: 'Cadastrar Produto', icon: 'pi pi-plus', routerLink: '/' },
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
