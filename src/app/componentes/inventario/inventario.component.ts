import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  produtos: Produto = new Produto;
  total: number = 0;
  foco: string;
  lastro: number = 0;
  camada: number = 0;
  qtUnit: number = 0;
  qtCx: number = 0;

  constructor(private pesquisaProdutoService: PesquisaProdutoService, private messageService: MessageService) { }

  ngOnInit() {
  }

  buscarProdutoId(codprod: string) {
    
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    if(codprod){
      this.pesquisaProdutoService.buscarProduto(codprod).subscribe((produto: Produto) =>{
        this.produtos = produto;
      }, () => {  
              this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
              this.blockUI.stop();
              },
      () => this.blockUI.stop());
      
      this.voltarFoco();
      
    }
  }
  
  buscaLastro(valor: number){
    this.lastro = valor;
  }

  buscaCamada(valor: number){
    this.camada = valor;
    this.somarQuantidades();
  }

  buscaQtCx(valor: number){
    this.qtCx = valor;
  }

  buscaQtunit(valor: number){
    this.qtUnit = valor;
    this.somarQuantidades();
  }

  somarQuantidades(){
    this.total =  ((this.lastro * this.camada) * this.produtos.qtunitcx) + (Number(this.qtUnit) + (Number(this.qtCx) * this.produtos.qtunitcx));
  }

  voltarFoco(){
    var element = document.getElementById("lastro");

    element.focus();
  }
}
