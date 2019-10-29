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
          { label: 'INÍCIO', icon: 'pi pi-home', routerLink: '/' },
          { separator: true },
          { label: 'PESQUISAR PRODUTO', icon: 'pi pi-search', routerLink: '/pesquisa-produto' },
          { separator: true },
          { label: 'INVENTÁRIO', icon: 'fa fa-dropbox', routerLink: '/inventario' },
          { separator: true }
        ]
      }
    ];
  }

  clickItemMenu() {
    this.display = false;
  }

}
