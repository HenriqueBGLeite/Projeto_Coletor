import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() colunas: any[] = [];
  @Input() lista: any[] = [];
  
  constructor() { }

  ngOnInit() {
    
  }

  loadDataOnScroll(event: LazyLoadEvent) {      
  
}

}
