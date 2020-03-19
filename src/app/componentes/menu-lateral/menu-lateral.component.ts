import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthService } from '../login/shared/auth.service';
import { Usuario } from '../login/shared/login.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { InventarioService } from '../home-inventario/inventario/compartilhado/inventario.service';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  display: boolean = true;
  items: MenuItem[] = [];
  usuarioLogado: Usuario = new Usuario;

  constructor(private router: Router, private authService: AuthService, private inventarioService: InventarioService, private messageService: MessageService) { }

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
          { label: 'CONF. ENTRADA', icon: 'pi pi-inbox', routerLink: '/home', disabled: true },
          { separator: true },
          { label: 'CONF. OS', icon: 'pi pi-check', routerLink: '/home', disabled: true },
          { separator: true },
          { label: 'DADOS PRODUTO', icon: 'pi pi-search', routerLink: '/home-produto' },
          { separator: true },
          { label: 'INVENTÁRIO', icon: 'fa fa-dropbox', command: (event) => {
            this.validaTelaSeguinte();
          }},
          { separator: true },
          { label: 'SAIR', icon: 'pi pi-sign-out', routerLink: '/login' },
        ]
      }
    ];
  }

  validaTelaSeguinte(){
    this.blockUI.start(MensagemUtil.VALIDANDO_DADOS);
    this.inventarioService.buscarProxEndereco(this.usuarioLogado.codigo).subscribe((retorno: string) => {
      if ( retorno == '-1') {
        this.router.navigate(['/home-inventario']);
        this.blockUI.stop();
      } else {
        this.inventarioService.proxEndereco = retorno;
        this.router.navigate(['/endereco-inventario']);
        this.blockUI.stop();
      }
    }, (erro) => {
      this.messageService.add(MensagemUtil.criaMensagemErro(erro.message));
      this.blockUI.stop();
    });
  }

}