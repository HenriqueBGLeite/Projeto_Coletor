import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  display: boolean = false;

  items: MenuItem[] = [];

  constructor(private authSevice: AuthService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Menu Coletor', items: [
          { label: 'INÍCIO', icon: 'pi pi-home', routerLink: '/home' },
          { separator: true },
          { label: 'CONF. ENTRADA', icon: 'pi pi-inbox', routerLink: '#', disabled: true },
          { separator: true },
          { label: 'CONF. OS', icon: 'pi pi-check', routerLink: '#', disabled: true },
          { separator: true },
          { label: 'CONSULTAR PRODUTO', icon: 'pi pi-search', routerLink: '/consultar-produto' },
          { separator: true },
          { label: 'INVENTÁRIO', icon: 'fa fa-dropbox', routerLink: '/inventario' },
          { separator: true },
          { label: 'SAIR', icon: 'pi pi-sign-out', routerLink: '/login' },
        ]
      }
    ];
  }

  clickItemMenu() {
    this.display = false;
  }

  sair(){
    
  }

}
