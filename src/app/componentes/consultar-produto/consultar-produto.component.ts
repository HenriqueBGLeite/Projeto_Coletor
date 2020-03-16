import { Component, OnInit } from '@angular/core';
import { ConsultarProdutoService } from './compartilhado/consultar-produto.service';
import { Produto } from './compartilhado/produto.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { MessageService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Usuario } from '../login/shared/login.model';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-consultar-produto',
  templateUrl: './consultar-produto.component.html',
  styleUrls: ['./consultar-produto.component.css']
})
export class ConsultarProdutoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  usuarioLogado: Usuario;
  produtos: Produto = new Produto();
  colunaEndereco: any[] = [];
  colunaEstoque: any[] = [];
  listaEndereco: any[] = [];
  listaEstoque: any[] = [];
  larguraTabela: string = '240';
  filiais: any [] = [];
  limpar: string;

  constructor(private router: Router, private pesquisaProdutoService: ConsultarProdutoService, 
              private messageService: MessageService, private authService: AuthService) { }

  ngOnInit() {
    this.carregarDadosIniciais();
  }

  carregarDadosIniciais(){
    this.buscaFiliais();
    this.buscaUsuarioLogado();
    this.carregaColunas();
    this.focoBusca();
  }

  salvar(dados){
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.pesquisaProdutoService.salvar(dados).subscribe((retorno) => {
      if ( retorno == true ) {
        this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_ALTERADO));
        this.limparDados();
        this.focoBusca();
        this.blockUI.stop();
      }
      else
        this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_SALVAR));
        this.blockUI.stop();
    });
  }

  buscarProdutoId(codprod: string) {
    
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pesquisaProdutoService.buscarProduto(codprod, this.usuarioLogado.filial).subscribe((produto: Produto) => {
        if ( produto.codprod == 0 ) {
          if ( produto.erro == 'S' ) {
            this.messageService.add(MensagemUtil.criaMensagemErro(produto.mensagemErroWarning));
            this.limpar = '';
            this.limparDados();
          }
          else {
            this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ERRO_NENHUM_REGISTRO));
            this.limpar = '';
            this.limparDados();
          }
        } else {
          this.pesquisaProdutoService.buscarEndereco(codprod, this.usuarioLogado.filial).subscribe((endereco: any[]) => {
            this.listaEndereco = endereco;
            this.pesquisaProdutoService.buscarEstoque(codprod, this.usuarioLogado.codigo).subscribe((estoque: any[]) => {
              this.listaEstoque = estoque;
            })
          })
          this.limpar = '';
          this.focoProduto();
          this.produtos = produto;
          this.blockUI.stop();
        }
      }, (erro) => {
                this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA));
                this.limparDados();
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

  focoProduto(){
    var element = document.getElementById("codigo");
    element.focus();    
  }

  carregaColunas(){   
      this.colunaEstoque = [
        {label: 'Filial', var: 'codfilial', perc: '50'},
        {label: 'Ger.', var: 'qtestger', perc: '60'},
        {label: 'Reser.', var: 'qtreserv', perc: '60'},
        {label: 'Bloq.', var: 'qtbloq', perc: '50'},
        {label: 'Avar.', var: 'qtavaria', perc: '50'}
      ];
      this.colunaEndereco = [
        {label: 'Dep.', var: 'deposito', perc: '50'},
        {label: 'Rua', var: 'rua', perc: '50'},
        {label: 'Pred.', var: 'predio', perc: '60'},
        {label: 'Niv.', var: 'nivel', perc: '50'},
        {label: 'Apto', var: 'apto', perc: '60'},
        {label: 'Tipo End.', var: 'tipoEndereco', perc: '90'}
      ]
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getUsuarioLogado();
    return this.usuarioLogado;
  }

  buscaFiliais(){
    this.pesquisaProdutoService.buscarFilial(this.buscaUsuarioLogado().codigo).subscribe((fil: any []) => {
      this.filiais = fil;
    });
  }

  limparDados(){
    this.produtos = new Produto;
    this.listaEstoque = [];
    this.listaEndereco = [];
    this.focoBusca();
  }

}
