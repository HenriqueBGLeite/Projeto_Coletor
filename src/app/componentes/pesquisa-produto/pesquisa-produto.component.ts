import { Component, OnInit } from '@angular/core';
import { PesquisaProdutoService } from './compartilhado/pesquisa-produto.service';
import { Produto } from './compartilhado/produto.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  limpar: string;
  produtos: Produto [] = [];
  col: any[];

  constructor(private pesquisaProdutoService: PesquisaProdutoService, private messageService: MessageService) { }

  ngOnInit() {
    this.carregaColuna();
  }

  carregaColuna() {
    this.col = [
      { var: 'codigo', label: 'Cod. Prod.' },
      { var: 'descricao', label: 'Descrição' }
    ];
  }

  buscarTodos() {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pesquisaProdutoService.buscarTodosProdutos().subscribe((produto: Produto[]) => {
        this.produtos = produto;
      }, () => {
                this.blockUI.stop();
               },
      () => this.blockUI.stop());
  }

  buscarProdutoId(codprod: string) {
    
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    
    if ( codprod ){
      this.pesquisaProdutoService.buscarProdutoLista(codprod).subscribe((produto: Produto[]) =>{
        produto.map( ( prod ) =>{
          if(prod.codprod == 0)
            if(prod.erro == 'S')  
              this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA));
            else
              this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ERRO_NENHUM_REGISTRO));
          else {
            this.produtos = produto;
          }
        });
        this.produtos = produto;
      }, () => {  
              this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
              this.blockUI.stop();
              },
      () => this.blockUI.stop());

      this.limpar = '';
      
    } else
      this.buscarTodos();
      this.blockUI.stop();
  }

}
