import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { Produto } from '../pesquisa-produto/compartilhado/produto.model';
import { PesquisaProdutoService } from '../pesquisa-produto/compartilhado/pesquisa-produto.service';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { Constantes } from 'src/Util/constantes';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  dados: FormGroup;
  produtos: Produto = new Produto;
  limpar: string;
  total: number = 0;
  foco: string;
  lastro: number = 0;
  camada: number = 0;
  qtUnit: number = 0;
  qtCx: number = 0;
  configCalendar = Constantes.configCalendar;

  constructor(private router: Router, private pesquisaProdutoService: PesquisaProdutoService, private messageService: MessageService) { }

  ngOnInit() {
  }

  buscarProdutoId(codprod: string) {
    
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);    
    if(codprod){
        this.pesquisaProdutoService.buscarProduto(codprod).subscribe((produto: Produto) =>{
          if(produto.codprod == 0) 
            if(produto.erro == 'S')  
              this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA));
            else
              this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ERRO_NENHUM_REGISTRO));
          else {
            this.produtos = produto;
            this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.BUSCA_REALIZADA));
            this.focoLastro();
          }        
        }, () => {  
                this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
                this.blockUI.stop();
                },
        () => this.blockUI.stop());
    }
  }
  
  buscaLastro(valor: number){
    this.lastro = valor;
    this.focoCamada();
  }

  buscaCamada(valor: number){
    this.camada = valor;
    this.somarQuantidades();
    this.focoQtCx();
  }

  buscaQtCx(valor: number){
    this.qtCx = valor;
    this.somarQuantidades();
    this.focoQtUn();
  }

  buscaQtunit(valor: number){
    this.qtUnit = valor;
    this.somarQuantidades();
    this.focoConfirmar();
  }

  somarQuantidades(){
    this.total =  ((this.lastro * this.camada) * this.produtos.qtunitcx) + (Number(this.qtUnit) + (Number(this.qtCx) * this.produtos.qtunitcx));
  }

  focoLastro(){
    var element = document.getElementById("lastro");
    element.focus();
  }

  focoCamada(){
    var element = document.getElementById("camada");
    element.focus();
  }

  focoQtCx(){
    var element = document.getElementById("qtcx");
    element.focus();
  }
  
  focoQtUn(){
    var element = document.getElementById("qtun");
    element.focus();
  }

  focoConfirmar(){
    var element = document.getElementById("confirmar");
    element.focus();
  }

  salvar(dados){
    dados.reset(); 
  }
}
