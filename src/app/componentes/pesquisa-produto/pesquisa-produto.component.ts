import { Component, OnInit } from '@angular/core';
import { PesquisaProdutoService } from './compartilhado/pesquisa-produto.service';
import { Produto } from './compartilhado/produto.model';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  produtos: Produto;
  col: any[];

  filtroPesquisa: string;

  constructor(private pesquisaProdutoService: PesquisaProdutoService) { }

  ngOnInit() {
    this.buscarProdutoId();
    this.carregaColuna();
  }

  carregaColuna() {
    this.col = [
      { var: 'codigo', label: 'Cod. Prod.' },
      { var: 'descricao', label: 'Descrição' },
      { var: 'fornecedor', label: 'Fornecedor' },
      { var: 'embalagem', label: 'Embalagem' },
      { var: 'qtunitcx', label: 'Qtd. UnitCx' },
    ];
  }

  buscarProdutoId() {
   this.pesquisaProdutoService.buscarProduto(this.filtroPesquisa).subscribe((produto: Produto) =>{
      this.produtos = produto;
    }, (respostaErro) => { respostaErro.error.errors.msg });
  }

}
