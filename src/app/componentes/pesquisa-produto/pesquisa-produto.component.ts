import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  produtos: any[];
  col: any[];


  constructor() { }

  ngOnInit() {
    this.buscarProduto();
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
  carregaProduto() {
    this.produtos = [
      {codprod: 123, descricao: 'Copo', fornecedor: 'Colgate', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 321, descricao: 'Creme dental Oral B', fornecedor: 'P&G', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 412, descricao: 'Pilha Palito', fornecedor: 'Colgate', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 471, descricao: 'Piraque Chocolate', fornecedor: 'Piraque', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 582, descricao: 'Gillette', fornecedor: 'P&G', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 745, descricao: 'Creme dental', fornecedor: 'Colgate', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 589, descricao: 'Escova', fornecedor: 'Colgate', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 352, descricao: 'Old space', fornecedor: 'P&G', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 851, descricao: 'Biscoito Chocolate', fornecedor: 'Aymore', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 201, descricao: 'Biscoito Morango', fornecedor: 'Aymore', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 202, descricao: 'Biscoito Limão', fornecedor: 'Aymore', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 205, descricao: 'Biscoito Amendoin', fornecedor: 'Aymore', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 528, descricao: 'Papel Higienico', fornecedor: 'Neve', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 639, descricao: 'Veneno de Rato', fornecedor: 'P&G', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 363, descricao: 'Piraque Morango', fornecedor: 'Piraque', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 633, descricao: 'Piraque Limao', fornecedor: 'Piraque', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 312, descricao: 'Salpete', fornecedor: 'Aymore', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 207, descricao: 'Maizena', fornecedor: 'Aymore', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 101, descricao: 'Wafer', fornecedor: 'Aymore', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 808, descricao: 'Veneno de Rato', fornecedor: 'P&G', embalagem: '8x4', qtunitcx: '8'},
      {codprod: 909, descricao: 'Sabonete liquido', fornecedor: 'Colgate', embalagem: '12x8', qtunitcx: '12'},
      {codprod: 925, descricao: 'Sabonete', fornecedor: 'Colgate', embalagem: '10x5', qtunitcx: '10'},
      {codprod: 914, descricao: 'Enxaguante bucal', fornecedor: 'P&G', embalagem: '8x4', qtunitcx: '8'}
    ]
  }

  buscarProduto() {
    this.carregaProduto();
  }

}
