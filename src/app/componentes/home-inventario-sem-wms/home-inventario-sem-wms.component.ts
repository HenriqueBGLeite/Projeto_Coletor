import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { ProdutoInventarioSemWms } from './compartilhado/inventario-sem-wms.model';
import { Usuario } from '../login/shared/login.model';
import { AuthService } from '../login/shared/auth.service';
import { InventarioService } from '../home-inventario-wms/inventario/compartilhado/inventario.service';


@Component({
  selector: 'app-home-inventario-sem-wms',
  templateUrl: './home-inventario-sem-wms.component.html',
  styleUrls: ['./home-inventario-sem-wms.component.css']
})
export class HomeInventarioSemWmsComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  produtoInventario: ProdutoInventarioSemWms = new ProdutoInventarioSemWms();
  usuarioLogado: Usuario;
  numInvent: number = this.inventarioService.numinvent;
  limpar: string = '';

  constructor(private authService: AuthService, private messageService: MessageService, private inventarioService: InventarioService) { }

  ngOnInit() {
    this.buscaUsuarioLogado();
    this.focoBusca();  
  }

  salvar(){
    //console.log(this.produtoInventario);
  }

  focoBusca(){
    var element = document.getElementById("codprod");
    element.focus();    
  }

  buscaUsuarioLogado(): Usuario{  
    this.usuarioLogado = this.authService.getDecodedToken();

    return this.usuarioLogado;
  }

}
