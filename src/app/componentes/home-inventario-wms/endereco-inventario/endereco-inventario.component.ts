import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../login/shared/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../login/shared/auth.service';
import { InventarioService } from '../inventario/compartilhado/inventario.service';
import { EnderecoInventario } from './compartilhado/endereco-inventario.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-endereco-inventario',
  templateUrl: './endereco-inventario.component.html',
  styleUrls: ['./endereco-inventario.component.css']
})
export class EnderecoInventarioComponent implements OnInit {

  constructor ( private router: Router, private authService: AuthService, private inventarioService: InventarioService,  private messageService: MessageService ) { }
  @BlockUI() blockUI: NgBlockUI;
  usuarioLogado: Usuario;
  limpar: string;
  endereco: EnderecoInventario = new EnderecoInventario();
  endOrig: string;


  ngOnInit() {
    this.carregaDadosIniciais();
  }

  carregaDadosIniciais(){
    this.buscaDadosEndereco();
    this.buscaUsuarioLogado();
    this.focoBusca();
  }

  validaEndereco(codigo: string) {
    this.blockUI.start(MensagemUtil.VALIDANDO_DADOS);
    if ( codigo == this.endOrig ) {
      this.router.navigate(['/inventario']);
      this.blockUI.stop();
    }
    else {
      this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ENDERECO_NAO_CONFERE));
      this.limpar = '';
      this.blockUI.stop();
    }
  }


  buscaUsuarioLogado(): Usuario{
    this.usuarioLogado = this.authService.getDecodedToken();
    return this.usuarioLogado;
  }

  focoBusca(){
    var element = document.getElementById("codigo");
    element.focus();    
  }

  buscaDadosEndereco(){      
    this.blockUI.start(MensagemUtil.VALIDANDO_DADOS);
    this.endOrig = localStorage.getItem('proxEndereco');
      this.inventarioService.buscarDadosEndereco(this.endOrig).subscribe((retorno: EnderecoInventario) => {
        if ( retorno.codigo != '0' ) {
          this.endereco = retorno;
          this.blockUI.stop();
        } else {
          this.router.navigate(['/home-inventario']);
          this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ENDERECO_INVALIDO));
          this.blockUI.stop();
        }          
      }, (erro) => {
        this.messageService.add(MensagemUtil.criaMensagemErro(erro.message));
        this.blockUI.stop();
      });
  }
}
