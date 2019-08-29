import { Component, OnInit } from '@angular/core';
import { PesquisaProdutoService } from './compartilhado/pesquisa-produto.service';
import { Produto } from './compartilhado/produto.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  produtos: Produto [] = [];
  col: any[];

  constructor(private pesquisaProdutoService: PesquisaProdutoService) { }

  ngOnInit() {
    this.buscarTodos();
    this.carregaColuna();
  }

  carregaColuna() {
    this.col = [
      { var: 'codigo', label: 'Cod. Prod.' },
      { var: 'descricao', label: 'Descrição' }
    ];
  }

  buscarTodos() {
    this.blockUI.start('Carregando Registros...');
      this.pesquisaProdutoService.buscarTodosProdutos().subscribe((produto: Produto[]) => {
        this.produtos = produto;
      }, () => {
                MensagemUtil.ERRO_NA_BUSCA 
                this.blockUI.stop();
               },
      () => this.blockUI.stop());
  }

  buscarProdutoId(codprod: string) {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pesquisaProdutoService.buscarProduto(codprod).subscribe((produto: Produto[]) =>{
        this.produtos = produto;
    }, () => { 
              MensagemUtil.ERRO_NA_BUSCA 
              this.blockUI.stop();
            },
    () => this.blockUI.stop());
    
  }

}
