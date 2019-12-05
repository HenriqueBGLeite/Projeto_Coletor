import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { Constantes } from 'src/Util/constantes';
import { ProdutoInventario } from './compartilhado/produto-inventario.model';
import { InventarioService } from './compartilhado/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  produtos: ProdutoInventario = new ProdutoInventario();
  lastroOrig: number = 0;
  camadaOrig: number = 0;

  configCalendar = Constantes.configCalendar;

  constructor(private inventarioSevice: InventarioService, private messageService: MessageService) { }

  ngOnInit() {
    
  }

  salvar(){

     if ( this.produtos.codprod != null ) { 
      if ( this.produtos.lastro > 0 || this.produtos.camada > 0){
        if ( this.produtos.lastro == this.lastroOrig && this.produtos.camada == this.camadaOrig ) {
            this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
            this.inventarioSevice.salvar(this.produtos).subscribe(() => {
              this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
              this.produtos = new ProdutoInventario;
              this.blockUI.stop();
              this.focoBusca();

            }, (erro) => {
                  this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_SALVAR));
                  this.blockUI.stop();
            })           
             
        } else {
            this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.VALIDA_LASTRO_CAMADA));
            this.produtos.camada = null; 
            this.produtos.lastro = null;                
            this.focoLastro();
        }
      } else {
        this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
        this.inventarioSevice.salvar(this.produtos).subscribe(() => {
          this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
          this.produtos = new ProdutoInventario;
          this.blockUI.stop();
          this.focoBusca();

        }, (erro) => {
              this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_SALVAR));
              this.blockUI.stop();
        })  
      }      
    } else {
        this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.VALIDA_DADOS));
        this.focoBusca(); 
    }
      
  }

  buscarProdutoId(codprod: string) {
    
    if ( codprod ) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.inventarioSevice.buscarProduto(codprod).subscribe((produto: ProdutoInventario) => {
        if ( produto.codprod == 0 ) {
          if ( produto.erro == 'S' ) {
            this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA));
            this.produtos.codprod = null;
          }
          else {
            this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.ERRO_NENHUM_REGISTRO));
            this.produtos.codprod = null;
          }
        } else {
          this.produtos = produto;
          this.lastroOrig = this.produtos.lastro;
          this.camadaOrig = this.produtos.camada;
          this.limpaVariavel(this.produtos);
          this.focoLastro();
        }
      }, () => {
                this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_NA_BUSCA))
                this.blockUI.stop();
               },
      () => this.blockUI.stop());
    } else
        this.blockUI.stop();
  }
  
  buscaLastro(valor: number, tecla: string){
    if ( tecla == 'E') {
      this.produtos.lastro = valor;
      this.focoCamada();
    } else 
      this.produtos.lastro = valor;
  }

  buscaCamada(valor: number, tecla: string){
    if ( tecla == 'E') {
      this.produtos.camada = valor;
      this.somarQuantidades();
      this.focoQtCx();  
    } else {
        this.produtos.camada = valor;
        this.somarQuantidades();
    }
    
  }

  buscaQtCx(valor: number, tecla: string){
    if ( tecla == 'E') {
      this.produtos.qtcx = valor;
      this.somarQuantidades();
      this.focoQtUn();
    } else {
        this.produtos.qtcx = valor;
        this.somarQuantidades();
    }    
  }

  buscaQtunit(valor: number, tecla: string){
    if ( tecla == 'E') {
      this.produtos.qtun = valor;
      this.somarQuantidades();
      this.focoConfirmar();
    } else {
        this.produtos.qtun = valor;
        this.somarQuantidades();
    }
    
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

  focoBusca(){
    var element = document.getElementById("codprod");
    element.focus();    
  }

  somarQuantidades(){
    this.produtos.total =  ((this.produtos.lastro * this.produtos.camada) * this.produtos.qtunitcx) + (Number(this.produtos.qtun) + (Number(this.produtos.qtcx) * this.produtos.qtunitcx));
  }

  formartarDataGravacao(produto: ProdutoInventario, dtvalidade) {
    if (dtvalidade) {
      let dia = parseInt(dtvalidade.substring(0, 2));
      let mes = parseInt(dtvalidade.substring(2, 4)) - 1;
      let ano = parseInt(dtvalidade.substring(4, 8));

      let data = new Date(ano, mes, dia);

      produto.datavalidade = data;

      return produto;
    }
  }

  limpaVariavel(prod: ProdutoInventario){
    prod.lastro = null;
    prod.camada = null;
    prod.qtun = null;
    prod.qtcx = null;
    prod.total = 0;
  }

}
