import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { Usuario } from '../login/shared/login.model';
import { ConsultarProdutoService } from '../consultar-produto/compartilhado/consultar-produto.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService, ConfirmationService } from 'primeng/api';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { ListaEndereco } from './compartilhado/lista-endereco.model';
import { ListaProdutoService } from './compartilhado/listar-produto.service';
import { element } from 'protractor';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private listaEnderecoService: ListaProdutoService, private authService: AuthService, 
              private pesquisaProdutoService: ConsultarProdutoService, private messageService: MessageService,
              private confirmationService: ConfirmationService) { }
  
  @BlockUI() blockUI: NgBlockUI;

  usuarioLogado: Usuario;
  filiais: any [] = [];
  colunas: any [] = [];
  endereco: ListaEndereco[] = [];
  larguraTabela: string = "270";
  totalDados: number;
  limpar: string;

  ngOnInit() {
   this.carregarDadosIniciais();
  }


  carregarDadosIniciais(){
    this.buscaFiliais();
    this.buscaUsuarioLogado();
    this.carregaColunas();
    this.focoBusca();
  }

  buscarProduto(codprod: string) {
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.listaEnderecoService.buscarEnderecoPicking(codprod, this.usuarioLogado.filial).subscribe((endereco: any[]) => {
        endereco.forEach((end: ListaEndereco) => {
          if ( end.codprod == 0 ) {
            if ( end.warning == 'S' ) {
              this.messageService.add(MensagemUtil.criaMensagemAviso(end.mensagemErroWarning));
              this.limpar = '';
            }
          } else {
              if ( this.endereco.length > 0 ) {
                if (this.endereco.find(endereco => endereco.codprod == end.codprod)) {
                  this.limpar = '';
                  this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.PRODUTO_REPETIDO));
                } else {
                  Array.prototype.push.apply(this.endereco, endereco);
                  this.totalDados = this.endereco.length;
                  this.limpar = ''; 
                };
                this.blockUI.stop(); 
              }
              else {               
                Array.prototype.push.apply(this.endereco, endereco);
                this.totalDados = this.endereco.length;
                this.limpar = ''; 
                this.blockUI.stop(); 
              }
          }                         
        });     
      }, (erro) => {
                this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA));
                this.blockUI.stop();
               },
      () => this.blockUI.stop());
    } else {
        this.blockUI.stop();
    }
    
  }

  carregaColunas(){   
    this.colunas = [
      {label: 'Cod.Prod', var: 'codprod', px: '90'},
      {label: 'Descrição', var: 'descricao', px: '300', style: '10'},
      {label: 'Dep.', var: 'deposito', px: '50'},
      {label: 'Rua', var: 'rua', px: '50'},
      {label: 'Pred.', var: 'predio', px: '60'},
      {label: 'Niv.', var: 'nivel', px: '50'},
      {label: 'Apto', var: 'apto', px: '50'}
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

limparDados() {
  this.endereco = [];
  this.focoBusca();
}

focoBusca(){
  var element = document.getElementById("codprod");
  element.focus();    
}

limparListaConfirmar() {
  this.confirmationService.confirm({
      message: 'Deseja limpar a lista?',
      accept: () => {
        this.limparDados();
      }
  });
}

}
