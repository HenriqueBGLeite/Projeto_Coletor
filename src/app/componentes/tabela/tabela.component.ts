import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { stringify } from 'querystring';
import { mobile } from 'src/Util/screen-utils';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() colunas: any[] = [];
  @Input() lista: any[] = [];
  @Input() larguraTabela: string;
  @Input() totalDados: number = 25;

  constructor() { }

  ngOnInit() { this.defineStyleTabela(); }

  defineStyleTabela(){
    window.innerWidth.toString();
  }

}
