import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Usuario } from './shared/login.model';
import { SelectItem, MessageService } from 'primeng/api';
import { Constantes } from 'src/Util/constantes';
import { MensagemUtil } from 'src/Util/mensagem-util';
import { Router } from '@angular/router';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  usuario: Usuario = new Usuario();
  base: any [] = Constantes.baseUsuario;

  constructor(private authService: AuthService,  private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.focoBusca();
      this.authService.sair();
    });
  }

  login(){
    this.blockUI.start(MensagemUtil.VALIDANDO_DADOS);
    if ( this.usuario.codigo != null && this.usuario.base != null ) {     
      this.authService.fazerLogin(this.usuario).subscribe((usuario: Usuario) => {                  
        if (usuario.erro == "N" && usuario.warning == "N") {
          this.authService.criaTokenLocalStorage(usuario.token);
          //this.authService.atualizaUsuarioLogado(usuario);
          this.authService.updateMostrarMenu(true);
          this.router.navigate(['/home']);
          this.blockUI.stop();
        } else {
          this.blockUI.stop();
          this.messageService.add(MensagemUtil.criaMensagemAviso(usuario.mensagemErroWarning));
          this.usuario = new Usuario();
          this.focoBusca();
        }
      }, (erro) => {
            this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCA));
            this.usuario = new Usuario();
            this.focoBusca();
            this.blockUI.stop();
      })    ;
    }
    else {
      this.messageService.add(MensagemUtil.criaMensagemAviso(MensagemUtil.VALIDA_DADOS));
      this.focoBusca();
      this.blockUI.stop();
    }
  }

  focoBusca(){
    var element = document.getElementById("codigo");
    element.focus();    
  }
}
