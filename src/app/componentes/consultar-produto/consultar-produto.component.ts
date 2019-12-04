import { Component, OnInit } from '@angular/core';
import { ConsultarProdutoService } from './compartilhado/consultar-produto.service';
import { Produto } from './compartilhado/produto.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-produto',
  templateUrl: './consultar-produto.component.html',
  styleUrls: ['./consultar-produto.component.css']
})
export class ConsultarProdutoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  limpar: string;
  produtos: Produto = new Produto();

  constructor(private router: Router, private pesquisaProdutoService: ConsultarProdutoService, private messageService: MessageService) { }

  ngOnInit() {
  }

  buscarProdutoId(codprod: string) {
    
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pesquisaProdutoService.buscarProduto(codprod).subscribe((produto: Produto) => {
        if ( produto.codprod == 0 ) {
          if ( produto.erro == 'S' ) {
            this.messageService.add(MensagemUtil.criaMensagemErro(produto.mensagemErroWarning));
            this.limpar = '';
          }
          else {
            this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ERRO_NENHUM_REGISTRO));
            this.limpar = '';
          }
        } else {
          this.produtos = produto;
          this.limpar = '';
        }
      }, () => {
                this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
                this.blockUI.stop();
               },
      () => this.blockUI.stop());
    } else {
        this.blockUI.stop();
    }
    
  }

  navegar(){

  }

  focoBusca(){
    var element = document.getElementById("codprod");
    element.focus();    
  }

  salvar(dados){
    this.produtos = new Produto;
    this.focoBusca();
  }
}
