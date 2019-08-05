import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projeto-Coletor';
  fundo: any[];

  ngOnInit() {
    this.fundo = [];
    this.fundo.push({ source: '/logistica.jpg', alt: 'Testando imagem logistica', title: 'Logística' });
  }
}
