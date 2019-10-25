import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { Produto } from '../pesquisa-produto/compartilhado/produto.model';
import { PesquisaProdutoService } from '../pesquisa-produto/compartilhado/pesquisa-produto.service';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/Util/mensagem-util';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  produtos: Produto [] = [];
  limpar: string;

  constructor(private pesquisaProdutoService: PesquisaProdutoService, private messageService: MessageService) { }

  ngOnInit() {
  }

  buscarProdutoId(codprod: string) {
    
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    if(codprod){
      this.pesquisaProdutoService.buscarProduto(codprod).subscribe((produto: Produto[]) =>{
        this.produtos = produto;
        console.log(this.produtos);
      }, () => {  
              this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
              this.blockUI.stop();
              },
      () => this.blockUI.stop());

      this.limpar = '';

    }
  }

  somarQuantidades(){
    null;
  }
}
