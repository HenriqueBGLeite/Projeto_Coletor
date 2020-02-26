import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './componentes/login/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.mostraMenu();
    this.telaCheia();
  }

  telaCheia(){
    window.scrollTo(0,1);
  }
  
  mostraMenu(){
    this.authService.mostrarMenu.subscribe((mostrar) => {
      this.mostrarMenu = mostrar
      });   
  }
}

