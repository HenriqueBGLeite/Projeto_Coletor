import { Component, OnInit } from '@angular/core';
import { ConsultarProdutoService } from './compartilhado/consultar-produto.service';
import { Produto } from './compartilhado/produto.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { MessageService } from 'primeng/api';
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

  limpar: string;
  usuarioLogado: Usuario;
  produtos: Produto = new Produto();
  colunaEndereco: any[] = [];
  colunaEstoque: any[] = [];
  listaEndereco: any[] = [];
  listaEstoque: any[] = [];
  tipoTabela: string = 'E';

  constructor(private router: Router, private pesquisaProdutoService: ConsultarProdutoService, 
              private messageService: MessageService, private authService: AuthService) { }

  ngOnInit() {
    this.buscaUsuarioLogado(); 
    this.carregaColunas();
  }

  buscarProdutoId(codprod: string) {
    
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pesquisaProdutoService.buscarProduto(codprod, this.usuarioLogado.filial).subscribe((produto: Produto) => {
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
          this.pesquisaProdutoService.buscarEndereco(codprod, this.usuarioLogado.filial).subscribe((endereco: any[]) => {
            this.pesquisaProdutoService.buscarEstoque(codprod).subscribe((estoque: any[]) => {
              this.listaEndereco = endereco;
              this.listaEstoque = estoque;
              console.log(this.listaEstoque);
              this.produtos = produto;
              this.limpar = '';
            })
          })
        }
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

  carregaColunas(){   
      this.colunaEstoque = [
        {label: 'Filial', var: 'codfilial'},
        {label: 'Ger.', var: 'qtestger'},
        {label: 'Reserv.', var: 'qtreserv'},
        {label: 'Bloq.', var: 'qtbloqueada'},
        {label: 'Avar.', var: 'qtindeniz'}
      ];
      this.colunaEndereco = [
        {label: 'Tipo End.', var: 'tipoender'},
        {label: 'Dep.', var: 'deposito'},
        {label: 'Rua', var: 'rua'},
        {label: 'Pred.', var: 'predio'},
        {label: 'Niv.', var: 'nivel'},
        {label: 'Apto', var: 'apto'}
      ]
  }

  salvar(dados){
    this.produtos = new Produto;
    this.focoBusca();
  }

  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getUsuarioLogado();
    return this.usuarioLogado;
  }
}
