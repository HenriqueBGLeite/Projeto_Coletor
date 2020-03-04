import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { Usuario } from '../login/shared/login.model';
import { ConsultarProdutoService } from '../consultar-produto/compartilhado/consultar-produto.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { ListaEndereco } from './compartilhado/lista-endereco.model';
import { ListaProdutoService } from './compartilhado/listar-produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private listaEnderecoService: ListaProdutoService, private authService: AuthService, 
              private pesquisaProdutoService: ConsultarProdutoService, private messageService: MessageService) { }
  
  @BlockUI() blockUI: NgBlockUI;

  usuarioLogado: Usuario;
  filiais: any [] = [];
  colunas: any [] = [];
  endereco: ListaEndereco [] = [];
  larguraTabela: string = '240';
  larguraColuna: string = '120';
  limpar: string;

  ngOnInit() {
    this.buscaFiliais();
    this.buscaUsuarioLogado();
    this.carregaColunas();

    /*console.log("Largura Tabela: " || this.larguraTabela);
    console.log("Largura Coluna: " || this.larguraColuna);*/
  }

  buscarProduto(codprod: string) {
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.listaEnderecoService.buscarEnderecoPicking(codprod, this.usuarioLogado.filial).subscribe((endereco: any[]) => {
        Array.prototype.push.apply(this.endereco, endereco);
        this.limpar = '';
        this.blockUI.stop();
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
      {label: 'Cod.Prod', var: 'codprod'},
      {label: 'Descrição', var: 'descricao'},
      {label: 'Dep.', var: 'deposito'},
      {label: 'Rua', var: 'rua'},
      {label: 'Pred.', var: 'predio'},
      {label: 'Niv.', var: 'nivel'},
      {label: 'Apto', var: 'apto'}
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

}
