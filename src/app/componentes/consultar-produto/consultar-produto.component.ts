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
  produtos: Produto [] = [];
  colunas: any[] = [];
  lista: any[] = [];
  tipoTabela: string = 'E';

  constructor(private router: Router, private pesquisaProdutoService: ConsultarProdutoService, private messageService: MessageService) { }

  ngOnInit() {

  }

  buscarProdutoId(codprod: string) {
    
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pesquisaProdutoService.buscarProduto(codprod).subscribe((produto: Produto[]) => {
        this.produtos = produto;
        this.lista = produto; 
        console.log(this.lista);
      }, (erro) => {
                this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
                this.blockUI.stop();
               },
      () => this.blockUI.stop());
    } else {
        this.blockUI.stop();
    }
    
  }

  focoBusca(){
    var element = document.getElementById("codprod");
    element.focus();    
  }

  definiTabela(tipo: string){
    if (tipo == 'E') {
      this.colunas = [
        {label: 'Filial', var: 'codfilial'},
        {label: 'Ger.', var: 'qtestger'},
        {label: 'Reserv.', var: 'qtreserv'},
        {label: 'Bloq.', var: 'qtbloqueada'},
        {label: 'Avar.', var: 'qtindeniz'}
      ]
    } else {
      this.colunas = [
        {label: 'Cod.', var: 'codprod'},
        {label: 'Desc.', var: 'decricao'},
        {label: 'Tipo End.', var: 'tipoender'},
        {label: 'Deposito', var: 'deposito'},
        {label: 'Rua', var: 'rua'},
        {label: 'Predio', var: 'predio'},
        {label: 'Nivel', var: 'nivel'},
        {label: 'Apto', var: 'apto'}
      ]
    }
  }

  salvar(dados){
    this.produtos = [];
    this.focoBusca();
  }
}
