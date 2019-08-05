import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  produtos: any[];

  cols: any[];

  constructor() { }

  ngOnInit() {


    this.cols = [
      { field: 'codigo', header: 'Cod. Prod.' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'fornecedor', header: 'Fornecedor' },
      { field: 'embalagem', header: 'Embalagem' },
    ]
  }

}
